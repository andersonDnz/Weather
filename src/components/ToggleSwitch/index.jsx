import React, { useState } from "react";

import { 
  Switch, 
  Slider, 
  Input, 
  StyledMoon, 
  StyledSun 
} from "./styles";


function ToggleSwitch({ checked = false, color = "#1e1e1e" }) {

  const [toggle, setToggle] = useState(checked);
  return (
    <Switch>
      <Input {...{ color }} type="checkbox" defaultChecked={toggle}/>
      <Slider {...{ toggle, color }} onClick={() => setToggle(!toggle)}>
        <StyledMoon />
        <StyledSun />
      </Slider>
    </Switch>
  );
}

export default ToggleSwitch;
