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
export const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 30px;
text-align: center;

color: #000000;
margin-top:30px;
`
export const Line = styled.hr`
border: 0.2px solid #000000;
width: 110px;

`