import React from 'react'
import { Styled } from '../../../styles'
import { ToggleTheme } from '../toggle-theme/TogglethemeComponent'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Styled.Header>
            <span>
                calculadora-da-hora_Logo
            </span>
            <span id='teste'>
                <nav>
                    <ul>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/calculator'}> Calculadora</Link></li>
                        <li><Link to={'/about'}> Sobre</Link></li>
                    </ul>
                </nav>
                <div />
            </span>
            <ToggleTheme />
        </Styled.Header>
    )
}

