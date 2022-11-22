import { doc, Firestore } from "firebase/firestore";
import { app } from "./firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const getBooking = async () => {
const db = getFirestore(app);
const bookingCol = collection(db, 'bookings');
  const bookingSnapshot = await getDocs(bookingCol);
  
  const bookingsList = bookingSnapshot.docs.map(doc => [{"id":doc.id},doc.data()]);
  return bookingsList;
};

export { getBooking };