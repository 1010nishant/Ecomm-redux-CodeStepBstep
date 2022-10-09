import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import Rootreducer from './Rootreducer';
import ProductSaga from './ProductSaga';
import createSagaMiddleware from '@redux-saga/core';



const sagaMiddleware = createSagaMiddleware();

// const store = createStore(Rootreducer);
const store = configureStore(
    {
        reducer: Rootreducer,
        middleware: () => [sagaMiddleware]
    }
)
sagaMiddleware.run(ProductSaga)
export default store;
