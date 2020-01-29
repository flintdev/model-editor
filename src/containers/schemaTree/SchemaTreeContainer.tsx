// src/containers/schemaTree/SchemaTreeContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {SchemaTreeState, StoreState} from "../../redux/state";
import * as actions from "../../redux/modules/schemaTree/actions";
import * as fieldPanelActions from '../../redux/modules/fieldPanel/actions';
import {EditorData, TreeNode as TreeNodeInterface} from "../../interface";
import FieldPanelContainer from "../fieldPanel/FieldPanelContainer";
import NodeTypeTag from "../../components/NodeTypeTag";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import {getRootNode} from "../../constants";
import {SchemaParser} from "../../controllers/utils/schemaParser";

const styles = createStyles({
    root: {},
    hidden: {
        display: 'none'
    },
    treeItemContent: {
        backgroundColor: 'white',
    },
    labelSpan: {
        paddingLeft: 10,
        paddingRight: 10,
        color: 'dimgrey',
    },
    nodeSpan: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 40
    },
});

export interface Props extends WithStyles<typeof styles>, SchemaTreeState {
    modelName: string,
    editorData?: EditorData,
    onUpdated?: (schemaData: object, editorData: object) => void,
    setTreeData: (treeData: Array<TreeNodeInterface>) => void,
    selectNode: (node: TreeNodeInterface | null) => void,
    openFieldPanel: (anchor: Element) => void,
}

interface TreeNodeMap {
    [key: string]: TreeNodeInterface
}

interface State {
    expandedKeys: string[],
}

class SchemaTreeContainer extends React.Component<Props, State> {
    state: State = {
        expandedKeys: ['root'],
    };

    componentDidMount(): void {
        this.reloadTreeData();
    }

    reloadTreeData = () => {
        const {editorData} = this.props;
        if (!!editorData?.treeData) {
            const {treeData} = editorData;
            this.props.setTreeData(treeData);
        } else {
            this.props.setTreeData([]);
        }
    };

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<object>, snapshot?: any): void {
        const {editorData, treeData, onUpdated, _mark} = this.props;
        if (prevProps._mark !== _mark) {
            const editorData: EditorData = {treeData: treeData};
            const schemaData = new SchemaParser(treeData).convertToOpenAPIV3Schema();
            if (!!onUpdated) onUpdated(schemaData, editorData);
        }
        if (prevProps.editorData !== editorData) {
            this.reloadTreeData();
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

    recurToRenderTreeNode = (node: TreeNodeInterface) => {
        const {classes} = this.props;
        const {id, name, type, children} = node;
        const label = (
            <span className={classes.nodeSpan}>
                {(!children || children.length === 0) && <span className={classes.labelSpan}>&bull;</span>}
                {name}&nbsp;&nbsp;
                <NodeTypeTag nodeType={type}/>&nbsp;&nbsp;
                {(type === "object" || (type === "array" && (!children || children.length === 0))) &&
                <IconButton
                    size={"small"}
                    onClick={this.handleNodeEditButtonClick(node)}
                >
                    <AddIcon fontSize={"inherit"}/>
                </IconButton>
                }
                {type !== "object" && type !== "array" &&
                <IconButton
                    size={"small"}
                    onClick={this.handleNodeEditButtonClick(node)}
                >
                    <EditIcon fontSize={"inherit"}/>
                </IconButton>
                }
                &nbsp;&nbsp;
            </span>);
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

    handleNodeEditButtonClick = (node: TreeNodeInterface) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        this.props.selectNode(node);
        this.props.openFieldPanel(event.currentTarget);
    };

    render() {
        const {classes, modelName, treeData, _mark} = this.props;
        const rootNode = getRootNode(modelName);
        return (
            <div className={classes.root}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    defaultExpanded={['root']}
                >
                    <TreeItem
                        label={
                            <span className={classes.nodeSpan}>
                                {modelName}&nbsp;&nbsp;
                                <IconButton
                                    size={"small"}
                                    onClick={this.handleNodeEditButtonClick(rootNode)}
                                >
                                    <AddIcon fontSize={"inherit"}/>
                                </IconButton>
                            </span>
                        }
                        key={'root'}
                        nodeId={'root'}
                    >
                        {treeData.map(node => this.recurToRenderTreeNode(node))}
                    </TreeItem>
                </TreeView>

                <FieldPanelContainer/>

                <div className={classes.hidden}>{_mark}</div>
            </div>

        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.schemaTree;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SchemaTreeAction | fieldPanelActions.FieldPanelAction>) => {
    return {
        setTreeData: (treeData: Array<TreeNodeInterface>) => dispatch(actions.setTreeData(treeData)),
        selectNode: (node: TreeNodeInterface) => dispatch(actions.selectNode(node)),
        openFieldPanel: (anchor: Element) => dispatch(fieldPanelActions.openFieldPanel(anchor)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SchemaTreeContainer));
