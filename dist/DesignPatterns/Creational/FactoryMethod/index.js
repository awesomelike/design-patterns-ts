"use strict";
class ConcreteProduct1 {
    ds() {
        console.log('hello');
    }
}
class Creator {
    someOperation() {
        const product = this.createProduct();
        return `Creator: The same creator's code worked for ${product.doOperation()}`;
    }
}
