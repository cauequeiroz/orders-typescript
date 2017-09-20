import { OrderController } from './controller/OrderController';

let orderController = new OrderController();

( document.querySelector('.form') as Element )
    .addEventListener('submit', orderController.add.bind(orderController));