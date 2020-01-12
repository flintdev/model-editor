// src/ModelEditor/ModelEditor.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Provider} from 'react-redux';
import {store} from "src/redux/store";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {
    modelName: string,
    editorData?: object,
    onSaved?: (schemaData: object, editorData: object) => void,
}

class ModelEditor extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {classes, editorData, onSaved} = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>

                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(ModelEditor);
