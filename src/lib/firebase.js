import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWOJt4dE967NgFW4mcXlH0R5xTlhXzMh0",
  authDomain: "clone-8841d.firebaseapp.com",
  projectId: "clone-8841d",
  storageBucket: "clone-8841d.appspot.com",
  messagingSenderId: "1068896938415",
  appId: "1:1068896938415:web:57c144068bc02c63f9275a",
  measurementId: "G-CQMCRMYFEH"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
