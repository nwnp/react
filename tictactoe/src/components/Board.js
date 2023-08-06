import React from "react";
import Square from "./Square";
import "./Board.css";
import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  let status = `Next player: ${next === true ? "X" : "O"}`;

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top left to bottom right
      [2, 4, 6], // diagonal top right to bottom left
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  status = winner ? `Winner: ${winner}` : status;

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = next === true ? "X" : "O";
    setSquares(newSquares);
    setNext(!next);
  };

  const renderSqaure = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>
      <div className="board-row">
        {renderSqaure(3)}
        {renderSqaure(4)}
        {renderSqaure(5)}
      </div>
      <div className="board-row">
        {renderSqaure(6)}
        {renderSqaure(7)}
        {renderSqaure(8)}
      </div>
    </div>
  );
};

export default Board;
