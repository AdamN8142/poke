import { errorReducer } from '../Reducers/errorReducer'
import * as actions from '../Actions/index'

describe('errorReducer', () => {
  it('should return intital state', () => {
    const expected =''
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return an error msg', () => {
    const action ={type: 'SET_ERROR', message: 'nope'}
    const expected = 'nope'
    const result = errorReducer('', action)
    expect(result).toEqual(expected)
  })
})