import React from 'react'
import { Styled } from '../../styles'
import { ToggleTheme } from '../toggle-theme'

export function Header() {
    return (
        <Styled.Header>
            <span>
                calculadora-da-hora_Logo
            </span>
            <ul>
                <li>teste</li>
                <li>teste1</li>
                <li>teste2</li>
            </ul>
            <ToggleTheme />
        </Styled.Header>
    )
}

