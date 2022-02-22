import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjEbnksb-KoH3tB_rj7DMCPEUMPYYa97c",
  authDomain: "netflix-clone-7851a.firebaseapp.com",
  projectId: "netflix-clone-7851a",
  storageBucket: "netflix-clone-7851a.appspot.com",
  messagingSenderId: "745413901115",
  appId: "1:745413901115:web:a0463744b1730d8ac2d51e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { auth }

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => setCurrentUser(userAuth));
    return unsub;
  }, [])
  return currentUser;
}

export default db;