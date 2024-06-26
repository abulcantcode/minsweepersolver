export enum CellValues {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  opened,
  closed,
  flagged,
}

export type Cell = {
  cellValue: CellValues;
  cellState: CellState;
};
