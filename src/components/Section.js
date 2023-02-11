import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Container>
            <Wrap>
                <Title>
                    Get More Visibility
                </Title>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </Content>
            </Wrap>

        </Container>
    )
}

export default Section

const Container = styled.div`
display:flex;

justify-content:space-around;
align-items:center;
width:341px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #557DA526;
border-radius: 5px;
opacity: 1;
height:192px;
@media  screen and (width<1120px){
    width:300px;
    
}

@media  screen and (width<800px){
    width:280px;
    
}`

const Wrap = styled.div`

`


const Title = styled.div`
width:150px;
text-align: left;
font: normal normal medium 22px/27px Helvetica Neue;
letter-spacing: 0px;
color: #43AFFF;
text-transform: uppercase;
opacity: 1;`

const Content = styled.div`
text-align:initial;
width:301px;
height:60px;
@media  screen and (width<1120px){
    width:280px;
    
}
@media  screen and (width<800px){
    width:240px;
    
}
`