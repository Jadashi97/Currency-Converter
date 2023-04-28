import React, { useState } from 'react';
import { Container} from "@mui/material";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "firebase-config.js";

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
            )
        } catch (error) {
            console.log(error.message)
        }
    }

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
            <form class="pure-form pure-form-stacked">
                    <label for="stacked-email">Email</label>
                    <input type="email" id="stacked-email" placeholder="Email" />
                    <label for="stacked-password">Password</label>
                    <input type="password" id="stacked-password" placeholder="Password" />
                    <button type="submit" class="pure-button pure-button-primary">Sign in</button>
            </form>
        </Container>
    )
}

export default Home;
