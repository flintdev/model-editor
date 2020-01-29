// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
// @ts-ignore
import {editorDataSample1} from "./data/editorDataSample1";
import ModelEditor from "../src/ModelEditor";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {EditorData} from "../src/interface";
import Button from "@material-ui/core/Button";

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>{

}

interface State {
    editorData: EditorData | undefined,
}

class ExampleContainer extends React.Component<Props, object> {
    state: State = {
        editorData: editorDataSample1
    };
    
    componentDidMount(): void {

    }

    handleButtonClick = () => {
        let editorData = this.state.editorData;
        editorData = !!editorData? undefined : editorDataSample1;
        this.setState({editorData});
    };
    
    render() {
        const {classes} = this.props;
        const {editorData} = this.state;
        console.log('editorData', editorData);
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
                    <Button onClick={this.handleButtonClick}>Toggle Editor Data</Button>
                    <ModelEditor
                        modelName={"ExampleModel"}
                        editorData={editorData}
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
