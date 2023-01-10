import React from 'react'
import styled from 'styled-components';

import willWritingStep from '../../assets/img/WillWritingStep.png';
import explainText from '../../assets/img/ExplainText.png';

const Background = styled.div`
    background: #E9EAEC;  
    width: 100%;   
    height: 100vh;
    position: fixed;
    z-index: -1;
`;

const Container = styled.div`
border: 1px solid purple;

    display: flex;
    flex-direction: column;
`;

/*

display: block;
margin-left: auto;
margin-right: auto;

*/
const ExplainText = styled.img`
border: 1px solid green;

position: absolute;
top: 550px;
left: 45%;

`;

const WillWritingStep = styled.img`
border: 1px solid red;

display: block;
margin-left: auto;
margin-right: auto;
`;

const WillWriting_notice = () => {
    return (
        <Background>
            <ExplainText src={explainText} />
            <WillWritingStep src={willWritingStep} />
        </Background >
    )
}

export default WillWriting_notice;