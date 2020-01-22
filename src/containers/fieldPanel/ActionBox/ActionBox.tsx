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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from "@material-ui/core/Chip";

const styles = createStyles({
    root: {
        
    },
    table: {
        width: '100%',
    },
    textRight: {
        textAlign: 'right'
    },
    chip: {
        borderRadius: 4,
    },
});

export interface Props extends WithStyles<typeof styles>, StoreState{
    removeNode: () => void,
    closeFieldPanel: () => void,
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
        this.props.closeFieldPanel();
    };

    render() {
        const {classes, schemaTree, fieldPanel} = this.props;
        const {nodeSelected} = schemaTree;
        const fieldName = !!nodeSelected? nodeSelected.name : '';
        return (
            <div className={classes.root}>
                <table className={classes.table}>
                    <tbody>
                    <tr>
                        <td>
                            <Chip label={fieldName} variant={"outlined"} className={classes.chip}/>
                        </td>
                        <td className={classes.textRight}>
                            <IconButton
                                size={"small"}
                                color={"secondary"}
                                onClick={this.handleRemoveNodeClick}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
        closeFieldPanel: () => dispatch(actions.closeFieldPanel()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ActionBox));
