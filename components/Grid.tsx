"use client";
import React, { useState } from "react";
import Button from "./Button";
import { generateCells } from "@/utils/generateCells";

const Grid = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((col, colIndex) => <Button key={`${rowIndex}-${colIndex}`} />)
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
