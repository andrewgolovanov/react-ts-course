import React, { FC } from 'react';
import { ITodo } from '../../../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo: { id, title, completed } }) => {
  return (
    <div>
      {id}. {title}
      <input type='checkbox' checked={completed} />
    </div>
  );
};

export default TodoItem;
