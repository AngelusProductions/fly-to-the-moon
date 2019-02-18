import React from 'react'

const FirstClass = ( props => {

  let seats = []
  let rows = props.firstRows
  let columns = props.firstColumns
  let i, seatClass, number, onClick, id, key
  let aisle = Math.floor(props.firstColumns / 2)

  function drawRows (columns, rowNumber) {
    for (i = 0; i < (columns + 1); i++) {
      key = (rowNumber - 1) * (columns + 1) + i + 1
      if (i === aisle) {
        id = null
        number = rowNumber
        seatClass = "aisle"
        onClick = null
      } else {
        id = `${props.ALPHABET[i]}-${rowNumber}`
        number = ""
        seatClass = "seat"
        onClick = props.selectSeat
      }
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

  let j
  for (j = 0; j < rows; j++) {
    drawRows(props.firstColumns, j + 1)
  }

 return(
   <div className="first-class-container">

     <div className="first">{seats}</div>
   </div>
 )
})

export default FirstClass
