import { CellState, CellValues, Cell } from "@/types/CellValues";

const rows: number = 9;
const columns: number = 9;
const bombs: number = 9;

export const generateCells = () => {
  const cells: Cell[][] = [];

  for (let row = 0; row < rows; row++) {
    cells.push([]);
    for (let col = 0; col < columns; col++) {
      const rand: number = Math.random();
      cells[row].push({
        cellValue: CellValues.none,
        cellState: CellState.closed,
      });
    }
  }

  let placedBombs = 0;
  while (placedBombs < bombs) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * columns);

    // Ensure the cell doesn't already have a bomb
    if (cells[randomRow][randomCol].cellValue !== CellValues.bomb) {
      cells[randomRow][randomCol].cellValue = CellValues.bomb;
      placedBombs++;
      // Increment adjacent Cells
      if (checkRowCol(randomRow, randomCol + 1))
        cells[randomRow][randomCol + 1] = incrementAdjacent(
          cells[randomRow][randomCol + 1]
        );
      if (checkRowCol(randomRow, randomCol - 1))
        cells[randomRow][randomCol - 1] = incrementAdjacent(
          cells[randomRow][randomCol - 1]
        );
      if (checkRowCol(randomRow + 1, randomCol))
        cells[randomRow + 1][randomCol] = incrementAdjacent(
          cells[randomRow + 1][randomCol]
        );
      if (checkRowCol(randomRow - 1, randomCol))
        cells[randomRow - 1][randomCol] = incrementAdjacent(
          cells[randomRow - 1][randomCol]
        );
      if (checkRowCol(randomRow + 1, randomCol + 1))
        cells[randomRow + 1][randomCol + 1] = incrementAdjacent(
          cells[randomRow + 1][randomCol + 1]
        );
      if (checkRowCol(randomRow + 1, randomCol - 1))
        cells[randomRow + 1][randomCol - 1] = incrementAdjacent(
          cells[randomRow + 1][randomCol - 1]
        );
      if (checkRowCol(randomRow - 1, randomCol + 1))
        cells[randomRow - 1][randomCol + 1] = incrementAdjacent(
          cells[randomRow - 1][randomCol + 1]
        );
      if (checkRowCol(randomRow - 1, randomCol - 1))
        cells[randomRow - 1][randomCol - 1] = incrementAdjacent(
          cells[randomRow - 1][randomCol - 1]
        );
    }
  }

  return cells;
};

const checkRowCol = (row: number, col: number): boolean => {
  if (row >= 0 && row < rows) {
    if (col >= 0 && col < columns) {
      return true;
    }
  }
  return false;
};

const incrementAdjacent = (cell: Cell): Cell => {
  switch (cell.cellValue) {
    case CellValues.none:
      cell.cellValue = CellValues.one;
      return cell;
    case CellValues.one:
      cell.cellValue = CellValues.two;
      return cell;
    case CellValues.two:
      cell.cellValue = CellValues.three;
      return cell;
    case CellValues.three:
      cell.cellValue = CellValues.four;
      return cell;
    case CellValues.four:
      cell.cellValue = CellValues.five;
      return cell;
    case CellValues.five:
      cell.cellValue = CellValues.six;
      return cell;
    case CellValues.six:
      cell.cellValue = CellValues.seven;
      return cell;
    case CellValues.seven:
      cell.cellValue = CellValues.eight;
      return cell;
    default:
      return cell;
  }
};
