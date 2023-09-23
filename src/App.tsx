import React, { useCallback, useEffect } from "react";
import { axios } from "./lib/axios";

const params = {
  key1: "a&b",
  key2: "c d",
};

function App() {
  const axiosFetchTodo = useCallback(() => {
    axios.get("/todos/1", { params });
  }, []);

  const fetchTodo = useCallback(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/" + new URLSearchParams(params)
    );
  }, []);

  useEffect(() => {
    axiosFetchTodo();
    fetchTodo();
  }, [axiosFetchTodo, fetchTodo]);

  return <div>Hello World</div>;
}

export default App;
