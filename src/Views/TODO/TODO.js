import { useEffect, useState } from 'react'
import Styles from './TODO.module.css'
import { dummy } from './dummy'

export function TODO(props) {

    const [newTodo, setNewTodo] = useState('')
    const [todoData, setTodoData] = useState(dummy);

    useEffect(() => {
        // const apiData = getTodos()
        // setTodoData(apiData)
        setTodoData(dummy);
    }, [])

    const getTodos = () => {
        // get todos and update in todoData
    }

    const addTodo = () => {

    }

    const deleteTodo = () => {

    }

    const updateTodo = () => {

    }


    return (
        <div className={Styles.ancestorContainer}>
            <div className={Styles.headerContainer}>
                <h1>
                    Tasks
                </h1>
                <span>
                    <input
                        className={Styles.todoInput}
                        type='text'
                        name='New Todo'
                        value={newTodo}
                        onChange={(event) => {
                            setNewTodo(event.target.value)
                        }}
                    />
                    <button
                        id='addButton'
                        name='add'
                        className={Styles.addButton}
                        onClick={() => {
                            addTodo()
                            setNewTodo('')
                        }}
                    >
                        + New Todo
                    </button>
                </span>
            </div>
            <div id='todoContainer' className={Styles.todoContainer}>
                {todoData.map((entry, index) => (
                    <div key={entry.id} className={Styles.todo}>
                        <span className={Styles.infoContainer}>
                            <input
                                type='checkbox'
                                checked={entry.done}
                                onClick={() => {
                                    updateTodo(entry.id)
                                }}
                            />
                            {entry.text}
                        </span>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                deleteTodo(entry.id)
                            }}
                        >
                            Delete
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}