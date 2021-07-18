import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyAbokAD9ERabzmu_xr6sn2HWwi1p1iw0IM",
    authDomain: "reels-52c57.firebaseapp.com",
    projectId: "reels-52c57",
    storageBucket: "reels-52c57.appspot.com",
    messagingSenderId: "429091951696",
    appId: "1:429091951696:web:c902d5c0180817c6382d55"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();