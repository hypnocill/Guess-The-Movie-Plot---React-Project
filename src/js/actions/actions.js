import firebase, {firebaseRef} from '../firebase/firebase';
import axios from 'axios';


//countDown actions
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
      let currentMovie = movieNames[Math.floor(Math.random() * movieNames.length)];
      dispatch(fetchMovie(currentMovie));
    });

  }
}

export const fetchMovie = (currentMovie) => {
  return (dispatch, getState) => {
    const fetchURL = `https://www.omdbapi.com/?t=${currentMovie}=&plot=full&r=json`;
    dispatch(startFetching());
      return axios.get(fetchURL).then((response) => {
        dispatch(storeMovie(response.data.Title, response.data.Plot, response.data.Poster));
        dispatch(stopFetching());
      }).catch((e) => alert("Something went wrong: Refresh the Page!"));

  }
}


export const storeMovie = (title, plot, posterURL) => {
  return {
    type: 'STORE_MOVIE',
    title,
    plot,
    posterURL
  }

}

//Loading
export const startFetching = () => {
  return {
    type: 'START_FETCHING',
    status: 'true'
  }
}

export const stopFetching = () => {
  return {
    type: 'STOP_FETCHING',
    status: 'false'
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
