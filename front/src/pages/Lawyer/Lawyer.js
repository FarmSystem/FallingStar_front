import React, { useState } from "react";
import styled from "styled-components";
import lawyerBackgroundImg from "../../assets/img/lawyerBackgroundImg.png";
import lawyerLogo from "../../assets/img/lawyerLogo.png";
import lawyerSearchBar from "../../assets/img/lawyerSearchBar.png";
import lawyerImg from "../../assets/img/lawyerImg.png";
import lawyerImg2 from "../../assets/img/lawyerImg2.png";
import lawyerImg3 from "../../assets/img/lawyerImg3.png";
import lawyerImg4 from "../../assets/img/lawyerImg4.png";
import searchSelectImg from "../../assets/img/SearchSelectImg.png";

import lawyerBarClickImg from "../../assets/img/lawyerBarClickImg.png";

const Background = styled.body`
background-color: #F5F5F5;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const LawyerBackgroundImg = styled.img`
  width: 100%;
  height: 400px;
  opacity: 0.2;
  margin: 98px 0 0 0;
`;

const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LawyerLogo = styled.img`
  width: 700px;
  z-index: 1;
  position: absolute;
  top: 200px;
`;

const LawyerSearchBar = styled.img`
  width: 550px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction column;
  height: auto;
  padding: 20px;
`;

const TextTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 42px;
  padding: 30px 0 10px 120px;

  margin: 10px;
`;

const LawyerImgContinaer = styled.div`
  display: flex;
  flex-direction row;
  height: auto;
  padding: 0 100px 0 100px;
  justify-content: space-around;
`;

const LawyerImg = styled.img`
  width: 280px;
  padding: 10px;
  :hover {
    filter: drop-shadow(0px 4px 4px #fbd038);
  }
  cursor: pointer;
`;

const SearchSelectImg = styled.img`
  width: 615px;
  height: 77px;
`;

// ★★★★★ 모달 시작 ===================================================

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <LawyerSearchBar src={lawyerSearchBar} onClick={showModal} />
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
};

const ModalContainer = styled.div`
  z-index: 1;
  background: #fffcf2;
  border: 1px solid #fffcf2;
  border-radius: 10px;
  color: #262626;
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
    color: #262626;
    border-bottom: 2px solid #cdcdcd;
  }
  input::placeholder {
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    color: #262626;
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
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;

  display: flex;
  margin: 7px 12px 0 0;
  border: 1px solid #fffcf2;

  background-color: #fffcf2;
  color: #262626;
  cursor: pointer;
`;

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
  font-weight: 500;
  line-height: 140%;
  text-align: center;

  color: #ffffff;

  background: #323232;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  border: 1px solid #323232;
  padding: 7px;
  margin: 12px;
  width: 115px;
  height: 40px;
  cursor: pointer;
`;

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
      <br />
      <SearchSelectImg src={searchSelectImg} />
      <ButtonContainer>
        <Button>검색하기</Button>
      </ButtonContainer>
    </ModalContainer>
  );
};

const SeacrhContainer = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  top: 320px;
`;

// ★★★★★ 모달 끝 ====================================================

// <LawyerSearchBar src={lawyerSearchBar} />

function Lawyer() {
  return (
    <Background>
      <LogoContainer>
        <LawyerLogo src={lawyerLogo} />
        <LawyerBackgroundImg src={lawyerBackgroundImg} />
        <SeacrhContainer>
          <Modal></Modal>
        </SeacrhContainer>
      </LogoContainer>
      <ContentContainer>
        <TextTitle>상속 관련 인기 변호사</TextTitle>
        <LawyerImgContinaer>
          <LawyerImg
            src={lawyerImg}
            onClick={() => (window.location.href = "./Lawyer_profile")}
          />
          <LawyerImg
            src={lawyerImg2}
            onClick={() => (window.location.href = "./Lawyer_profile2")}
          />
          <LawyerImg
            src={lawyerImg3}
            onClick={() => (window.location.href = "./Lawyer_profile4")}
          />
          <LawyerImg
            src={lawyerImg4}
            onClick={() => (window.location.href = "./Lawyer_profile3")}
          />
        </LawyerImgContinaer>
        <br />
        <br />
        <TextTitle>서울 지역 변호사</TextTitle>
        <LawyerImgContinaer>
          <LawyerImg src={lawyerImg} />
          <LawyerImg src={lawyerImg2} />
          <LawyerImg src={lawyerImg3} />
          <LawyerImg src={lawyerImg4} />
        </LawyerImgContinaer>
        <br />
        <br />
        <TextTitle>전체</TextTitle>
        <LawyerImgContinaer>
          <LawyerImg src={lawyerImg} />
          <LawyerImg src={lawyerImg2} />
          <LawyerImg src={lawyerImg3} />
          <LawyerImg src={lawyerImg4} />
        </LawyerImgContinaer>
        <LawyerImgContinaer>
          <LawyerImg src={lawyerImg} />
          <LawyerImg src={lawyerImg2} />
          <LawyerImg src={lawyerImg3} />
          <LawyerImg src={lawyerImg4} />
        </LawyerImgContinaer>
      </ContentContainer>
    </Background>
  );
}

export default Lawyer;
