import React from 'react'
import { useState } from 'react'

const Say = () => {
  // variables
  const [message, setMessage] = useState('');

  // functions
  const onClickEnter = () => setMessage('Hello!');
  const onClickLeave = () => setMessage('Bye!');

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <div>{message}</div>
    </div>
  )
}

export default Say