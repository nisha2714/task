import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/list");
    } catch (error) {
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
          Log In
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3" style={{ marginBottom: '1rem' }}>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3" style={{ marginBottom: '1rem' }}>
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        <div>
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
