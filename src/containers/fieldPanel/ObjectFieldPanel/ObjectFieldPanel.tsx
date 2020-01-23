// src/containers/fieldPanel/ObjectFieldPanel/ObjectFieldPanel.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AutoForm from "../../../components/AutoForm";
import {ParamRef} from "./definition";
import {DefaultObject, NodeParams, NodeType, TreeNode as TreeNodeInterface} from "../../../interface";
import * as schemaTreeActions from "../../../redux/modules/schemaTree/actions";
import {SchemaTreeState, StoreState} from "../../../redux/state";
import * as actions from "../../../redux/modules/fieldPanel/actions";
import {DataHelper} from "../../../controllers/utils/dataHelper";

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
    name?: string,
    type?: NodeType,
}

interface State {
    paramValues: ParamValues
}

class ObjectFieldPanel extends React.Component<Props, object> {
    state: State = {
        paramValues: {}
    };

    componentDidMount(): void {

    }

    handleAddButtonClick = () => {
        const {treeData, nodeSelected} = this.props;
        const {paramValues} = this.state;
        const {name, type} = paramValues;
        if (!nodeSelected || !name || !type) return;
        this.props.addNode(name, type);
        this.props.closeFieldPanel();
    };

    handleParamValuesChange = (paramValues: ParamValues) => {
        this.setState({paramValues});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AutoForm
                    params={ParamRef}
                    onChange={this.handleParamValuesChange}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        size={"small"}
                        onClick={this.handleAddButtonClick}
                    >
                        <AddIcon/>&nbsp;Add Child Field
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ObjectFieldPanel));
