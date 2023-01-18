import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { add } from '../../redux/store';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_recording.png';
import notice from '../../assets/img/notice.png';
import Record from '../../assets/img/RecordButton.png';


const Text = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 30px;
padding-bottom: 10px;
text-align: center;
color: #000000;
`
const RecordButton = styled.button`
width: 100px;
height: 100px;
border-radius: 200px;
padding: 0;
border: 2px solid #FFB762;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


`
const RecordImg = styled.img`
width: 100px;
padding: 0;
`
const WillBox = styled.div`
width: 80%;
background: #EDEAE0;
border-radius: 10px;
margin: 20px;
margin-bottom: 40px;
padding: 20px;
padding-left: 40px;
padding-right: 40px;
display: inline-block;

text-align: left;
line-height:24px;
`
const RecordText = styled.div`

`
const SubRecordText = styled.div`

`
const Br = styled.div`
margin: 10px;
`
function WillWriting_recording() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    const click = false;

    //현재 날짜 구하기
    let now = new Date();
    let year = now.getFullYear(); //년
    let month = now.getMonth()+1; //월
    let day = now.getDate(); //일

    return (
        <WCss.Background>
            {console.log(a)}
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                    <WCss.Title>녹음하기</WCss.Title>
                    <WCss.Line/>
                    <WCss.SmallText>법적효력이 있는 유언장을 저장하기 위해 <br/>작성해주신 유언장 내용을 바탕으로 녹음을 진행합니다.</WCss.SmallText>
                    <WCss.ButtonImg><WCss.Img2 src = {notice}/></WCss.ButtonImg>
                    <br />
                    <Text>작성된 유언장 내용을 확인해주세요.</Text>
                    <WCss.SmallText>작성해주신 유언장 작성 1,2,3,4단계의 내용을 기반을 작성된 유언장입니다. <br/> 
                    유언장 작성하기 5단계의 내용은 마이페이지 유언장 보관함에서 확인하실 수 있습니다.</WCss.SmallText>
                    <WillBox>
                        {(a.login_user.birth).substr(0, 2)} 년 {(a.login_user.birth).substr(2, 2)} 월 {(a.login_user.birth).substr(4, 2)} 일생 <br />
                        유언자 {a.login_user.name}
                        <br />나는 다음과 같이 유언한다. <br/>
                        <br/>1. 나는 {a.will.question1} 장례방식을 희망하고 <> </>
                        {a.will.question2.map((tmp)=>{
                            return (
                                <>
                                {tmp.relationship} <> </>
                                {tmp.name},<> </>
                                </> 
                            )
                        })} 
                        을 장례에 초대하길 희망한다.<br/>
                        장례가 끝나고 나는 {a.will.quesion3} 에 안치되길 바라며 
                        혹 나에게 연명치료가 권해진다면 {a.will.question4 == true ? <> 연명치료를 원하고 </> : <> 연명치료를 원하지 않고. </>}
                        나는 {a.will.question5 == true ? <> 장기기증을 신청하였다. </> : <> 장기기증을 신청하지 않았다. </>}

                        <Br/>2.  
                        재산의 사인증여 또는 유증에 관하여 재산
                        등산 {a.will.property.house}채, 
                        채권 기타의 청구권 {a.will.property.bond}개, 
                        권리 {a.will.property.patent}개, 
                        자동차 {a.will.property.car}대에
                        대하여 
                        직계비속 {a.will.family.child}, 
                        직계존속 {a.will.family.parents},
                        형제, 자매{a.will.family.sibile},
                        방계혈족{a.will.family.spouse},
                        배우자 {a.will.family.uncle} 
                        에게 민법적 상속 자격이 있음을 밝힌다.
                        
                        <Br/>3.
                        마지막으로, 유언집행자의 지정에 관하여 본 유언장 증여계약의 이행을 위하여 유언집행자로 
                        열람인을 지정하는 바이다.
                        <br/><br/>
                        이 사인증여는 나의 사망으로 인하여 효력이 발생함을 알린다.

                        <br/><br/>작성일자 :  {year}년 {month}월 {day}일 
                    </WillBox>
                    <div/>
                    <Text> 유언장 내용을 확인하셨다면,<br/> 유언장 내용을 읽으며 녹음을 진행해주세요. <br/></Text> 
                    <WCss.SmallText>유언장 내용 수정은 페이지 하단의 '이전으로' 버튼을 통해 수정이 가능합니다.</WCss.SmallText>
                    <br/> <br/> 
                    <Text> 아래 녹음 버튼을 클릭하시면 녹음이 진행됩니다. </Text>
                    {/* 버튼 if문 */}
                    {click==true ? <>
                        <RecordButton><RecordImg src ={Record}/></RecordButton>
                        {/* 녹음진행 프로그레스 바 */}
                        <RecordText>녹음 중입니다..</RecordText>
                        <SubRecordText>녹음을 중지하려면 버튼을 클릭하세요.</SubRecordText>
                    </>:<>
                        <RecordButton><RecordImg src ={Record}/></RecordButton>

                    </>}
                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_step5')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = '/WillWriting_opener';}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>

        </WCss.Background>
        
    )
}

export default WillWriting_recording
