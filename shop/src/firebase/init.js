  import firebase from 'firebase'
  //import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuozwHsUL2hhq4FynCgzdgDZAqXY9lIsU",
    authDomain: "shopping-cart-e229a.firebaseapp.com",
    databaseURL: "https://shopping-cart-e229a.firebaseio.com",
    projectId: "shopping-cart-e229a",
    storageBucket: "shopping-cart-e229a.appspot.com",
    messagingSenderId: "1035400834052",
    appId: "1:1035400834052:web:96104b4e15e21f0668d951"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  export default firebaseApp