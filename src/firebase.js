import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDv9YbSEXsj7F4JAl-8qKk_l2t-Ob-hOAU",
    authDomain: "linkedin-clone-e0c6f.firebaseapp.com",
    projectId: "linkedin-clone-e0c6f",
    storageBucket: "linkedin-clone-e0c6f.appspot.com",
    messagingSenderId: "256826430698",
    appId: "1:256826430698:web:a3cfca2bfe6ab9fa6cf393"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { db, auth };