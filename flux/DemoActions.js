import {ActionDispatcher} from '@amzn/spaceneedle-flux-lib';

export default {
    add(){
        // this will deliver message to every single register store
        // actionType are basically defined as constants
        // when we create a store, first thing it does is it register the handles in global registry dispatcher
        ActionDispatcher.dispatch(
            {
                actionType: 'add'
            }
        );
    }
};