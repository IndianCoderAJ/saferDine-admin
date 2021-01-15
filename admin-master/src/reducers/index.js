import { combineReducers } from 'redux'
import orderReducers from './orderReducer';
import authReducer from './authReducer';
import loaderReducer from './loaderReeducer'
import categoryReducer  from './categoryReducer';
import checkoutReducer from './checkoutReducer';
import productReducer from './productReducer';
import tableReducer from './tableReducer';
import tableRequestReducer from './tableRequestReducer';
import errorReducer from './errorReducer';
import notificationReducer from './notificationReducer';
import modal from './modalconfirmReeducer';


export default combineReducers({ 
 authData:authReducer,
 orderData:orderReducers,
 categoryData:categoryReducer,
 checkoutData:checkoutReducer,
 productData:productReducer,
 tableData:tableReducer,
 tableRequestData:tableRequestReducer,
 errorData:errorReducer,
 notificationData:notificationReducer,
 loadingData:loaderReducer,
 modalData:modal
})