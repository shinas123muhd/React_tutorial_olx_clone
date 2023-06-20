import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDJ25yRx2FgWKWWVvKTtkmmNJ4RH46bsko",
    authDomain: "olx-clone-faf02.firebaseapp.com",
    projectId: "olx-clone-faf02",
    storageBucket: "olx-clone-faf02.appspot.com",
    messagingSenderId: "905551199274",
    appId: "1:905551199274:web:4f87cd47c28e109b089753",
    measurementId: "G-HXH8LJDH6Q"
  };

  export default firebase.initializeApp(firebaseConfig);