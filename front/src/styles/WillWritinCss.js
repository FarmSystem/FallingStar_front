import styled from 'styled-components';

export const Background = styled.body`
background-color: #E9EAEC;
padding-bottom: 100px;
padding-top: 200px;
min-height:100%
height: auto;
text-align: center;
`
export const Container = styled.div`
text-align: center;
width: 100%;
`

export const Img = styled.img`
margin-top:4000;
width: 910px;
text-align: center;
padding-bottom: 100px;
`
export const Box = styled.div`
background-color: white;
margin: 20px;
border-radius: 10px;
padding: 10px;
width:90%;
display: inline-block;
`
export const Question = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 30px;
text-align: left;
margin: 15px;
margin-left: 30px;
color: #000000;
margin-top: 50px;
`
export const ButtonContainer = styled.div`
width: 100%;
height: 80px;
text-align: center;
`

export const NextButton = styled.button`
width: 170px;
height: 50px;
background: #000000;
border-radius: 6px;
border: none;

color: white;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 17px;
text-align: center;
margin: 15px;

&: hover{
    background: #E88B00; //버튼색
}
`
export const PrevButton = styled.button`
width: 170px;
height: 50px;
border-radius: 6px;

color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 17px;
text-align: center;
margin: 15px;

&: hover{
    background: #E88B00; //버튼색
    color: white;
    border: none;
}
`


//step3,4,5

//제목
export const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 30px;
text-align: center;

color: #000000;
margin-top:30px;
`
export const Line = styled.hr`
border: 0.2px solid #000000;
width: 180px;

`

export const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 21px;
text-align: center;

color: #727272;
`
export const Img2 = styled.img`
width: 120px;
margin:0;
`
export const ButtonImg = styled.button`
border: none;
background-color: white;
width: 120px;
height:30px;
margin: 10px;
padding:0;
border-radius: 4px;

margin-bottom: 30px;
&: hover{
    background: black; //버튼색
}
`
//시세 박스
export const SmallBox = styled.div`
width: 80%;
background-color: #F8F8F8;
border-radius: 10px;
display: inline-block;
padding: 20px;
padding-left: 40px;
margin-bottom: 30px;
`

//표
export const TableBox = styled.div`
width: 90%;
margin-left: 70px;
display: inline-block;
padding-bottom: 40px;
`
export const TableTitle = styled.div`
background: #D8D8D8;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 27px;
color: #000000;

width: 240px;
height: 26px;
padding: 6px;
float: left;

border-top: 0.2px solid;
border-bottom: 0.2px solid;
`
export const TableContent = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 21px;
color: #000000;

width: 64%;
height:26px;
padding: 6px;
float: left;

border-top: 0.2px solid;
border-bottom: 0.2px solid;
text-align: left;
padding-left: 20px;
`
export const TableInput = styled.input`
margin: 1px;
margin-left: 13px;
border: 0.1px solid;
padding: 4px;
`