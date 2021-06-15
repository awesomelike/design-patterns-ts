import { IProduct } from './IProduct';

export default class ConcreteProductB implements IProduct {
  public doOperation(): string {
    return '[Result of the ConcreteProductB]';
  }
}
