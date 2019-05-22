import React, { Component } from 'react';
import axios from 'axios';
import Gameplay from './Gameplay';
import styled from 'styled-components'
import img from '../images/Page4.png'
import { Link } from "react-router-dom"

const Header = styled.div`
font-size: 20px;
text-decoration: none;
`;

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
                <Header>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/squads'}>Squads</Link>
                        <Link to={'/gameplay'}>Showoff</Link>
                        <Link to={'/gameplays'}>Showdown</Link>
                    </Header>
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