



import { getAuth } from 'firebase/auth'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage";
import { exp, stirlingS2 } from 'mathjs';

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//   const firebaseConfig = {
//  apiKey: process.env.APIKEY,
//     authDomain: process.env.AUTHDOMAIN,
//      projectId: process.env.PROJECTID,
//     storageBucket: process.env.STORAGEBUCKET,
//     messagingSenderId: process.env.MESSAGINGSENDERID,
//     appId:process.env.APPID



  const firebaseConfig={
    apiKey: String(process.env.APIKEY),
    authDomain:String(process.env.AUTHDOMAIN),
    projectId: String(process.env.PROJECTID),
    storageBucket: String(process.env.STORAGEBUCKET),
    messagingSenderId: String(process.env.MESSAGINGSENDERID),
    appId: String(process.env.APPID),
    
  }

  const secert={
    type:String(process.env.TYPE),
      project_id:String(process.env.PROJECT_ID),
      private_key_id:String(process.env.PRIVATE_KEY_ID) ,
      private_key:String(process.env.PRIVATE_KEY) ,
      client_email:String(process.env.CLIENT_EMAIL),
      client_id:String(process.env.CLIENT_ID),
      auth_uri:String(process.env.AUTH_URI) ,
      token_uri:String(process.env.TOKEN_URI) ,
      auth_provider_x509_cert_url:String(process.env.AUTH_PROVIDER_X509_CERT_URL) ,
      client_x509_cert_url:String(process.env.CLIENT_CERT_URL), 
  }
  console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);

const db=getFirestore();
const storage = getStorage();
export {firebaseConfig}
 export {db};
 export {storage};
 export {app};
 export {secert}
  export const auth = getAuth()
