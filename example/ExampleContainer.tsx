// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
// @ts-ignore
import {editorDataSample1} from "./data/editorDataSample1";
import ModelEditor from "../src/ModelEditor";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
                <Tabs
                    value={1}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                >
                    <Tab label="New Model Editor"/>
                    <Tab label="Update Existing Editor"/>
                </Tabs>
                <div>
                    <ModelEditor
                        modelName={"ExampleModel"}
                        editorData={editorDataSample1}
                        onUpdated={(schemaData: object, editorData: object) => {
                            console.log('schemaData', schemaData);
                            console.log('editorData', editorData);
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
