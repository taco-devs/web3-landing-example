import React from 'react';
import cocoa from './cocoa.gif';
import './App.css';
import styled from 'styled-components';
import {Header, Description, Footer, FAQ, Roadmap} from './components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  align-items: center;
  overflow-x: hidden;
`

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <Description />
        <Roadmap />
        <FAQ />
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default App;
