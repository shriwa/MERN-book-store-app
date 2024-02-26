// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkwT1kCHb4OkwxdtUNstK850XfLFdKnYQ",
  authDomain: "book-store-app-1890d.firebaseapp.com",
  projectId: "book-store-app-1890d",
  storageBucket: "book-store-app-1890d.appspot.com",
  messagingSenderId: "313346929461",
  appId: "1:313346929461:web:68d6410c53ae6bf743d27c",
  measurementId: "G-CGMPT50DZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// 5.21.12