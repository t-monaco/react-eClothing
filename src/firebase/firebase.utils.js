import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB1gHJX6DlC10c8xyHcsulaaNG_fbyIHwc',
    authDomain: 'eclothing-3a571.firebaseapp.com',
    projectId: 'eclothing-3a571',
    storageBucket: 'eclothing-3a571.appspot.com',
    messagingSenderId: '512014061810',
    appId: '1:512014061810:web:0ab877723b00709b66806b',
    measurementId: 'G-FP1VTNCMS0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('ERROR creating user', error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
