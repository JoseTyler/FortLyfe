import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"

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
            <div >
                 <p>navbar</p>
                <form onSubmit={this.newSquad}>
                    <label htmlFor="gamertag">GamerTag:</label>
                    <input id="gamertag" name="gamertag" placeholder="ex: Snype0nSyte77" type="text" onChange={this.handleChange}/>
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" placeholder="ex: Adam Hues" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input id="age" name="age" type="text" placeholder="ex: 22" onChange={this.handleChange}/>
                    <label htmlFor="platform">Platform:</label>
                    <input id="platform" name="platform" type="text" placeholder="ex: Playstation" onChange={this.handleChange}/>
                    <button type="submit" >SQUAD UP!</button>
                </form>
            </div>
        );
    }
}

export default SquadForm;