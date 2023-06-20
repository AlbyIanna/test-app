export default function GameStatus({ player, status }) {
  return (
    <div aria-live="polite">
      {
        status === 'in-progress'
          ? `${player}'s turn`
          : status === 'draw'
            ? "Draw"
            : status
      }
    </div>
  );
}
