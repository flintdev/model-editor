//

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {SchemaTreeState, StoreState} from "../../../redux/state";
import {ParamsDef} from "./definition";
import AutoForm from "../../../components/AutoForm";
import {NodeType} from "../../../interface";
import * as schemaTreeActions from "../../../redux/modules/schemaTree/actions";
import * as actions from "../../../redux/modules/fieldPanel/actions";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = createStyles({
    root: {

    },
    buttonContainer: {
        marginTop: 10,
    }
});

export interface Props extends WithStyles<typeof styles>, SchemaTreeState {
    addNode: (name: string, dataType: NodeType) => void,
    closeFieldPanel: () => void;
}

interface ParamValues {
    itemType?: NodeType,
}

interface State {
    paramValues: ParamValues
}

class ArrayFieldPanel extends React.Component<Props, object> {
    state: State = {
        paramValues: {}
    };

    componentDidMount(): void {

    }

    handleParamValuesChange = (paramValues: ParamValues) => {
        this.setState({paramValues});
    };

    handleAddButtonClick = () => {
        const {treeData, nodeSelected} = this.props;
        const {paramValues} = this.state;
        const {itemType} = paramValues;
        if (!nodeSelected || !itemType) return;
        this.props.addNode('items', itemType);
        this.props.closeFieldPanel();
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AutoForm
                    params={ParamsDef}
                    onChange={this.handleParamValuesChange}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        size={"small"}
                        onClick={this.handleAddButtonClick}
                    >
                        <AddIcon/>&nbsp;Add Items
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.schemaTree;
};

const mapDispatchToProps = (dispatch: Dispatch<schemaTreeActions.SchemaTreeAction | actions.FieldPanelAction>) => {
    return {
        addNode: (name: string, dataType: NodeType) => dispatch(schemaTreeActions.addNode(name, dataType)),
        closeFieldPanel: () => dispatch(actions.closeFieldPanel()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ArrayFieldPanel));
