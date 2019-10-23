using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
 
    public class Product
    {
        public virtual Manufacturer Manufacturer { get; set; }

        public virtual Company Company { get; set; }

        public virtual Shop Shop { get; set; }

        public virtual Category Category { get; set; }


    }
}
