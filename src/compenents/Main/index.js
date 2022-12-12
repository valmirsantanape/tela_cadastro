import React from 'react'
import { MainContainer, TextContainer, Barra } from './styles'
import { Input } from '../input'

export default function Main() {
  return (
    <MainContainer>
      <Barra />
      <TextContainer>
      
      A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
      <Barra />
      </TextContainer>
      
      <TextContainer>
      <h3>
        Comece agora grátis
      </h3>
      <Input />
                    
      <p className='secundary'>Crie sua conta e make the change._</p>

      <p className='secundary'>Ao clicar em "criar minha conta grátis", declaro que aceito as <a href='#' rel='' target={'_blank'}>Políticas de Privacidade</a>  e os <a href='#' rel='' target={'_blank'}>Termos de Uso </a>da DIO.

      </p>
      </TextContainer>
      
    </MainContainer>
  )
}
