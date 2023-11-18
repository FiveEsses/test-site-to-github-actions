export class B {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() { return this.#name; }
    hi() { return `B Hello, ${this.name}`; }
};

export class C extends B {
    constructor(name) {
        super(name);
    }
    get name() { return `C${super.name}`; }
    hi() { return `C${super.hi()}`; }
};

export class D extends B {
    constructor(name) {
        super(name);
    }
    get name() { return `D${super.name}`; }
    hi() { return `D${super.hi()}`; }
};

// eof
