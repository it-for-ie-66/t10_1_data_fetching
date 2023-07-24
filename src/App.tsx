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
  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div>
              {todo.id} {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
