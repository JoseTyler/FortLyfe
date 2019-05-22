import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from "../images/Page1.png"


// STYLING COMPONENT
const Header = styled.div`
font-size: 20px;
text-decoration: none;
word-spacing: 420px;
`;

const Body = styled.div`
    background-image: url(${img});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    position: sticky;
    `;

const Form = styled.form`
    font-size: 30px;
    display: block;
    flex-direction: column;
    align-items:center;
    height: 50vh;
    padding-left: 1030px;
    padding-top: 350px;
    
`;

const Inputy = styled.input`
    display: block;
    
`



class SquadForm extends Component {
    state = {
        formInfo: {
            gamertag: '',
            name: '',
            age: '',
            platform: ''
        },
        redirect: false,
    }

    handleChange = (e) => {
        const copyOfFormInfo = { ...this.state.formInfo }
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({ formInfo: copyOfFormInfo })
    }

    newSquad = (e) => {
        e.preventDefault()
        axios.post("api/v1/squad", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/squads" />
        }
        return (
            <div>
                <Body>
                    <Header>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/squads'}>Squads</Link>
                        <Link to={'/gameplay'}>Showoff</Link>
                        <Link to={'/gameplays'}>Showdown</Link>
                    </Header>
                    
                        <Form onSubmit={this.newSquad}>
                            <label htmlFor="gamertag">GAMERTAG:</label>
                            <Inputy id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange} />
                            <label htmlFor="name">NAME:</label>
                            <Inputy id="name" name="name" type="text" placeholder="ex: Adam Hues" onChange={this.handleChange} />
                            <label htmlFor="age">AGE:</label>
                            <Inputy id="age" name="age" type="text" placeholder="ex: 22" onChange={this.handleChange} />
                            <label htmlFor="platform">PLATFORM:</label>
                            <Inputy id="platform" name="platform" type="text" placeholder="ex: Playstation" onChange={this.handleChange} />
                            <button type="submit">SQUAD UP!</button>
                        </Form>
                    
                    
                </Body>
            </div>
        );
    }
}

export default SquadForm;




