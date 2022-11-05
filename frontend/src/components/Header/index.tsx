import React from 'react'
import { Container } from './styles'
import Logo from '../../../src/assets/images/logo.png'



export const Header = () => {
    return (
        <Container>
            <div className={'top'}>
                <span className='dev'>Desenvolvedores</span>
                <span className='logo'>
                    <img src={Logo} alt="Logo" />
                </span>
                <span className='register'>
                    <a href="http://localhost:3000/cadastro" title='Cadastrar meu Perfil'>Cadastrar meu Perfil</a>
                </span>
            </div>
            <h1>Encontre os <span>Melhores <br /> Desenvolvedores do Mundo!</span></h1>
        </Container>
    );
};