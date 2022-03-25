import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD8m80ztIp2eMA_GnkLgLeTLml7-6OY-40",
  authDomain: "thedojosite-a9fca.firebaseapp.com",
  projectId: "thedojosite-a9fca",
  storageBucket: "thedojosite-a9fca.appspot.com",
  messagingSenderId: "521046626714",
  appId: "1:521046626714:web:cf4589e5f31b42650a2a23"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp , projectStorage}