

import { getFirestore,  } from 'firebase/firestore';
import { app } from "./firebase";
import {  doc, setDoc,getDoc } from 'firebase/firestore';



const db = getFirestore(app);
  const docRef=doc(db,'static',"m1r5dc4GRu2AngMTXR37")
  
 
     const docSnap = await getDoc(docRef);

     const d=docSnap.data();
    const secert=d.secert

export {secert}
 
     
 

