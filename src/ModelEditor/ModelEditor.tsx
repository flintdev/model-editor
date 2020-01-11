// src/ModelEditor/ModelEditor.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Provider} from 'react-redux';
import {store} from "src/redux/store";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {

}

class ModelEditor extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {classes} = this.props;
        return (
            <Provider store={store}>
                <div className={classes.root}>

                </div>
            </Provider>
        )
    }
}

export default withStyles(styles)(ModelEditor);
