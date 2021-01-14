import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAl_fAOvdJnTeHOSM--q0rsIbrt-5X4p3Q',
  authDomain: 'clone-fcd1f.firebaseapp.com',
  projectId: 'clone-fcd1f',
  storageBucket: 'clone-fcd1f.appspot.com',
  messagingSenderId: '599958070569',
  appId: '1:599958070569:web:612f73ae33779923e18338',
  measurementId: 'G-8WQCY4JLFF',
});

const db = firebaseApp.firestore();

export default db;
