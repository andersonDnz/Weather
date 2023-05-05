import {
  Header,
  Clima,
  ChangeOfRain,
  GlobalMap,
  MaisCidades,
} from "../pages/index.jsx";

import { Nav } from "./styles.js";

export function Home() {
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


export default Home;