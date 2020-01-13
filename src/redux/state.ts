// redux/state.ts

import {TreeNode} from "../interface";

export interface StoreState {
    schemaTree: {
        nodeSelected: TreeNode | null,
        treeData: Array<TreeNode>,
    },
    fieldPanel: object,
}

export const initState: StoreState = {
    schemaTree: {
        nodeSelected: null,
        treeData: [],
    },
    fieldPanel: {

    },
};