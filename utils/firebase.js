



import { getAuth } from 'firebase/auth'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  //  const firebaseConfig = {
  //   apiKey: "AIzaSyAAnnsxU6mHtjp990w4CElfnnjVhGHAyLI",
  //     authDomain: "homegateway-368302.firebaseapp.com",
  //   projectId: "homegateway-368302",
  //   storageBucket: "homegateway-368302.appspot.com",
  // messagingSenderId: "22748857877",
  // appId: "1:22748857877:web:4e725cfa83b89b3ff7b01c",
  //  measurementId: "G-5MZ8CR2R3R"
  // };

  const firebaseConfig = {
 apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
     projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId:process.env.APPID
  };


  // const firebaseConfig={
  //   apiKey: "AIzaSyCpfTRQPCPvHuhedUcskidh4rZ1anRxcfg",
  //   authDomain: "homegateway-62f02.firebaseapp.com",
  //   projectId: "homegateway-62f02",
  //   storageBucket: "homegateway-62f02.appspot.com",
  //   messagingSenderId: "511128368637",
  //   appId: "1:511128368637:web:fc375268eaad7ae0665594",
  //   measurementId: "G-RQQCY2FRGJ"
  // }
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const storage = getStorage();

 export {db};
 export {storage};
 export {app};
  export const auth = getAuth()

