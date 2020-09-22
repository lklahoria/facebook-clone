// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgnF--Iu0jspLPHuTTduz2cC6i0B28YzY",
    authDomain: "facebook-clone-e4b46.firebaseapp.com",
    databaseURL: "https://facebook-clone-e4b46.firebaseio.com",
    projectId: "facebook-clone-e4b46",
    storageBucket: "facebook-clone-e4b46.appspot.com",
    messagingSenderId: "729473940054",
    appId: "1:729473940054:web:e452157d3af2ce9ccbd9f7",
    measurementId: "G-42LZT08FDF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
