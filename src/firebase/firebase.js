import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDt9cmOWUfCEAD7iUF1MXy-VBe87GD1ZyM",
  authDomain: "whatsapp-clone-919f8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-919f8.firebaseio.com",
  projectId: "whatsapp-clone-919f8",
  storageBucket: "whatsapp-clone-919f8.appspot.com",
  messagingSenderId: "655139780596",
  appId: "1:655139780596:web:3bcf2a91c03041ee6beba1",
  measurementId: "G-H8R1QVXN9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
