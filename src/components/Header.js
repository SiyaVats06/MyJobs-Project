import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UseUserContext } from '../contexthook'

function Header() {
  const {username,loginState, setLoginState,setShowLogout}=UseUserContext();
  return (
    <Nav>
        <Logo><a href='/'><img src='./images/MyJobs.svg' alt=''></img></a></Logo>
      {loginState ?  <><Inside>
        <NameLogo><a href='/login'>{username}</a>  </NameLogo>
        <Downarrow onClick={()=>{setShowLogout(true)}}><img src='./images/downarrow.svg' alt=''></img></Downarrow>
      </Inside></>: <Login><a href ='/login'>{username}</a></Login>}

       
      
    </Nav>
  )
}

export default Header

const Nav=styled.nav`
position:fixed;
top:0;
left:0;
right:0;
z-index:10;
height:70px;
background: transparent linear-gradient(260deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 70px;
border-bottom: 1px solid #4D618E;
@media  screen and (width<750px){
  padding:0 50px;
    
}
@media  screen and (width<350px){
  padding:0 20px;
    
}
`



const Logo=styled.div`
width:82px;
height:26px;`

const Login=styled.div`
a {
  color:white;
  text-decoration:none;
}
width: 148px;
height: 46px;
background: #43AFFF33 0% 0% no-repeat padding-box;
border: 1px solid #43AFFF;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;
`
const Inside=styled.div`
display:flex;
column-gap:1rem;

`
const NameLogo=styled.div`
a {
  color:#303F60;
  width: 12px;
  text-transform:uppercase;
height: 21px;
text-align: center;
font: normal normal normal 18px/22px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 0.8;
  text-decoration:none;
}
width: 46px;
display:flex;
justify-content:center;
align-items:center;
height: 46px;
background: #D9EFFF 0% 0% no-repeat padding-box;
border-radius: 25px;
opacity: 1;
`

const Downarrow=styled.div`
display:flex;
align-items:center;

img {
font-weight:600;
color: #FFFFFF ;
opacity: 1;
}`