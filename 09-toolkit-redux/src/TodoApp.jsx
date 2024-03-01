import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const [ todoId, settodoId ] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    settodoId( todoId + 1 );
  }

  const prevTodo = () => {
    if ( todoId === 1) return;
    settodoId( todoId - 1);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading { isLoading ? "True": "False" }</h4>

      <pre>{ JSON.stringify( todo ) }</pre>

      <button onClick={ prevTodo }>
        Previous todo
      </button>
      <button onClick={ nextTodo }>
        Next todo
      </button>

      {/* <ul>
        { todos.map( todo => (
          <li key={ todo.id }>
            <strong> { todo.completed ? "Done" : "Pending" } </strong>
            { todo.title }
          </li>
        ) ) }
      </ul> */}

    </>
  )
}