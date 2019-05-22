import React, { Component } from 'react';
import axios from 'axios';
import Gameplay from './Gameplay';
import styled from 'styled-components'
import img from '../images/Page4.png'
import { Link } from "react-router-dom"


// StyleSheet For GameplayList Component

const Header = styled.div`
    font-size: 30px;
    position: relative;
    top: 8px;
    left: 60px;
    display: flex;
    justify-content:space-evenly;
    width: 40vw;
    color:solid white;
    font-family: DK Rumpelstiltskin;
    `;

const Body = styled.div`
    background-image: url(${img});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    position: sticky;
    top: 0;
    `


// GameplayList Component

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
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/squads'} style={{ textDecoration: 'none', color: 'white' }}>SQUAD</Link>
                        <Link to={'/gameplay'} style={{ textDecoration: 'none', color: 'white' }}>SHOWOFF</Link>
                        <Link to={'/gameplays'} style={{ textDecoration: 'none', color: 'white' }}>SHOWLIST</Link>
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