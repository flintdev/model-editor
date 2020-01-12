//

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "src/redux/state";
import * as actions from "src/redux/modules/schemaTree/actions";
import { Tree } from 'antd';
import {EditorData, TreeNode as TreeNodeInterface} from "../../interface";

const { TreeNode } = Tree;

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>{
    modelName: string,
    editorData: EditorData,
    treeData: Array<TreeNodeInterface>,
    nodeSelected: object | null,
    setTreeData?: (treeData: Array<TreeNodeInterface>) => void,
}

class SchemaTreeContainer extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {
        const {editorData} = this.props;
        if (!!editorData?.treeData) {
            const {treeData} = editorData;
            this.props.setTreeData(treeData);
        }
    }

    recurToRenderTreeNode = (node: TreeNodeInterface) => {
        const {id, name, type, children} = node;
        return (
            <TreeNode title={name} key={id}>
                {!!children && children.map(node => this.recurToRenderTreeNode(node))}
            </TreeNode>
        )
    };

    render() {
        const {classes, modelName, treeData, nodeSelected} = this.props;
        return (
            <div className={classes.root}>
                <Tree>
                    <TreeNode title={modelName} key={'root'}>
                        {treeData.map(node => this.recurToRenderTreeNode(node))}
                    </TreeNode>
                </Tree>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.schemaTree;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SchemaTreeAction>) => {
    return {
        setTreeData: (treeData: Array<TreeNodeInterface>) => dispatch(actions.setTreeData(treeData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SchemaTreeContainer));
