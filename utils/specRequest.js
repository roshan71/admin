import { CollectionReference, doc, Firestore } from "firebase/firestore";
import { app } from "./firebase";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const getRequest = async () => {
const db = getFirestore(app);
const citiesRef = db.collection('specialRequest');
const snapshot = await citiesRef.get();
snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

const requestCol = db.collection('specialRequest');
  const requestSnapshot = await getDocs(requestCol);
  
  const requestList = requestSnapshot.docs.map(doc => doc.data());
  return requestList;
};

export { getRequest };