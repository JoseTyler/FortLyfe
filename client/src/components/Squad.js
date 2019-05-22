import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'


const P = styled.a`
font-size: 20px;
display: flex;
flex-direction: column;
padding-left: 110px;
`;

const Info = styled.div`
padding-top: 200px;
`;


const Button = styled.button`
    height: 25px;
    font-size: 15px;
    background-color: blue;
    position: relative;
    left: 98px;
    top: 15px;
    border: solid black 2px;
`;






class Squad extends Component {
    state = {
        showForm: false,
        formInfo: {
            gamertag: '',
            name: '',
            age: '',
            platform: '',
            _id: ''
        }

    }
    componentDidMount() {
        let copyOfFormInfo = this.state.formInfo
        copyOfFormInfo.gamertag = this.props.gamertag
        copyOfFormInfo.name = this.props.name
        copyOfFormInfo.age = this.props.age
        copyOfFormInfo.platform = this.props.platform
        copyOfFormInfo._id = this.props._id
        this.setState({
            formInfo: copyOfFormInfo
        })
    }

    deletePlayer = () => {
        console.log(this.props._id)
        axios.delete(`api/v1/squad/${this.props._id}`)
        this.props.getSquads()
    }

    updatePlayer = (e) => {
        e.preventDefault()
        console.log(this.state.formInfo)
        axios.put(`/api/v1/squad/${this.props._id}`, this.state.formInfo)
        this.swapForm()
        this.props.getSquads()
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
                        <button onClick={this.setState.swapForm} >SUBMIT EDIT!</button>
                    </form>
                    : <Info>
                        <P>Gamertag: {this.props.gamertag}</P>
                        <P>Name: {this.props.name}</P>
                        <P>Age: {this.props.age}</P>
                        <P>Platform: {this.props.platform}</P>
                        <Button onClick={this.swapForm}>EDIT PLAYER</Button>
                        <Button onClick={this.deletePlayer}>DELETE PLAYER</Button>
                    </Info>
                }
            </div>
        );
    }
}

export default Squad;