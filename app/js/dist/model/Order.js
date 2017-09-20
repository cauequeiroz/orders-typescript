System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters: [],
        execute: function () {
            Order = class Order {
                constructor(date, amount, price) {
                    this.date = date;
                    this.amount = amount;
                    this.price = price;
                }
                get total() {
                    return this.amount * this.price;
                }
            };
            exports_1("Order", Order);
        }
    };
});
