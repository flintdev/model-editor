// src/containers/fieldPanel/ActionBox/ActionBox.tsx
// Actions: Add subfield node, add parallel field, remove field

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../../../redux/state";
import * as actions from "../../../redux/modules/fieldPanel/actions";
import * as schemaTreeActions from '../../../redux/modules/schemaTree/actions';
import Button from "@material-ui/core/Button";

const styles = createStyles({
    root: {
        
    },
});

export interface Props extends WithStyles<typeof styles>, StoreState{
    removeNode: () => void,
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
                variant={"outlined"}
                color={"secondary"}
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
