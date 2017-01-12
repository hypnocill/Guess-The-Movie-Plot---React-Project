import firebase,  {firebaseRef, FBprovider} from '../firebase/firebase';
import axios from 'axios';
import { browserHistory } from 'react-router';

//Login actions
export const startRegister = () => {
  return (dispatch, getState) => {
    let user = firebase.auth().currentUser;
    firebaseRef.child("users/" + user.uid).once("value").then((snapshot) => {

      if(snapshot.hasChild("id")){
        browserHistory.push('stats');
        return;
      } else {
          let currentDate = Date.now();

          firebaseRef.child("users/" + user.uid).set({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            score: 0,
            registeredOn: currentDate
          });
          dispatch(register(user.displayName));
          browserHistory.push('stats');
      };
    })
  }
}

export const register = (userName) => {
  return {
    type: 'USER_REGISTERED',
    user: userName
  }
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(FBprovider)
    .then((result) => {
      let user = firebase.auth().currentUser;
      //console.log(result);
      dispatch(login());

      dispatch(startRegister());

    }, (e) => console.log(e));
  }
}

export const login = () => {
  return {
    type: 'LOGIN',
    status: true
  }
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      dispatch(logout());
      browserHistory.push('stats');
    }, (e) => {
        alert(e);
    });
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
    status: false
  }
}

//Countdown actions
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const resetCountDown = () => {
  return {
    type: 'RESET_COUNTDOWN'
  }
}

//Fetch Movie
export const getMovieName = () => {
  return (dispatch, getState) => {
    let movieNamesRef = firebaseRef.child('/movies').once('value');
      movieNamesRef.then((snap) => {
      let movieNames = snap.val() || {};
      let state = getState();
      let guessedMovies = state.guessedMovies;

      let guessedMoviesTitles = guessedMovies.map((movie) => movie.title.toLowerCase());

      //console.log(guessedMoviesTitles);

      let currentMovie = movieNames[Math.floor(Math.random() * movieNames.length)];

        //console.log(currentMovie, guessedMoviesTitles);

        if((guessedMoviesTitles.length > 0) && (guessedMoviesTitles.indexOf(currentMovie.toLowerCase()) > -1) && (guessedMoviesTitles.length < movieNames.length)){
          //console.log(currentMovie + ' REPEATED');
          do {
            currentMovie = movieNames[Math.floor(Math.random() * movieNames.length)];
            //console.log('NEW MOVIE ' + currentMovie);
          }
          while(guessedMoviesTitles.indexOf(currentMovie.toLowerCase()) > -1);
        }

      dispatch(fetchMovie(currentMovie));
    });

  }
}

export const fetchMovie = (currentMovie) => {
  return (dispatch, getState) => {
    const fetchURL = `https://www.omdbapi.com/?t=${currentMovie}=&plot=full&r=json`;
    dispatch(startFetching());
      return axios.get(fetchURL).then((response) => {
        dispatch(storeMovie(response.data.Title, response.data.Plot, response.data.Poster, response.data.imdbID));
        dispatch(stopFetching());
      }).catch((e) => alert("Something went wrong: Refresh the Page!"));

  }
}


export const storeMovie = (title, plot, posterURL, imdbID) => {
  return {
    type: 'STORE_MOVIE',
    title,
    plot,
    posterURL,
    imdbID
  }

}

//Loading
export const startFetching = () => {
  return {
    type: 'START_FETCHING',
    status: true
  }
}

export const stopFetching = () => {
  return {
    type: 'STOP_FETCHING',
    status: false
  }
}

//Manage User Input
export const storeMovieName = (userInput) => {
  return {
    type: 'USER_INPUT',
    userInput
  }
}

export const clearMovieName = () => {
  return {
    type: 'CLEAR_MOVIE_NAME'
  }
}

//Get User data
export const getUserData = (userData) => {
  return {
    type: 'GET_USER_DATA',
    userData
  }
}

//Game actions
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(getMovieName());
    dispatch(wipeOldGuessedMovies());
  }
}

export const wipeOldGuessedMovies = () => {
  return {
    type: 'WIPE_OLD_GUESSED_MOVIES'
  }
}

export const incrementScore = () => {
  return {
    type: 'INCREMENT_SCORE'
  }
}

export const resetScore = () => {
  return {
    type: 'RESET_SCORE'
  }
}

export const guessedMovie = (guessedMovieObject) => {
  return {
    type: 'STORE_GUESSED_MOVIE',
    guessedMovieObject
  }
}

export const initEndGame = (score) => {
  return (dispatch, getState) => {
    let user = firebase.auth().currentUser;

    if(user) {
      firebaseRef.child("users/" + user.uid).once("value").then((snap) => {
        let userData = snap.val();

        if(score > userData.score){
          firebaseRef.child("users/" + user.uid).update({
            score
          });
        }
      }, (e) => console.log('COULD NOT UPDATE SCORE'));


    };
    //console.log(user)
    browserHistory.push('end');
    dispatch(endGame());
    dispatch(resetScore());
  }
}

export const endGame = () => {
  return {
    type: 'END_GAME'
  }
}
