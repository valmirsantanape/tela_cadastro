import React from 'react'
import { Barra, TextContainer } from '../compenents/Main/styles'
import { FormContainer, InputForm } from './styles'
import { Button } from '../compenents/button'

export const Form = (placeholder) => {
  return (<>
    
    <FormContainer>
        <TextContainer>
        <Barra />
            <h3>Comece agora grátis</h3>
            <p>Crie sua conta e make the change._</p>
        </TextContainer>

        <InputForm placeholder={'Nome completo'}/>
        <InputForm placeholder={'Seu melhor @e-mail'}/>
        <InputForm placeholder={'Celular ex: (11) 96123 4567'}/>
        <InputForm placeholder={"Senha"}/>
        <Button variant={'secundary'} title={'CRIAR MINHA CONTA GRATIS'}/>

    </FormContainer>
    
    </>)

}
