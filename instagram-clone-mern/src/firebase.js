import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAxrsMeA4xih2QSUs3hEq0t_1ncv6HCGAI",
      authDomain: "instagram-clone-react-e0b8d.firebaseapp.com",
      databaseURL: "https://instagram-clone-react-e0b8d-default-rtdb.firebaseio.com",
      projectId: "instagram-clone-react-e0b8d",
      storageBucket: "instagram-clone-react-e0b8d.appspot.com",
      messagingSenderId: "159773232383",
      appId: "1:159773232383:web:a7f2bb1a4bd3838be110ca",
      measurementId: "G-HNQ1T75REM"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

  // export default db;