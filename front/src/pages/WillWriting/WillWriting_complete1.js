import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typed from "react-typed"
import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2, Question3 } from '../../redux/store';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import blockcheinIcon from '../../assets/img/blockcheinIcon.png';
import check from '../../assets/img/check.png';

const Background = styled.body`
background: linear-gradient(170.32deg, #FFF2E3 7.81%, #E9EAEC 87.61%);
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`
const Text = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 42px;
text-align: center;

color: #000000;
display: inline-block;
`
const Text2 = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 42px;
text-align: center;

color: #CD832C;
display: inline-block;

`
const Typing = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 42px;
text-align: center;

color: #000000;
`

const Img2 = styled.img`
width: 100px;
margin: 20px;
`
const SubText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 34px;
text-align: center;

color: #4A4A4A;
`
const PointSubText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 28px;
text-align: center;
white-space: nowrap;
display: inline;
color: #E0AF00;
`

function WillWriting_complete1() {
    
    const content = "...ddddd";
    const [show, setShow] = useState(false);
    const wait = setTimeout(() => {
        setShow(true);
        clearTimeout(wait); //메모리를 위해 타이머 해제
    }, 4000) //3초
    return (
        <Background>
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <span> </span>
                {show==true? <>
                    <Typing>
                        <Text2>유언장 작성이 완료되었습니다.</Text2>                 
                    </Typing>
                    <br  />
                    <Img2 src={check}/>
                    <SubText>작성하신 <PointSubText>마이페이지</PointSubText>
                        에서 <br/>학인 및 수정하실 수 있습니다.
                    </SubText>
                </>:<>
                    <Typing>
                        <Text>블록체인 유언장을 생성합니다</Text>                 
                        <Typed strings={["..."]} typeSpeed={200} backSpeed={200} loop />
                    </Typing>
                    <br  />
                    <Img2 src={blockcheinIcon}/>
                    <SubText>작성된 유언장은 <PointSubText>블록체인 기술</PointSubText>
                        을 통해 <br/>타인에 의해 훼손되지 않고 안전하게 보관됩니다.
                    </SubText>
                </>}
                
            </WCss.Container>
        </Background>
        
    )
}

export default WillWriting_complete1
