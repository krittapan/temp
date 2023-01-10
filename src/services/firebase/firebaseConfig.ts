// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'thaisensee.firebaseapp.com',
  projectId: 'thaisensee',
  storageBucket: 'thaisensee.appspot.com',
  messagingSenderId: '612159455193',
  appId: '1:612159455193:web:6d7aa6609fa25820c9e3c8',
  measurementId: 'G-MKJ019DSX4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
