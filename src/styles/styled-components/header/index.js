import { styled } from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: ${props => props.theme.colors.whitebg};
    border-bottom: solid 1px ${props => props.theme.colors.softGray};

    span{

    }
    ul{
        display: flex;
        gap: 2rem;
        padding:  1rem;
        
        li{
            font-weight: 500;
            padding:  1rem;
            cursor: pointer;

        }
        li:hover{
            background-color: ${props => props.theme.colors.softBlue};
            transition: ease-in-out .2s;
            border-radius: 5px;
        }

    }
    div{
        width: 40px;
        height: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

       &:before{
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: ${props => props.theme.colors.fontWhite};
            top: 50%;
            transform: translateY(-50%);
            box-shadow: 0 10px, 0 -10px;
        }
    }
`

