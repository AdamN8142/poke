import { mapStateToProps } from '../Containers/CardContainer'

describe('mapStateToProps', () => {
  it('should map pokemans state to props', () => {
    const mockState = {
      pokemon: [{albert: 'is my name'}],
      loading: false,
      error: ''
    }
    const expected = {
      pokemon: [{albert: 'is my name'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})