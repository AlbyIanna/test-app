export default function GameBoard({ board, onChange, hasEnded, player, lineSize }) {
  console.log(board)
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${lineSize}, 1fr)`, width: "100%" }}>
        {board.map((cell, index) => {
          const isDisabled = hasEnded || cell !== '';

          return (
            <button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                color: '#000',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                borderRadius: 0,
                cursor: isDisabled ? 'default' : 'pointer',
                aspectRatio: 1,
                fontSize: 'min(48px, 10vw)',
              }}
              aria-label={cell === '' ? `Mark cell ${index + 1} as ${player}` : `Cell ${index + 1} marked as ${cell}`}
              key={index}
              onClick={() => onChange(index)}
              disabled={isDisabled}
            >
              <span aria-hidden="true">
                {cell}
              </span>
            </button>
          )
        })
        }
      </div>
    </div>
  );
}
