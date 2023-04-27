import styled from "styled-components";

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: "";

    position: absolute;
    left: 1px;
    bottom: 2px;

    width: 38px;
    height: 38px;
    border-radius: 100%;

    background-color: ${({ toggle, color }) => (toggle ? "white" : color)};

    transition: 0.4s;
  }
`;

export const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 40px;
  margin-left: 15rem;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 65px;
  margin-bottom: 15px 15px;
  transition: 0.4s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
