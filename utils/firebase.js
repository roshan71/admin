



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

  const k=JSON.parse(process.env.PRIVATE_KEY)
    
    const serviceAccount1={
      "type":process.env.TYPE,
      "project_id": process.env.PROJECT_ID,
      "private_key_id": process.env.PRIVATE_KEY_ID,
     k,
      "client_email": process.env.CLIENT_EMAIL,
      "client_id": process.env.CLIENT_ID,
      "auth_uri": process.env.AUTH_URI,
      "token_uri": process.env.TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
      "client_x509_cert_url": process.env.CLIENT_CERT_URL
    }
  console.log(serviceAccount1)
const app = initializeApp(firebaseConfig);

const db=getFirestore();
const storage = getStorage();
export {firebaseConfig}
 export {db};
 export {storage};
 export {app};
export {serviceAccount1}
  export const auth = getAuth()
