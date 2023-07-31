import React from 'react'
import { WiDaySunny } from 'react-icons/wi';
import { Styled } from '../../styles';

function CustomButton({ customName = '', Icon, size, onClick = () => { } }) {
    return (
        <Styled.Button onClick={onClick}>
            {customName}
            {Icon ? <Icon size={size} /> : <></>}
        </Styled.Button>
    )
}
export function ToggleTheme() {
    return (
        <CustomButton
            Icon={WiDaySunny}
            size={22}
        >index</CustomButton>
    )
}

