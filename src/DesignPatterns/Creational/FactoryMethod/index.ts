import { ConcreteCreatorA } from './ConcreteCreatorA';
import { ConcreteCreatorB } from './ConcreteCreatorB';
import { Creator } from './Creator';

const main = (creator: Creator) => {
  // It does not know the class of the creator, but it works
  console.log(creator.someOperation());
};

console.log('Launched with ConcreteCreatorA');
main(new ConcreteCreatorA());

console.log('Launched with ConcreteCreatorB');
main(new ConcreteCreatorB());
