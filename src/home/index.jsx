import {
  Header,
  Clima,
  ChangeOfRain,
  GlobalMap,
  MaisCidades,
} from "../components/Paginas/index";

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