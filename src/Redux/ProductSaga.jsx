import {put, takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './Constant';


function* getProducts(){
    let data = yield fetch('http://localhost:3000/products')
    data = yield data.json()
    console.warn("this is saga",data);
    //it will go directly on productreducer
    yield put({type: SET_PRODUCT_LIST,data : data})

}

function* ProductSaga(){

    yield takeEvery(PRODUCT_LIST,getProducts)

}
export default ProductSaga



