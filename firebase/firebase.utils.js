import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyCTBkLYhdb51ViZGC78wufnkx2Zea3j7k4',
  authDomain: 'practice-3edd2.firebaseapp.com',
  databaseURL: 'https://practice-3edd2.firebaseio.com',
  projectId: 'practice-3edd2',
  storageBucket: 'practice-3edd2.appspot.com',
  messagingSenderId: '228482166121',
  appId: '1:228482166121:web:5f4de4fa30addcd1a6a1f8',
  measurementId: 'G-3Q6K2D5LHN',
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        items: [],
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
