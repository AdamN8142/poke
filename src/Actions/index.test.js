import * as actions from './index.js'

describe('actions', () => {
  it('should return type "ADD_POKEMON with pokemon', () => {

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
})