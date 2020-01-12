// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import { Tabs } from 'antd';
import {editorDataSample1} from "./data/editorDataSample1";
import ModelEditor from "../src/ModelEditor";

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
                <Tabs defaultActiveKey="2">
                    <TabPane tab="New Model Editor" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Update Existing Editor" key="2">
                        <ModelEditor
                            modelName={"ExampleModel"}
                            editorData={editorDataSample1}
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
