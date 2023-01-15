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

export const Background = styled.body`
background-color: #E9EAEC;
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`
function WillWriting_complete1() {
    return (
        <Background>
            <WCss.Container>
                <WCss.Img src={WillWritingTitle} />
\                
            </WCss.Container>

        </Background>
        
    )
}

export default WillWriting_complete1
