import { useState, useEffect } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "../../index.css";
import "./login.css";
// import { UserAuth } from "../../context/AuthContext";
import login_event from "../../assets/img/login_img.png";
import { Link } from "react-router-dom";

export const Auth = () => {
  const [emailSignIn, setEmailSignIn] = useState('')
  const [passwordSignIn, setPasswordSignIn] = useState('')
//   const { user } = UserAuth();

//   const navigate = useNavigate();

  const signIn = async () => {
    try {
      const email = emailSignIn;
      const password = passwordSignIn;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      setEmailSignIn("")
      setPasswordSignIn("");
      console.log(user);
      } catch (error) {
          console.log('error: ', error);
      }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log(userCredential);
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

//   useEffect(() => {
//     if (user != null) {
//       navigate("/profil");
//     }
//   }, [user]);

  return (
    <div className="form_login">
      <img src={login_event} alt="people gathering" className="img_event" />
      <div className="input_section">
        <input
          className="input_login"
          type="text"
          placeholder="Email"
          value={emailSignIn}
          onChange={(e) => setEmailSignIn(e.target.value)}
        />
        <input
          className="input_login"
          type="password"
          placeholder="Password"
          value={passwordSignIn}
          onChange={(e) => setPasswordSignIn(e.target.value)}
        />
      </div>

      <div className="btn_section">
        <button className="btn" onClick={signIn}>
          Sign in
        </button>

        <button className="btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>

        <button className="btn" onClick={logOut}>
          Logout
        </button>
        <Link to={"/signup"} className="switch_log">
          Join us !
        </Link>
      </div>
    </div>
  );
};
