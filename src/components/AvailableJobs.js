import React from 'react'
import styled from 'styled-components'
import { UseUserContext } from '../contexthook'

function AvailableJobs({cityname,position,description}) {
  const {showApplicant, setShowApplicant} =UseUserContext()
  return (
    <Container>
        <Wrap>
           <JobTitle>{position}</JobTitle>
           <JobDescription>{description}</JobDescription>
           <Detail>
            <Image><img src='./images/location.svg' alt=''></img></Image>
            <CityName>{cityname}</CityName>
            <ApplicantDetail onClick={()=>{setShowApplicant(true)}}><div>View Applicants</div></ApplicantDetail>
           </Detail>

        </Wrap>
    </Container>
  )
}

export default AvailableJobs


const Container=styled.div`
display:flex;
justify-content:center;`

const Wrap=styled.div`
width: 260px;
padding:15px;
height: 162px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #557DA526;
border-radius: 5px;
opacity: 1;
display:flex;
flex-direction:column;
justify-content:space-evenly;
`
const JobTitle=styled.div`
width: 121px;
height: 20px;
text-align: left;
font: normal normal normal 14px/20px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;`




const JobDescription=styled.div`
width: 229px;
height: 64px;
text-align: left;
font: normal normal normal 14px/16px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 0.8;`


const Detail=styled.div`
display:flex;
justify-content:space-around;
align-items:center;`

const Image=styled.div``
const CityName=styled.div`
font: normal normal normal 14px/16px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 0.8;`


const ApplicantDetail=styled.div`
width: 125px;
cursor:pointer;
height: 32px;
background: #43AFFF33 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
display:flex;
justify-content:center;
align-items:center;
div{
    width: 95px;
height: 14px;
text-align: left;
font: normal normal normal 12px/14px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
text-transform: capitalize;
opacity: 1;
}`