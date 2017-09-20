System.register(["../model/index", "../view/index", "../helper/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, OrderController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            OrderController = class OrderController {
                constructor() {
                    this.orderList = new index_1.OrderList();
                    this.orderListView = new index_2.OrderListView('#orderListView');
                    this.message = new index_1.Message();
                    this.messageView = new index_2.MessageView('#messageView');
                    this.inputDate = document.querySelector('#date');
                    this.inputAmount = document.querySelector('#amount');
                    this.inputPrice = document.querySelector('#price');
                    this.orderListView.update(this.orderList);
                    this.messageView.update(this.message);
                }
                add(event) {
                    event.preventDefault();
                    let order = new index_1.Order(index_3.DateHelper.dateFromText(this.inputDate.value), parseInt(this.inputAmount.value), parseFloat(this.inputPrice.value));
                    this.orderList.add(order);
                    this.message.text = 'Order addded.';
                    this.orderListView.update(this.orderList);
                    this.messageView.update(this.message);
                }
            };
            exports_1("OrderController", OrderController);
        }
    };
});
