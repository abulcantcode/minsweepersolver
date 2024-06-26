import GameBar from "@/components/GameBar";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <>
      <div className='text-center'>
        <h1>Minesweeper</h1>
        <h2>Created by Abul Chowdhury</h2>
      </div>
      <GameBar />
      <Grid />
    </>
  );
}
