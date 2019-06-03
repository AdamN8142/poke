export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
})

export const setError = (message) => ({
  type: 'SET_ERROR',
  message
})

export const isLoading = (bool) => ({
  type:'IS_LOADING',
  bool
})