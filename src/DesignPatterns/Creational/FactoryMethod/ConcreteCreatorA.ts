import ConcreteProductA from './ConcreteProductA';
import { Creator } from './Creator';
import { IProduct } from './IProduct';

export class ConcreteCreatorA extends Creator {
  public createProduct(): IProduct {
    return new ConcreteProductA();
  }
}
