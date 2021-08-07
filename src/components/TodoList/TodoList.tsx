import React, { FC } from 'react';
import { ITodo } from '../../types/types';
import List from '../common/List/List';
import TodoItem from './TodoItem/TodoItem';
import useTodoList from './useTodoList';

const TodoList: FC = () => {
  const { todoList } = useTodoList();
  return (
    <List
      items={todoList}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodoList;
