import Header from "../components/Header";
import Clima from "../components/Clima";
import ChangeOfRain from "../components/ChangeOfRain";
import GlobalMap from "../components/GlobalMap";
import MaisCidades from "../components/MaisCidades";

import { Nav } from "./styles";

function Pages() {
  return (
    <Nav>
      <div>
        <Header />
        <Clima />
        <ChangeOfRain />
        <GlobalMap/>
        <MaisCidades/>
      </div>
    </Nav>
  );
}

export default Pages;
