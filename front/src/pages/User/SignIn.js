import React, { useState } from "react";
import styled from "styled-components";

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
  padding: 0 0 8px 0;
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

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 이메일
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailRegExp.test(email)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  // 비밀번호
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

  return (
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
          <p className="message">{passwordMessage}</p>
        </div>
      </SignInTextContainer>
      <ButtonContainer>
        <StyledButton type="submit">로그인</StyledButton>
      </ButtonContainer>
    </SignInContainer>
  );
};

function SignIn() {
  return (
    <Background>
      <Container>
        <SignUpForm></SignUpForm>
      </Container>
    </Background>
  );
}

export default SignIn;
