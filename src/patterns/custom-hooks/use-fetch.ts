import { useEffect, useState } from "react";

import { TodoItemData } from "./interfaces";

const getTodoById = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<TodoItemData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getTodoById(1).then((data) => {
        setData(data);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading };
};
