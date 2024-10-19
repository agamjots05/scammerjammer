import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, updatePassword } from "firebase/auth";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 


// enable users to sign in and stuff

export const doCreateUserWithEmailPassword = async(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider); // creates popup where you can click the google to login


    // IMPLEMENT LATER -> save user info in firestore
    // result.user = 

    return result;
}

export const doSignInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
}

export const doSignOut = () => {
    return auth.signOut();
}

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordChange = (email) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     });
// }