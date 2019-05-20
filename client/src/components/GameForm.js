import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"

class GameForm extends Component {
    state = {
        formInfo: {
            gamertag: '',
            video: ''
        },
        redirect: false,
    }

    handleChange = (e) => {
        const copyOfFormInfo = {...this.state.formInfo}
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({formInfo: copyOfFormInfo})
      }

    newGameplay = (e) => {
        e.preventDefault()
        axios.post("api/v1/game", this.state.formInfo) 
        this.setState({redirect: true}) 
    }

    render() {
        if(this.state.redirect){
            return <Redirect to = "/gameplays"/>
        }
        return (
            <div>
                <form onSubmit={this.newGameplay}>
                    <label htmlFor="gamertag">GamerTag:</label>
                    <input id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange}/>
                    <label htmlFor="name">Name:</label>
                    <input id="URL" name="name" type="text" placeholder="ex: youtube.com/fortniteclips" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default GameForm;