import React from 'react'

const First = ( props => {

  const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const rows = props.dimensions[0]
  const columns = props.dimensions[1] + 1
  const aisleIndex = [Math.floor(columns / 2)]
  let i, j, k, l, seatClass, number, onClick, id, key
  let seats = [], letters = [], occupiedSeatIds = []
  let offset = 0

  props.seats.forEach( seat => { if (seat.occupied) { occupiedSeatIds.push(seat.id) } })

  function drawLetters (i) {
    let letter = ""
    if (i != aisleIndex) { letter = ALPHABET[i] }
    letters.push( <div className="letter" key={i}>{letter}</div> )
  }

  function drawRows (columns, rowNum) {
    for (j = 0; j < columns; j++) {
      key = (j + 1) + (rowNum - 1) * columns
      if (j === aisleIndex) {
        id = null
        number = rowNum
        seatClass = "aisle"
        onClick = null
        offset++
      } else {
        id = key - offset
        number = "";
        seatClass = "seat"
        onClick = props.selectSeat
      }
      if (occupiedSeatIds.includes(id)) { seatClass = "seat occupied" }
      if (props.selectedSeatId && props.selectedSeatId === id) { seatClass = "seat selected" }
      seats.push(
        <div
          onClick={onClick}
          className={seatClass}
          key={key}
          id={id}
        >{number}</div>
      )
    }
  }

  for (k = 0; k < columns; k++) { drawLetters(k) }
  for (l = 0; l < rows; l++) { drawRows(columns, l + 1) }

  const widthPercent = columns * 2.5 + 5
  let style = <style dangerouslySetInnerHTML={{__html: `
                .first {
                  grid-template-columns: repeat(${columns}, 1fr);
                  width: ${widthPercent}%;
                }
              `}} /> //mention it isn't the best way to approach things
 return(
   <div className="first">
    {letters}
    {seats}
    {style}
   </div>
 )
})

export default First
