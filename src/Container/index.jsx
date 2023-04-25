import Header from "../Components/Header";
import Clima from "../Components/Clima";
import ChangeOfRain from "../components/ChangeOfRain";
import GlobalMap from "../Components/GlobalMap";
import MaisCidades from "../Components/MaisCidades";

import { Nav } from "./styles";

function Container() {
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

export default Container;
