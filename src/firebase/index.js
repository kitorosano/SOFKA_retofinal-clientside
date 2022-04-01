import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfRjbaqLbZSy_pJOn9tbwZk7hX1j9WBPk",
  authDomain: "sofka-ferreteria-don-raul.firebaseapp.com",
  projectId: "sofka-ferreteria-don-raul",
  storageBucket: "sofka-ferreteria-don-raul.appspot.com",
  messagingSenderId: "337295211758",
  appId: "1:337295211758:web:5392c68c8bd262f96bc7ff"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export {app, auth};