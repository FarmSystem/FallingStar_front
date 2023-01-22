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
const WillBox = styled.div`
width: 60%;
border-radius: 10px;
border: 0.1px solid grey;
margin: 20px;
margin-bottom: 10px;
padding: 30px;
padding-left: 80px;
padding-right: 80px;
display: inline-block;
background-color:white;
font-family: 'JejuMyeongjo';
text-align: left;
line-height:24px;
font-weight: 100;

`

const Br = styled.div`
margin: 10px;
`
const P = styled.div`
font-family: 'JejuMyeongjo';
text-align: left;
line-height:24px;
color: #C57110;
white-space: nowrap;
display: inline;
`
const Edit = styled.button`
width: 150px;
height: 40px;
left: 516px;
top: 491px;
background: #C8B692;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight:900;
font-size: 15px;
line-height: 158%;
color: #FFFFFF;
border:none;
margin: 60px;

&: hover{
    background: black; //버튼색
}
`
function WillEdit() {
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    return (
        <Background>
            <Title>나의 블록체인 유언장 수정하기</Title>
            <hr/>
            <Hello>{a.login_user.name}님의 유언장</Hello>
            <WillBox>
                        {(a.login_user.birth).substr(0, 2)} 년 {(a.login_user.birth).substr(2, 2)} 월 {(a.login_user.birth).substr(4, 2)} 일생 <br />
                        유언자 {a.login_user.name}
                        <br />나는 다음과 같이 유언한다. <br/> 
                        <br/>1. 나는 <P>{a.will.question1}</P> 장례방식을 희망하고 <> </>
                        {a.will.question2.map((tmp, i)=>{
                            if(i ==0){
                                <></>
                            }else{
                                return (
                                    <P>
                                    {tmp.relationship} <> </>
                                    {tmp.name},<> </>
                                    </P> 
                                )
                            }
                        })} 
                        을 장례에 초대하길 희망한다.<br/>
                        장례가 끝나고 나는 <P>{a.will.question3}</P> 에 안치되길 바라며 
                        혹 나에게 연명치료가 권해진다면 <P>{a.will.question4 == true ? <> 연명치료를 원하고 </> : <> 연명치료를 원하지 않고. </>}</P>
                        나는 <P>{a.will.question5 == true ? <> 장기기증을 신청하였다. </> : <> 장기기증을 신청하지 않았다. </>}</P>

                        <Br/>2.  
                        재산의 사인증여 또는 유증에 관하여 재산
                        등산 <P>{a.will.property.house}채</P>, 
                        채권 기타의 청구권 <P>{a.will.property.bond}개</P>, 
                        권리 <P>{a.will.property.patent}개</P>, 
                        자동차 <P>{a.will.property.car}대</P>에
                        대하여 
                        직계비속 <P>{a.will.family.child}</P>, 
                        직계존속 <P>{a.will.family.parents}</P>,
                        형제, 자매<P>{a.will.family.sibile}</P>,
                        방계혈족<P>{a.will.family.spouse}</P>,
                        배우자 <P>{a.will.family.uncle} </P>
                        에게 민법적 상속 자격이 있음을 밝힌다.
                        
                        <Br/>3.
                        마지막으로, 유언집행자의 지정에 관하여 본 유언장 증여계약의 이행을 위하여 유언집행자로 
                        열람인을 지정하는 바이다.
                        <br/><br/>
                        이 사인증여는 나의 사망으로 인하여 효력이 발생함을 알린다.

                    </WillBox>
                    <Edit>수정하기</Edit>

                
        </Background>
    )
}

export default WillEdit
