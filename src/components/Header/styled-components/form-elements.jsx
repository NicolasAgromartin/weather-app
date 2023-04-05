import styled from "styled-components";

export const Input = styled.input`
  outline: none; border: none;
  box-sizing: border-box;
  background: none;
  border-bottom: 1.5px solid #d97f24;
  color: #fff;
  width:200px; 
  font-size: 1.2rem;
  padding: .5rem;
  
  &::placeholder {
    color: #aaa;
  }

  @media screen and (min-width:600px){
    width: 300px;
  }  
`

export const Button = styled.button`
  border-radius: 5px; 
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
  background: #d97f24; 
  transition: .1s;
  &:active{
    transform: scale(.9);
  }
`