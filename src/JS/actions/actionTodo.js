import axios from "axios"
import { GET_TODO, GET_TODOS } from "../constants/actionsTypes"



export const getTodos = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
        .catch(err=>console.log(err))
}
export const getTodo = (id) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => dispatch({ type: GET_TODO, payload: res.data }))
        .catch(err=>console.log(err))
}