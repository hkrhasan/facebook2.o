// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGvyOFGDtPgstA4fAEDnB7cJj4MMazRXI",
  authDomain: "facebook2-o.firebaseapp.com",
  projectId: "facebook2-o",
  storageBucket: "facebook2-o.appspot.com",
  messagingSenderId: "341385207757",
  appId: "1:341385207757:web:5e926603ceefb85c31ae84",
  measurementId: "G-BHQSCQB5QV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function addDocument(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return { success: true, docId: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e.message };
  }
}
