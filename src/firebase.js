import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdI74gwXIgORPUNkxuv3qqParO-w_7LXo",
    authDomain: "facebook-clone-5e546.firebaseapp.com",
    databaseURL: "https://facebook-clone-5e546.firebaseio.com",
    projectId: "facebook-clone-5e546",
    storageBucket: "facebook-clone-5e546.appspot.com",
    messagingSenderId: "226647170375",
    appId: "1:226647170375:web:eec50ec67b8ef1710d8062",
    measurementId: "G-VQ8D5K8C74"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;