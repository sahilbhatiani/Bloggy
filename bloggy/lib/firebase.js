import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCJb5b5AlbtyG30L8XWNG_Nk6PBKx5JV8Y",
    authDomain: "bloggy-82dfb.firebaseapp.com",
    projectId: "bloggy-82dfb",
    storageBucket: "bloggy-82dfb.appspot.com",
    messagingSenderId: "867761267283",
    appId: "1:867761267283:web:e9e3e9eaa9a2905c9d1ca6"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
