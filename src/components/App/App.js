import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../Containers/CardContainer'
import { connect } from 'react-redux'
import { addPokemon, setError, isLoading } from '../../Actions/index'

class App extends Component {

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon = async () => {

    try {
      const url = "http://localhost:3001/types"
      this.props.isLoading(true)
      const response = await fetch(url)
      const results = await response.json()
      this.props.addPokemon(results)
      this.props.isLoading(false)
    }
    catch(error){
      this.props.setError(error.message)
    }
  }

  render() {
    if(this.props.isLoading){
      return (
        <div>LOAAAAADING</div>
      )
    } else {
      return (
        <div className='App'>
          <h1 className='header'> POKéDEX </h1>
          <CardContainer />
        </div>
      );
    }
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
  setError: (message) => dispatch(setError(message)),
  isLoading: (bool) => dispatch(isLoading(bool))
})

export const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
