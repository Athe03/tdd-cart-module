export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export class Cart {
  products: Product[] = [];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product): void {
    let exist = false;

    for (let i = 0; i< this.products.length; i ++) {
      if (this.products[i].id === product.id) {
        exist = true;
      }
    }

    if(exist === false) {
      this.products.push(product);
    }
  }

  removeProduct(productId: string): void {
    this.products.splice(this.products.findIndex(p => p.id === productId), 1);
  }

  getProductCount(): number {
    return this.products.length;
  }
}