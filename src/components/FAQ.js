import React, { Component } from 'react';
import styled from 'styled-components';
import cocoa from '../cocoa.gif'
import {Collapse} from 'react-collapse';

const StyledDescription = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    background-color: white;
    min-height: 100vh;
    align-items: center;
    max-width: 900px;
    margin: 0 0 5em 0;
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
    margin: 0.5em 0 0;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 90%;
    margin: 1em 0 0 0;
`

const LearnMoreButton = styled.div`
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

    &:hover {
        cursor: pointer;
        background-color: black;
        border-color: black;
        border-width: 3px;
        border-style: solid;
    }
`

const Litepaper = styled.div`
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

const CollapseTitle = styled.b`

    margin: 0 0 0.5em 0;

    &:hover {
        cursor: pointer;
        color: #D2B48C;
    }
`

export default class FAQ extends Component {

    state = {
        open: [],
    }

    toggleCollapse = (key) => {
        const {open} = this.state;
        
        const has_key = open.indexOf(key) > -1;

        if (has_key) {
            const new_open = open.filter(open_key => open_key !== key);
            this.setState({ open: new_open});
        } else {
            this.setState({ open: [...open, key]});
        }
    }

    checkOpen = (key) => {
        const {open} = this.state;
        return open.indexOf(key) > -1;
    }

    render() {
        const {open} = this.state;
        return (
            <StyledDescription id="faq">
                <DescriptionColumn flex={1} align={'flex-start'}>
                    <h2>
                        FAQ
                    </h2>
                    <StyledDivider />
                    <TextContainer>
                        <CollapseTitle
                            onClick={() => this.toggleCollapse('1')}
                        >
                            What is Cocoa Finance?
                        </CollapseTitle>
                        <Collapse 
                            isOpened={this.checkOpen('1')}
                        >
                            <p>
                                Cocoa Finance is a bilateral DeFi ecosystem on the Ethereum blockchain built to maximize yields from popular protocols and get constant stable returns.
                                <br />
                                <br />
                                The ecosystem is governed by <b>COCOA</b> holders by defining the best strategies on compounding assets and providing a collateralized warranty to NIB by staking their tokens and absorbing the risk.
                                <br />
                                <br />
                                On the other side, <b>NIB</b> is obtained by locking compunding assets inside the ecosystem to provide a healthy and predictable yield. 
                                NIB holders are able to stake their tokens in order to get a constant return protected by collateralized assets and COCOA.
                            </p> 
                        </Collapse>
                    </TextContainer>
                    <StyledDivider />
                    <TextContainer>
                        <CollapseTitle
                            onClick={() => this.toggleCollapse('2')}
                        >
                            Why is Cocoa Finance doing a Presale?
                        </CollapseTitle>
                        <Collapse 
                            isOpened={this.checkOpen('2')}
                        >
                            <p>Cocoa Finance is doing a presale for 3 main reasons</p> 
                            <ul>
                                <li>Add liquidity to COCOA markets (35%)</li>
                                <li>Provide initial assets to the COCOA Yield Pool (35%)</li>
                                <li>Fund Development (30%)</li>
                            </ul>
                        </Collapse>
                    </TextContainer>
                    <StyledDivider />
                    <TextContainer>
                        <CollapseTitle
                            onClick={() => this.toggleCollapse('3')}
                        >
                            What is COCOA?
                        </CollapseTitle>
                        <Collapse 
                            isOpened={this.checkOpen('3')}
                        >
                            <p><b>COCOA</b> is the token used for governance on the Cocoa Ecosystem. It is also used as a colleteral warranty for NIB staking.</p> 
                        </Collapse>
                    </TextContainer>
                    <StyledDivider />
                    <TextContainer>
                        <CollapseTitle
                            onClick={() => this.toggleCollapse('4')}
                        >
                            What is NIB?
                        </CollapseTitle>
                        <Collapse 
                            isOpened={this.checkOpen('4')}
                        >
                            <p>
                                <b>NIB</b> is the token obtained by locking yield generating assets into the COCOA Ecosystem. 
                                By staking yield you are able to get a consistent an safe yield protected by COCOA collateral.
                                NIB is also used to unlock assets provided.

                                With the use of Oracles you get 1000 NIB by providing the total in value of 1 ETH in any asset.
                            </p> 
                        </Collapse>
                    </TextContainer>
                    <StyledDivider />
                    <TextContainer>
                        <CollapseTitle
                            onClick={() => this.toggleCollapse('6')}
                        >
                            Who is behind Cocoa Finance?
                        </CollapseTitle>
                        <Collapse 
                            isOpened={this.checkOpen('6')}
                        >
                            <p>
                                Cocoa Finance development team is anonymous at this stage. 
                                The end goal of the Cocoa Ecosystem is to create a successfull and self governing Descentralized Autonomous Organization (DAO).
                                This is possible because all the code inside the contracts will be public and auditable.
                                <br/>
                                <br/>
                                <b>CODE IS LAW</b>
                            </p> 
                        </Collapse>
                    </TextContainer>
                    <StyledDivider />
                </DescriptionColumn>
            </StyledDescription>
        )
    }
}
