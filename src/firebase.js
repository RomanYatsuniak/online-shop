import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAv72qtOwIDV1DDpv7bdWhgzWvo_8CQ7wc",
    authDomain: "online-shop-aa847.firebaseapp.com",
    projectId: "online-shop-aa847",
    storageBucket: "online-shop-aa847.appspot.com",
    messagingSenderId: "457378193324",
    appId: "1:457378193324:web:2bb7a19089255561b5a409"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export {
    firebase,
    db,
    auth
}
