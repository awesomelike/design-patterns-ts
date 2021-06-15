import { IProduct } from './IProduct';

export default class ConcreteProductA implements IProduct {
  public doOperation(): string {
    return '[Result of the ConcreteProductA]';
  }
}
