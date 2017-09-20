import { Order, OrderList, Message } from '../model/index';
import { OrderListView, MessageView } from '../view/index';
import { DateHelper } from '../helper/index';

export class OrderController {

    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputPrice: HTMLInputElement;

    private orderList = new OrderList();
    private orderListView = new OrderListView('#orderListView');
    
    private message = new Message();
    private messageView = new MessageView('#messageView');
    
    constructor() {

        this.inputDate = <HTMLInputElement>document.querySelector('#date');
        this.inputAmount = <HTMLInputElement>document.querySelector('#amount');
        this.inputPrice = <HTMLInputElement>document.querySelector('#price');

        this.orderListView.update(this.orderList);
        this.messageView.update(this.message);
    }

    add(event: Event): void {

        event.preventDefault();

        let order = new Order(
            DateHelper.dateFromText(this.inputDate.value),
            parseInt(this.inputAmount.value),
            parseFloat(this.inputPrice.value)
        );
        this.orderList.add(order);
        this.message.text = 'Order addded.';

        this.orderListView.update(this.orderList);
        this.messageView.update(this.message);
    }
}