import React, { useState } from 'react';
import { Container} from "@mui/material";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase-config";

const Home = () => {
    const [registerEmail, setRegisterEmail] = useState(" ");
    const [registerPassword, setRegisterPassword] = useState(" ");
    const [loginEmail, setLoginEmail] = useState(" ");
    const [loginPassword, setLoginPassword] = useState(" ");


    const register = async() => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    };

    const login = async() => {

    }

    const logout = async() => {

    }


    const boxStyles={
        background: "#fdfdfd",
        marginTop: "10%",
        textAlign: "center",
        color: "#222",
        minHeight: "10rem",
        borderRadius: 2,
        padding: "4rem 2rem",
        boxShadow: "0px 10px 15px -3px rgb(0, 0, 0, 0.1)",
        position: "relative"
    }

    return (
        <Container maxWidth="md" style={boxStyles}>
                <div>
                    <h3>Register User</h3>
                    <input 
                        type="email" 
                        id="stacked-email" 
                        placeholder="Email" 
                        onChange= {( (event)=> {
                            setRegisterEmail(event.target.value);
                        })}
                    />
                    <input 
                        type="password" 
                        id="stacked-password" 
                        placeholder="Password" 
                        onChange= {( (event)=> {
                            setRegisterEmail(event.target.value);
                        })}
                    />
                    <button onClick={register}>Create User</button>
                </div>
                <br />
                <div>
                    <h3>Login</h3>
                    <input 
                        type="email" 
                        id="stacked-email" 
                        placeholder="Email" 
                    />
                    <input 
                        type="password" 
                        id="stacked-password" 
                        placeholder="Password" 
                    />
                    <button>Login in</button>
                </div>
        </Container>
    )
}

export default Home;
