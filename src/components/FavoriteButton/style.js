import styled from 'styled-components';

export const FavoriteBtn = styled.button`
  $cor-verde: #4caf50;
  $cor-branca: white;
  width: 100%;
  height: 30px;
  vertical-align: middle;
  font-family: sans-serif;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px auto 6px auto;
  margin: 10px auto;
  font-size: 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all ease 0.3s;
  background: white;
  &:hover{
    background: #4caf50;
  }
`;
