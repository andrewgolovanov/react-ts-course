import React, { FC, useState, useRef } from 'react';

const Events: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const cardStyle = {
    width: 200,
    height: 200,
    background: 'red',
    marginBottom: 15,
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  return (
    <div>
      <input type='text' value={value} onChange={changeHandler} />
      <input type='text' ref={inputRef} />
      <button onClick={clickHandler}>Button</button>
      <div onDrag={dragHandler} draggable style={cardStyle} />
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ ...cardStyle, background: isDrag ? 'blue' : 'red' }}
      />
    </div>
  );
};

export default Events;
