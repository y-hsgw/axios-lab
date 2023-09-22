import React, { useCallback, useEffect } from "react";
import { axios } from "./lib/axios";

function App() {
  const fetchTodo = useCallback(() => {
    axios.get("/todos/1", {
      params: { test: "111 222" },
    });
  }, []);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return <div>Hello World</div>;
}

export default App;
