import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Div = styled.div`
padding-left: 120px;
padding-top: 170px;
`

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
                    : <Div>
                        <p>GamerTag: {this.props.gamertag} </p>
                        {/* <p>{this.props.url}</p> */}
                        <iframe width="453" height="236" src={this.state.formInfo.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button onClick={this.deleteGameplay}>Delete Gameplay</button>
                    </Div>
                }
            </div>
        );
    }
}

export default Gameplay;


