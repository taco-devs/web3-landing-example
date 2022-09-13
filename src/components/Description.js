import React, { Component } from 'react';
import styled from 'styled-components';
import cocoa from '../cocoa.gif'
import {Collapse} from 'react-collapse';

const StyledDescription = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: white;
    min-height: 80vh;
    align-items: center;
    max-width: 900px;
`

const DescriptionColumn = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.flex && `flex: ${props.flex};`}
    align-items: ${props => props.align || 'center'};
    min-width: 345px;
    width: 90%;
    margin: 1.25em 0.5em 0 0.5em;
`

const StyledDivider = styled.div`
    height: 3px;
    width: 100%;
    background-color: #D2B48C;
`
const TextContainer = styled.div`
    display: flex;
    text-align: justify;
    width: 90%;
`

const LearnMoreButton = styled.a`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0 0;
    background-color: #D2B48C;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    color: white;
    border-color: #D2B48C;
    border-width: 3px;
    border-style: solid;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: black;
        border-color: black;
        border-width: 3px;
        border-style: solid;
    }
`

const Litepaper = styled.a`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5em 0 0 0;
    background-color: white;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border-color: #D2B48C;
    border-width: 3px;
    border-style: solid;
    color: black;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        border-color: black;
        border-width: 3px;
        border-style: solid;
    }
`

const Info = styled.p`
    text-align: left;
    font-style: italic;
    font-size: 12px;
`

export default class Header extends Component {
    render() {
        return (
            <StyledDescription>
                <DescriptionColumn flex={1} align={'flex-start'}>
                    <h2>
                        Welcome to Cocoa
                    </h2>
                    <StyledDivider />
                    <TextContainer>
                       <p>Cocoa Finance is a bilateral DeFi ecosystem for long term lenders looking to get a consistent and safe return and short term yield farmers looking to maximize their APY strategies.</p> 
                    </TextContainer>
                    <StyledDivider />
                    <LearnMoreButton href="#roadmap">
                        <h3>Learn More</h3>
                    </LearnMoreButton>
                    <Litepaper href={require('../cocoa_litepaper.pdf')} without rel="noopener noreferrer" target="_blank">
                        <h3>Litepaper</h3>
                    </Litepaper>
                    <Info>* Cocoa Finance is under development, presale and roadmap will be updated soon.</Info>
                </DescriptionColumn>
                <DescriptionColumn DescriptionColumn flex={1}>
                    <div>
                        <img src={cocoa} className="App-logo" alt="logo" />
                    </div>
                </DescriptionColumn>
            </StyledDescription>
        )
    }
}
