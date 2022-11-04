import React from 'react'
import { Container } from './styles'
import Logo from '../../../src/assets/images/logo.png'



export const Header = () => {
    return (
        <Container>
            <div className={'top'}>
                <span>Desenvolvedores</span>
                <span>
                    <img src={Logo} alt="Logo" />
                </span>
                <span>
                    <a href="http://localhost:3000/cadastro" title='Cadastrar meu Perfil'>Cadastrar meu Perfil</a>
                </span>
            </div>
        </Container>
    );
};