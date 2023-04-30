import React, { useState } from 'react';
import { Container, TextField} from "@mui/material";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from "../firebase-config";

const Home = () => {
    const [registerEmail, setRegisterEmail] = useState(" ");
    const [registerPassword, setRegisterPassword] = useState(" ");
    const [loginEmail, setLoginEmail] = useState(" ");
    const [loginPassword, setLoginPassword] = useState(" ");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
    })

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
    };

    const login = async() => {
        try {
            const login = await signInWithEmailAndPassword(
            auth, 
            loginEmail, 
            loginPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async() => {
        await signOut(auth);
    }




    const boxStyles={
        background: "#fdfdfd",
        marginTop: "7%",
        textAlign: "center",
        color: "#222",
        minHeight: "10rem",
        borderRadius: 2,
        padding: "3rem 2rem",
        boxShadow: "0px 10px 15px -3px rgb(0, 0, 0, 0.1)",
        position: "relative"
    }

    return (
        <Container maxWidth="xs" style={boxStyles}>
            <form>
                <div>
                    <h3>Register User</h3>
                    <input 
                        value={registerEmail}
                        type="email" 
                        placeholder="Email" 
                        onChange= {(event)=> {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input 
                        value={registerPassword}
                        type="password" 
                        placeholder="Password" 
                        onChange= {(event)=> {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <button onClick={register}>Create User</button>
                </div>
                <br />
                <div>
                    <h3>Login</h3>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e)=> {
                            setLoginEmail(e.target.value);
                        }}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e)=> {
                            setLoginPassword(e.target.value);
                        }}
                    />
                    <button onClick={login}>Login in</button>
                </div>
                <br />
                <div>
                    <h4>User Logged In:</h4>
                    {user?.email}
                    <button onClick={logout}>Sign Out</button>
                </div>
            </form>
        </Container>
    )
}

export default Home;
