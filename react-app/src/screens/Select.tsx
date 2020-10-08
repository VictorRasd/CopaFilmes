import React, {Component} from 'react'; 
import {Box, Typography, Button, FormControl, Checkbox, FormControlLabel} from '@material-ui/core';
import { IMovie, readAllMovies } from '../classes/MoviesServer';
import {withSnackbar, ProviderContext} from 'notistack';


interface OwnProps extends ProviderContext{
   onMovieSelected( movies :Array<IMovie>): void;
}

interface OwnState {
    movies: Array<IMovie>;
    selectedMovies: Array<IMovie>;
}



class Select extends Component<OwnProps, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
        movies: new Array<IMovie>(),
        selectedMovies: new Array<IMovie>(),
    };
  }

  handleCheckboxChange = (event: any) => {
    let newMovie: IMovie
    if(event.target.checked === true){
      this.state.movies.map(movie => {
        if(movie.titulo === event.target.name){
          newMovie = {
            id: movie.id,
            titulo: movie.titulo,
            ano: movie.ano,
            nota: movie.nota,
            checkbox: false,
          }
          const movies = this.state.selectedMovies;
          movies.push(newMovie);
          this.setState({
            selectedMovies: movies,
          })     
        }
      })
    }
    else{
      const movies = this.state.selectedMovies;
      for(let i = 0; i < movies.length ; i++){
        if(movies[i].titulo === event.target.name){
          movies.splice(i,1); 
          this.setState({
            selectedMovies: movies,
          })
          break;
        }
      }
    }
  };

  async componentDidMount(){
    var response = await readAllMovies();    
    this.setState({
      movies: response,
    })    
  }


  render() {
    return (
      <Box>
        <Box p={4}>
          <Typography style={{fontSize: '30px'}}>Fase de Seleção!</Typography>
          <Typography>Selecione 8 filmes que você deseja que entrem na competição e depois clique em "Gerar Meu Campeonato" para prosseguir!</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} p={2}>
          <Box display={'inline'} m={1}>
            <Typography>{`Selacionados ${this.state.selectedMovies.length} de 8 filmes.`}</Typography>
          </Box>
          <Box display={'inline'} m={1}> 
            <Button onClick={() => this.props.onMovieSelected(this.state.selectedMovies)}  variant="contained">Gerar meu Campeonato</Button>
          </Box>
        </Box>
        <Box>
            <FormControl>
            {this.state.movies.map(movie => (
              <Box display={'flex'} key={movie.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={movie.checkbox}
                      onChange={this.handleCheckboxChange}
                      name={movie.titulo}
                    />
                  }
                  label= {`${movie.titulo} (${movie.ano}) `}
                />
              </Box>
            ))}
          </FormControl>
        </Box>
      </Box>  
    );
  }
}

export default withSnackbar(Select);

