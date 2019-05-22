import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom"
import styled from 'styled-components'
import img from '../images/Page3.png'

const Header = styled.div`
font-size: 20px;
text-decoration: none;
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
    padding-left: 290px;
    padding-top: 200px;
    
`;

const Inputy = styled.input`
    display: block;
`;

class GameplayForm extends Component {
    state = {
        formInfo: {
            gamertag: '',
            url: ''
        },
        redirect: false,
    }

    handleChange = (e) => {
        const copyOfFormInfo = { ...this.state.formInfo }
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({ formInfo: copyOfFormInfo })
    }

    newGameplay = (e) => {
        e.preventDefault()
        axios.post("api/v1/gameplay", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/gameplays" />
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
                <Form onSubmit={this.newGameplay}>
                    <label htmlFor="gamertag">GamerTag:</label>
                    <Inputy id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange} />
                    <label htmlFor="url">Name:</label>
                    <Inputy id="url" name="url" type="text" placeholder="ex: youtube.com/fortniteclips" onChange={this.handleChange} />
                    <button type="submit" >SHOW OFF!</button>
                </Form>
                </Body>
            </div>
        );
    }
}

export default GameplayForm;