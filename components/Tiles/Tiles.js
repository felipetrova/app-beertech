import * as GridStyle from "~/styles/Grid";
import * as Style from './TilesStyle';

import ItemQuantity from "~/components/ItemQuantity/ItemQuantity"

const Tile = ({data}) => {

  return (
    <>
      <Style.CardTile>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
            className="no-margin"
          >
            <img
              src={data.image}
              className="imgTile"
            />
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col
            general={12}
            className="no-margin"
          >
            <Style.DescTile>
              <p className="fn-wb fn-s16px title">
                {data.name}
                <br />
                
                <span className="fn-s14px">
                  {data.desc1}
                </span>
              </p>

              <p className="fn-wb fn-s14px price">
                {data.desc2}
              </p>

              <p className="fn-s12px details">
                {data.promo}
                <br />
                
                <span className="tx-du">
                  View details
                </span>
              </p>
            </Style.DescTile>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col
            general={12}
            className="no-margin"
          >
            <ItemQuantity />
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardTile>
    </>
  )
};

export default Tile;