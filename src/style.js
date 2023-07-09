import styled from "styled-components";
import { FcOk, FcCancel } from "react-icons/fc";

export const Container = styled.div`
    background-image: url(./src/images/background-list.png);
    background-size: 100vw 100vh;
    width:  100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    

`

export const MainList = styled.div`
   background-color: #118286;
   padding: 3.0rem 2.0rem;
   border-radius: 0.5rem;
   
   @media (max-width: 768px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       
   }
    ul {
        padding: 0;
        margin-top: 6.0rem;
    }

`

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.40);
    height: 2.5rem;
    width: 21.37rem;
    padding: 0.6875rem 10.25rem 0.6875rem 1.25rem;
`

export const Button = styled.button`
    border-radius: 5px;
    background: #2155CE;
    color: white;
    font-weight: 900;
    outline: auto;
    width: 100%;
    height: 4.5rem;
    margin-top: 1.0rem;
    
    cursor: pointer;

    @media (min-width: 768px) {
        width: auto;
        margin-left: 2.3rem;
    }

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 1;
    }
   
`

export const ListItem = styled.div`
    border-radius: 5px;
    background: ${props => props.isFinished ? '#919291' : '#e4e4e4'};
    opacity: ${props => props.isFinished ? 0.5 : 1};
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    height: 6.0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.0rem;
    padding: 0 1.5rem;

    li {
        list-style: none;
    }

`

export const Paragraf = styled.p`
    text-align: center;
    color: #919291;
    font-size: 2.5rem;
    font-weight: 900;
`

export const Ok = styled(FcOk)`
    cursor: pointer;
   
`
export const Cancel = styled(FcCancel)`
    cursor: pointer;
`