import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWRyfatEZhfw7VpnwwAyzjGowT8wXL4V4",
  authDomain: "testnode-e6881.firebaseapp.com",
  databaseURL: "https://testnode-e6881-default-rtdb.firebaseio.com",
  projectId: "testnode-e6881",
  storageBucket: "testnode-e6881.appspot.com",
  messagingSenderId: "840897691787",
  appId: "1:840897691787:web:3510f95b6b0ac6ae77948e",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
