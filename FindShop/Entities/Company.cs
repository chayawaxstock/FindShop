using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
   public class Company
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(50), MinLength(2)]
        public string Name { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
