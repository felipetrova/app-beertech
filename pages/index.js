import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header"
import LoadingComponent from "~/components/Loading/Loading";
import TileComponent from "~/components/Tiles/Tiles"

const Index = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [setItens, setItensState] = useState([]);

  const loadItens = useCallback(async() => {

    try {
      setLoading(true);
      axios(`http://localhost:3001/itens`).then(res => {
        console.log(res);
        if(res.data !== null && res.data.length > 0) {
          setItensState(res.data);
        } else {
          console.log('error');
        }
      })
      .catch(err => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  });

  useEffect(() => {
    loadItens();
    document.title = "App Beertech";
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        link="/"
        title={`App Beertech`}
      />

      <div className="mt-85px">
        <GridStyle.Container>

          <GridStyle.Row>
          {setItens && setItens.length > 0 &&
            setItens.map((item, index) => (
              <GridStyle.Col
                key={index + 1}
                mobile={12}
                tablet={6}
                desktop={4}
              >
                <TileComponent
                  data={item}
                />
              </GridStyle.Col>
            ))
          }
          </GridStyle.Row>

        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
