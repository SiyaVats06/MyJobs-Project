import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Companies from './Companies'

function Detail() {
    return (
        <Container>
        <Wrap>
        <WhyUS>
                <Title>Why US</Title>



                <Content>
                    <Section />
                    <Section />
                    <Section />

                </Content>

            </WhyUS>
        </Wrap>
           
            
        </Container>
    )
}

export default Detail

const Container = styled.div`

height:748px;
background: #EDF6FF 0% 0% no-repeat padding-box;
display:flex;
flex-direction:column;
justify-content:center;
padding:7%;


`
const Wrap=styled.div`
display:flex;
justify-content:center;
align-items:center;
`


const WhyUS = styled.div`
width: 1083px;

display:flex;

flex-direction:column;
justify-content:space-between;


`

const Title = styled.div`
text-align:initial;
font: normal normal medium 22px/27px Helvetica Neue;
height:66px;
@media  screen and (width<900px){
    text-align:center;
    
}
`

const Content = styled.div`

display:flex;

justify-content:space-between;
@media  screen and (width<900px){
    flex-direction:column;
    align-items:center;
    row-gap:18px;
    
}

`