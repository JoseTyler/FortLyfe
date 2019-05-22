import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from "../images/Page1.png"


// // StyleSheet For SquadForm Component
const Header = styled.div`
    font-size: 30px;
    position: relative;
    top: 8px;
    left: 60px;
    display: flex;
    justify-content:space-evenly;
    width: 40vw;
    color:solid white;
    font-family: DK Rumpelstiltskin;
    `;

const Body = styled.div`
    background-image: url(${img});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    position: sticky;
    `;

const Form = styled.form`
    font-size: 35px;
    display: block;
    flex-direction: column;
    align-items:center;
    height: 50vh;
    padding-left: 960px;
    padding-top: 335px;
    font-family: Mushy Love;  
    `;

const Inputy = styled.input`
    display: block;
    height:30px;
    width:300px;
    font-size: 20px;  
    `;

const Button = styled.button`
    height:30px;
    font-size: 20px;
    background-color: green;
    position: relative;
    left: 90px;
    top: 15px;
    border: solid black 2px;
    `;


// SquadForm Component

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
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/squads'} style={{ textDecoration: 'none', color: 'white' }}>SQUAD</Link>
                        <Link to={'/gameplay'} style={{ textDecoration: 'none', color: 'white' }}>SHOWOFF</Link>
                        <Link to={'/gameplays'} style={{ textDecoration: 'none', color: 'white' }}>SHOWLIST</Link>
                    </Header>

                    <Form onSubmit={this.newSquad}>
                        <label htmlFor="gamertag">GAMERTAG:</label>
                        <Inputy id="gamertag" name="gamertag" placeholder="Ex: Snype0nSyte77" type="text" onChange={this.handleChange} />
                        <label htmlFor="name">NAME:</label>
                        <Inputy id="name" name="name" type="text" placeholder="Ex: Adam Hues" onChange={this.handleChange} />
                        <label htmlFor="age">AGE:</label>
                        <Inputy id="age" name="age" type="text" placeholder="Ex: 22" onChange={this.handleChange} />
                        <label htmlFor="platform">PLATFORM:</label>
                        <Inputy id="platform" name="platform" type="text" placeholder="Ex: Playstation" onChange={this.handleChange} />
                        <Button type="submit">SQUAD UP!</Button>
                    </Form>
                </Body>
            </div>
        );
    }
}

export default SquadForm;




