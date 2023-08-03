import React from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { LightTheme, Styled } from '../../../styles';
import { useThemeProvider } from '../../../data/contexts/theme-context';

function CustomButton({ customName = '', Icon, size, onClick = () => { } }) {
    return (
        <Styled.Button onClick={onClick}>
            {customName}
            {Icon ? <Icon size={size} /> : <></>}
        </Styled.Button>
    );
}
export function ToggleTheme() {
    const { toggleTheme, theme } = useThemeProvider();

    return (
        <CustomButton
            Icon={theme === LightTheme ? BsMoonFill : BsSun}
            size={22}
            onClick={toggleTheme}
        />
    );
}

