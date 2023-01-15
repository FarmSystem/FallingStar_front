import React from 'react'
import styled from 'styled-components';

const Num = styled.div`
float: left;
margin: 2px;
padding: 2px;
`
const Name = styled.div`
margin: 2px;
padding: 2px;
width: 35%;
float: left;
text-align: left;
padding-left: 10px;
`
const Relationship = styled.div`
margin: 2px;
padding: 2px;
width: 20%;
float: left;
margin-left: 8px;
text-align: left;

`
const Phone = styled.div`
margin: 2px;
padding: 2px;
width: 20%;
float: left;
margin-left: 8px;

`

function Invite({num, name, relationship, phone}) {
    return (
        <>
        {num==0 ? 
        <>
        <Num>예시) </Num>
        <Name>{name} </Name>
        <Relationship>{relationship}</Relationship>
        <Phone>{phone}</Phone>
        </> : <>
        <Num>{num}</Num>
        <Name>{name} </Name>
        <Relationship>{relationship}</Relationship>
        <Phone>{phone}</Phone>
        </>
        }
        <br /><br /><br />
        </>
    )
}

export default Invite
