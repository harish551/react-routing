import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root'

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Root state={store.getState()} />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
