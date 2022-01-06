// From the good video tutorial (How to build a TODO app with React + Firebase)

import * as firebase from "firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANpeQRomrcsv2NMcLfzEiI3WtgkI2zCI8",
    authDomain: "devblog-6418d.firebaseapp.com",
    projectId: "devblog-6418d",
    storageBucket: "devblog-6418d.appspot.com",
    messagingSenderId: "84733010262",
    appId: "1:84733010262:web:73aa41f77d6f1c7e46f6f7",
    measurementId: "G-G85VF14YV3"
});

const db = firebaseApp.firestore();

export {db};