import * as GridStyle from "~/styles/Grid";
import * as Style from './ItemQuantityStyle';

import ButtonComponent from "~/components/Button/Button"

const ItemQuantity = () => {

  return (
    <>
      <Style.Quantity>
        <GridStyle.Row>
          <GridStyle.Col
            general={6}
            className="no-margin"
          >
            - / +
          </GridStyle.Col>
          
          <GridStyle.Col
            general={6}
            className="no-margin"
          >
            <ButtonComponent
            txt={'ADD'}
            className="fn-s18px bg-blue-outlined tx-blue br-4px 30px w-100 fn-wb"
            />
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.Quantity>
    </>
  )
};

export default ItemQuantity;