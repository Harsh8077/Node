const firebaseConfig = {
    apiKey: "AIzaSyDZUjSMtZvxUcY3BLt6MOK-iLhzsWLmxB8",
    authDomain: "whatsapp-mern-f985a.firebaseapp.com",
    projectId: "whatsapp-mern-f985a",
    storageBucket: "whatsapp-mern-f985a.appspot.com",
    messagingSenderId: "200342157838",
    appId: "1:200342157838:web:c0402fe17164258cc41a5f"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,GoogleAuthProvider};