import React from 'react'
import { Button } from '../button'
import logo from '../images/logo-da-dio.png'

import {
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Logo
} from './styles'



export const Header = () => {
  return (
    
    <Wrapper>
    <Container>

        <Row>
            <Logo src={logo}></Logo>
            
            

            
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>

        <Row>
            <MenuRight>Home</MenuRight>
            <Button title="Entrar"></Button>
            <Button title="Cadastrar"></Button>
        </Row>

    </Container>
        
    
</Wrapper>
  )
}


