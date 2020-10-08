using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Movie
    {   public string id { get; set;  }
        public string titulo { get; set; }
        public int ano { get; set; }
        public float nota { get; set; }
    }
}
