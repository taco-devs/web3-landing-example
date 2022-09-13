import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../nib.png'

const StyledHeader = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    background-color: black;
    height: 40px;
    margin: -1.5em 0 0 0;
    padding: 3em 1em 1em 1em;
    color: white;
    border-bottom-width: 15px;
    border-bottom-color: #D2B48C;
    border-bottom-style: solid; 
`

const StyledLogo = styled.img`
    height: 40px;
    width: auto;
    margin: 0 1em 0 0;
`

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <StyledLogo src={logo} />
                <h2>Cocoa Finance</h2>
            </StyledHeader>
        )
    }
}
