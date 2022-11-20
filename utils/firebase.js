// import firebase from "firebase/app";
// import "firebase/firestore";

// const config = {
//     apiKey: "AIzaSyCpfTRQPCPvHuhedUcskidh4rZ1anRxcfg",
//     authDomain: "homegateway-62f02.firebaseapp.com",
//     projectId: "homegateway-62f02",
//     storageBucket: "homegateway-62f02.appspot.com",
//     messagingSenderId: "511128368637",
//     appId: "1:511128368637:web:fc375268eaad7ae0665594",
//     measurementId: "G-RQQCY2FRGJ"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const firestore = firebase.firestore();

// export { firestore };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpfTRQPCPvHuhedUcskidh4rZ1anRxcfg",
  authDomain: "homegateway-62f02.firebaseapp.com",
  projectId: "homegateway-62f02",
  storageBucket: "homegateway-62f02.appspot.com",
  messagingSenderId: "511128368637",
  appId: "1:511128368637:web:fc375268eaad7ae0665594",
  measurementId: "G-RQQCY2FRGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


