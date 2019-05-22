import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom"
import styled from 'styled-components'
import img from '../images/Page3.png'

const Header = styled.div`
font-size: 30px;
display: flex;
justify-content:space-evenly;
width: 50vw;
color:solid white;
`;

const Body = styled.div`
background-image: url(${img});
height: 100vh;
width: 100vw;
background-size: cover;
position: sticky;
top: 0;
`;

const Form = styled.form`
    font-size: 30px;
    display: block;
    flex-direction: column;
    align-items:center;
    height: 50vh;
    padding-left: 190px;
    padding-top: 200px;
    
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
    background-color: orange;
    position: relative;
    left: 90px;
    top: 25px;
    border: solid black 2px;
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
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/squads'} style={{ textDecoration: 'none', color: 'white' }}>SQUAD</Link>
                        <Link to={'/gameplay'} style={{ textDecoration: 'none', color: 'white' }}>SHOWOFF</Link>
                        <Link to={'/gameplays'} style={{ textDecoration: 'none', color: 'white' }}>SHOWLIST</Link>
                    </Header>
                    <Form onSubmit={this.newGameplay}>
                        <label htmlFor="gamertag">GamerTag</label>
                        <Inputy id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange} />
                        <label htmlFor="url">Video URL</label>
                        <Inputy id="url" name="url" type="text" placeholder="ex: youtube.com/fortniteclips" onChange={this.handleChange} />
                        <Button type="submit">SHOW OFF!</Button>
                    </Form>
                </Body>
            </div>
        );
    }
}

export default GameplayForm;