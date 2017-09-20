System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrderList;
    return {
        setters: [],
        execute: function () {
            OrderList = class OrderList {
                constructor() {
                    this.list = [];
                }
                add(order) {
                    this.list.push(order);
                }
                get total() {
                    return this.list.reduce((total, current) => total += current.total, 0);
                }
            };
            exports_1("OrderList", OrderList);
        }
    };
});
