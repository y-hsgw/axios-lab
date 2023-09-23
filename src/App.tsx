import React, { useCallback, useEffect } from "react";
import { axios } from "./lib/axios";
import qs from "qs";

function App() {
  const params = {
    key1: "a&b",
    key2: "c d",
  };

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
