import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import{ auth } from "./config.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location ='signIn.html'
    }
  });
  