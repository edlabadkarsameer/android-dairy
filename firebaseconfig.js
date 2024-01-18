// firebase.js
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Import the Realtime Database module if you are using it

const firebaseConfig = {
    apiKey: "AIzaSyCZ2alxerfbtg-8FbBjhNqZDVuFoWzyX6k",
    authDomain: "dear-diary-d5014.firebaseapp.com",
    databaseURL: "https://dear-diary-d5014-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dear-diary-d5014",
    storageBucket: "dear-diary-d5014.appspot.com",
    messagingSenderId: "513602561739",
    appId: "1:513602561739:web:31f15bd614a0643b8cdd4e",
    measurementId: "G-BV6Z851M7D"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
