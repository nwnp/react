import React, { useCallback, useState } from 'react';
import '../styles/TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  // variables
  const [value, setValue] = useState('');

  // functions
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
