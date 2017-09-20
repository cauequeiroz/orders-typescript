import { Message } from '../model/index';
import { View } from './index';

export class MessageView extends View<Message> {

    template(model: Message) {

        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '';
    }
}