import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header"
import LoadingComponent from "~/components/Loading/Loading";
import TileComponent from "~/components/Tiles/Tiles"

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [setItens, setItensState] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const loadItens = useCallback(async() => {

    try {
      setLoading(true);
      setErrorMsg('');
      axios(`http://localhost:3001/itens`).then(res => {
        console.log(res);
        if(res.data !== null && res.data.length > 0) {
          setItensState(res.data);
        } else {
          setErrorMsg('Please, run the server with:');
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMsg('Please, run the server with:');
      });
    } catch (error) {
      setErrorMsg('Please, run the server with:');
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
            <GridStyle.Col general={12}>
              <p className="has-text-centered tx-orange tx-up fn-s30px fn-wb">
                App Beertech
              </p>
            </GridStyle.Col>
          </GridStyle.Row>

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

          {(errorMsg || (setItens && setItens.length === 0)) && (
            <GridStyle.Col general={12}>
            <p className="has-text-centered tx-darkgrey fn-s20px fn-wb">
              {errorMsg}
              <br />
              <code>
                yarn server
              </code>
            </p>
          </GridStyle.Col>
          )}
          </GridStyle.Row>

        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
