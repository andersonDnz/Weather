import {
  Header,
  Clima,
  ChangeOfRain,
  GlobalMap,
  MaisCidades,
} from "../components";

import { Nav } from "./styles.js";

export function Pages() {
  return (
    <Nav>
      <div>
        <Header />
        <Clima />
        <ChangeOfRain />
        <GlobalMap />
        <MaisCidades />
      </div>
    </Nav>
  );
}


export default Pages;