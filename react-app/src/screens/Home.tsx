import React, {Component} from 'react';
import { IMovie } from '../classes/MoviesServer';
import Result from './Result';
import Select from './Select';
import {withSnackbar, ProviderContext} from 'notistack';

interface OwnProps extends ProviderContext {}

interface OwnState {
    moviesSelected: boolean;
    movies: Array<IMovie>;
}

class Home extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
        moviesSelected: false,
        movies: new Array<IMovie>(),
    };
  }

  shouldComponentUpdate(nextProps: Readonly<OwnProps>, nextState: Readonly<OwnState>){
      console.log("This State Movies: ",this.state.movies, "Next State Movies: ",nextState.movies);
      this.forceUpdate();
      return nextState !== this.state;
  }

  onSelectedMovies(movies:Array<IMovie>) {
    if(movies.length !== 8){
        this.props.enqueueSnackbar('Favor selecionar exatamente 8 filmes', {variant: 'error'});
    }
    else{
        this.setState({movies, moviesSelected: true});
    }
  }

  render() {
    return (
    <>
        {!this.state.moviesSelected && <Select 
            onMovieSelected={movies => { 
                this.onSelectedMovies(movies)
            }}/>}
        {this.state.moviesSelected && <Result 
            movies={this.state.movies} 
            returnMovieSelection={ () => 
                this.setState({ moviesSelected: false})
            }/>}
        
    </>);
  }
}

export default withSnackbar(Home);