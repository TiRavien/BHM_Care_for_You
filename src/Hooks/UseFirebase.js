import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseAuth from '../Components/Login/Firebase/Firebase.init';

firebaseAuth();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const emailPasswordLogIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            
    }


    const signInUsingGoogle = () => {
        // setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        emailPasswordLogIn,
        signInUsingGoogle,
        logOut
    }
};

export default UseFirebase;