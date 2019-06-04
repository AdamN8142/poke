import { pokemonReducer } from '../Reducers/pokemonReducer'
import * as actions from '../Actions/index'

describe('pokemonReducer', () => {
  it('should return intial state', ()=> {
    const expected = []
    const result = pokemonReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return pokemon', () => {
    const action = {type:'ADD_POKEMON', pokemon:[{reptar: 'says hi'}, {nope: 'say hi too'}]}
    const expected = [{reptar: 'says hi'}, {nope: 'say hi too'}]
    const result = pokemonReducer([], action)
    expect(result).toEqual(expected)
  })
})