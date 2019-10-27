export class Product {
    productId:number;
        name:string;
        public string Description { get; set; }
        public string Sku { get; set; }
        public string SkuGroup { get; set; }
        public double Price { get; set; }
        public int ManufacturerId { get; set; }
        public virtual Manufacturer Manufacturer { get; set; }
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }
        public string Color { get; set; }
        public virtual ICollection<Size> Sizes { get; set; }
        //public int ShopId { get; set; }
        //public virtual Shop Shop { get; set; }
        // public int CategoryId { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<ProductInShop> ProductInShops { get; set; }
}
