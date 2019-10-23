using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Shop
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string Address { get; set; }
        public virtual Category Category { get; set; }

        public virtual ICollection<Product> Products { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
