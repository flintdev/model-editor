//

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "src/redux/state";
import * as actions from "src/redux/modules/schemaTree/actions";
import { Tree, Switch } from 'antd';
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
        expandedKeys: ['root']
    };

    componentDidMount(): void {
        const {editorData} = this.props;
        if (!!editorData?.treeData) {
            const {treeData} = editorData;
            this.props.setTreeData(treeData);
        }
    }

    recurToGetNodeIds = (nodeIds: Array<string>, node: TreeNodeInterface) => {
        const {id, children} = node;
        nodeIds.push(id);
        if (!!children) {
            children.forEach(node => this.recurToGetNodeIds(nodeIds, node));
        }
    };

    getAllNodeIds = (treeData: Array<TreeNodeInterface>) => {
        let nodeIds: Array<string> = ['root'];
        treeData.forEach(node => {
            this.recurToGetNodeIds(nodeIds, node);
        });
        return nodeIds;
    };

    recurToRenderTreeNode = (node: TreeNodeInterface) => {
        const {id, name, type, children} = node;
        return (
            <TreeNode title={name} key={id}>
                {!!children && children.map(node => this.recurToRenderTreeNode(node))}
            </TreeNode>
        )
    };

    handleSwitchChange = (checked: boolean) => {
        const {treeData} = this.props;
        let expandedKeys: Array<string>;
        if (checked) {
            expandedKeys = this.getAllNodeIds(treeData);
        } else {
            expandedKeys = ['root'];
        }
        this.setState({expandedKeys});
    };

    render() {
        const {classes, modelName, treeData, nodeSelected} = this.props;
        const {expandedKeys} = this.state;
        return (
            <div className={classes.root}>
                <Switch
                    onChange={this.handleSwitchChange}
                    checkedChildren={"Expanded All"}
                    unCheckedChildren={"Collapsed"}
                />
                <br />
                <Tree
                    defaultExpandedKeys={expandedKeys}
                    // expandedKeys={expandedKeys}
                >
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
