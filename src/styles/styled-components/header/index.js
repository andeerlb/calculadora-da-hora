import { styled } from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-self: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryBg};
    border-bottom: solid 1px ${props => props.theme.colors.softGray};
    height: 70px;
    position: relative;

    >span{
        display: block;
    }

    nav{
        display: flex;
        align-items: center;
        overflow: hidden;
        height: inherit;
        gap: 50px;
    }

    ul{
        display: flex;
        gap: 1rem;
        
        li{
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            .current{
               box-shadow: 0 2px ${props => props.theme.colors.softBlue};
            }
            a{
                padding: 1.4rem .5rem;
            }
        }
    }
    `;

