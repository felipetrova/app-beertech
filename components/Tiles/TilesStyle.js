import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const CardTile = styled.div`
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  color: ${C.LIGHT_GREY};
  display: block;
  padding: 1rem;
  font-family: 'robotoregular';

  .imgTile {
    max-width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .title {
    color: ${C.BLACK};
    margin-bottom: 0.3125rem;

    span {
      color: ${C.LIGHT_GREY};
    }
  }

  .price {
    color: ${C.MEDIUM_GREY};
    margin-bottom: 0.625rem;
  }

  .details {
    color: ${C.GREEN};

    span {
      color: ${C.BLUE};
    }
  }
`;
