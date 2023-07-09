import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD90VQuRT90HGgbtn35Bn1Jc_vbHXa13gM",
  authDomain: "carrot-clone-64dad.firebaseapp.com",
  databaseURL:
    "https://carrot-clone-64dad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-clone-64dad",
  storageBucket: "carrot-clone-64dad.appspot.com",
  messagingSenderId: "47061271264",
  appId: "1:47061271264:web:0bfad3fde1032bd8e9c685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const storage = getStorage(app);

const auth = getAuth(app);
