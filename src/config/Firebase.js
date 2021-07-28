import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";





let firebaseConfig = {
    apiKey: "AIzaSyD2OTLdC9ntPWw8fgGeZ0nOfA4NQ_ajUFM",
    authDomain: "testfirebase-23e1b.firebaseapp.com",
    databaseURL: "https://testfirebase-23e1b-default-rtdb.firebaseio.com",
    projectId: "testfirebase-23e1b",
    storageBucket: "testfirebase-23e1b.appspot.com",
    messagingSenderId: "21131208536",
    appId: "1:21131208536:web:7c1bed10b5539abbeb672d",
    measurementId: "G-92QXPPGQBP"

};
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();