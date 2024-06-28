"use client";
import React, { useState } from "react";
import Button from "./Button";
import { generateCells } from "@/utils/generateCells";
import { CellState } from "@/types/CellValues";

const Grid = () => {
  const [cells, setCells] = useState(generateCells());

  const handleOnClick = (row: number, column: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[row] = [...newCells[row]];
      newCells[row][column] = {
        ...newCells[row][column],
        cellState:
          newCells[row][column].cellState === CellState.closed
            ? CellState.opened
            : newCells[row][column].cellState,
      };
      return newCells;
    });
  };

  const handleCellRightClick = (row: number, column: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[row] = [...newCells[row]];
      newCells[row][column] = {
        ...newCells[row][column],
        cellState:
          newCells[row][column].cellState === CellState.closed
            ? CellState.flagged
            : newCells[row][column].cellState === CellState.flagged
            ? CellState.closed
            : newCells[row][column].cellState,
      };
      return newCells;
    });
  };

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Button
          onClick={handleOnClick}
          onRightClick={handleCellRightClick}
          key={`${rowIndex}-${colIndex}`}
          row={rowIndex}
          column={colIndex}
          state={cell.cellState}
          value={cell.cellValue}
        />
      ))
    );
  };

  return (
    <>
      <div className='w-1/2 flex justify-center '>
        <div className='grid grid-rows-9 grid-cols-9'>{renderCells()}</div>
      </div>
    </>
  );
};

export default Grid;
