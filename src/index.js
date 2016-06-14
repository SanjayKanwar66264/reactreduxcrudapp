import  React from 'react'
import  ReactDom from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  {Router, browserHistory} from 'react-router'
import reducers from './reducers';
import  routes from './routes'
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <Router history={browserHistory} routes={routes}/>
    </Provider>,document.querySelector('.container'));
