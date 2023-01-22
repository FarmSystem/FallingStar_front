import React, { useState } from "react";
import styled from "styled-components";
//리덕스
import {useSelector, useDispatch} from "react-redux";
import { addUserInfo } from '../../redux/store';
//모달
import Modal from '../../components/Modal/UserModal';


const Background = styled.body`
background-color: #DDDDDD;
padding-bottom: 100px;
min-height:100%
height: auto;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 200px 0 50px 0;
`;

const SignInContainer = styled.div`
  border: none;
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 450px;
  min-height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  label {
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 30px;
    color: #282828;
  }
  h3 {
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 25px;
    color: #585858;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
    background: none;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    width: 350px;
    height: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 40px;
    color: #585858;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.4);
  }
  .message {
    font-family: "JejuMyeongjo";
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 7px;
    color: #e88b00;
  }
`;

const SignInTextContainer = styled.div`
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 80%;
  line-height: 25px;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 100%
  height: 120px;
  margin: 12px;
`;

const StyledButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-size: 15px;
  font-weight: 900;
  line-height: 140%;
  text-align: center;

  color: #ffffff;
  background: #585858;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 7px;
  margin: 12px;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;


function SignIn() {

  //리덕스
  let a = useSelector((state) => { return state.users } )
  let b = useSelector((state) => { return state.login_user } )
  let dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);


  // 이메일 유효성 검사
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailRegExp.test(email)) {
      setIsEmail(false);
      setEmailMessage("이메일형식을 확인해주세요.");
    } else {
      setIsEmail(true);
      setEmailMessage(" ");
    }
  };

  // 비밀번호 유효성 검사
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(e.target.value)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };
  const CommunityButton = ({ typo, activated }) => {
    return (
      <StyledButton 
        style={{
          background: activated ? "#585858" : "#BFBFBF",
          cursor: activated ? "pointer" : "",
        }}
        onClick={()=>{CheckLogin()}}
      >
        {typo}
      </StyledButton>
    );
  };
  
  //로그인 확인
  const [Login, setLogin] = useState(false);
  const CheckLogin =()=>{
    a.map((tmp, i) =>{ 
      tmp.email === email ? tmp.password === password? 
      <>
      {setLogin(true)}
      {/* //현재 유저 정보 저장하기 */}
      {dispatch(addUserInfo({
        login: true,
        email: tmp.email,
        name: tmp.name,
        password: tmp.password,
        phone:tmp.phone,
        birth: tmp.birth
        }))
      }
      {console.log('현재유저' ,b)}

      </>
      
      :  <></>: <></>
    })    
    openModal();
  }
  //모달
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <Background>
      {console.log(a)}
      <Container>
        <SignInContainer>
          <h3 onClick={() => (window.location.href = "/")}>Falling Star</h3>

          <SignInTextContainer>
            <div>
              <label htmlFor="email">이메일 </label>
              <br />
              <input
                id="email"
                name="name"
                value={email}
                onChange={onChangeEmail}
                placeholder="이메일을 입력하세요"
              />
              <p className="message">{emailMessage}</p>
            </div>

            <div>
              <label htmlFor="password">비밀번호 </label> <br />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </SignInTextContainer>
          
          <ButtonContainer>
          <CommunityButton
              type="submit"
              typo="로그인"
              activated={
                isEmail}
            ></CommunityButton>
          </ButtonContainer>
          {Login == true ? <>
            <Modal open={modalOpen} close={closeModal} header="팝업 창">
            로그인 완료
            {setTimeout(()=>{window.location.href = '/';}, 2400)}
            </Modal>
          </>:<>
            <Modal open={modalOpen} close={closeModal} header="팝업 창">
              이메일 또는 비밀번호를 확인해주세요.
            </Modal>
          </>}
          
        </SignInContainer>

      </Container>
    </Background>
  );
}

export default SignIn;
