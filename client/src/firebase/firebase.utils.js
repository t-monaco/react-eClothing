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

export const getUserCartRef = async (userId) => {
    const cartRef = firestore.collection('carts').where('userId', '==', userId).where('status', '==', 0);
    const snapshot = await cartRef.get();

    if (snapshot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        const createdAt = new Date();

        await cartDocRef.set({
            userId,
            cartItems: [],
            status: 0,
            createdAt,
            purchasedAt: ''
        });
        return cartDocRef;
    } else {
        return snapshot.docs[0].ref;
    }
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
