import React,{useState} from 'react'
import styled from 'styled-components'
import { UseUserContext } from '../contexthook'
import { useNavigate } from 'react-router-dom';
import AvailableJobs from './AvailableJobs';
import data from '../Jobdata';
import Pagination from './Pagination';

function PostedJobs() {
    const navigate=useNavigate();
    const{setUsername,showLogout,setLoginState}=UseUserContext();
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)


   function handleLogOut(){
        setUsername("LOGIN");
        navigate("/");
        setLoginState(false )
   }
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentPosts =data.slice(indexOfFirstPost,indexOfLastPost)
  console.log(currentPosts,"curr")

  const paginate =pageNumber=>setCurrentPage(pageNumber)

    return (
        <Container>
            <Menu>
                <HomeImage>
                    <img src='./images/homeicon.svg' alt=''></img>
                    <div><a href='/'>HOME</a></div>
                </HomeImage>
                <Title>Jobs posted by you</Title>
                <LogOut toShow={showLogout} onClick={handleLogOut}>LOGOUT</LogOut>
            </Menu>
            <Content>
                <JobData>
                {currentPosts.map((each)=>{

                    return <AvailableJobs 
                        cityname={each.city}
                        position={each.position}
                        description={each.description}
                        paginate={paginate}
                    />
                })}
              
                    {/* <Image> <img src='./images/writing.svg' alt=''></img> </Image>
                    <Data>Your posted jobs will show here!</Data>
                    <Button><button>Post a Job</button></Button> */}
                </JobData>
               <Pagination  postPerPage={postPerPage} totalPosts={data.length} paginate={paginate}/>
            </Content>
           

        </Container>
    )
}

export default PostedJobs

const Container = styled.div`
position:relative;

background: #EDF6FF 0% 0% no-repeat padding-box;
`

const Menu = styled.div`
padding-top:83px;
padding-left:12.3%;

display:flex;
flex-direction:column;
row-gap:24px;
height:210px;
background: transparent linear-gradient(260deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box;
`

const HomeImage = styled.div`
color:white;
display:flex;

img{
    color:white;
    widht:4.98;
    height:4.98;
}
column-gap:.4rem`

const LogOut=styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:80px;
width: 112px;
height: 47px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: ${props=>`${props.toShow ?'1':'0'}`};
right:4rem;
@media  screen and (width<750px){
    width: 82px;
    right:3rem;
    
}
@media  screen and (width<750px){
  
    height: 37px;
    width: 70px;
    right:2rem;
    
}`


const Title = styled.div`
color:white;
width: 201px;
height: 26px;
text-align:initial;`

const Content=styled.div`

display:flex;
z-index:10000;
margin-top:-40px;
align-items:center;
flex-direction:column;
row-gap:40px;
`


const JobData=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-column-gap:18px;
grid-row-gap:45px;
z-index:10000;
@media  screen and (width<1150px){
    grid-template-columns:repeat(3,1fr);
    
}
@media  screen and (width<900px){
    grid-template-columns:repeat(2,1fr);
    
}
@media  screen and (width<600px){
    grid-template-columns:repeat(1,1fr);
    
}
`

const Image=styled.div`
img{
    width: 106px;
height: 106px;
opacity: 0.5;
}`


const Data=styled.div`
width: 288px;
height: 23px;
text-align: center;
font: normal normal normal 20px/24px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 0.8;`



const Button=styled.div`
button {
    width: 148px;
height: 46px;
background: #43AFFF 0% 0% no-repeat padding-box;
border: 1px solid #43AFFF;
border-radius: 5px;
opacity: 1;
color:white;
}`
