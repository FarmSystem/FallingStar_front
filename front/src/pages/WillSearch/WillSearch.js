import { useState, useRef } from "react";
import styled from "styled-components";
import searchLogo from "../../assets/img/SearchLogo.png";
import searchBarImg from "../../assets/img/SearchBarImg.png";

import willFindImg from "../../assets/img/WillFindImg.png";
// import ModalBasic from "../../components/Modal/ModalBasic";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <SearchBarImg src={searchBarImg} onClick={showModal} />
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
};

const ModalContainer = styled.div`
  z-index: 1;
  background: #525252;
  border: 1px solid #525252;
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 680px;
  height: 220px;

  input {
    border: none;
    outline: none;
    background: none;
    width: 300px;
    height: 30px;
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    color: #bcbcbc;
    border-bottom: 2px solid #cdcdcd;
  }
  input::placeholder {
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    color: #bcbcbc;
  }
`;

const ModalCloseContainer = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const ModalClose = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;

  display: flex;
  margin: 7px 12px 0 0;
  border: 1px solid #525252;

  background-color: #525252;
  color: #ffffff;
  cursor: pointer;
`;

// ---------------------------------------------------
const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  padding: 8px 0 0 0;
  width: 100%
  height: 120px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  font-weight: 900;
  line-height: 140%;
  text-align: center;

  color: #2d2d2d;

  border: 1px solid #ffffff;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 7px;
  margin: 12px;
  width: 90px;
  height: 35px;
  cursor: pointer;
`;

const TextInputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%
  height: 120px;
  margin: 10px;


  label {
    font-family: 'JejuMyeongjo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #FBFBFB;
  }
`;
// ---------------------------------------------------

const ModalBasic = (props) => {
  const { setModalOpen, id, title, content, writer } = props;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContainer>
      <ModalCloseContainer>
        <ModalClose onClick={closeModal}>닫기 X</ModalClose>
      </ModalCloseContainer>
      <TextInputContainer>
        <label>
          이름&nbsp; &nbsp;
          <input type="text" placeholder="이름을 입력해주세요."></input>
        </label>
        <br />
        <label>
          주민번호&nbsp;&nbsp;
          <input type="text" placeholder="주민번호를 입력해주세요."></input>
        </label>
      </TextInputContainer>
      <ButtonContainer>
        <Button>검색하기</Button>
      </ButtonContainer>
    </ModalContainer>
  );
};

const Background = styled.body`
background-color: #E7E5E0;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const SeacrhContainer = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const SearchLogo = styled.img`
  width: 400px;
`;

const SearchBarImg = styled.img`
  cursor: pointer;
  width: 680px;
`;

const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

const WillFindImg = styled.img`
  display: flex;
  width: 660px;
`;

const WillCountText = styled.div`
  z-index: 1;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

function WillSearch() {
  return (
    <Background>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <SearchLogo src={searchLogo} />
        <br />
        <br />
        <br />
        <SeacrhContainer>
          <Modal></Modal>
        </SeacrhContainer>
        <br />
        <br />
        <ImgContainer>
          <WillCountText>현재 개의 유언장이 보관되었습니다.</WillCountText>
          <br /> <br />
          <WillFindImg src={willFindImg} />
        </ImgContainer>
      </Container>
    </Background>
  );
}

export default WillSearch;
