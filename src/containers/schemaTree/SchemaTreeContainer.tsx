// src/containers/schemaTree/SchemaTreeContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {SchemaTreeState, StoreState} from "../../redux/state";
import * as actions from "../../redux/modules/schemaTree/actions";
import {EditorData, TreeNode as TreeNodeInterface} from "../../interface";
import FieldPanelContainer from "../fieldPanel/FieldPanelContainer";
import NodeTypeTag from "../../components/NodeTypeTag";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const styles = createStyles({
    root: {},
    hidden: {
        display: 'none'
    }
});

export interface Props extends WithStyles<typeof styles>, SchemaTreeState {
    modelName: string,
    editorData: EditorData,
    setTreeData?: (treeData: Array<TreeNodeInterface>) => void,
    selectNode?: (node: TreeNodeInterface) => void,
}

interface TreeNodeMap {
    [key: string]: TreeNodeInterface
}

class SchemaTreeContainer extends React.Component<Props, object> {
    state = {
        expandedKeys: ['root']
    };
    treeNodeMap: TreeNodeMap = {};

    componentDidMount(): void {
        const {editorData} = this.props;
        if (!!editorData?.treeData) {
            const {treeData} = editorData;
            this.props.setTreeData(treeData);
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<object>, snapshot?: any): void {
        const {treeData} = this.props;
        if (prevProps.treeData !== treeData) {
            this.treeNodeMap = this.getTreeNodeMap(treeData);
        }
    }

    recurToGetNodeIds = (nodeIds: Array<string>, node: TreeNodeInterface) => {
        const {id, children} = node;
        nodeIds.push(id);
        if (!!children) {
            children.forEach(node => this.recurToGetNodeIds(nodeIds, node));
        }
    };

    recurToGetTreeNodeMap = (treeNodeMap: TreeNodeMap, node: TreeNodeInterface) => {
        const {id, children} = node;
        if (!treeNodeMap.hasOwnProperty(id)) {
            treeNodeMap[id] = node;
        }
        if (!!children) {
            children.forEach(node => this.recurToGetTreeNodeMap(treeNodeMap, node));
        }
    };

    getTreeNodeMap = (treeData: TreeNodeInterface[]) => {
        let treeNodeMap: TreeNodeMap = {};
        treeData.forEach(node => {
            this.recurToGetTreeNodeMap(treeNodeMap, node);
        });
        return treeNodeMap;
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
        const label = (<span>{name}&nbsp;&nbsp;<NodeTypeTag nodeType={type}/></span>);
        const props = {nodeId: id, label, key: id};
        const treeItem = !!children && children.length > 0 ? (
            <TreeItem {...props}>
                {!!children && children.map(node => this.recurToRenderTreeNode(node))}
            </TreeItem>
        ) : (
            <TreeItem {...props}/>

            );
        return (
            <React.Fragment key={id}>
                {treeItem}
            </React.Fragment>
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

    handleTreeNodeSelect = (selectedKeys: string[]) => {
        if (selectedKeys.length > 0) {
            const nodeId = selectedKeys[0];
            let treeNodeSelected: TreeNodeInterface;
            if (nodeId === 'root') {
                treeNodeSelected = {id: nodeId, type: "root", name: this.props.modelName};
            } else {
                treeNodeSelected = this.treeNodeMap[nodeId];
            }
            this.props.selectNode(treeNodeSelected);
        } else {
            this.props.selectNode(null);
        }
    };

    handleNodeButtonClick = (node: TreeNodeInterface) => () => {
        this.props.selectNode(node);
    };

    render() {
        const {classes, modelName, treeData, nodeSelected, _mark} = this.props;
        return (
            <div className={classes.root}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    defaultExpanded={['root']}
                >
                    <TreeItem label={modelName} key={'root'} nodeId={'root'}>
                        {treeData.map(node => this.recurToRenderTreeNode(node))}
                    </TreeItem>
                </TreeView>

                <div className={classes.hidden}>{_mark}</div>
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
        selectNode: (node: TreeNodeInterface) => dispatch(actions.selectNode(node)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SchemaTreeContainer));
