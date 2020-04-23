import { useState } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './ItemQuantityStyle';

import ButtonComponent from "~/components/Button/Button"

const ItemQuantity = () => {
  const [countItem, setCountItem] = useState(0);

  const decrementItem = () => {
    const value = countItem - 1;
    setCountItem(value);
  }

  const incrementItem = () => {
    const value = countItem + 1;
    setCountItem(value);
  }

  const onChange = e => {
    const strNumber = e.target.value;
    const value = strNumber ? parseInt(strNumber) : 0;
    setCountItem(value);
  }

  return (
    <>
      <Style.Quantity>
        <GridStyle.Row>
          <GridStyle.Col
            general={6}
            className="no-margin"
          >
            <Style.Count className="flex align-itcenter">
              <span className="remove" onClick={decrementItem}>-</span>
              <input type="text" value={countItem} onChange={onChange} />
              <span className="add" onClick={incrementItem}>+</span>
            </Style.Count>
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