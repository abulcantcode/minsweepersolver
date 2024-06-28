import { CellState, CellValues } from "@/types/CellValues";
import React from "react";

interface ButtonProps {
  row: number;
  column: number;
  state: CellState;
  value: CellValues;
  onClick: (row: number, column: number) => void;
  onRightClick: (row: number, column: number) => void;
}

const Button: React.FC<ButtonProps> = ({
  row,
  column,
  state,
  value,
  onClick,
  onRightClick,
}) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.opened) {
      switch (value) {
        case CellValues.bomb:
          return <span>💣</span>;
        case CellValues.one:
          return <span className='text-blue-400'>1</span>;
        case CellValues.two:
          return <span className='text-red-500'>2</span>;
        case CellValues.three:
          return <span className='text-orange-400'>3</span>;
        case CellValues.four:
          return <span className='text-purple-400'>4</span>;
        case CellValues.five:
          return <span className='text-yellow-400'>5</span>;
        case CellValues.six:
          return <span className='text-green-400'>6</span>;
        case CellValues.seven:
          return <span className='text-pink-400'>7</span>;
        case CellValues.eight:
          return <span className='text-white'>8</span>;
        default:
          return <span></span>;
      }
    } else if (state === CellState.flagged) {
      return <span>🚩</span>;
    }
    return null;
  };

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onRightClick(row, column);
  };

  return (
    <div
      onClick={() => onClick(row, column)}
      onContextMenu={handleRightClick}
      className={`h-14 w-14 text-center content-center m-1 ${
        state === CellState.opened
          ? "border-solid bg-green-800 border-white border-2 text-white"
          : "border-solid bg-green-600 border-green-400 border-2 text-white hover:bg-green-700"
      }`}
    >
      {renderContent()}
    </div>
  );
};

export default Button;
