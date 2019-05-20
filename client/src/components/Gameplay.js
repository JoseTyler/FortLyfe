import React, { Component } from 'react';
import axios from 'axios';

class Gameplay extends Component {
    state = {
        showForm: false,
        formInfo: {
            gamertag: '',
            url: '',
            _id: ''
        }

    }
    componentDidMount() {
        let copyOfFormInfo = this.state.formInfo
        copyOfFormInfo.gamertag = this.props.gamertag
        copyOfFormInfo.url = this.props.url
        copyOfFormInfo._id = this.props._id
        this.setState({
            formInfo: copyOfFormInfo
        })
    }

    deleteGameplay = () => {
        console.log(this.props._id)
        axios.delete(`api/v1/game/${this.props._id}`)
        this.props.getGameplays()
    }

    handleChange = (e) => {
        const copyOfFormInfo = { ...this.state.formInfo }
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({ formInfo: copyOfFormInfo })
    }

    swapForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        return (
            <div>
                {this.state.showForm
                    ? <form onSubmit={this.updatePlayer}>
                        <label htmlFor="gamertag">GamerTag:</label>
                        <input id="gamertag" name="gamertag" type="text" placeholder={this.props.gamertag} onChange={this.handleChange} />
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" placeholder={this.props.name} onChange={this.handleChange} />
                        <label htmlFor="age">Age:</label>
                        <input id="age" name="age" type="text" placeholder={this.props.age} onChange={this.handleChange} />
                        <label htmlFor="platform">Platform:</label>
                        <input id="platform" name="platform" type="text" placeholder={this.props.platform} onChange={this.handleChange} />

                        <button type="submit" >SUBMIT EDIT!</button>
                    </form>
                    : <div>
                        <p>{this.props.gamertag} </p>
                        <p>{this.props.url}</p>
                        <button onClick={this.deleteGameplay}>Delete Gameplay</button>
                    </div>
                }
            </div>
        );
    }
}

export default Gameplay;