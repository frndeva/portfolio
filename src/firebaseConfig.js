import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDl_WeUO_R1jWkqTlZAlgoL0r4TFezmeIA",
  authDomain: "portfolio-ef-d8ecf.firebaseapp.com",
  databaseURL:
    "https://portfolio-ef-d8ecf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-ef-d8ecf",
  storageBucket: "portfolio-ef-d8ecf.firebasestorage.app",
  messagingSenderId: "426016535191",
  appId: "1:426016535191:web:0b7df84a7143a95263efd2",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set, update };
