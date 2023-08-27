import { useState, useEffect } from "react";

import { TodoItemData } from "../interfaces";

import { useFetch } from "../use-fetch";

export const TodoItem = () => {
  const [data, setData] = useState<TodoItemData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Title: {data?.title}</p>
    </div>
  );
};

export const TodoItemWithCustomHook = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/",
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Title: {data?.title}</p>
    </div>
  );
};
