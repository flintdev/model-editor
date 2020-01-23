// src/containers/fieldPanel/FieldPanelContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {StoreState} from "../../redux/state";
import * as actions from "../../redux/modules/fieldPanel/actions";
import * as schemaTreeActions from "../../redux/modules/schemaTree/actions";
import ActionBox from "./ActionBox";
import Popover from "@material-ui/core/Popover";
import StringFieldPanel from "./StringFieldPanel";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {DataHelper} from "../../controllers/utils/dataHelper";
import {NodeParams, TreeNode} from "../../interface";
import ObjectFieldPanel from "./ObjectFieldPanel";

const styles = createStyles({
    root: {},
    container: {
        width: 200,
    },
    popoverContent: {
        padding: 10,
    },
    buttonContainer: {
        marginTop: 10,
    }
});

export interface Props extends WithStyles<typeof styles>, StoreState {
    closeFieldPanel: () => void,
    setTreeData: (treeData: TreeNode[]) => void,
}

class FieldPanelContainer extends React.Component<Props, object> {
    state = {
        paramValues: {}
    };

    componentDidMount(): void {

    }

    handleSaveButtonClick = () => {
        const {schemaTree} = this.props;
        const {paramValues} = this.state;
        const {nodeSelected, treeData} = schemaTree;
        if (!nodeSelected) return false;
        const newTreeData = new DataHelper().updateNodeParamsInTreeData(treeData, nodeSelected.id, paramValues);
        this.props.setTreeData(newTreeData);
        this.props.closeFieldPanel();
    };

    handleParamValuesChange = (paramValues: NodeParams) => {
        this.setState({paramValues});
    };

    render() {
        const {classes, schemaTree, fieldPanel} = this.props;
        const {anchor} = fieldPanel;
        const {nodeSelected} = schemaTree;
        const nodeType = !!nodeSelected ? nodeSelected.type : null;
        return (
            <div className={classes.root}>
                <Popover
                    open={Boolean(anchor)}
                    anchorEl={anchor}
                    onClose={this.props.closeFieldPanel}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <div className={classes.popoverContent}>
                        {!!nodeSelected &&
                        <div className={classes.container}>
                            <ActionBox/>
                            {nodeType === 'string' &&
                            <StringFieldPanel
                                paramValues={nodeSelected.params}
                                onChange={this.handleParamValuesChange}
                            />
                            }
                            {(nodeType === "object" || nodeType === "root") &&
                            <ObjectFieldPanel/>
                            }
                            {nodeType !== 'object' && nodeType !== "root" &&
                            <div className={classes.buttonContainer}>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={this.handleSaveButtonClick}
                                >
                                    <SaveIcon/>&nbsp;Save
                                </Button>
                            </div>
                            }
                        </div>
                        }
                    </div>
                </Popover>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction | schemaTreeActions.SchemaTreeAction>) => {
    return {
        closeFieldPanel: () => dispatch(actions.closeFieldPanel()),
        setTreeData: (treeData: TreeNode[]) => dispatch((schemaTreeActions.setTreeData(treeData))),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FieldPanelContainer));
