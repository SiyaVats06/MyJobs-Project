import React from 'react'
import styled from 'styled-components'
import { UseUserContext } from '../contexthook'

function Applicant() {
    const {showApplicant, setShowApplicant}=UseUserContext()
    return (
        <Container>
            <Wrap>
                <Heading>
                    <Title>Applicants for this job</Title>
                    <Close onClick={()=>{
                        setShowApplicant(false)
                    }}>X</Close>
                </Heading>

                <Content>
                    <TotalApplicant>Total 0 Applicants</TotalApplicant>
                    <ApplicantDetail>
                        <Data>
                            <Image><img src='./images/curri.png' alt=''></img></Image>
                            <ApplicantData>No applications available!</ApplicantData>
                        </Data>
                    </ApplicantDetail>
                </Content>
            </Wrap>

        </Container>
    )
}

export default Applicant



const Container = styled.div`
height:900px;
cursor:pointer;
display:flex;
justify-content:center;

align-items:center;`


const Wrap=styled.div`
display:flex;
flex-direction:column;
row-gap:20px;
width: 694px;
padding:30px 27px;
height: 731px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 30px 36px #557DA526;
border-radius: 20px;
opacity: 1;
@media  screen and (width<1150px){
    width: 600px;
padding:30px 27px;
height: 631px;
    
}
@media  screen and (width<715px){
    width: 500px;
padding:30px 27px;
height: 631px;
    
}
@media  screen and (width<515px){
    width: 400px;
padding:30px 27px;
height: 631px;
    
}
@media  screen and (width<415px){
    width: 290px;
padding:30px 27px;
height: 631px;
    
}
@media  screen and (width<300px){
    width: 270px;
padding:30px 27px;
height: 631px;
    
}
`

const Heading=styled.div`
display:flex;
justify-content:space-between;`



const Title=styled.div`
width: 192px;
height: 23px;
text-align: left;
font: normal normal bold 19px/24px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;`



const Close=styled.div`
width: 15px;
height: 15px;
font-weight:700;`



const Content =styled.div`
display:flex;
flex-direction:column;
row-gap:10px;
`

const TotalApplicant=styled.div`
text-align:initial;
font: normal normal medium 15px/17px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;`


const ApplicantDetail =styled.div`
widht:80%;
height: 598px;
background:#A9AFBC;
border-radius: 10px;
opacity: 0.2;
display:flex;
justify-content:center;
align-items:center;`

const Data=styled.div``
const Image=styled.div`
img {
    width: 85px;
height: 106px;
z-index:10000;
opacity:1;
}
`

const ApplicantData=styled.div`
text-align: center;
font: normal normal normal 20px/24px Helvetica Neue;
letter-spacing: 0px;
color: black;
opacity: 1;`

