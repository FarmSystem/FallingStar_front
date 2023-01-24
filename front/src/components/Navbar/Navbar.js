import React, {useState} from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TextsmsIcon from "@mui/icons-material/Textsms";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoTitle2 from "../../assets/img/LogoTitle.png";
//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUser, addUserInfo, LoginState} from '../../redux/store';
//모달
import Modal from '../Modal/UserModal';

// ㅇㅇ
const Wrapper = styled.div`
  position: absolute;
  left: 0;
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
  background: #1e1e1e;
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
  font-family: "JejuMyeongjo";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: #ffffff;
  cursor: pointer;
`;

const LogoDetailText = styled.div`
  padding: 2px 0 0 0;
  font-family: "JejuMyeongjo";
  font-style: normal;
  ont-weight: 400;
  font-size: 10px;
  color: white;
`;

const LogoDetail = styled.div`
  padding: 12px 5px 12px 12px;
  text-align: right;
  font-family: "JejuMyeongjo";
  font-style: normal;
  ont-weight: 400;
  font-size: 10px;
  color: white;
  cursor: pointer;
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
  font-family: "JejuMyeongjo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

//background: rgba(254, 254, 254, 0.5);
// ㅇㅇ
const NavContainer = styled.div`
  position: absolute;
  left: 0;
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
    font-family: "JejuMyeongjo";
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
  font-family: "JejuMyeongjo";
  cursor: pointer;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;

  :active {
    font-weight: 600;
    color: #1e1e1e;
  }
`;

const LogoTitle2 = styled.img`
  display: flex;
  padding: 13px 0 13px 0;
  width: 62px;
  height: 26px;
  align-item: center;
  cursor: pointer;
`;

const LoginedText = styled.div`
padding: 2px 0 0 0;
  height: 20px;
  font-family: "JejuMyeongjo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  cursor: pointer;
`

const Navbar = () => {
  //리덕스
  let a = useSelector((state) => { return state } )
  let dispatch = useDispatch()

  //모달
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    dispatch(LoginState(false));
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <LogoDetail onClick={() => (window.location.href = "./")}>
            <LogoDetailText>블록체인 유언장</LogoDetailText>
            <LogoDetailText>법률 커뮤니티</LogoDetailText>
          </LogoDetail>
          <LogoTitle onClick={() => {window.location.href = "./"; }}>
            별세
          </LogoTitle>
          <LogoTitle2
            onClick={() => (window.location.href = "./")}
            src={logoTitle2}
          />
        </Logo>
        {a.login_user.login == true ? <>
          {/* 로그인 했을때 */}
          <LogoMenu>
            <AccountCircleIcon />
            <LogoMenuText onClick={() => (window.location.href = "./Mypage")}>
              내 정보
            </LogoMenuText>
            <LogoMenuText>/</LogoMenuText>
            <LogoMenuText onClick={() => {openModal(); console.log(modalOpen)}}>
              로그아웃
            </LogoMenuText>
          </LogoMenu>
          

            
        </>:<>
          {/* 로그인 안했을때 */}
          <LogoMenu>
            <AccountCircleIcon />
            <LogoMenuText onClick={() => (window.location.href = "./SignIn")}>
              로그인
            </LogoMenuText>
            <LogoMenuText>/</LogoMenuText>
            <LogoMenuText onClick={() => (window.location.href = "./SignUp")}>
              회원가입
            </LogoMenuText>
          </LogoMenu>
        </>}
      
      </LogoContainer>

      <NavContainer>
        <Nav>
          <ul>
            <li onClick={() => (window.location.href = "/FallingStar_front/introduce")}>
              <HomeIcon />
              <MenuText>소개페이지</MenuText>
            </li>

            <li onClick={() => (window.location.href = "/FallingStar_front/WillWriting_notice")}>
              <ModeEditIcon />
              <MenuText>유언장 작성하기</MenuText>
            </li>
            <li onClick={() => (window.location.href = "/FallingStar_front/WillSearch")}>
              <DescriptionOutlinedIcon />
              <MenuText>유언장 찾기</MenuText>
            </li>
            <li onClick={() => (window.location.href = "/FallingStar_front/Lawyer")}>
              <ContactMailIcon />
              <MenuText>변호사 찾기</MenuText>
            </li>
            <li onClick={() => (window.location.href = "/FallingStar_front/Question")}>
              <TextsmsIcon />
              <MenuText>법률 게시판</MenuText>
            </li>
          </ul>
        </Nav>
      </NavContainer>
      <Modal open={modalOpen} close={closeModal} header="팝업 창">
            로그아웃 하시겠습니까?
      </Modal>
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
  );
};

export default Navbar;
