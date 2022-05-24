const board = [

    ['s', 'o', 's', 'o'],
  
    ['s', 'o', 'o', 's'],
  
    ['s', 's', 's', 's']
  
  ]
  
  
  function filterBoard(board, word) {
  
    let matches = 0
  
    for (let i = 0; i < board.length; i++) {
  
      for (let j = 0; j < board[i].length; j++) {
  
        const newMatches = {
  
          r: [], 
  
          d: [] , 
  
          c: []
  
        }
  
        for (let letterWord = 0; letterWord < word.length; letterWord++) {
  
          if (board[i] && board[i][j + letterWord]) {
  
            newMatches.r.push(board[i][j + letterWord])
  
          }
  
          if (board[i + letterWord] && board[i + letterWord][j]) {
  
            newMatches.c.push(board[i + letterWord][j])
  
          }
  
          if (board[i + letterWord] && board[i + letterWord][j + letterWord]) {
  
            newMatches.d.push(board[i + letterWord][j + letterWord]) 
  
          }
  
        }
    
        Object.keys(newMatches).forEach(key => {
  
          const matchedWord = newMatches[key].join('')
  
          if (matchedWord === word) {
  
            matches++;
  
          }
  
        })
  
      }
  
    }
  
    console.log(matches)
  
  }
  
  
  
  filterBoard(board, 'sos')