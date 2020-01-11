// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>{

}

class ExampleContainer extends React.Component<Props, object> {
    state = {
    
    };
    
    componentDidMount(): void {
    
    }
    
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="New Model Editor" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Update Existing Editor" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
