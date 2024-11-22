import {BaseStore} from '@amzn/spaceneedle-flux-lib';
import _ from 'lodash';
import StoreSingletonMixin from 'src/stores/StoreSingletonMixin';

class DemoStore extends BaseStore{
    // name of the store
    displayName:string = 'DemoStore';
    state = [1, 2, 3];
    _initialize() {
        super._initialize.apply(this, arguments);
        this._bindAction('add', this._handleAdd);
    }
// this function is shown in stores
    getState() {
        return this.state;
    }

    _handleAdd() {
        this.state = [...this.state, this.state.length+1];
        (this: any)._emitChange('change');
    }
}

_.extend(DemoStore, StoreSingletonMixin);

export default DemoStore;