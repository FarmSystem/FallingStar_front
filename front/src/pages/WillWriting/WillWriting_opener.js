import React, { useState } from 'react';
import styled from 'styled-components';

import InviteBox from '../../components/Invite/Invite';
import * as WCss from '../../styles/WillWritinCss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import { Question1, Question2, Question3 } from '../../redux/store';

//이미지 
import WillWritingTitle from '../../assets/img/WillWritingTitle.png';
import stepImg from '../../assets/img/WillWriting_opener.png';

function WillWriting_opener() {
    return (
        <WCss.Background>
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
                <WCss.Img src={stepImg}/>
                <WCss.Box>
                <WCss.ButtonContainer>
                <WCss.PrevButton onClick={() => (window.location.href = '/WillWriting_notice')}>
                    이전으로</WCss.PrevButton>
                <WCss.NextButton 
                onClick={() => { window.location.href = '/WillWriting_complete1';}}>
                    다음으로</WCss.NextButton>
            </WCss.ButtonContainer>
                </WCss.Box>
            </WCss.Container>

        </WCss.Background>
        
    )
}

export default WillWriting_opener
