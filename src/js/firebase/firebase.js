import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyBGeQvQlyURoxkRyeZyMwLM9NbmHGg2Tsg",
    authDomain: "themovie-2ff61.firebaseapp.com",
    databaseURL: "https://themovie-2ff61.firebaseio.com",
    storageBucket: "themovie-2ff61.appspot.com",
    messagingSenderId: "191076720746"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(`Can't connect to database: ${e}`);
}

export let firebaseRef = firebase.database().ref();
export let FBprovider = new firebase.auth.FacebookAuthProvider();

export default firebase;
