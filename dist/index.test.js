"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test('should return the hello response', () => {
    expect(utils_1.getHelloMessage()).toBe('Hello');
});
