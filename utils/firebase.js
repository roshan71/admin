



import { getAuth } from 'firebase/auth'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require('dotenv').config
 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage";
import { exp } from 'mathjs';

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 const firebaseConfig = {
apiKey: `${process.env.APIKEY}`,
     authDomain: `${process.env.AUTHDOMAIN}`,
      projectId: `${process.env.PROJECTID}`,
     storageBucket: `${process.env.STORAGEBUCKET}`,
     messagingSenderId: `${process.env.MESSAGINGSENDERID}`,
     appId:`${process.env.APPID}`
   };
//   const firebaseConfig = {
//  apiKey: process.env.APIKEY,
//     authDomain: process.env.AUTHDOMAIN,
//      projectId: process.env.PROJECTID,
//     storageBucket: process.env.STORAGEBUCKET,
//     messagingSenderId: process.env.MESSAGINGSENDERID,
//     appId:process.env.APPID

console.log("firebassdiv",firebaseConfig['apiKey'].length)
console.log("firebassdiv",firebaseConfig)


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
export {firebaseConfig}
 export {db};
 export {storage};
 export {app};
  export const auth = getAuth()
