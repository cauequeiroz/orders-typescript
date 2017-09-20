import { Order } from './index';

export class OrderList {

    readonly list: Array<Order> = [];

    add(order: Order): void {

        this.list.push(order);
    }

    get total(): number {

        return this.list.reduce((total, current) => total += current.total, 0);
    }
}