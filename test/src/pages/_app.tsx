import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '@redux/reducers';

const store = createStore(rootReducer,applyMiddleware(thunk))

function MyApp({ Component, pageProps }) {
    return (
    <Provider store={store}>
        <Component {...pageProps }/>
    </Provider>
    )
}

export default MyApp