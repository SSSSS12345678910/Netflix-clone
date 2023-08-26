//setting up firebase with our website
const firebaseApp = firebase.initialization({
    apiKey: "AIzaSyAPdUV2U6S2YJY05cWl_fM-PxRGFaGrrEY",
    authDomain: "design-plate.firebaseapp.com",
    projectId: "design-plate",
    storageBucket: "design-plate.appspot.com",
    messagingSenderId: "346554859110",
    appId: "1:346554859110:web:ff6debede43dfe3e4a37a7"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}