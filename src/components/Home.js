import React from 'react'
import styled from 'styled-components'
import Companies from './Companies'
import Detail from './Detail'
import Info from './Info'


function Home() {
    return (
        <Container>
       
           
            <Info/>
            <Detail />
           <Companies />

        </Container>
    )
}

export default Home


const Container = styled.div`
height:1212px;
position:relative;
display:flex;
flex-direction:column;
background: transparent linear-gradient(248deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box;
`




