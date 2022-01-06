// From the good video tutorial (How to build a TODO app with React + Firebase)

import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";


firebase.initializeApp({
  apiKey: "AIzaSyC4rL4NmkOE4hQy5jYa7Fx6Bf87oIW1L4I",
  authDomain: "devblog-78acb.firebaseapp.com",
  projectId: "devblog-78acb",
  storageBucket: "devblog-78acb.appspot.com",
  messagingSenderId: "639413705641",
  appId: "1:639413705641:web:9680361ed23241e463c2b8",
  measurementId: "G-JWCQF4ZT19"
});

const db = getFirestore();

export {db};