import { loadingReducer } from '../Reducers/loadingReducer'
import * as actions from '../Actions/index'

describe('loadingReducer', () => {
  it('should return intital state', () => {
    const expected = false
    const result = loadingReducer(undefined, false)
    expect(result).toEqual(expected)
  })

  it('should set the sate of loading', () => {
    const action ={type: 'IS_LOADING', bool: false}
    const expected = false
    const result = loadingReducer(undefined , action)
    expect(result).toEqual(expected)
  })
})