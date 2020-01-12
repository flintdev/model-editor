// src/redux/modules/schemaTree/actions.ts

import * as types from './types';
import {TreeNode} from "../../../interface";

export interface SelectNode {
    type: typeof types.SELECT_NODE,
    node: object,
}

export function selectNode(node: object): SelectNode {
    return { type: types.SELECT_NODE, node }
}

export interface SetTreeData {
    type: typeof types.SET_TREE_DATA,
    treeData: Array<TreeNode>,
}

export function setTreeData(treeData: Array<TreeNode>): SetTreeData {
    return { type: types.SET_TREE_DATA, treeData }
}



export type SchemaTreeAction = SelectNode | SetTreeData;

