import { Firestore } from "firebase/firestore";
import { app } from "./firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const getUsers = async () => {
const db = getFirestore(app);
const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map(doc => doc.data());
  return userList;
};

export { getUsers };