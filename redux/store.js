import { configureStore, combineReducers }  from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import bookListReducer from './slices/bookListSlice';
import bookDetailReducer from './slices/bookDetailSlice';
import rootSaga from './sagas/rootSaga';

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetail: bookDetailReducer
})

// const store = configureStore({
//     reducers,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: [ sagaMiddleware, logger ],
//     })
// const sagaMiddleware = createSagaMiddleware();

// store.sagaTask = sagaMiddleware.run(rootSaga);


const makeStore = context => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [ sagaMiddleware, logger ],
    })
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

//const makeStore = (context) => store;

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
const wrapper = createWrapper(makeStore, {debug: true});
export default wrapper;
// export type rootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
