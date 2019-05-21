import React, { Component } from 'react';
import axios from 'axios';
import Gameplay from './Gameplay';
import styled from 'styled-components'
import img from '../images/Page4.png'


const Body = styled.div`
background-image: url(${img});
height: 100vh;
width: 100vw;
background-size: cover;
`

class GameplayList extends Component {
    state = {
        gameplayInfo: []
    }

    componentDidMount() {
        this.getGameplays()
    }

    getGameplays = () => {
        axios.get('/api/v1/gameplay').then((res) => {
            this.setState({ gameplayInfo: res.data })
        })
    }

    render() {
        return (
            <div>
                <Body> 
                {this.state.gameplayInfo.map((spot, index) => {
                    return (
                        <Gameplay key={index}
                            gamertag={spot.gamertag}
                            _id={spot._id}
                            getGameplays={this.getGameplays}
                            url={spot.url}
                        />
                    )
                })}
                </Body>
            </div>
        );
    }
}





export default GameplayList;