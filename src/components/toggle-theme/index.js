import React from 'react'
import { WiDaySunny } from 'react-icons/wi';
import { Styled } from '../../styles';
import { useThemeProvider } from '../../contexts/theme-context';

function CustomButton({ customName = '', Icon, size, onClick = () => { } }) {
    return (
        <Styled.Button onClick={onClick}>
            {customName}
            {Icon ? <Icon size={size} /> : <></>}
        </Styled.Button>
    )
}
export function ToggleTheme() {
    const { toggleTheme } = useThemeProvider();

    return (
        <CustomButton
            Icon={WiDaySunny}
            size={22}
            onClick={toggleTheme}
        />
    )
}

