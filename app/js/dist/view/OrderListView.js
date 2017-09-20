System.register(["./index", "../helper/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, OrderListView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            OrderListView = class OrderListView extends index_1.View {
                template(model) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                
                <tbody>
                ${model.list.map(order => `
                    <tr>
                        <td>${index_2.DateHelper.textFromDate(order.date)}</td>
                        <td>${order.amount}</td>
                        <td>${order.price}</td>
                        <td>${order.total}</td>
                    </tr>
                `).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.total}</td>
                    </tr>
                </tfoot>
            </table>
        `;
                }
            };
            exports_1("OrderListView", OrderListView);
        }
    };
});
