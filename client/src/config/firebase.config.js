import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu92vr22-V30uQE4DsBy1dM8yghPe5uB8",
  authDomain: "addis-software-test.firebaseapp.com",
  projectId: "addis-software-test",
  storageBucket: "addis-software-test.appspot.com",
  messagingSenderId: "200418251230",
  appId: "1:200418251230:web:c884ea59d16344ec024d4f",
  measurementId: "G-HCQFYBCLCY"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
