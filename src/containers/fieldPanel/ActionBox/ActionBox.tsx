// src/containers/fieldPanel/ActionBox/ActionBox.tsx
// Actions: Add child node, add parallel node, remove node

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "src/redux/state";
import * as actions from "src/redux/modules/fieldPanel/actions";

const styles = createStyles({
    root: {
        
    },
});

export interface Props extends WithStyles<typeof styles>{

}

class ActionBox extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.fieldPanel;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction>) => {
    return {
    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ActionBox));
