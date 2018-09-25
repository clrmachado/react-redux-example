import { createStore, applyMiddleware } from 'redux'
import newsReducer from '../reducers/newsReducer'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(newsReducer)
export default store
