import { useState } from "react";
import { useFirebase } from "./context/firebase";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  
  const firebase = useFirebase();

  const handleSignUp = () => {
    firebase.signupUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Get the user ID from the userCredential
        const userId = userCredential.user.uid;

        // Store user data in the Realtime Database using the unique user ID as the key
        firebase.putData(`users/${userId}`, { name, email });
        setName('')
        setEmail('')
        setPassword('')
        
      })

      .catch((error) => {
        // Handle errors during sign up
        console.error("Error signing up:", error.message);
      });
  };

  return (
    <div>
      <h1>firebase authentication</h1>

      <label>Name:</label>
      <input type="text"
        placeholder="enter your name"
        onChange={n => setName(n.target.value)}
        value={name}
         />

         

    <label>Your Email</label>
      <input
        type='email'
        placeholder='enter your email'
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

<br />
    <label>Your Password</label>
      <input
        type='password' 
        placeholder='enter your password' 
        required
        onChange={(p) => setPassword(p.target.value)}
        value={password}
      />

      <br />

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
