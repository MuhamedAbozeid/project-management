import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_COOKING_API_KEY,
  authDomain: process.env.REACT_APP_COOKING_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_COOKING_PROJECT_ID,
  storageBucket: process.env.REACT_APP_COOKING_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_COOKING_MESSSAGING_SENDER_ID,
  appId: process.env.REACT_APP_COOKING_APP_ID
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