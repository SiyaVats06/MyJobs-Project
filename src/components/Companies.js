import React from 'react'
import styled from 'styled-components'

function Companies() {
  return (
    <Container>
      <Wrap>


        <Title>Companies Who Trust Us</Title>
        <Content>
          <Row1>
            <Each><img src='./images/kanbaa.png' alt=''></img></Each>
            <Each><img src='./images/ideaaa.png' alt=''></img></Each>
            <Each><img src='./images/goldlinee.png' alt=''></img></Each>
            <Each><img src='./images/livaa.png' alt=''></img></Each>
          </Row1>

          <Row2>
            <Each><img src='./images/solayticc.png' alt=''></img></Each>
            <Each><img src='./images/lightingg.png' alt=''></img></Each>
            <Each><img src='./images/velocity-9@2x.png' alt=''></img></Each>
            <Each><img src='./images/ztos@2x.png' alt=''></img></Each>
          </Row2>


        </Content>
      </Wrap>

    </Container>
  )
}

export default Companies


const Container = styled.div`
display:flex;
height:748px;
padding:20px;
background: #EDF6FF 0% 0% no-repeat padding-box;

justify-content:center;
align-items:center;
padding-top:100px;
`
const Wrap = styled.div`
display:flex;
width: 1083px;

flex-direction:column;
row-gap:40px;
`

const Title = styled.div`
text-align:initial;

font: normal normal bold 22px/27px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
text-transform: capitalize;
`

const Each = styled.div`
img{
width:124px;
height:40px;
object-fit:cover;
}
`
const Content = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
row-gap:40px;`


const Row1=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between`


const Row2=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;

`