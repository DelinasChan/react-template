import { UserAction } from '../action';

/** 登入資料 */
let initState = {
    name:null,
    id:null,
    account:''
};

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

const user = (state = initState, action) => {
  let { payload } = action ;

  switch (action.type) {
    case UserAction.LOGIN: {
      return {};
    }
    default:
      return state;
  }
};

export default user ;
