import React, { Component } from 'react';
import axios from 'axios';
import Squad from './Squad';
import styled from 'styled-components'
import img from '../images/Page2.png'
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
                        <Link to={'/'}>Home</Link>
                        <Link to={'/squads'}>Squads</Link>
                        <Link to={'/gameplay'}>Showoff</Link>
                        <Link to={'/gameplays'}>Showdown</Link>
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