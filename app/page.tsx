import GameBar from "@/components/GameBar";
import { GameProvider } from "@/components/GameContext";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <>
      <GameProvider>
        <div className='text-center'>
          <h1>Minesweeper</h1>
          <h2>Created by Abul Chowdhury</h2>
        </div>
        <GameBar></GameBar>
        <Grid />
      </GameProvider>
    </>
  );
}
