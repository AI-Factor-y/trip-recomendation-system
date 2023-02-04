import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCJTATzUlgBomq3vg5wZZyvfLCGzZLSZlE",
    authDomain: "trip-recommendation.firebaseapp.com",
    projectId: "trip-recommendation",
    storageBucket: "trip-recommendation.appspot.com",
    messagingSenderId: "935102499498",
    appId: "1:935102499498:web:f09d0381ef4aee90269ed3",
    measurementId: "G-Q7GR838RMB"
  
  };
  

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)

export default firebase;