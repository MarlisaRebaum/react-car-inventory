import firebase from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyBqqkWe2xcLkBIm_SbTUtTR2gIYlsrHMsw",
  authDomain: "react-car-inventory.firebaseapp.com",
  projectId: "react-car-inventory",
  storageBucket: "react-car-inventory.appspot.com",
  messagingSenderId: "577169204529",
  appId: "1:577169204529:web:096fbf3c5ac456cd133c10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();