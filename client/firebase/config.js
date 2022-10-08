import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT_Ts2SeoYjffveVI1G5Q2-ZxDnr4OANI",
  authDomain: "instagrm-1384d.firebaseapp.com",
  projectId: "instagrm-1384d",
  storageBucket: "instagrm-1384d.appspot.com",
  messagingSenderId: "538514451950",
  appId: "1:538514451950:web:e72273078ebcdc6b5f32ff",
  measurementId: "G-QXPSC26CZM"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
