import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2, Question3 } from '../../redux/store';

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
line-height: 24px;
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
width: 90%;
background: #F2F2F2;
border-radius: 10px;
`
const RecordText = styled.div`

`
const SubRecordText = styled.div`

`
function WillWriting_recording() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    const click = false;
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
                    <WillBox>

                    </WillBox>
                    <Text>녹음 버튼을 클릭하면 녹음이 시작됩니다. <br/><br/>
                    녹음 버튼을 클릭한 뒤,<br />아래 유언장 내용을 읽어주세요.</Text>
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
                    <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
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
