import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCWFJZNQCV19BbKON-Bmm_xwwN5-a-B78",
  authDomain: "crwn-db-44256.firebaseapp.com",
  databaseURL: "https://crwn-db-44256.firebaseio.com",
  projectId: "crwn-db-44256",
  storageBucket: "crwn-db-44256.appspot.com",
  messagingSenderId: "764540896580",
  appId: "1:764540896580:web:d7e92a656bd845415a0311"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;