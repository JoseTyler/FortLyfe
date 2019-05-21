import React, { Component } from 'react';
import axios from 'axios';

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
                    : <div>
                        <p>Gamertag: {this.props.gamertag}</p>
                        <p>Name: {this.props.name}</p>
                        <p>Age: {this.props.age}</p>
                        <p>Platform: {this.props.platform}</p>

                        <button onClick={this.swapForm}>EDIT PLAYER</button>
                        <button onClick={this.deletePlayer}>DELETE PLAYER</button>
                    </div>
                }
            </div>
        );
    }
}

export default Squad;