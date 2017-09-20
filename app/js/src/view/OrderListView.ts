import { OrderList } from '../model/index';
import { View } from './index';
import { DateHelper } from '../helper/index';

export class OrderListView extends View<OrderList> {

    template(model: OrderList) {

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
                ${model.list.map(order =>
                `
                    <tr>
                        <td>${DateHelper.textFromDate(order.date)}</td>
                        <td>${order.amount}</td>
                        <td>${order.price}</td>
                        <td>${order.total}</td>
                    </tr>
                `
                ).join('')}
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
}