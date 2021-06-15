import ConcreteProductB from './ConcreteProductA';
import { Creator } from './Creator';
import { IProduct } from './IProduct';

export class ConcreteCreatorB extends Creator {
  public createProduct(): IProduct {
    return new ConcreteProductB();
  }
}
