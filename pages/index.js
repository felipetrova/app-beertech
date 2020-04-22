import { useEffect } from "react";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header"
import TileComponent from "~/components/Tiles/Tiles"

const Index = () => {

  useEffect(() => {
    document.title = "App Beertech";
  }, []);

  return (
    <>
      <HeaderComponent
        link="/"
        title={`App Beertech`}
      />

      <div className="mt-85px">
        <GridStyle.Container>

          <GridStyle.Row>
            <GridStyle.Col
              mobile={12}
              tablet={6}
              desktop={4}
            >
              <TileComponent />
            </GridStyle.Col>

            <GridStyle.Col
              mobile={12}
              tablet={6}
              desktop={4}
            >
              <TileComponent />
            </GridStyle.Col>

            <GridStyle.Col
              mobile={12}
              tablet={6}
              desktop={4}
            >
              <TileComponent />
            </GridStyle.Col>
            
            <GridStyle.Col
              mobile={12}
              tablet={6}
              desktop={4}
            >
              <TileComponent />
            </GridStyle.Col>
          </GridStyle.Row>

        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
