type Product = {
  name: string;
  price: number;
};

let products: Product[] = [
  { name: "books", price: 250 },
  { name: "exercise book", price: 300 },
];

// add product function utility

function addProduct(products: Product[], newProduct: Product) {
  // slice() retun a shalow arrayof the product
  // the same thing that help to modify the array
  //  without affecting the original array
  const updatedProducts = products.slice();
  updatedProducts.push(newProduct);
  return updatedProducts;
}

const newProduct = { name: "gomme", price: 435 };
const newProduct1 = { name: "vehicule", price: 454 };

products = addProduct(products, newProduct);
products = addProduct(products, newProduct1);

console.log(products);
