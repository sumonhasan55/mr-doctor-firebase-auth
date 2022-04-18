// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGrANd2GvdnGK5Cr2Szjef-cOSyxa778I",
  authDomain: "genious-car-services-a0fe2.firebaseapp.com",
  projectId: "genious-car-services-a0fe2",
  storageBucket: "genious-car-services-a0fe2.appspot.com",
  messagingSenderId: "367341315550",
  appId: "1:367341315550:web:ee323c1ef9fcfc1155a94f",
  measurementId: "G-P4P4KDYJTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;