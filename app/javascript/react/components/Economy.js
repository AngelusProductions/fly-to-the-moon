import React from 'react'

const Economy = ( props => {

  const ALPHABET = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
  const rows = props.dimensions[0]
  const section = props.section
  const seatsOffset = props.seats[0].id - 1
  const rowsOffset = props.rowsOffset

  let i, j, k, l, seatClass, number, onClick, id, key
  let seats = [], letters = [], occupiedSeatIds = []
  let columns = props.dimensions[1] + 1
  let aisleIndicies = [Math.floor(columns / 2)]
  let keyOffset = 0

  const aisleInset = Math.floor(columns / 3)
  if (props.section === "economy") {
    columns += 1
    aisleIndicies = [aisleInset - 1, columns - aisleInset]
  }

  props.seats.forEach( seat => { if (seat.occupied) { occupiedSeatIds.push(seat.id) } })

  function drawLetters (i) {
    let letter = ""
    if (!aisleIndicies.includes(i)) { letter = ALPHABET[i] }
    letters.push( <div className="letter" key={i}>{letter}</div> )
  }

  function drawRows (columns, rowNum) {
    for (j = 0; j < columns; j++) {
      key = (j + 1) + (rowNum - 1) * columns + seatsOffset
      if (aisleIndicies.includes(j)) {
        id = null
        number = rowNum + rowsOffset
        seatClass = "aisle"
        onClick = null
        keyOffset++
      } else {
        id = key - keyOffset
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
                .${section} {
                  grid-template-columns: repeat(${columns}, 1fr);
                  width: ${widthPercent}%;
                }
              `}} />
 return(
   <div className={section}>
    {letters}
    {seats}
    {style}
   </div>
 )
})

export default Economy
