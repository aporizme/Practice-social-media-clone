import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDdPJOKDKeFsxkjazdnZrPbmgjqF8wFrEc",
    authDomain: "facebook-clone-91e6b.firebaseapp.com",
    databaseURL: "https://facebook-clone-91e6b.firebaseio.com",
    projectId: "facebook-clone-91e6b",
    storageBucket: "facebook-clone-91e6b.appspot.com",
    messagingSenderId: "1027310929309",
    appId: "1:1027310929309:web:ef5610ed4520ca8b0d9b74"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;