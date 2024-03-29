import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//contextAPI
import { ColorContext } from "./context/ColorContext";

//페이지
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mainpage from "./pages/Mainpage"; //메인페이지
import Introduce from "./pages/Introduce"; //소개페이지
//유언장 검색
import WillSearch from "./pages/WillSearch/WillSearch"; //유언장검색 첫페이지
import WillSearch_find1 from "./pages/WillSearch/WillSearch_find1"; //유언장 검색결과 있을때 페이지
import WillSearch_find2 from "./pages/WillSearch/WillSearch_find2"; //유언장 검색결과 있을때 페이지
import WillSearch_nonefind from "./pages/WillSearch/WillSearch_nonefind"; //유언장 검색결과 없을때 페이지
import WillSearch_complete from "./pages/WillSearch/WillSearch_complete"; //유언장 검색에서 찾기누르면 페이지
//유언장 작성
import WillWriting_notice from "./pages/WillWriting/WillWriting_notice";
import WillWriting_step1 from "./pages/WillWriting/WillWriting_step1";
import WillWriting_step2 from "./pages/WillWriting/WillWriting_step2";
import WillWriting_step3 from "./pages/WillWriting/WillWriting_step3";
import WillWriting_step4 from "./pages/WillWriting/WillWriting_step4";
import WillWriting_step5 from "./pages/WillWriting/WillWriting_step5";
import WillWriting_recording from "./pages/WillWriting/WillWriting_recording";
import WillWriting_opener from "./pages/WillWriting/WillWriting_opener";
import WillWriting_complete1 from "./pages/WillWriting/WillWriting_complete1";
import WillWriting_complete2 from "./pages/WillWriting/WillWriting_complete2";
//변호사 찾기
import Lawyer from "./pages/Lawyer/Lawyer";
import Lawyer_profile from "./pages/Lawyer/Lawyer_profile";
import Lawyer_profile2 from "./pages/Lawyer/Lawyer_profile2";
import Lawyer_profile3 from "./pages/Lawyer/Lawyer_profile3";
import Lawyer_profile4 from "./pages/Lawyer/Lawyer_profile4";
//게시판
import Question from "./pages/Question/Question";
import Question_detail from "./pages/Question/Question_detail";
//로그인/로그아웃
import Mypage from "./pages/User/MyPage";
import SignIn from "./pages/User/SignIn";
import SignUp from "./pages/User/SignUp";
import OpenerAgree from "./pages/User/MyPage/OpenerAgree";
import Opener from "./pages/User/MyPage/Opener";
import WillBox from "./pages/User/MyPage/WillBox";
import WillEdit from "./pages/User/MyPage/WillEdit";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="WillSearch" element={<WillSearch />} />
          <Route path="WillSearch_find1" element={<WillSearch_find1 />} />
          <Route path="WillSearch_find2" element={<WillSearch_find2 />} />
          <Route path="WillSearch_nonefind" element={<WillSearch_nonefind />} />
          <Route path="WillSearch_complete" element={<WillSearch_complete />} />
          <Route path="WillWriting_notice" element={<WillWriting_notice />} />
          <Route path="WillWriting_step1" element={<WillWriting_step1 />} />
          <Route path="WillWriting_step2" element={<WillWriting_step2 />} />
          <Route path="WillWriting_step3" element={<WillWriting_step3 />} />
          <Route path="WillWriting_step4" element={<WillWriting_step4 />} />
          <Route path="WillWriting_step5" element={<WillWriting_step5 />} />
          <Route
            path="WillWriting_recording"
            element={<WillWriting_recording />}
          />
          <Route path="WillWriting_opener" element={<WillWriting_opener />} />
          <Route
            path="WillWriting_complete1"
            element={<WillWriting_complete1 />}
          />
          <Route
            path="WillWriting_complete2"
            element={<WillWriting_complete2 />}
          />
          <Route path="Lawyer" element={<Lawyer />} />
          <Route path="Lawyer_profile" element={<Lawyer_profile />} />
          <Route path="Lawyer_profile2" element={<Lawyer_profile2 />} />
          <Route path="Lawyer_profile3" element={<Lawyer_profile3 />} />
          <Route path="Lawyer_profile4" element={<Lawyer_profile4 />} />
          <Route path="Question" element={<Question />} />
          <Route path="Question_detail" element={<Question_detail />} />
          <Route path="Mypage" element={<Mypage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />

          <Route path="OpenerAgree" element={<OpenerAgree />} />
          <Route path="Opener" element={<Opener />} />
          <Route path="WillBox" element={<WillBox />} />
          <Route path="WIllEdit" element={<WillEdit />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
