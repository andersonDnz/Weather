import {
  Header,
  Clima,
  ChangeOfRain,
  GlobalMap,
  MaisCidades,
} from "../components";

import { Container } from "./styles.js";

export function Pages() {
  return (
    <Container>
      <Header />
      <Clima />
      <ChangeOfRain />
      <GlobalMap />
      <MaisCidades />
    </Container>
  );
}

export default Pages;
