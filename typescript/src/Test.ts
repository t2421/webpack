import axios from 'axios';
console.log(axios);
export default class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

