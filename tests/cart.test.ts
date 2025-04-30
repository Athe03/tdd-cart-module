import { describe, expect, test, beforeEach } from "vitest";
import { Product, Cart } from "../src/cart";


const product: Product = {
  id: "1",
  name: "Product 1",
  price: 10,
  quantity: 1,
}

const product2: Product = {
  id: "2",
  name: "Product 2",
  price: 5,
  quantity: 7,
}

let cart: Cart = new Cart();

describe("cart module", () => {
  beforeEach(() => {
    cart = new Cart();
  })

  //Test add product
  test("should add a product", () => {
    expect(cart.getProductCount()).toEqual(0);
    
    cart.addProduct(product);

    expect(cart.getProductCount()).toEqual(1);
  })

  test("should add an existing product", () => {
    expect(cart.getProductCount()).toEqual(0);
    
    cart.addProduct(product);
    cart.addProduct(product);

    expect(cart.getProductCount()).toEqual(1);
  })

  // Test remove product
  test("should remove a product", () => {
    cart.addProduct(product);
    
    expect(cart.getProductCount()).toEqual(1);

    cart.removeProduct(product.id);

    expect(cart.getProductCount()).toEqual(0);
  })

  test("should remove a not existent product", () => {
    expect(cart.getProductCount()).toEqual(0);

    cart.removeProduct(product.id);

    expect(cart.getProductCount()).toEqual(0);
  })

  //Test the total number of products
  test("should calculate the total number of products", () => {
    expect(cart.getProductCount()).toEqual(0);

    cart.addProduct(product);
    cart. addProduct(product2);
    cart.removeProduct(product.id);

    expect(cart.getProductCount()).toEqual(1);
  })
});