// redux/state.ts

import {TreeNode} from "../interface";

export interface StoreState {
    schemaTree: {
        nodeSelected: object | null,
        treeData: Array<TreeNode>,
    }
}

export const initState: StoreState = {
    schemaTree: {
        nodeSelected: null,
        treeData: [],
    }
};