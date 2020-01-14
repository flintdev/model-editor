// src/containers/fieldPanel/ActionBox/ActionBox.tsx
// Actions: Add subfield node, add parallel field, remove field

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "src/redux/state";
import * as actions from "src/redux/modules/fieldPanel/actions";
import * as schemaTreeActions from 'src/redux/modules/schemaTree/actions';
import {TreeNode} from "../../../interface";

const styles = createStyles({
    root: {
        
    },
});

export interface Props extends WithStyles<typeof styles>, StoreState{

}

class ActionBox extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    renderAddSubfieldButton = () => {
        const {nodeSelected} = this.props.schemaTree;

    };

    renderAddParallelFieldButton = () => {
        const {nodeSelected} = this.props.schemaTree;
    };

    renderRemoveFieldButton = () => {
        const {nodeSelected} = this.props.schemaTree;
    };

    render() {
        const {classes, schemaTree, fieldPanel} = this.props;
        return (
            <div className={classes.root}>
                
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction | schemaTreeActions.SchemaTreeAction>) => {
    return {
        removeNode: (node: TreeNode) => dispatch(schemaTreeActions.removeNode(node)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ActionBox));
