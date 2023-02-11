// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBPDuTxMx_H03U8BdRVCwNNVFMHnAsRo",
  authDomain: "squareboat-beed3.firebaseapp.com",
  projectId: "squareboat-beed3",
  storageBucket: "squareboat-beed3.appspot.com",
  messagingSenderId: "1002006371543",
  appId: "1:1002006371543:web:77445c9b8abba21847e492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;