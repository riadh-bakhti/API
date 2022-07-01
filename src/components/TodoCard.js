import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodo } from '../JS/actions/actionTodo'

const TodoCard = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const todoId = useSelector(state => state.todoId)

    const get = () => {
        dispatch(getTodo(params.id))
    }

    useEffect(() => {
        get()
    }, [params])


    return (
        <div>
            <h3>TodoCard</h3>
            <h3>{todoId.title}</h3>
            <h5>{todoId.id}</h5>
            </div>
    )
}

export default TodoCard