import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMBxnkI-Q2y23QeMs0sm4-6xAr3PQKSsI",
    authDomain: "whatsapp-mern-176c1.firebaseapp.com",
    projectId: "whatsapp-mern-176c1",
    storageBucket: "whatsapp-mern-176c1.appspot.com",
    messagingSenderId: "710677614170",
    appId: "1:710677614170:web:6142c26e11e278e5a2d263",
    measurementId: "G-XRYC574H7K"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;