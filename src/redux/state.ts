// redux/state.ts

import {TreeNode} from "../interface";

export interface SchemaTreeState {
    _mark: number, // used to force to render
    nodeSelected: TreeNode | null,
    treeData: TreeNode[],
}

export interface FieldPanelState {
    anchor: Element | undefined,

}

export interface StoreState {
    schemaTree: SchemaTreeState,
    fieldPanel: FieldPanelState,
}

export const initState: StoreState = {
    schemaTree: {
        _mark: 0,
        nodeSelected: null,
        treeData: [],
    },
    fieldPanel: {
        anchor: undefined,
    },
};
