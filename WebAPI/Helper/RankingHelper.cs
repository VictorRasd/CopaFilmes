using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Helper
{
    public class RankingHelper
    {
        public List<Movie> rankMovies(List<Movie> movies)
        {
            List<Movie> winners = new List<Movie>();
            movies.Sort(delegate (Movie x, Movie y) {
                return x.titulo.CompareTo(y.titulo);
            });
            List<Movie> qfWinners = new List<Movie>();
            qfWinners.Add(compareMovies(movies[0], movies[7]));
            qfWinners.Add(compareMovies(movies[1], movies[6]));
            qfWinners.Add(compareMovies(movies[2], movies[5]));
            qfWinners.Add(compareMovies(movies[3], movies[4]));

            List<Movie> sfWinners = new List<Movie>();
            sfWinners.Add(compareMovies(qfWinners[0], qfWinners[1]));
            sfWinners.Add(compareMovies(qfWinners[2], qfWinners[3]));

            Movie winner = compareMovies(sfWinners[0], sfWinners[1]);
            winners.Add(winner);
            foreach(Movie movie in sfWinners)
            {
                if(movie.titulo != winner.titulo)
                {
                    winners.Add(movie);
                }
            }
            return winners;
        }

        public Movie compareMovies(Movie a, Movie b)
        {
            if(a.nota > b.nota)
            {
                return a;
            }
            else if(b.nota > a.nota)
            {
                return b;
            }
            else
            {
                if (string.Compare(a.titulo, b.titulo) == 1)
                {
                    return b;
                }
                else if(string.Compare(a.titulo, b.titulo) == -1)
                {
                    return a;
                }
                return a;
            }
        }
    }
}
