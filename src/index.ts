interface Product {
  name: string;
  path?: string;
  price: number;
  inventoryCount?: number;
}

type ProductItem = Pick<Product, 'name' | 'price' | 'path'>;

const productList: ProductItem[] = [
  {
    name: 'product-a',
    price: 3800,
  },
  {
    name: 'product-b',
    price: 2200,
    path: 'images/prodct-b',
  },
];

productList.map((item) => {
  console.log(item.name);
});

