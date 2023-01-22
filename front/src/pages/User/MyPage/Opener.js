import React from 'react'
import styled from "styled-components";
import * as WCss from '../../../styles/WillWritinCss';

//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUserInfo } from '../../../redux/store';


const Background = styled.body`
background-color: #FBF9F4;
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`;


const Title = styled.div`
font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 158%;

display: center;
align-items: center;
text-align: center;

color: #000000;
margin-bottom: 60px;
`
const Hello = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 158%;
display: center;
color: #000000;

margin: 60px;
`
const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 158%;
text-align: center;
color: #000000;
margin-bottom: 60px;
`
const Category = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 23px;
line-height: 158%;
color: orange;
text-align: center;
margin-bottom: 60px;
`

function Opener() {
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    return (
        <Background>
            <Title>나의 유언장 열람인</Title>
            <hr/>
            <Hello>{a.login_user.name}님의 유언장 열람인</Hello>

            
        
        </Background>
    )
}

export default Opener
