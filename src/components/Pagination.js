import React from 'react'
import styled from 'styled-components';

function Pagination({postPerPage,totalPosts,paginate}) {
    const pageNumbers= [];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <Nav>
        <PageNumber>
            {pageNumbers.map(number =>(
                <Li onClick={()=>paginate(number)} key={number}>
                <a  href='#' >{number}</a>
                </Li>
            ))}
        </PageNumber>
    </Nav>
  )
}

export default Pagination

const Nav=styled.div`
display:flex;
justify-content:center;
`

const PageNumber=styled.ul`
display:flex;
column-gap:2rem;
justify-content:center;
`

const Li=styled.li`
cursor:pointer;
 width: 30px;
    height: 30px;
    background: #43AFFF33 0% 0% no-repeat padding-box;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
     opacity: 1;

a {
    font: normal normal bold 13px/16px Helvetica Neue;
letter-spacing: 0px;
color: #303F60;
opacity: 1;
}`