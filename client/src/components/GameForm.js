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

    newSquad = (e) => {
        e.preventDefault()
        axios.post("api/v1/squad", this.state.formInfo) 
        this.setState({redirect: true}) 
    }

    render() {
        if(this.state.redirect){
            return <Redirect to = "/squads"/>
        }
        return (
            <div>
                <form onSubmit={this.newSquad}>
                    <label htmlFor="gamertag">GamerTag:</label>
                    <input id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange}/>
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" placeholder="ex: Adam Hues" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default SquadForm;