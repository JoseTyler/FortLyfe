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
        axios.delete(`api/v1/gameplay/${this.props._id}`)
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
                    ? null
                    : <div>
                        <p>{this.props.gamertag} </p>
                        <p>{this.props.url}</p>
                        <iframe width="953" height="536" src={this.state.formInfo.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button onClick={this.deleteGameplay}>Delete Gameplay</button>
                    </div>
                }
            </div>
        );
    }
}

export default Gameplay;



