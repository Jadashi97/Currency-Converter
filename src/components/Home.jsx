import React from 'react';
import { Container} from "@mui/material";

const Home = () => {


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
