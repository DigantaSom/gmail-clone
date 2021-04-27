import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQFo_KdkGDVm-Hw6FzZRHP9VD79FA1WaI',
  authDomain: 'clone-4f192.firebaseapp.com',
  projectId: 'clone-4f192',
  storageBucket: 'clone-4f192.appspot.com',
  messagingSenderId: '656843705023',
  appId: '1:656843705023:web:b3af846b743fad5c8d940a'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
