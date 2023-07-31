

const firebaseConfig = {
    apiKey: "AIzaSyB9WznFbCeh40AIB7Unmviz-auOiQ78Djk",
    authDomain: "cyberdude-giveaway-e6fc2.firebaseapp.com",
    projectId: "cyberdude-giveaway-e6fc2",
    storageBucket: "cyberdude-giveaway-e6fc2.appspot.com",
    messagingSenderId: "1098368056531",
    appId: "1:1098368056531:web:560d7681e5402d83042826"
};

const COLLECTION_NAME ="requests"

// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();





const createRecord = (record) => {

    return db
        .collection(COLLECTION_NAME)
        .add(record)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                reject({ errorCode, errorMessage })

            });

    });
}


const getAllRequest = () => {
    return new Promise((resolve, reject) => {
       const results = db
        .collection(COLLECTION_NAME)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            })
            resolve(results)
        }).catch(e => {
            console.log('error in getting', e);
        })

        
    })

}
