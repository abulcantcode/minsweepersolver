"use client";

import React from "react";
import { useGame } from "./GameContext";

const GameBar = () => {
  const { resetGrid } = useGame();
  return (
    <>
      <div className='flex justify-center '>
        <button className='p-3' onClick={resetGrid}>
          Play Game
        </button>
      </div>
    </>
  );
};

export default GameBar;
