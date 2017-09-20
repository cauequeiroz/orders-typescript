System.register(["./controller/OrderController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OrderController_1, orderController;
    return {
        setters: [
            function (OrderController_1_1) {
                OrderController_1 = OrderController_1_1;
            }
        ],
        execute: function () {
            orderController = new OrderController_1.OrderController();
            document.querySelector('.form')
                .addEventListener('submit', orderController.add.bind(orderController));
        }
    };
});
