import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
      <Main>
        <Content>
          <Heading>Welcome to My<Span>Jobs</Span></Heading>
          <Button><a href='/login'>Get Started</a></Button>
        </Content>
 
      </Main>
      <InfoImage><img src='./images/homeimage.png'></img></InfoImage>
    </Container>
  )
}

export default Info

const Container = styled.div`
height:464px;
position:relative;`



const Main = styled.div`

display:flex;

justify-content:flex-start;
padding:160px 15% 74px;`

const Content = styled.div`
display:flex;
flex-direction:column;
row-gap:40px`


const Heading = styled.div`
height:144px;
width:334px;

font: normal normal normal 60px/74px Helvetica Neue;
color:#FFFFFF;
text-align:left;
@media screen and (width<=500px){
  width:234px;
  font: normal normal normal 40px/54px Helvetica Neue;
}
`

const Span = styled.span`
color:#43AFFF`

const Button = styled.div`
width:148px;
height:46px;
background: #43AFFF 0% 0% no-repeat padding-box;
border: 1px solid #43AFFF;
border-radius: 5px;
opacity: 1;
display:flex;
justify-content:center;
align-items:center;
font: normal normal bold 16px/19px Helvetica Neue;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;`


const InfoImage=styled.div`
position:absolute;
top: 37%;;
left: 44%;
img{
  width: 622px;
height: 395px;
}
@media  screen and (width<1100px){
  img{
  width: 522px;
height: 395px;
}
}
@media  screen and (width<900px){
 display:none;
}
`