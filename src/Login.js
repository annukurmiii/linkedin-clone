import React from 'react';
import "./Login.css";
import { useState } from "react";
import { auth } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from "react-redux";

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    const [ProfilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: ProfilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: ProfilePic,   
                }))
            })
        }).catch((error) => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />

                <input value={ProfilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic Url (optional)" type="text" />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />

                <input value={password} onChange={e => setPassord(e.target.value)} placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login;
