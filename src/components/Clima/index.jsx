import React, { useState } from "react";

import { A, Section, Switchs, Input, Sliders } from "./styles";

function Clima({ checked = false, color = "#1e1e1e" }) {
  const [toggleOptions, setToggleOptions] = useState(checked);
  return (
    <Section>
      <div>
        <A href="Today">Today</A>
        <A href="Tomorrow">Tomorrow</A>
        <A href="Next">Next 7 days</A>
      </div>
      <Switchs>
        <Input {...{ color }} type="checkbox" defaultChecked={toggleOptions} />
        <Sliders
          {...{ toggleOptions, color }}
          onClick={() => setToggleOptions(!toggleOptions)}
        >
      <h5>
        Forecast
      </h5>
        </Sliders>
      </Switchs>
    </Section>
  );
}

export default Clima;
