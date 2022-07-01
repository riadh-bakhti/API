import { GET_TODO, GET_TODOS } from "../constants/actionsTypes";

const initialState = {
    todos: [],
    todoId:{}
}

const reducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, todos: action.payload }
        case GET_TODO:
            return { ...state, todoId: action.payload }

        default:
            return state;
    }

}

export default reducerTodo