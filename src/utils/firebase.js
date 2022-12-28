import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8iKF--SF7oIzu6kZA4LFZDrCBmiqDQb8",
  authDomain: "tama-movies.firebaseapp.com",
  databaseURL: "https://tama-movies-default-rtdb.firebaseio.com",
  projectId: "tama-movies",
  storageBucket: "tama-movies.appspot.com",
  messagingSenderId: "1029777480490",
  appId: "1:1029777480490:web:17941e846704e52ec45c53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
