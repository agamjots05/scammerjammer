import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqCIT_Phl-5_eLuIgCkyNvlh0TGa-CT_s",
    authDomain: "scammerjammer-fcccb.firebaseapp.com",
    projectId: "scammerjammer-fcccb",
    storageBucket: "scammerjammer-fcccb.appspot.com",
    messagingSenderId: "354020509698",
    appId: "1:354020509698:web:5ecb247c91af3f4b883f1b"
  };

// initialize app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };   