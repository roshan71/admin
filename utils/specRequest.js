import { CollectionReference, doc, Firestore } from "firebase/firestore";
import { app } from "./firebase";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const getRequest = async () => {
const db = getFirestore(app);
const requestCol = collection(db, 'specialRequest');
  const requestSnapshot = await getDocs(requestCol);
  const requestList = requestSnapshot.docs.map(doc => [{"id":doc.id},doc.data()]);
 
  return requestList;
};

export { getRequest };