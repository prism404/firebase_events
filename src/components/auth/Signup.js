import React, { useState } from "react";
import "../../index.css";
import "./login.css";
import { auth, googleProvider } from "../../config/firebase";
import login_event from "../../assets/img/login_img.png";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { Link } from "react-router-dom";

function Signup() {
  // * Signup with email and password States
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const register = async () => {
    try {
      const email = emailSignUp;
      const password = passwordSignUp;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setEmailSignUp("");
      setPasswordSignUp("");
      console.log(user);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log(userCredential);
      const user = userCredential.user;
      const name = user.displayName;
      const email = user.email;
      const profilePic = user.photoURL;

      console.log(user);
      console.log(name);
      console.log(email);
      console.log(profilePic);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      alert("Bye bye ! See you again !");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="form_login">
        <img src={login_event} alt="" className="img_event" />
        <div className="input_section">
          <input
            className="input_login"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmailSignUp(e.target.value)}
          />
          <input
            className="input_login"
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordSignUp(e.target.value)}
          />
        </div>

        <div className="btn_section">
          <button className="btn" onClick={register}>
            Register
          </button>

          <button className="btn" onClick={signUpWithGoogle}>
            Sign up with Google
          </button>

          <button className="btn" onClick={logOut}>
            Logout
          </button>

          <Link to={"/login"} className="switch_log">Already a member ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
