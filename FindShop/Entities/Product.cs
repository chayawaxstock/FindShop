using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
 
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Sku { get; set; }
        public string SkuGroup { get; set; }
        public double Price { get; set; }
        public int ManufacturerId { get; set; }
        public virtual Manufacturer Manufacturer { get; set; }
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
        public int ShopId { get; set; }
        public virtual Shop Shop { get; set; }
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<ProductInShop> ProductInShops { get; set; }



    }
}
