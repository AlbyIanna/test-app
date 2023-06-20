import { useState } from "react";
import TicTacToe from "../components/TicTacToe/TicTacToe";

export default function TicTacToePage() {
  const [winLengthInput, setWinLengthInput] = useState(3);
  const [lineSizeInput, setLineSizeInput] = useState(3);
  const [winLength, setWinLength] = useState(3);
  const [lineSize, setLineSize] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWinLength(winLengthInput);
    setLineSize(lineSizeInput);

  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Line size:
          <input type="number" value={lineSizeInput} onChange={(e) => setLineSizeInput(Number(e.target.value))} />
        </label>
        <label>
          Win length:
          <input type="number" value={winLengthInput} onChange={(e) => setWinLengthInput(Number(e.target.value))} />
        </label>
        <button type="submit">Start</button>
      </form>
      <TicTacToe lineSize={lineSize} winLength={winLength} />
    </div>
  )
}


