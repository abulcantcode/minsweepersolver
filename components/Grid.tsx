"use client";
import Button from "./Button";
import { columns, rows } from "@/utils/generateCells";
import { CellState, CellValues } from "@/types/CellValues";
import { useGame } from "./GameContext";

const Grid = () => {
  const { cells, bombs, setCells, setBombs } = useGame();

  const handleOnClick = (row: number, column: number) => {
    if (cells[row][column].cellValue === CellValues.bomb) {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        bombs.forEach(({ row, column }) => {
          newCells[row][column].cellState = CellState.opened;
        });
        return newCells;
      });
    } else {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        const queue: { row: number; column: number }[] = [{ row, column }];

        while (queue.length > 0) {
          const { row: r, column: c } = queue.shift()!;

          if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= columns ||
            newCells[r][c].cellState === CellState.opened ||
            newCells[r][c].cellState === CellState.flagged
          ) {
            continue;
          }

          newCells[r][c].cellState = CellState.opened;

          if (newCells[r][c].cellValue === CellValues.none) {
            queue.push({ row: r - 1, column: c - 1 }); // top-left
            queue.push({ row: r - 1, column: c }); // top
            queue.push({ row: r - 1, column: c + 1 }); // top-right
            queue.push({ row: r, column: c - 1 }); // left
            queue.push({ row: r, column: c + 1 }); // right
            queue.push({ row: r + 1, column: c - 1 }); // bottom-left
            queue.push({ row: r + 1, column: c }); // bottom
            queue.push({ row: r + 1, column: c + 1 }); // bottom-right
          }
        }

        return newCells;
      });
    }
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
      <div className='w-1/2 flex justify-center mx-auto'>
        <div className='grid grid-rows-12 grid-cols-12'>{renderCells()}</div>
      </div>
    </>
  );
};

export default Grid;
