import React, { Component } from 'react'
import { connect }  from 'react-redux'
import  { Card } from '../components/Card'


class CardContainer extends Component {


displayPokemon = () => {
  if(this.props.isLoading) {
    return (
      <div>
        LOADING
      </div>
    )
  } else {
    let pokemon = this.props.pokemon.map((poke)=> {
      return (<Card poke={poke}/>)
    })
    return pokemon
  }

  }

  render() {
    return (
      <div>
        <h1>{this.displayPokemon()}</h1>
      </div>
    )
  }
}



export const mapStateToProps = (state) => ({
  pokemon: state.pokemon 
})

export default connect(mapStateToProps)(CardContainer);