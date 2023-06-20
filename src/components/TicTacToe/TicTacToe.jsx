import { useEffect, useState } from "react";
import { calculateWinner, isBoardFull } from "./utils";
import GameStatus from "./GameStatus";
import GameBoard from "./GameBoard";




export default function TicTacToe({ lineSize = 3, winLength = 3 }) {
  const getInitialBoard = () => {
    return Array(lineSize ** 2).fill('');
  }
  const [gameStatus, setGameStatus] = useState('in-progress');
  const [board, setBoard] = useState(getInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleCellClick = (index) => {
    if (board[index] !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    const winner = calculateWinner(newBoard, lineSize, winLength);
    if (winner) {
      setGameStatus(`${winner}-won`);
    } else if (isBoardFull(newBoard)) {
      setGameStatus('draw');
    }
  }

  const handleReset = () => {
    setGameStatus('in-progress');
    setBoard(getInitialBoard());
    setCurrentPlayer('X');
  }

  useEffect(() => {
    handleReset();
  }, [lineSize, winLength]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <GameStatus player={currentPlayer} status={gameStatus} />
      <GameBoard player={currentPlayer}
        board={board}
        onChange={handleCellClick}
        hasEnded={gameStatus !== 'in-progress'}
        lineSize={lineSize} />
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
