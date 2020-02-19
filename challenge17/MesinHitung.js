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
    result() {
        console.log(this.x);
    }
}

export default MesinHitung;