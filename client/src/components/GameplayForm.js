import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"

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
                
                <form onSubmit={this.newGameplay}>
                    <label htmlFor="gamertag">GamerTag:</label>
                    <input id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange} />
                    <label htmlFor="url">Name:</label>
                    <input id="url" name="url" type="text" placeholder="ex: youtube.com/fortniteclips" onChange={this.handleChange} />
                    <button type="submit" >SHOW OFF!</button>
                </form>
            </div>
        );
    }
}

export default GameplayForm;