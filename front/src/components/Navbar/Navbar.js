import React from 'react'

function Navbar() {
    return (
        <>
        내브바
        <div onClick={ ()=> (window.location.href='./introduce')}>소개페이지</div>
        <div onClick={ ()=> (window.location.href='./WillWriting_notice')}>유언장 작성하기</div>
        <div onClick={ ()=> (window.location.href='./WillSearch')}>유언장 찾기</div>
        <div onClick={ ()=> (window.location.href='./Lawyer')}>변호사 찾기</div>
        <div onClick={ ()=> (window.location.href='./Question')}>법률 게시판</div>
        </>
    )
}

export default Navbar
