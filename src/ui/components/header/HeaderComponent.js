import React from 'react'
import { Styled } from '../../../styles'
import { ToggleTheme } from '../toggle-theme/TogglethemeComponent'
import { Link } from 'react-router-dom';
import { usePath } from '../../../data/hooks/PathHook';

export function Header() {
    const { isCurrentPath } = usePath();
    console.log(isCurrentPath('/') ? 'sim' : 'nao');
    return (
        <Styled.Header>
            <span>
                calculadora-da-hora_Logo
            </span>
            <span>
                <nav>
                    <ul>
                        <li><Link to={'/'} className={isCurrentPath('/') ? 'current' : 'regular'}>Home</Link></li>
                        <li><Link to={'/calculator'} className={isCurrentPath('/calculator') ? 'current' : 'regular'}> Calculadora</Link></li>
                        <li><Link to={'/tip-calculator'} className={isCurrentPath('/tip-calculator') ? 'current' : 'regular'}> Tip calculator</Link></li>
                        <li><Link to={'/about'} className={isCurrentPath('/about') ? 'current' : 'regular'}> Sobre</Link></li>
                    </ul>
                </nav>
                <div />
            </span>
            <ToggleTheme />
        </Styled.Header>
    )
}

