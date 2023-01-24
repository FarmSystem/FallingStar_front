import React, { useState, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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
font-size: 26px;
line-height: 38px;
padding-bottom: 10px;
text-align: center;
color: #000000;
`
const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
padding-bottom: 10px;
text-align: center;
color: grey;
`
const RecordButton = styled.button`
width: 100px;
background-color: white;
height: 100px;
border-radius: 200px;
padding: 0;
border: 2px solid #FFB762;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 20px;
font-size: 16px;
font-weight: 800;
`
const RecordOnButton = styled.button`
width: 100px;
background-color: white;
height: 100px;
border-radius: 200px;
padding: 0px;
border: 2px solid red;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 20px;

font-size: 16px;
font-weight: 800;
`
const RecordImg = styled.img`
width: 30px;
padding: 0;
margin-bottom: 5px;
`
const Play = styled.button`
padding: 10;
width: 100px;
height: 40px;
border-radius: 10px;
border:none;
background-color: orange;
font-size: 16px;
font-weight: 700;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
:disabled{
    background-color: gray;
}
// .blick{
//     animation: Shine 1s step-end infinite;
// }
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
background-image: url('../../assets/img/TextAreaImg.png');
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
// const Shine = styled.keyframes`
// 50% {
//     opacity: 0;
// }
// `
function WillWriting_recording() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    const click = false;
    const username = a.login_user.name;

    //현재 날짜 구하기
    let now = new Date();
    let year = now.getFullYear(); //년
    let month = now.getMonth()+1; //월
    let day = now.getDate(); //일

    //녹음
    const [stream, setStream] = useState();
    const [media, setMedia] = useState();
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState();
    const [analyser, setAnalyser] = useState();
    const [audioUrl, setAudioUrl] = useState();
    const [disabled, setDisabled] = useState(true); 
    // //타이머
    // const Hours = Timer.Hours;
    // const Minutes = Timer.Minutes;
    // const Seconds = Timer.Seconds;
    const onRecAudio = () => {

        setDisabled(true) // 😀😀😀
        
        // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
        const analyser = audioCtx.createScriptProcessor(0, 1, 1);
        setAnalyser(analyser);
    
        function makeSound(stream) {
          // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
            const source = audioCtx.createMediaStreamSource(stream);
            setSource(source);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
        }
        // 마이크 사용 권한 획득
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setStream(stream);
            setMedia(mediaRecorder);
            makeSound(stream);
    
            analyser.onaudioprocess = function (e) {
                // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
                if (e.playbackTime > 1000) {
                stream.getAudioTracks().forEach(function (track) {
                    track.stop();
                });
                mediaRecorder.stop();
                // 메서드가 호출 된 노드 연결 해제
                analyser.disconnect();
                audioCtx.createMediaStreamSource(stream).disconnect();
    
                mediaRecorder.ondataavailable = function (e) {
                    setAudioUrl(e.data);
                    setOnRec(true);
                };
                } else {
                setOnRec(false);
                }
            };
            });
    };
    
    // 사용자가 음성 녹음을 중지 했을 때
    const offRecAudio = () => {
        // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
        media.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
    };
    
    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
        track.stop();
    });
    
        // 미디어 캡처 중지
        media.stop();
    
        // 메서드가 호출 된 노드 연결 해제
        analyser.disconnect();
        source.disconnect();
        if (audioUrl) {
          URL.createObjectURL(audioUrl); // 출력된 링크에서 녹음된 오디오 확인 가능
        }
        
        // File 생성자를 사용해 파일로 변환
        const sound = new File([audioUrl], "soundBlob", {
            lastModified: new Date().getTime(),
            type: "audio",
        });
    
        // 😀😀😀
        setDisabled(false);
        console.log(sound); // File 정보 출력
    };
    
    const play = () => { 
        const audio = new Audio(URL.createObjectURL(audioUrl)); // 😀😀😀
        //파일로 저장
        const sound = new File([audioUrl], "soundBlob", 
        {lastModified: new Date().getTime()}, [audioUrl]);
        console.log(sound); 

        //formdata
        let fd = new FormData();
        fd.append("fname", sound) //파일 첨부

        //body:fd 로 서버에 전송하면 되는 듯
        audio.loop = false;
        audio.volume = 1;
        audio.play();
    };

    const audioSave = () => {

    };  
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
                    <br /><br />
                    <Text>작성된 유언장 내용을 확인해주세요.</Text>
                    <SmallText>작성해주신 유언장 작성 1,2,3,4단계의 내용을 기반을 작성된 유언장입니다. <br/> 
                    유언장 작성하기 5단계의 유언장 내용은 내 정보 페이지에서 확인하실 수 있습니다.</SmallText>
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

                        <br/><br/>작성일자 :  {year}년 {month}월 {day}일 
                    </WillBox>
                    <SmallText>유언장 내용 수정은 페이지 하단의 '이전으로' 버튼을 통해 수정이 가능합니다.</SmallText>
                    <br/> <br/> <br/> 
                    <div/>
                    <Text> 유언장 내용을 확인하셨다면,<br/> 유언장 내용을 읽으며 녹음을 진행해주세요. <br/></Text> 

                    
                    {/* 버튼 if문 */}
                    {onRec ==true ? <>
                        {/* 녹음진행 x */}
                        <WCss.SmallText>녹음 버튼을 클릭하시면 녹음이 진행됩니다. <br/> <br/> </WCss.SmallText>
                        <RecordButton onClick={onRec ? onRecAudio : offRecAudio}> 
                            <RecordImg src ={Record}/> <br/>녹음
                        </RecordButton>
                        <br/><br/>
                        <Play onClick={play} disabled={disabled}> 녹음 확인</Play>
                        <br/><br/><br/>

                    </>:<>
                        {/* 녹음진행 중 */}
                        <WCss.SmallText>녹음 중입니다..</WCss.SmallText>
                        <WCss.SmallText>녹음을 중지하려면 녹음버튼을 클릭하세요.</WCss.SmallText>
                        <RecordOnButton onClick={onRec ? onRecAudio : offRecAudio}> 
                            <RecordImg src ={Record}/><br/>중지
                        </RecordOnButton>
                        <br/><br/>
                        <Play onClick={play} disabled={disabled}> 녹음 확인</Play>
                        <br/><br/><br/>
                    </>}
                </WCss.Box>
                <WCss.ButtonContainer>
                    <WCss.PrevButton onClick={() => (window.location.href = './WillWriting_step5')}>
                        이전으로</WCss.PrevButton>
                    <WCss.NextButton 
                    onClick={() => { window.location.href = './WillWriting_opener';}}>
                        다음으로</WCss.NextButton>
                </WCss.ButtonContainer>
            </WCss.Container>

        </WCss.Background>
        
    )
}

export default WillWriting_recording
