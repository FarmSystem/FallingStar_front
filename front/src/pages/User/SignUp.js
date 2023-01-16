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

const SignUpContainer = styled.div`
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

const SignUpTextContainer = styled.div`
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
  padding: 0 0 10px 0;
`;

const StyledButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-size: 15px;
  font-weight: 900;
  line-height: 140%;
  text-align: center;

  color: #ffffff;

  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 7px;
  margin: 12px;
  width: 100px;
  height: 40px;
`;

const CommunityButton = ({ typo, activated }) => {
  return (
    <StyledButton
      style={{
        background: activated ? "#585858" : "#BFBFBF",
        cursor: activated ? "pointer" : "",
      }}
    >
      {typo}
    </StyledButton>
  );
};

// 1.이메일, 2.비밀번호, 3.이름, 4.생일, 5.성별, 6.전화번호
const SignUpForm = () => {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  // const [gender, setGender] = useState("남자");
  const [phone, setPhone] = useState("");

  // 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 이메일
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailRegExp.test(email)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("사용가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  // 이름
  const onChangeName = (e) => {
    setName(e.target.value);

    if (e.target.value.length >= 1) {
      setNameMessage("이름이 입력되었습니다.");
      setIsName(true);
    } else {
      setNameMessage("이름을 입력해주세요.");
      setIsName(false);
    }
  };

  // 비밀번호
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(e.target.value)) {
      setPasswordMessage("비밀번호 형식이 올바르지 않습니다.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  // 비밀번호 확인
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    }
  };

  // 전화번호
  const onChangePhone = (e) => {
    setPhone(e.target.value);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(e.target.value)) {
      setPhoneMessage("번호는 숫자만 입력해주세요.");
      setIsPhone(false);
    } else {
      setPhoneMessage("번호가 입력되었습니다.");
      setIsPhone(true);
    }
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
    const birthRegExp = /^([0123456789])([0-9]{5,})$/;

    if (!birthRegExp.test(e.target.value)) {
      setBirthMessage("생년월일은 6자리 숫자로 입력해주세요.");
      setIsBirth(false);
    } else {
      setBirthMessage("생년월일이 입력되었습니다.");
      setIsBirth(true);
    }
  };

  return (
    <SignUpContainer>
      <h3 onClick={() => (window.location.href = "/")}>Falling Star</h3>
      <SignUpTextContainer>
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
          <label htmlFor="name">이름 </label> <br />
          <input
            id="name"
            name="name"
            value={name}
            onChange={onChangeName}
            placeholder="이름을 입력하세요"
          />
          <p className="message">{nameMessage}</p>
        </div>

        <div>
          <label htmlFor="password">비밀번호 </label> <br />
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="영문자, 숫자, 특수문자를 포함하여 8자리 이상 입력하세요"
          />
          <p className="message">{passwordMessage}</p>
        </div>

        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인 </label> <br />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호 확인"
          />
          <p className="message">{passwordConfirmMessage}</p>
        </div>

        <div>
          <label htmlFor="phone">전화번호 </label> <br />
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={onChangePhone}
            placeholder="번호를 입력하세요"
          />
          <p className="message">{phoneMessage}</p>
        </div>

        <div>
          <label htmlFor="birth">생일 </label> <br />
          <input
            id="birth"
            name="birth"
            value={birth}
            onChange={onChangeBirth}
            placeholder="6자리 숫자로 입력하세요"
          />
          <p className="message">{birthMessage}</p>
        </div>
      </SignUpTextContainer>
      <ButtonContainer>
        <CommunityButton
          type="submit"
          typo="회원가입"
          activated={
            isEmail &&
            isPassword &&
            isPasswordConfirm &&
            isname &&
            isBirth &&
            isPhone
          }
        ></CommunityButton>
      </ButtonContainer>
    </SignUpContainer>
  );
};

export default function SignUp() {
  return (
    <Background>
      <Container>
        <SignUpForm></SignUpForm>
      </Container>
    </Background>
  );
}
