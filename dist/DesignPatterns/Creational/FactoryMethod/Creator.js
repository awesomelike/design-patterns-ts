"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Creator {
    someOperation() {
        const product = this.createProduct();
        return `Creator: The same creator's code worked for ${product.doOperation()}`;
    }
}
exports.default = Creator;
