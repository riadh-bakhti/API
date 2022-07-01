import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTodos } from '../JS/actions/actionTodo'

const TodoList = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const getAllTodos = () => {
        dispatch(getTodos())
    }

    useEffect(() => {
        getAllTodos()
    }, [])


    return (
        <div>
            {todos.map((el, i) => <Link to={`/user/${el.id}`} key={i}>
                <h2 >{el.title}</h2>
            </Link>)}
        </div>
    )
}

export default TodoList