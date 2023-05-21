import {
  Header,
  Clima,
} from "../components";

import { Nav } from "./styles.js";

export function Pages() {
  return (
    <Nav>
      <div>
        <Header/>
        <Clima/>
      </div>
    </Nav>
  );
}


export default Pages;