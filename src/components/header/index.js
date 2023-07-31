import React from 'react'
import { Styled } from '../../styles'
import { ToggleTheme } from '../toggle-theme'

function NavBar({ pageName = 'pageName' }) {
    return (
        <nav>
            <ul>
                <li>{pageName}</li>
                <li>{pageName}</li>
                <li>{pageName}</li>
            </ul>
        </nav>
    )
}
export function Header() {
    return (
        <Styled.Header>
            <span>
                calculadora-da-hora_Logo
            </span>
            <nav>
                <ul>
                    <li>pageName</li>
                    <li>pageName</li>
                    <li>pageName</li>
                </ul>
            </nav>
            <div />
            <ToggleTheme />
        </Styled.Header>
    )
}

