// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAGpOsEbjy9KTDwT7qrZxaOv8v9Kbd657w",
    authDomain: "hasu-64403.firebaseapp.com",
    projectId: "hasu-64403",
    storageBucket: "hasu-64403.appspot.com",
    messagingSenderId: "1076906815074",
    appId: "1:1076906815074:web:477234327ab86b065d6b3b",
  };
  return initializeApp(firebaseConfig);
};
