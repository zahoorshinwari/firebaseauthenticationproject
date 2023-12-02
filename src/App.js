import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import './App.css'

import { useState } from "react";
import { useFirebase } from "./context/firebase";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

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
        firebase.putData(`users/${userId}`, { name, email, password });
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
         <br />

         

    <label>Your Email:</label>
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
      

       <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="order-summary" element={<OrderSummary />}></Route>
      <Route path="products" element={<Products />}>
        <Route index element={<FeaturedProducts />} />   
        <Route path="featured" element={<FeaturedProducts />}></Route>
        <Route path="newproducts" element={<NewProducts />}></Route>
      </Route>
      <Route path="users" element={<Users />} >
        <Route path=":userId" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>

    </div>
  );
}

export default App;
