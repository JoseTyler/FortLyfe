import React, { Component } from 'react';
import axios from 'axios';

class Squad extends Component {

    deletePlayer=()=>{
        console.log(this.props._id)
        axios.delete(`api/v1/squad/${this.props._id}`)
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.platform}</p>
                <p>{this.props.age}</p>
                <p>{this.props.gamertag} </p>
                               
        <button type="submit">Edit Player</button>
        <button onClick={this.deletePlayer}>Delete Player</button>
            </div>
        );
    }
}

export default Squad;