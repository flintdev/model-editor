// src/ModelEditor/ModelEditor.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Provider} from 'react-redux';
import {store} from "../redux/store";
import {ModelEditorProps} from "../interface";
import SchemaTreeContainer from "../containers/schemaTree/SchemaTreeContainer";

const styles = createStyles({
    root: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
});

export interface Props extends WithStyles<typeof styles>, ModelEditorProps {

}

class ModelEditor extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {classes, modelName, editorData, onSaved} = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>
                    <SchemaTreeContainer
                        modelName={modelName}
                        editorData={editorData}
                    />
                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(ModelEditor);
