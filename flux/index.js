import React, {PureComponent} from 'react';
import {Button} from 'SpaceNeedleStyleGuide';
import DemoActions from 'src/actions/DemoActions';
import {connectToStores} from '@amzn/spaceneedle-flux-lib';
import DemoStore from '../../stores/DemoStore';

// create the instance of store you want to use
const demoStore = DemoStore.getInstance();

class StartViewV2 extends PureComponent {
    render() {
        return (
            <div>
                <Button qsStyle='primary' onClick={this._onClick}>Add</Button>
                <ul>
                    {
                        this.props.items.map(item => <li>{item}</li>)
                    }

                </ul>
            </div>
        );
    }
    _onClick(){
        DemoActions.add();
    }
}
// First parameter component name
// Second parameter is array of stores
// Third is call back function, when a store emits a event, then this call back function listens to that event
// export defualt should be defined here

// returned values are used above in the component
export default connectToStores(StartViewV2, [demoStore], () => {
    return {
        items: demoStore.getState(),
    };
});