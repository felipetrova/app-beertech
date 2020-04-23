import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const Quantity = styled.div`
  color: ${C.MEDIUM_GREY};
`;

export const Count = styled.div`
  font-family: 'robotolight';
  
  span {
    width: 30px;
    height: 30px;
    padding: 14px 12px;
    font-family: 'robotolight';
    line-height: 0;
    font-weight: bold;
    color: ${C.BLUE};
    border: 1px solid ${C.BLUE};
    border-radius: 50%;

    &.add {
      padding: 14px 10px;
    }
  }

  input {
    height: 30px;
    background: ${C.WHITE};
    margin: 0 10px;
    color: ${C.MEDIUM_GREY};
    width: 75px;
    font-size: 0.875rem;
    text-align: center;
    border: 1px solid ${C.LIGHT_GREY};
    border-radius: 4px;

    &::-webkit-input-placeholder { /* Edge */
      color: ${C.MEDIUM_GREY};
    }
    
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${C.MEDIUM_GREY};
    }
    
    &::placeholder {
      color: ${C.MEDIUM_GREY};
    }
  }
`;
