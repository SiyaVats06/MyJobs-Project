import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { UseUserContext } from '../contexthook'
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

function Login() {
const {setUsername,setLoginState} =UseUserContext();
const initailValues={email:"",password:""}
const [formvalue, setFormvalue] = useState(initailValues)
const [Errors, setErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false)

const navigate=useNavigate();


const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormvalue({...formvalue,[name]:value})
}

const handleSubmit= async (e)=>{
e.preventDefault();
setErrors(validate(formvalue));
setIsSubmit(true)

}
useEffect(()=>{
  if(Object.keys(Errors).length===0 && isSubmit){
    setUsername((formvalue.email).slice(0,1));
    setLoginState(true)
    navigate("/postedjobs")
  }
},[Errors])


const validate=(value)=>{
   const error={};
   var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(!value.email){
    error.email="Email is required"
   }else if(!regex.test(value.email)){
    error.email="This is not a valid email"
   }
   if(!value.password){
    error.password="Password is required"
   }else if(value.password.length < 4){
    error.password="Password should be more than 4 digits"
   }
   return error
}

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>

        <EachInput>
          <Label>Email Address</Label>
          <Input><input  onChange={handleChange} value={formvalue.email} type="email" name='email'   placeholder="Enter your email"></input></Input>
          <Error>{Errors.email}</Error>
        </EachInput>

        <EachInput>
          <Label>Password</Label>
          <Input><input  onChange={handleChange} type="password" name='password' placeholder="Enter your Password"></input></Input>
          <Error>{Errors.password}</Error>
        </EachInput>

        <Submit onClick={handleSubmit}><button type='submit'>Login</button></Submit>

      </LoginForm>
    </Container>
  )
}

export default Login


const Container = styled.div`
height:100vh;
background:#303F60;
display:flex;
padding-top:160px;
justify-content:center;
`

const LoginForm = styled.div`
padding-top:30px;
width: 557px;
height: 427px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 30px 36px #557DA526;
border-radius: 20px;
opacity: 1;
display:flex;
flex-direction:column;
row-gap:23px;
@media screen and (width<=600px){
  width: 350px;
}
@media screen and (width<=380px){
  width: 300px;
}
@media screen and (width<=300px){
  width: 26px;
}`

const Title = styled.div`
text-align:initial;
width: 57px;
height: 26px;
margin-left:10%;
font: normal bold medium 22px/27px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;
`


const EachInput = styled.div`
display:flex;
flex-direction:column;
row-gap:8px;
`




const Label = styled.div`
text-align:initial;
margin-left:10%;
font: normal bold normal 14px/16px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;`


const Input = styled.div`
input{
  width:80%;
  height:46px;
  background: #E8E8E833 0% 0% no-repeat padding-box;
border: 1px solid #43AFFF;
border-radius: 5px;
opacity: 1;
padding:17px;
}
`
const Error=styled.div`
color:red;
width:90%;
font: normal normal normal 12px/14px Helvetica Neue;
letter-spacing: 0px;
color: #FF0000;
opacity: 0.8;
display:flex;
justify-content:flex-end;`

const Submit = styled.div`
display:flex;
justify-content:center;
align-items:center;
button{
  width: 148px;
height: 46px;
background: #43AFFF 0% 0% no-repeat padding-box;
border: 1px solid #43AFFF;
border-radius: 5px;
opacity: 1;
color:white;
}`