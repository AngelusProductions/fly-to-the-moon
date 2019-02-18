import React, { Component } from 'react'
import FirstClass from '../components/FirstClass'

class SeatPickerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstRows: 7,
      firstColumns: 5,
      selectedSeatId: null
    }

    this.selectSeat = this.selectSeat.bind(this)
  }

  selectSeat(e) {
    debugger
  }

  render() {
    const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let width = this.state.firstColumns * 2.5 + 5
    let style = <style dangerouslySetInnerHTML={{__html: `
                  .first {
                    grid-template-columns: repeat(${this.state.firstColumns + 1}, 1fr);
                    width: ${width}%;
                  }
                `}} />
    return (
      <div>
        {style}
        <FirstClass
          ALPHABET={ALPHABET}
          selectSeat={this.selectSeat}
          firstRows={this.state.firstRows}
          firstColumns={this.state.firstColumns}
        />
      </div>
    )
  }
}

export default SeatPickerContainer
