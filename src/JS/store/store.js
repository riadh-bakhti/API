import { createStore, applyMiddleware, compose } from "redux";
import reducerTodo from "../reducers/reducerTodo";
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(reducerTodo, composeEnhancers(applyMiddleware(thunk)))
export default store