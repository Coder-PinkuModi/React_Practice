import { initializeApp } from "firebase/app"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDsU5NH2gSQXYmngJoDy5XM0oo9uJHXizc",
    authDomain: "web-app-e1efd.firebaseapp.com",
    projectId: "web-app-e1efd",
    storageBucket: "web-app-e1efd.appspot.com",
    messagingSenderId: "146264435384",
    appId: "1:146264435384:web:f244e208b62017fcb3e24d",
    databaseURL: "https://web-app-e1efd-default-rtdb.firebaseio.com/", 
  };
  

 export const app = initializeApp(firebaseConfig);

