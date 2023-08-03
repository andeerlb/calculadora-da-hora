import { styled } from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.colors.whitebg};
    border-bottom: solid 1px ${props => props.theme.colors.softGray};
    height: 75px;
    position: relative;

    >span{
        display: none;
    }

    nav{
        display: flex;
        align-items: center;
        overflow: hidden;
        height: inherit;
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
                padding: .5rem;
            }
        }
    }
    `;

