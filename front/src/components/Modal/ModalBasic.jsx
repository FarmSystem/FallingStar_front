import styled from "styled-components";

const ModalContainer = styled.div`
  z-index: 2;
  background: #282828;
  border: 1px solid #282828;
  border-radius: 10px;
  color: #ffffff;

  position: absolute;
  width: 791px;
  height: 272px;
  left: 360px;
  top: 335px;
`;

const ModalClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;

  background-color: #282828;
  border: 1px solid #282828;
  color: #ffffff;
  cursor: pointer;
`;

// ---------------------------------------------------
const ButtonContainer = styled.div`
  border: 1px solid yellow;
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 100%
  height: 120px;
`;

const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-size: 17px;
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
  width: 120px;
  height: 45px;
  cursor: pointer;
`;
// ---------------------------------------------------

export default function ModalBasic(props) {
  const { setModalOpen, id, title, content, writer } = props;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContainer>
      <ModalClose onClick={closeModal}>닫기 X</ModalClose>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label>
        이름 <input type="text"></input>
      </label>
      <ButtonContainer>
        <Button>검색하기</Button>
      </ButtonContainer>
    </ModalContainer>
  );
}
