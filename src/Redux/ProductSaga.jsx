import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './Constant';


function* getProducts() {
    //we can assume yield like async await
    let data = yield fetch('http://localhost:3000/products')


    data = yield data.json()
    console.warn("this is saga", data);
    //after saga done his work we have to call a action(here,below one).it will go directly on productreducer

    //PRODUCT_LIST for getting data and SET_PRODUCT_LIST for setting the data
    yield put({ type: SET_PRODUCT_LIST, data: data })

}
function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3000/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", data)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}
function* ProductSaga() {
    //takeEvery tells when to call 
    // it called by action(PRODUCT_LIST) and invoke getProducts method
    //when action hits
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}
export default ProductSaga



