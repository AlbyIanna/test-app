

export function calculateWinner(board, lineSize = 3, winLength = 3) {
  // create an array with all the horizontal lines
  const horizontals = []
  for (let i = 0; i < board.length; i += lineSize) {
    const line = []
    for (let j = i; j < i + lineSize; j++) {
      line.push(board[j])
    }
    horizontals.push(line)
  }

  // create an array with all the vertical lines
  const verticals = []
  for (let i = 0; i < lineSize; i++) {
    const line = []
    for (let j = i; j < board.length; j += lineSize) {
      line.push(board[j])
    }
    verticals.push(line)
  }

  // create an array with all the diagonal lines that are at least winLength long
  const diagonals = []
  for (let i = 0; i < lineSize; i++) {
    const line = []
    for (let j = i; j < board.length; j += lineSize + 1) {
      line.push(board[j])
    }
    if (line.length >= winLength) {
      diagonals.push(line)
    }
  }

  for (let i = 1; i < lineSize; i++) {
    const line = []
    for (let j = i; j < board.length; j += lineSize - 1) {
      line.push(board[j])
    }
    if (line.length >= winLength) {
      diagonals.push(line)
    }
  }

  // check all lines
  for (let line of [...horizontals, ...verticals, ...diagonals]) {
    const winner = checkLine(line, winLength)
    if (winner) {
      return winner
    }
  }

  return null
}

function checkLine(line, winLength) {
  // check if there's a streak of winLength in the line
  // return the winner if there is, otherwise return null
  let streak = 0
  let winner = null
  for (let i = 0; i < line.length; i++) {
    if (line[i] && line[i] === winner) {
      streak++
    } else {
      winner = line[i]
      streak = 1
    }
    if (streak === winLength) {
      return winner
    }
  }
  return null
}


export function isBoardFull(board) {
  return board.every((square) => square && square !== '')
}
