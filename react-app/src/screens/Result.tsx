import React, {Component} from 'react'; 
import {Box, Button, Typography} from '@material-ui/core';
import { IMovie, rankMovies } from '../classes/MoviesServer';
import {withSnackbar, ProviderContext} from 'notistack';



interface OwnProps extends ProviderContext{
  movies: Array<IMovie>;
  returnMovieSelection(): void;
}

interface OwnState {
  winners:  Array<IMovie>;
}


class Result extends Component<OwnProps, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      winners: new Array<IMovie>()
    };
  }

  async componentDidMount(){
    var response = await rankMovies(this.props.movies);
    if(response !== undefined){
      this.setState({winners: response});
      this.props.enqueueSnackbar('Campeonato realizado com sucesso!', {variant: 'success'})
    }
  }



  render() {
    return (
      <Box>
        <Box p={10}>
          <Typography style={{fontSize: '60px'}}>Resultado Final</Typography>
        </Box>
        {this.state.winners.map((movie, index) => {
          if(index === 0 ){
            return (
              <Typography key={movie.id}>{`1º Lugar - ${movie.titulo}`}</Typography>
            )
          }
          else{
            return (
              <Typography key={movie.id}>{`2º Lugar - ${movie.titulo}`}</Typography>
            )
          }
        })}
          <Button variant="contained" onClick={() => this.props.returnMovieSelection()}>Voltar</Button>
      </Box>
    );
  }
}

export default withSnackbar(Result);

