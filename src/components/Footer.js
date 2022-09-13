import React, { Component } from 'react';
import styled from 'styled-components';
import {ReactComponent as Medium} from '../medium.svg'
import {ReactComponent as Telegram} from '../telegram.svg'
import {ReactComponent as Twitter} from '../twitter.svg'
import {ReactComponent as Discord} from '../discord.svg'

const StyledFooter = styled.div`
    width: 100vw;
    margin: 2em 0 0 0;
    padding: 1.5em 0 0 0;

    background-color: ${props => props.top ? 'white' : '#D2B48C'};
    color: ${props => props.top ? 'black' : 'white'};

    transition: background-color 1s ease;
    
    @media (min-width: 1100px) {
        position: fixed;
        bottom: 0;
    }
`

const FooterContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NetworkContainer = styled.div`
    display: flex;
    flex-direction: row; 
`

const Icon = styled.img`

    height: 30px;
    width: auto;
    margin: 0 1em 0 1em;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`


const svgStyle = (top) => {
    return {
        height: '30px',
        width: 'auto',
        margin: '0 1em 0 1em',
        userSelect: 'none',
        '-moz-user-select': 'none',
       '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        '-o-user-select': 'none',
        fill: top ? 'black' : 'white',
    }
}

export default class Footer extends Component {

    state = {
        top: true
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            this.setState({top: false});
        }else{
            this.setState({top: true});
        }
       
      }


    render() {
        const {top} = this.state;
        return (
            <StyledFooter top={top}>
                <FooterContainer>
                    <NetworkContainer>
                        <a href="https://twitter.com/CocoaFinance">
                            <Medium style={svgStyle(top)}/>
                        </a>
                        <a>
                            <Telegram style={svgStyle(top)}/>
                        </a>
                        <a>
                            <Discord style={svgStyle(top)}/>
                        </a>
                        <a href="https://twitter.com/CocoaFinance">
                            <Twitter style={svgStyle(top)}/>
                        </a>
                        
                    </NetworkContainer>
                    <p>Cocoa Finance 2020</p>
                </FooterContainer>
            </StyledFooter>
        )
    }
}
