import React, { Component } from 'react';
import axios from 'axios';
import Squad from './Squad';

class SquadList extends Component {
    state = {
        squadInfo: []
    }

    componentDidMount() {
        this.getSquads()
    }

    getSquads = () => {
        axios.get('/api/v1/squad').then((res) => {
            this.setState({ squadInfo: res.data })
        })
    }

    render() {
        return (
            <div>
                Im a squadlist
                {this.state.squadInfo.map((spot, index) => {
                    return (
                        <Squad key={index}
                            gamertag={spot.gamertag}
                            name={spot.name}
                            _id={spot._id}
                            age={spot.age}
                            platform={spot.platform}
                            getSquads={this.getSquads}
                        />
                    )

                })}
            </div>
        );
    }
}

export default SquadList;