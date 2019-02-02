import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px solid red;
    width: 100%;
    height: 100vh;
    background: #333;
`;

export const LoginLabel = styled.h1`
    color: #cccccc;
    font-family: sans-serif;
    font-size: 1.4em;
`;

export const LoginButton = styled.a`
    vertical-align: middle;
    font-family: sans-serif;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 10px 55px 10px 55px;
    font-size: 16px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all ease 0.3s;
    background: white;
`;