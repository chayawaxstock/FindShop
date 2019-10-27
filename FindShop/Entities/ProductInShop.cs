using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductInShop
    {
        public int ShopId { get; set; }
        public virtual Shop Shop { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int stock { get; set; }

    }
}
