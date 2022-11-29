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



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpfTRQPCPvHuhedUcskidh4rZ1anRxcfg",
//   authDomain: "homegateway-62f02.firebaseapp.com",
//   projectId: "homegateway-62f02",
//   storageBucket: "homegateway-62f02.appspot.com",
//   messagingSenderId: "511128368637",
//   appId: "1:511128368637:web:fc375268eaad7ae0665594",
//   measurementId: "G-RQQCY2FRGJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db=getFirestore();
// const storage = getStorage();
// export {db};
// export {storage};
// export {app};
// // const analytics = getAnalytics(app);




import { getAuth } from 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

   const firebaseConfig = {
    apiKey: "AIzaSyAAnnsxU6mHtjp990w4CElfnnjVhGHAyLI",
      authDomain: "homegateway-368302.firebaseapp.com",
    projectId: "homegateway-368302",
    storageBucket: "homegateway-368302.appspot.com",
  messagingSenderId: "22748857877",
  appId: "1:22748857877:web:4e725cfa83b89b3ff7b01c",
   measurementId: "G-5MZ8CR2R3R"
  };

//  const firebaseConfig = {
// apiKey: "AIzaSyBMp-xHi-O2Xl2EPYrpAn3N9tU8vOHfcxc",
//    authDomain: "test-d7e95.firebaseapp.com",
//     projectId: "test-d7e95",
//    storageBucket: "test-d7e95.appspot.com",
//    messagingSenderId: "252302685991",
//    appId: "1:252302685991:web:2b04b848c1c5203b815b02"
//  };
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db=getFirestore();
const storage = getStorage();
 export {db};
 export {storage};
 export {app};
 export const auth = getAuth()