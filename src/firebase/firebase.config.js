
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
apiKey: "AIzaSyAavx8fMgUsnDmdVLz0UsrxkofI9t5YsEE",
authDomain: "jobbox-81dc7.firebaseapp.com",
projectId: "jobbox-81dc7",
storageBucket: "jobbox-81dc7.appspot.com",
messagingSenderId: "270820034115",
appId: "1:270820034115:web:dc17b466df3fe1509cf6f6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth