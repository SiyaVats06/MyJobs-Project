import React from 'react'
import styled from 'styled-components'

function Applicant() {
    return (
        <Container>
            <Wrap>
                <Heading>
                    <Title>Applicants for this job</Title>
                    <Close>X</Close>
                </Heading>

                <Content>
                    <TotalApplicant>0 Applicant</TotalApplicant>
                    <ApplicantDetail></ApplicantDetail>
                </Content>
            </Wrap>

        </Container>
    )
}

export default Applicant



const Container = styled.div`
height:900px;

display:flex;
justify-content:center;
background:#303F60;
align-items:center;`


const Wrap=styled.div`
width: 694px;
height: 731px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 30px 36px #557DA526;
border-radius: 20px;
opacity: 1;`

const Heading=styled.div``
const Title=styled.div``
const Close=styled.div``
const Content =styled.div``

const TotalApplicant=styled.div``
const ApplicantDetail =styled.div``
