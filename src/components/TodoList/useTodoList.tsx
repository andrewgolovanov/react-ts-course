import { useEffect, useState } from 'react';
import { ITodo } from '../../types/types';

const useTodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      const data: ITodo[] = await response.json();
      setTodoList(data);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    todoList,
  };
};

export default useTodoList;
