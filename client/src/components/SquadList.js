import React, { Component } from 'react';
import axios from 'axios';
import Squad from './Squad';
import styled from 'styled-components'
import img from '../images/Page2.png'
import { Link } from "react-router-dom"

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
    
    `;




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
                <Body>
                    <Header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/squads'} style={{ textDecoration: 'none', color: 'white' }}>SQUAD</Link>
                        <Link to={'/gameplay'} style={{ textDecoration: 'none', color: 'white' }}>SHOWOFF</Link>
                        <Link to={'/gameplays'} style={{ textDecoration: 'none', color: 'white' }}>SHOWLIST</Link>
                    </Header>
                    {this.state.squadInfo.map((spot, index) => {
                        return (

                            <Squad
                                key={index}
                                gamertag={spot.gamertag}
                                name={spot.name}
                                _id={spot._id}
                                age={spot.age}
                                platform={spot.platform}
                                getSquads={this.getSquads}
                            />

                        )

                    })}
                </Body>
            </div>
        );
    }
}

export default SquadList;