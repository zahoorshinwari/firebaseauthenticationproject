import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, set, ref} from "firebase/database";



// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5ilIe7-93IT1KyzgpkmaIj9G-hH-Ghic",
    authDomain: "fir-project-6c30b.firebaseapp.com",
    projectId: "fir-project-6c30b",
    storageBucket: "fir-project-6c30b.appspot.com",
    messagingSenderId: "538324380991",
    appId: "1:538324380991:web:3c8920a1d151150f66378a",
    databaseURL : "https://fir-project-6c30b-default-rtdb.firebaseio.com/"
  };

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);

// this is used to access the below function
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    
    // put the data in real time database
    const putData = (key, data) => set(ref(database, key), data);

    // to retrieve the data from the realtime database
    // get(child(ref(database) , "department")).then((snapshot) => console.log(snapshot.toJSON()))
    // get(child(ref(database) , "department/software engineering")).then((snapshot) => console.log(snapshot.val()))
  

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword , putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}