import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbxrTWFgzNRkvKyFJXrpUvycO3N0P-rMc",
    authDomain: "meet-manager-bbb82.firebaseapp.com",
    projectId: "meet-manager-bbb82",
    storageBucket: "meet-manager-bbb82.appspot.com",
    messagingSenderId: "602480345757",
    appId: "1:602480345757:web:2cfc1b080629a57db18a74"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;