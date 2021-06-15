import { IProduct } from './IProduct';

export abstract class Creator {
  public abstract createProduct(): IProduct;

  public someOperation(): string {
    const product = this.createProduct();
    return `Creator: The same creator's code worked for ${product.doOperation()}`;
  }
}
