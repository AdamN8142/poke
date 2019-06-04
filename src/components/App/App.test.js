import { mapDispatchToProps, mapStateToProps } from './App'
import * as actions from '../../Actions/index'

describe('mapDispatchToProps', () => {
  it('return dispatch with pokemon', ()=> {
    const mockPokemon = [{b:1},{a:1}]
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.addPokemon(mockPokemon)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addPokemon(mockPokemon)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch an error msg if fetch failes', () => {
    const mockMessage = 'NOOOO'
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.setError(mockMessage)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setError(mockMessage)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch isLoading with bool', () => {
    const mockBool= false
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.isLoading(mockBool)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.isLoading(mockBool)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

describe('mapStateToProps', () => {
  it('should return an isloading prop', () => {
    const mockState = {
      loading: true,
      pokemon: [],
      error: ''
    }
    const expected = {
      loading: true,
      error: '',

      
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
  it('should return an error prop', () => {
    const mockState = {
      error: 'hello'
    }
    const expected = {
      loading: undefined,
      error: 'hello'
      
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})



