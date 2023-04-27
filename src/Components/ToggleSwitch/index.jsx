import React from "react";

import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const Input = styled.input`
  opacity: 0;
  position: absolute;
`;
const Switch = styled.div`
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  
`;

const ToggleSwitch = () => {
  return (
    <Label>
      <span>Toggle is off</span>
      <Input type="checkbox" />
      <Switch />
    </Label>
  );
}

export default ToggleSwitch;
