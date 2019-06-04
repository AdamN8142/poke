import * as actions from './index.js'

describe('actions', () => {
  it('should return an obj type "ADD_POKEMON" and payload', () => {

    const pokemon = [
      {poke: 'joe'}, 
      {poke: 'fred'}
    ]
    const expected = {
      type: "ADD_POKEMON",
      pokemon
    }
    const result = actions.addPokemon(pokemon)
    expect(result).toEqual(expected)
  })

  it('should return an obj type "SET_ERROR" and payload', ()=> {
    const message = 'hello'
    const expected = {
      type: 'SET_ERROR',
      message
    }
    const result = actions.setError(message)
    expect(result).toEqual(expected)
  })

  it('should return an obj type "IS_LOADING" and payload', ()=> {
    const bool = true
    const expected = {
      type: 'IS_LOADING',
      bool
    }
    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })


})