import { styled } from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: ${props => props.theme.colors.whitebg};
    border-bottom: solid 1px ${props => props.theme.colors.softGray};
    height: 75px;
    overflow: hidden;

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
               box-shadow: 0 2px 0px ${props => props.theme.colors.softBlue};
            }
            a{
                padding: .5rem;
            }

           
        }

         /* li:hover{
            background-color: ${props => props.theme.colors.softBlue};
            transition: ease-in-out .2s;
            border-radius: 5px;
        }  */

    }
    div{
        width: 40px;
        height: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        display: none;

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
    
    @keyframes fade-out-nav {
        from{
            transform: translate(0px);
            opacity: 1;
        }
        to{
            transform: translate(300px);
            opacity: 0;
            display: none;
        }
    }
    @media screen and (max-width:781px) {
    ul{
        li{
            animation: fade-out-nav .5s forwards;
           }
        }
        div{
            display: block;
        }
    }
    `

