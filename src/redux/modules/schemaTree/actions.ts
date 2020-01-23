// src/redux/modules/schemaTree/actions.ts

import * as types from './types';
import {NodeType, TreeNode} from "../../../interface";

// functions

export function selectNode(node: TreeNode): SelectNode {
    return { type: types.SELECT_NODE, node }
}

export function setTreeData(treeData: Array<TreeNode>): SetTreeData {
    return { type: types.SET_TREE_DATA, treeData }
}

export function addNode(name: string, dataType: NodeType): AddNode {
    return { type: types.ADD_NODE, name, dataType }
}

export function removeNode(): RemoveNode {
    return { type: types.REMOVE_NODE }
}

// interfaces

export interface SelectNode {
    type: typeof types.SELECT_NODE,
    node: TreeNode,
}

export interface SetTreeData {
    type: typeof types.SET_TREE_DATA,
    treeData: Array<TreeNode>,
}

export interface AddNode {
    type: typeof types.ADD_NODE,
    name: string,
    dataType: NodeType,
}

export interface RemoveNode {
    type: typeof types.REMOVE_NODE,
}

export type SchemaTreeAction =
    SelectNode |
    SetTreeData |
    AddNode |
    RemoveNode;

