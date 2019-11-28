import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDmhs7JiOW7ZB7TqS0TL4JUqhn0vF_DLiA',
    authDomain: 'trend-3a522.firebaseapp.com',
    databaseURL: 'https://trend-3a522.firebaseio.com',
    projectId: 'trend-3a522',
    storageBucket: 'trend-3a522.appspot.com',
    messagingSenderId: '118147229274',
    appId: '1:118147229274:web:4cdcd2c17178f8dcd69a63',
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
