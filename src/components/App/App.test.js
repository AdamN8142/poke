import { mapDispatchToProps, mapStateToProps } from './App'

describe('mapDispatchToProps', () => {
  it('return dispatch with pokemon', ()=> {
    const mockPokemon = [{b:1},{a:1}]
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.addPokemon(mockPokemon)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addPokemon(mockPokemon)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})