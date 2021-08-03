import React from "react";

import { useState, useEffect, useMemo } from "react";
import TodoFeature from "../../components/TodoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import TodoForm from "../../components/TodoForm";

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 1,
      title: "Code",
      status: "new",
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  // const [filteredStatus, setFilteredStatus] = useState('all');
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, id) => {
    //clone current array
    const newTodoList = [...todoList];

    console.log(todo, id);
    //togle state
    const newTodo = {
      ...newTodoList[id],
      status: newTodoList[id].status === "new" ? "completed" : "new",
    };
    newTodoList[id] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredStatus('all');
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    // setFilteredStatus('new');
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  // const renderdTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
  //console.log(renderdTodoList);
  const renderdTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'New'
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What Todo</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>

      <h3>Todo List</h3>
      {/* <TodoFeature todoList={todoList} onTodoClick={handleTodoClick} /> */}
      <TodoFeature todoList={renderdTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
