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
import {Button} from "antd";

const styles = createStyles({
    root: {
        
    },
});

export interface Props extends WithStyles<typeof styles>, StoreState{
    removeNode?: () => void,
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
        return (
            <Button
                block type={"danger"} ghost
                onClick={this.handleRemoveNodeClick}
            >
                REMOVE FIELD
            </Button>
        )
    };

    handleRemoveNodeClick = () => {
        this.props.removeNode();
    };

    render() {
        const {classes, schemaTree, fieldPanel} = this.props;
        return (
            <div className={classes.root}>
                {this.renderRemoveFieldButton()}
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction | schemaTreeActions.SchemaTreeAction>) => {
    return {
        removeNode: () => dispatch(schemaTreeActions.removeNode()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ActionBox));
