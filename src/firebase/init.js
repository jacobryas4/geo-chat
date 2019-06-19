import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCe96R_U4QHxN3naluC1CPVS_uVPOi9DuY",
    authDomain: "geo-chatters.firebaseapp.com",
    databaseURL: "https://geo-chatters.firebaseio.com",
    projectId: "geo-chatters",
    storageBucket: "geo-chatters.appspot.com",
    messagingSenderId: "919116950172",
    appId: "1:919116950172:web:33d1e020bccda13e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()