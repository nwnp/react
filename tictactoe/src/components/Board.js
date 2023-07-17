import React from "react";
import Square from "./Square";
import "./Board.css";
import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  const renderSqaure = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
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
