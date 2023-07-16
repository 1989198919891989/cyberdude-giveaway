

const firebaseConfig = {
    apiKey: "AIzaSyB9WznFbCeh40AIB7Unmviz-auOiQ78Djk",
    authDomain: "cyberdude-giveaway-e6fc2.firebaseapp.com",
    projectId: "cyberdude-giveaway-e6fc2",
    storageBucket: "cyberdude-giveaway-e6fc2.appspot.com",
    messagingSenderId: "1098368056531",
    appId: "1:1098368056531:web:560d7681e5402d83042826"
};


// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const person = {
    name: 'dinesh',
    city: 'bangalore'
}

const createRecord = (record) => {

    return db
        .collection("requests")
        .add(record)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}