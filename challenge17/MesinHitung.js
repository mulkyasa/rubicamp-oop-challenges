class MesinHitung {
    constructor() {
        this.x = 1;
    }
    add(number) {
        this.x = this.x + number;
        return this;
    }
    substract(number) {
        this.x = this.x - number;
        return this;
    }
    multiply(number) {
        this.x = this.x * number;
        return this;
    }
    divide(number) {
        this.x = this.x / number;
        return this;
    }
    square(number) {
        this.x = Math.pow(this.x, 2);
        return this;
    }
    exponent(number) {
        this.x = Math.pow(this.x, number);
        return this;
    }
    squareRoot(number) {
        this.x = Math.sqrt(this.x);
        return this;
    }
    result() {
        console.log(this.x);
    }
}

export default MesinHitung;