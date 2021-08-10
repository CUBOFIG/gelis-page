import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
