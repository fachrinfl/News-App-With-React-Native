import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../reducers/'

const middleware = [thunk, promiseMiddleware()]

if (process.env.NODE_ENV !== 'live'){
    middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware))

export default store