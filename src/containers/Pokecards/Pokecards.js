import React, { Component } from 'react'
import './Pokecards.css'
import { getPokemon, addStats } from '../../actions'
import { connect } from 'react-redux'
import Pokemon from 'pokemon-images'
import { generateUrl, padNumber } from '../../helpers/helper'
import data from '../../data/pokemon.json'

class Pokecards extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
    this.state = {
      disable: false
    }
  }

  async componentDidMount() {
    const { value } = this.generator.next()
    const initialFetch = await fetch(value)
    const pokemon = await initialFetch.json()
    this.props.handleFetch(pokemon.results)
  }

  determainHide = (done) => {
    if(done) {
      this.setState({disable: true})
    }
  }

  morePokemon = async () => {
    const { value, done } = this.generator.next()
    if(value) {
      const initialFetch = await fetch(value)
      const pokemon = await initialFetch.json()
      this.props.handleFetch(pokemon.results)
    }
    this.determainHide(done)
  }

  mappedPokemon = (pokemon) => {
    return pokemon.map((creature, index) => (
      <article key={`${creature}-${index}`}
               className='card'>
        <h3>{ padNumber(index + 1) }</h3>
        <img src={Pokemon.getSprite(creature.name)}/>
      </article>))
  }


  render() {
    const { pokemon } = this.props
    const { disable } = this.state
    return(
      <section className='pokecards-container'>
        <section className='cards'>
            {!pokemon.length ? null : this.mappedPokemon(pokemon)}
            <button
              disabled={disable}
              className='moar-pokemon'
              onClick={this.morePokemon}> load moar
            </button>
        </section>
      </section>
      )
  }
}

const mapStateToProps = ({getPokemon}) => ({pokemon:getPokemon})

const mapDispatchToProps = (dispatch) => ({
  stats:(pokemon, response) => dispatch(addStats(pokemon,response)),
  handleFetch: (results) => dispatch(getPokemon(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokecards)
