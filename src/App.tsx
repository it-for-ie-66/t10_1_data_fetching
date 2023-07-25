import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // BAD CODE
  // const URL = "https://jsonplaceholder.typicode.com/todos";
  // fetch(URL)
  //   .then((res) => res.json())
  //   .then((data) => setTodos(data));
  // console.log("Rendered");

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id} {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
