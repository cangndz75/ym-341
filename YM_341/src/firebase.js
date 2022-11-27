import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVA05nwkQI9fM6NP-DuBJ--um7GoQr41Y",
  authDomain: "overreact-52576.firebaseapp.com",
  projectId: "overreact-52576",
  storageBucket: "overreact-52576.appspot.com",
  messagingSenderId: "667417763255",
  appId: "1:667417763255:web:d4542bc4424ce11e671c32",
  measurementId: "G-FGSN4E7BFF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
