import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-korH19-UkXQ_mMdq8q5jfYsrZWRmwHw',
  authDomain: 'crypto-calculator-99269.firebaseapp.com',
  projectId: 'crypto-calculator-99269',
  storageBucket: 'crypto-calculator-99269.appspot.com',
  messagingSenderId: '558848179011',
  appId: '1:558848179011:web:f02fd2389a035f1f330df6',
  measurementId: 'G-3BVKGNRL7B',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const authFirebase = getAuth();
export const dbFirebase = getFirestore();

export const onAuth = async (email, pw) => {
  try {
    // 登入
    const res = await signInWithEmailAndPassword(auth, email, pw);
    // 拿儲存資料
    const data = await getDoc(doc(db, 'users', res.user.uid)).then((res) => {
      return res.data();
    });

    return data;
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      // 註冊
      const res = await createUserWithEmailAndPassword(auth, email, pw);
      console.log('註冊成功');
      // 加使用者資料
      await setDoc(doc(db, 'users', res.user.uid), {
        id: res.user.uid,
        user_name: email.split('@')[0],
      });
    } else {
      alert('登入失敗，請重整後再試');
    }
  }
};

export const isAuthStateChanged = (user) => {
  return onAuthStateChanged(auth, user);
};

export const onLogOut = () => {
  if (auth.currentUser) {
    signOut(auth);
  }
};

// store data
export const onStore = (inputs, outputs, searchs) => {
  const userID = auth.currentUser;
  setDoc(
    doc(db, 'users', userID.uid),
    { data: { inputData: inputs, outputData: outputs, searchData: searchs } },
    { merge: true }
  );
};

// get stored data
export const onGetData = () => {
  const userID = auth.currentUser;
  const data = getDoc(doc(db, 'users', userID.uid)).then((res) => {
    return res.data();
  });
  return data;
};
