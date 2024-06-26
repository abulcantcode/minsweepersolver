import { CellState, CellValues, Cell } from "@/types/CellValues";

export const generateCells = () => {
  const cells: Cell[][] = [];

  for (let row = 0; row < 9; row++) {
    cells.push([]);

    for (let col = 0; col < 9; col++) {
      cells[row].push({
        cellValue: CellValues.none,
        cellState: CellState.closed,
      });
    }
  }

  return cells;
};
