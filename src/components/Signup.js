import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full height of the viewport
      backgroundColor: '#f7f7f7' // Optional: background color
    }}>
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: 'white', // Optional: background color
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: shadow
      }}>
        <h1 style={{ fontSize: 38 }} className="mt-4 mb-4">
          Sign Up
        </h1>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" value={email}
            onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={handleSignup} className="btn btn-primary">
          Sign Up
        </button>

        <div>
          <p>
            Already have an account?{" "}
            <a href="/" className="hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
