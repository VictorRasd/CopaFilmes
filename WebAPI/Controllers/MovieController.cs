using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using WebAPI.Helper;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    public class MovieController : ControllerBase
    {
        [HttpGet("/getAllMovies")]
        [Route("/getAllMovies")]
        public async Task<List<Movie>> getAllMovies()
        {
            List<Movie> movies = new List<Movie>();

            var httpClient = HttpClientFactory.Create();

            var url = "http://copafilmes.azurewebsites.net/api/filmes";
            HttpResponseMessage httpResponseMessage = await httpClient.GetAsync(url);

            if(httpResponseMessage.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var content = httpResponseMessage.Content;
                var jsonString = await content.ReadAsStringAsync();
                JArray jarray = JArray.Parse(jsonString);
                foreach(JObject movie in jarray)
                {
                    Movie filme = new Movie();
                    filme.id = movie.GetValue("id").ToString();

                    JToken tokenAno = movie.GetValue("ano");
                    filme.ano = tokenAno.ToObject<int>();

                    JToken tokenNota = movie.GetValue("nota");
                    filme.nota = tokenNota.ToObject<float>();

                    filme.titulo = movie.GetValue("titulo").ToString();

                    movies.Add(filme);
                }                
            }
            return movies;
        }

        [HttpPost("/calculateWinner")]
        [Route("/calculateWinner")]
        public async Task<List<Movie>> calculateWinner([FromBody] List<Movie> receivedMovies) {
            
            List<Movie> winners = new List<Movie>();
            RankingHelper rh = new RankingHelper();
            winners = rh.rankMovies(receivedMovies);     
            return winners;
        }



    }
}
