import styled from "styled-components";

export const Section = styled.div`
  
  height: 20rem;
  display: inline-block;
  background-color: green;
  min-width: 45vw;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: blue;
  }
`;

export const Sliders = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggleOptions, color }) =>
    toggleOptions ? color : "#D6E9F5"};
  border-radius: 25px 25px;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    width: 95px;
    height: 40px;
    border-radius: 25px 25px;
    background-color: ${({ toggleOptions, color }) =>
      toggleOptions ? "#D6E9F5" : color};
    transition: 0.4s;
  }
`;

export const Input = styled.input`
  &:checked + ${Sliders}:before {
    transform: translateX(65.6px);
    
  }
`;

export const Switchs = styled.label`
  position: relative;
  display: inline-block;
  width: 10rem;
  height: 40px;
  margin-left: 18px;
  background-color: ${({ toggleOptions, color }) =>
    toggleOptions ? color : "#D6E9F5"};
  border-radius: 25px 25px;
  transition: 0.4s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
