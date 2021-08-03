import React from 'react'
// import TodoList from './components/TodoList/index.js'
// import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoFeature(props) {

    // const initTodoList = [
    //     {
    //         id: 1,
    //         title: 'Eat',
    //         status: 'new'
    //     },
    //     {
    //         id: 2,
    //         title: 'Sleep',
    //         status: 'completed'
    //     },
    //     {
    //         id: 1,
    //         title: 'Code',
    //         status: 'new'
    //     }
    // ]

    // const [todoList, setTodoList] = useState(initTodoList);

    // const handleTodoClick = (todo, id) => {
    //     //clone current array 
    //     const newTodoList = [...todoList];

    //     console.log(todo, id);
    //     //togle state
    //     const newTodo = {
    //         ...newTodoList[id],
    //         status: newTodoList[id].status === 'new' ? 'completed' : 'new'
    //     };
    //     newTodoList[id] = newTodo;
    //     setTodoList(newTodoList);
    // }
    //Đã để ở file con
    const match = useRouteMatch();

    return (
        <div>
            {/* <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} /> */}

            <Switch>
                {/* <Route path='/todos' exact component={ListPage}></Route>
                <Route path='/todos/:todoId' component={DetailPage}></Route> */}
                <Route path={match.path} exact component={ListPage}></Route>
                <Route path={`${match.path}/:todoId`} exact component={DetailPage}></Route>

                <Route component={NotFound}></Route>
            </Switch>
        </div>
    )
}

TodoFeature.propTypes = {

}

export default TodoFeature

