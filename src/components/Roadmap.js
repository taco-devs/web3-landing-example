import React, { Component } from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { Collapse } from 'react-collapse';

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

const Stages = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #D2B48C;
    width: 100%;
    min-height: 100px;
    margin: 1em 0 1em 0;
    border-radius: 5px;
    color: white;
    border-bottom-color: black;
    border-bottom-style: solid;
    border-bottom-width: 5px;

    transition: heigth 1s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`

const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Step = styled.div`
    margin: 0 1em 1em 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    background-color: white;
    height: 100%;
    border-radius: 5px;
    color: black;
`

const  Title = styled.h4`
    margin: 10px 0 10px 0;
`

const Description = styled.p`

`

export default class Roadmap extends Component {

    state = {
        open_key: [],
    }

    toggleCollapse = (key) => {
        const {open_key} = this.state;
        
        if (key === open_key) {
            this.setState({open_key: null})
        } else {
            this.setState({open_key: key});
        }
        
    }


    render() {
        const {open_key} = this.state;
        return (
            <StyledDescription id="roadmap">
                <DescriptionColumn flex={1} align={'flex-start'}>
                    <h2>
                        Roadmap
                    </h2>
                    <StyledDivider />  
                    <Stages>
                        <StageCard onClick={() => this.toggleCollapse('1')}>
                            <h2>Q3 2020</h2>
                            <Collapse isOpened={open_key === '1'}>
                                <StepContainer>
                                    <Step>
                                        <Title>Presale launch</Title>
                                    </Step>
                                    <Step>
                                        <Title>Uniswap / Mooniswap listing</Title>
                                    </Step>
                                    <Step>
                                        <Title>Publish smart contracts to github</Title>
                                    </Step>
                                    <Step>
                                        <Title>AlphaNet for Yield Pools and NIB staking (Ropsten)</Title>
                                    </Step>
                                </StepContainer>
                            </Collapse>
                        </StageCard>
                        <StageCard onClick={() => this.toggleCollapse('2')}>
                            <h2>Q4 2020</h2>
                            <Collapse isOpened={open_key === '2'}>
                                <StepContainer>
                                    <Step>
                                        <Title> AlphaNet for COCOA Staking, Oracle and Governance (Ropsten)</Title>
                                    </Step>
                                    <Step>
                                        <Title>Deploy to Mainnet</Title>
                                    </Step>
                                    <Step>
                                        <Title>COCOA Dapp</Title>
                                    </Step>
                                    <Step>
                                        <Title>Provide UI Dashboards for NIB and COCOA holders</Title>
                                    </Step>
                                </StepContainer>
                            </Collapse>
                        </StageCard>
                        <StageCard onClick={() => this.toggleCollapse('3')}>
                            <h2>Q1 2021</h2>
                            <Collapse isOpened={open_key === '3'}>
                                <StepContainer>
                                    <Step>
                                        <Title>Cocoa aTokens</Title>
                                    </Step>
                                </StepContainer>
                            </Collapse>
                        </StageCard>
                    </Stages>
                </DescriptionColumn>
            </StyledDescription>
        )
    }
}
