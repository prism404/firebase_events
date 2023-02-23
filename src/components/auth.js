import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "../index.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);
    }
  };

  const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error(err);
    };
  };

  return (
    <div className="form_login">
      <input
        className="input_login"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input_login"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="other_btn" onClick={signIn}>Sign in</button>

      <button className="other_btn" onClick={signInWithGoogle}>Sign in with Google</button>

      <button className="delete_btn" onClick={logOut}>Logout</button>
    </div>
  );
};
