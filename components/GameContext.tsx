"use client";
import { generateCells } from "@/utils/generateCells";
import React, { createContext, useContext, useState } from "react";

type Cell = ReturnType<typeof generateCells>["cells"];
type Bomb = ReturnType<typeof generateCells>["bombs"];

interface GameContextType {
  cells: Cell;
  bombs: Bomb;
  setCells: (cells: Cell | ((prev: Cell) => Cell)) => void;
  setBombs: (bombs: Bomb | ((prev: Bomb) => Bomb)) => void;
  resetGrid: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const gridData = generateCells();
  const [cells, setCells] = useState(gridData.cells);
  const [bombs, setBombs] = useState(gridData.bombs);

  const resetGrid = () => {
    const newGridData = generateCells();
    setCells(newGridData.cells);
    setBombs(newGridData.bombs);
  };

  return (
    <GameContext.Provider
      value={{ cells, bombs, setCells, setBombs, resetGrid }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
