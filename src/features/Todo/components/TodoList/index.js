import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types'
import './styles.scss';

function TodoList(props) {
    const { todoList, onTodoClick } = props;

    const handleTodoClick = (todo, id) => {
        if (!onTodoClick) return;

        onTodoClick(todo, id)
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, id) => (
                <li
                    key={id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, id)}//để ý chỗ này
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
}

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

export default TodoList

