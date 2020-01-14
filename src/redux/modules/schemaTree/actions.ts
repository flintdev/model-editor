// src/redux/modules/schemaTree/actions.ts

import * as types from './types';
import {TreeNode} from "../../../interface";

export interface SelectNode {
    type: typeof types.SELECT_NODE,
    node: TreeNode,
}

export function selectNode(node: TreeNode): SelectNode {
    return { type: types.SELECT_NODE, node }
}

export interface SetTreeData {
    type: typeof types.SET_TREE_DATA,
    treeData: Array<TreeNode>,
}

export function setTreeData(treeData: Array<TreeNode>): SetTreeData {
    return { type: types.SET_TREE_DATA, treeData }
}

export interface RemoveNode {
    type: typeof types.REMOVE_NODE,
    node: TreeNode,
}

export function removeNode(node: TreeNode): RemoveNode {
    return { type: types.REMOVE_NODE, node }
}

export type SchemaTreeAction = SelectNode | SetTreeData | RemoveNode;

