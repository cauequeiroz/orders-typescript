export class Order {

    constructor(
        readonly date: Date,
        readonly amount: number,
        readonly price: number
    ) {}

    get total(): number {

        return this.amount * this.price;
    }
}   