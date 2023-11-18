export default class A {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() { return this.#name; }
    hi() { return `A Hello, ${this.name}`; }
};

// eof
