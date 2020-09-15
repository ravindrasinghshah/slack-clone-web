import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLmwueym6XhxB3Y_pRIIdpYatxZ2R80hU",
    authDomain: "slack-clone-13d06.firebaseapp.com",
    databaseURL: "https://slack-clone-13d06.firebaseio.com",
    projectId: "slack-clone-13d06",
    storageBucket: "slack-clone-13d06.appspot.com",
    messagingSenderId: "934223459552",
    appId: "1:934223459552:web:6b4bb2952eef0dbfae8c85",
    measurementId: "G-H3XNS737DT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
