using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Helper
{
    public class MovieDTO
    {
        public int ID { get; set; }
        public List<Movie> Movie { get; set; }
    }
}
