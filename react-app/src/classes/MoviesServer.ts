import Axios from 'axios';
import { SERVER_URL, TIMEOUT } from '../ServerSettings';

export interface IMovie {
    id: string;
    titulo: string;
    ano: number;
    nota: number;
    checkbox: boolean;
}

export async function readAllMovies() {
    try {
      const response = await Axios.get(SERVER_URL + '/getAllMovies');
      return response.data;
    } catch (error) {
      console.error('MoviesServer: readAll: error', error);
      return error;
    }
  }

export async function rankMovies(movies: IMovie[]){  
  let json = JSON.stringify(movies);
  try {
    const response = await Axios.post(
      SERVER_URL + '/calculateWinner',json,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: TIMEOUT
      }      
    );
    return response.data;
  } catch (error) {
    console.error('MovieServer: error', error);
    return error;
  }
}