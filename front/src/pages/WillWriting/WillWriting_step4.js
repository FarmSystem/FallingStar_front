import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Property } from '../../redux/store';
import axios from 'axios';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_step3.png';
import notice from '../../assets/img/notice.png';
import searchimg from '../../assets/img/step3img.png';


const BoxButton = styled.button`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

background: #636363;
border-radius: 7px;
border: none;
padding: 7px;
padding-left: 13px;
padding-right: 13px;
margin: 3px;
float: left;

&: hover{
    background: black; //버튼색
}
`
const BoxText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 17px;
line-height: 21px;
float: left;
color: #727272;
`
const SaveButton = styled.button`
background: #383838;
border-radius: 4px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 21px;

width: 100px;
display: inline-block;
padding: 5px;
margin-bottom: 30px;
color: #FFFFFF;
&: hover {
    background-color: black;
}
`

function WillWriting_step4() {
    //배열 만들기
    const [PropertyArray, setPropertyArray] = useState({ 
        house: 0,
        bond:0,
        patent: 0,
        car: 0
    });
    //인풋 값 저장변수 -> useState 사용하기..
    const [House, sethouse] = useState(0);
    const [Bond, setbond] = useState(0);
    const [Patent, setpatent] = useState(0);
    const [Car, setcar] = useState(0);

    //배열 값 바꾸는 함수 -> 이게 문제 
    const addProperty =()=>{
        setPropertyArray({house: House, bond: Bond, patent: Patent, car: Car});
    }

    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    return (
        <WCss.Background>
            {console.log(a)}
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                    <WCss.Title>상속관계정리서</WCss.Title>
                    <WCss.Line/>
                    <WCss.SmallText>민법상 유산으로 인정되는 재산목록을 정리해주세요.</WCss.SmallText>
                    <WCss.ButtonImg><WCss.Img2 src = {notice}/></WCss.ButtonImg>
                    <br />
                    <WCss.SmallBox>
                        <BoxText>재산의 시세를 정확히 알고 싶으신가요?</BoxText><br/><br/>
                        <BoxButton>중고차 시세</BoxButton>
                        <BoxButton>주택 시세</BoxButton>
                        <BoxButton>인터넷 등기소</BoxButton>
                        <BoxButton>상속인 금융 거래 조회</BoxButton>
                    </WCss.SmallBox>
                    <WCss.TableBox>
                        <WCss.TableTitle>등산</WCss.TableTitle>
                        <WCss.TableContent>항목 개수
                            <WCss.TableInput value = {House} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {sethouse(event.target.value); console.log(House)}}/>
                        </WCss.TableContent>
                        <WCss.TableTitle>채권 기타의 청구권</WCss.TableTitle>
                        <WCss.TableContent>항목 개수
                            <WCss.TableInput value = {Bond} type="text" placeholder="예시)1" 
                            onChange={(event)=> {setbond(event.target.value);}}/>
                        </WCss.TableContent>   
                        <WCss.TableTitle>특허권, 회원권 등의 권리</WCss.TableTitle>
                        <WCss.TableContent>항목 개수
                            <WCss.TableInput value = {Patent} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {setpatent(event.target.value);}}/>
                        </WCss.TableContent>   
                        <WCss.TableTitle>부동산 및 이에 준하는 권리와 자동차</WCss.TableTitle>
                        <WCss.TableContent>항목 개수
                            <WCss.TableInput value = {Car} type="text" placeholder="예시) 1" 
                            onChange={(event)=> {setcar(event.target.value);}}/>
                        </WCss.TableContent>                         
                    </WCss.TableBox>
                    <SaveButton onClick={()=>{addProperty()}}>저장하기</SaveButton>

                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_step3')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = '/WillWriting_step5';
                    addProperty();dispatch(Property(PropertyArray));console.log(PropertyArray)}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>
        </WCss.Background>
        
    )
}

export default WillWriting_step4