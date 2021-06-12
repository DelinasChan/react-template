import { CartAction } from '../action';

let initState = [];

/**
 * @function cart
 * @description 處理購物車資料
 * 
 * @param {Array} state 狀態資料
 * @param {Object} action
 * @param {string} action.type 要執行的 action
 * @param {Object} action.payload 要處理的資料
 * 
*/

const cart = (state = initState, action) => {
  let { payload } = action ;

  switch (action.type) {
    case CartAction.ADD_PRODUCT: {
      return [];
    }
    default:
      return state;
  }
};

export default cart ;
