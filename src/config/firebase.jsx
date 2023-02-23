// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBToxGfYK8XhML2Eruk2e7KJSdo9-7r3uo",
  authDomain: "klamby-id.firebaseapp.com",
  projectId: "klamby-id",
  storageBucket: "klamby-id.appspot.com",
  messagingSenderId: "283207627739",
  appId: "1:283207627739:web:d63143e90c06782e266dfe",
  measurementId: "G-ZHW81259JC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
