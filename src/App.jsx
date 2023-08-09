import { Container, Box, Grid, Typography, Button } from '@mui/material'
import { useState } from 'react'

const boardInit = Array(9).fill('')
const winningMessage = "wins"

function App() {

  const [board, setBoard] = useState(boardInit)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)

  function handleBoxClick(index) {
    // check if the cell is empty AND if it's a winner
    if(board[index] === '') {
      const updatedBoard = [...board]
      updatedBoard[index] = currentPlayer
      setBoard(updatedBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  function handleRestart() {
    setBoard(boardInit)
  }

  function handleWinningCondition() {
    const spreadBoard = [...board]

    // CHECK IF THE BOARD IS FULL
    for(var i=0; i<=spreadBoard.length; i++) {
      console.log(spreadBoard[i])
    }

    var winningUser = ''
    if(spreadBoard[0] == spreadBoard[4] && spreadBoard[4] == spreadBoard[8] && spreadBoard[0] == spreadBoard[8]) {
      winningUser = spreadBoard[0]
    }
    else if(spreadBoard[2] == spreadBoard[4] && spreadBoard[4] == spreadBoard[6] && spreadBoard[2] == spreadBoard[6]) {
      winningUser = spreadBoard[2]
    }

    // horizontal conditions
    else if(spreadBoard[0] == spreadBoard[1] && spreadBoard[1] == spreadBoard[2] && spreadBoard[0] == spreadBoard[2]) {
      winningUser = spreadBoard[0]
    }
    else if(spreadBoard[3] == spreadBoard[4] && spreadBoard[4] == spreadBoard[5] && spreadBoard[3] == spreadBoard[5]) {
      console.log("masuk siniii cok")
      winningUser = spreadBoard[3]
    }
    else if(spreadBoard[6] == spreadBoard[7] && spreadBoard[7] == spreadBoard[8] && spreadBoard[6] == spreadBoard[8]) {
      console.log("masuk sini")
      winningUser = spreadBoard[6]
    }

    // vertical conditions
    else if(spreadBoard[0] == spreadBoard[3] && spreadBoard[3] == spreadBoard[6] && spreadBoard[0] == spreadBoard[6]) {
      winningUser = spreadBoard[0]
    }
    else if(spreadBoard[1] == spreadBoard[4] && spreadBoard[4] == spreadBoard[7] && spreadBoard[1] == spreadBoard[7]) {
      winningUser = spreadBoard[1]
    }
    else if(spreadBoard[2] == spreadBoard[5] && spreadBoard[5] == spreadBoard[8] && spreadBoard[2] == spreadBoard[8]) {
      winningUser = spreadBoard[2]
    }
    return winningUser
  }

  return (
    <>
      <Container
        sx={{
          width: '1000px',
        }}
      >
        <header>
          <Typography 
            variant='h4'
            color='primary'
            sx={{
              textAlign: 'center',
              mb: '15px'
            }}
          >
            TicTacToe Game
          </Typography>
        </header>
        <Container
          sx={{
            width: '400px',
          }}
        >
          <Grid container
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              spacing:'1',
            }}
            >
            {board.map((cell, index) => (
              <Grid item key={index}>
              <Button
                variant="outlined"
                onClick={() => handleBoxClick(index)}
                disabled={handleWinningCondition() ? true : false}
                sx={{
                  width: '100px',
                  height: '100px',
                  border: 'solid 4px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '40px',
                    color:"{cell == 'X' ? 'green' : 'red'}"
                  }}
                >
                  {cell}
                </Typography>
              </Button>
            </Grid>
            ))}
            { handleWinningCondition() ? 
              <Button 
                variant="contained"
                sx={{
                  mt: '20px',
                }}
                onClick={() => handleRestart()}
              >
                Restart
              </Button> : ""
            }
          </Grid>
          <Typography 
            variant="h4"
            textAlign="center"
            marginTop="20px"
          >
            {
              handleWinningCondition() ? 
                handleWinningCondition() + " wins"
              : ""
            }
          </Typography>
        </Container>
      </Container>
    </>
  )
}

export default App
