import Header from "../Pages/header";
import Clima from "../Pages/clima";

import { Nav } from "./styles";
import ChangeOfRain from "../Pages/change_of_rain";
import GlobalMap from "../Pages/global_map";
import MaisCidades from "../Pages/mais_cidades";

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
