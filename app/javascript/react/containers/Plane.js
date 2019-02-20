import React, { Component } from 'react'
import Section from '../components/Section'

class Plane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstDimensions: [10, 4],
      businessDimensions: [5, 6],
      economyDimensions: [30, 8],
      selectedSeatId: null,
      seats: []
    }
    this.selectSeat = this.selectSeat.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/seats')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ seats: data }) )
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  selectSeat(e) {
    const selectedSeatId = parseInt(e.target.id)
    if ( !this.state.seats[selectedSeatId - 1].occupied
      && selectedSeatId != this.state.selectedSeatId) {
      document.getElementById("audio").play()
      this.setState({ selectedSeatId: selectedSeatId })
    }
  }

  render() {
    let first = "", business = "", economy = ""
    let audio = <audio id="audio" src="https://s3.amazonaws.com/seats-project/SFX/pop.mp3" />

    if (this.state.seats.length > 0) {
      const firstSeats = this.state.seats.filter( seat => seat.section === "First" )
      const businessSeats = this.state.seats.filter( seat => seat.section === "Business" )
      const economySeats = this.state.seats.filter( seat => seat.section === "Economy" )

      const firstRows = this.state.firstDimensions[0]
      const businessRows = this.state.businessDimensions[0]

      const firstRowsOffset = 0
      const businessRowsOffset = firstRows
      const economyRowsOffset = businessRowsOffset + businessRows

      first =     <Section
                    seats={firstSeats}
                    section={"first"}
                    selectSeat={this.selectSeat}
                    selectedSeatId={this.state.selectedSeatId}
                    dimensions={this.state.firstDimensions}
                    rowsOffset={firstRowsOffset}
                  />
      business = <Section
                    seats={businessSeats}
                    section={"business"}
                    selectSeat={this.selectSeat}
                    selectedSeatId={this.state.selectedSeatId}
                    dimensions={this.state.businessDimensions}
                    rowsOffset={businessRowsOffset}
                  />
      economy = <Section
                    seats={economySeats}
                    section={"economy"}
                    selectSeat={this.selectSeat}
                    selectedSeatId={this.state.selectedSeatId}
                    dimensions={this.state.economyDimensions}
                    rowsOffset={economyRowsOffset}
                  />
      }

        if (this.state.seats.length > 0) {
          const firstSeats = this.state.seats.filter( seat => seat.section === "First" )
          const businessSeats = this.state.seats.filter( seat => seat.section === "Business" )
          const economySeats = this.state.seats.filter( seat => seat.section === "Economy" )

          const firstRows = this.state.firstDimensions[0]
          const businessRows = this.state.businessDimensions[0]

          const firstRowsOffset = 0
          const businessRowsOffset = firstRows
          const economyRowsOffset = businessRowsOffset + businessRows

          first =     <Section
                        seats={firstSeats}
                        section={"first"}
                        selectSeat={this.selectSeat}
                        selectedSeatId={this.state.selectedSeatId}
                        dimensions={this.state.firstDimensions}
                        rowsOffset={firstRowsOffset}
                      />
          business = <Section
                        seats={businessSeats}
                        section={"business"}
                        selectSeat={this.selectSeat}
                        selectedSeatId={this.state.selectedSeatId}
                        dimensions={this.state.businessDimensions}
                        rowsOffset={businessRowsOffset}
                      />
          economy = <Section
                        seats={economySeats}
                        section={"economy"}
                        selectSeat={this.selectSeat}
                        selectedSeatId={this.state.selectedSeatId}
                        dimensions={this.state.economyDimensions}
                        rowsOffset={economyRowsOffset}
                      />
          }
    return (
      <div>
        {first}
        {business}
        {economy}
        {audio}
      </div>
    )
  }
}

export default Plane
