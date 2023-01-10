import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logoTitle2 from '../../assets/img/LogoTitle.png';

// ㅇㅇ
const Wrapper = styled.div`
    position: absolute;
    padding: 0
    margin: 0
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
`;

// ㅇㅇ
const LogoContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #1E1E1E;  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: flex-end;
`;

const Logo = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
`;

const LogoTitle = styled.div`

    padding: 12px 0 12px 5px;
    width: 120x;
    font-family: 'JejuMyeongjo';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    color: #FFFFFF;
`;

const LogoDetailText = styled.div`
    padding: 2px 0 0 0;
    font-family: 'JejuMyeongjo';
    font-style: normal;
    ont-weight: 400;
    font-size: 10px;
    color: white;
`;

const LogoDetail = styled.div`
    padding: 12px 5px 12px 12px;
    text-align: right;
    font-family: 'JejuMyeongjo';
    font-style: normal;
    ont-weight: 400;
    font-size: 10px;
    color: white;
`;

const LogoMenu = styled.div`
    display: flex;
    justify-content: space-around; 
    padding: 12px;
    width: 180px;
    color: white;
`;

const LogoMenuText = styled.div`
    padding: 2px 0 0 0;
    height: 20px;
    font-family: 'JejuMyeongjo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: white;
    cursor: pointer;
`;

//background: rgba(254, 254, 254, 0.5);
// ㅇㅇ
const NavContainer = styled.div`
    position:absolute;
    top: 50px;
    width: 100%;
    height: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background: grey;
`;


const Nav = styled.div`
    ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
}
    
    li {
    display: flex;
    flex-direction: row;
    font-family: 'JejuMyeongjo';
    cursor: pointer;
    color: white;
    font-style: normal;
    font-weight: 400;
    text-align: center;
}
`;

const MenuText = styled.div`
    padding-top: 6px;
    padding-left: 7px;
    font-family: 'JejuMyeongjo';
    cursor: pointer;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`;

const LogoTitle2 = styled.img`
    display: flex;
    padding: 13px 0 13px 0;
    width: 62px;
    height: 26px;
    align-item: center;
`;

const Navbar = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <Logo>
                    <LogoDetail>
                        <LogoDetailText>블록체인 유언장</LogoDetailText>
                        <LogoDetailText>법률 커뮤니티</LogoDetailText>
                    </LogoDetail>
                    <LogoTitle>별세</LogoTitle>
                    <LogoTitle2 src={logoTitle2} />
                </Logo>

                <LogoMenu>
                    <AccountCircleIcon />
                    <LogoMenuText onClick={() => (window.location.href = './SignIn')}>
                        로그인</LogoMenuText>
                    <LogoMenuText>/</LogoMenuText>
                    <LogoMenuText onClick={() => (window.location.href = './SignUp')}>
                        회원가입</LogoMenuText>
                </LogoMenu>
            </LogoContainer>


            <NavContainer>
                <Nav>
                    <ul>
                        <li onClick={() => (window.location.href = './introduce')}>
                            <HomeIcon /><MenuText>소개페이지</MenuText>
                        </li>

                        <li onClick={() => (window.location.href = './WillWriting_notice')}>
                            <ModeEditIcon /><MenuText>유언장 작성하기</MenuText>
                        </li>
                        <li onClick={() => (window.location.href = './WillSearch')}>
                            <DescriptionOutlinedIcon />
                            <MenuText>유언장 찾기</MenuText>
                        </li>
                        <li onClick={() => (window.location.href = './Lawyer')}>
                            <ContactMailIcon />
                            <MenuText>변호사 찾기</MenuText>
                        </li>
                        <li onClick={() => (window.location.href = './Question')}>
                            <TextsmsIcon />
                            <MenuText>법률 게시판</MenuText>
                        </li>
                    </ul>
                </Nav>
            </NavContainer>
        </Wrapper>

        /*
        <>
            <Container>
                내브바
                <div onClick={() => (window.location.href = './introduce')}>소개페이지</div>
                <div onClick={() => (window.location.href = './WillWriting_notice')}>유언장 작성하기</div>
                <div onClick={() => (window.location.href = './WillSearch')}>유언장 찾기</div>
                <div onClick={() => (window.location.href = './Lawyer')}>변호사 찾기</div>
                <div onClick={() => (window.location.href = './Question')}>법률 게시판</div>
            </Container>
        </>
        */
    )
}

export default Navbar;
