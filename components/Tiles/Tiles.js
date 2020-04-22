import * as GridStyle from "~/styles/Grid";
import * as Style from './TilesStyle';

const Tile = () => {

  return (
    <>
      <Style.CardTile>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
            className="no-margin"
          >
            <img
              src="/images/rum.png"
              className="imgTile"
            />
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
            className="no-margin"
          >
            <p className="fn-wb fn-s16px title">
              Modelo Negra
              <br />
              
              <span className="fn-s14px tx-du">
                12 Unit - 33oz Bottle
              </span>
            </p>

            <p className="fn-wb fn-s14px price">
              RD$32.00/Unit
            </p>

            <p className="fn-s12px details">
              Buy 3, get 1 free.
              <br />
              
              <span className="tx-du">
                View details
              </span>
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardTile>
    </>
  )
};

export default Tile;