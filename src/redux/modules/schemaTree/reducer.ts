// src/redux/modules/schemaTree/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {SchemaTreeAction} from "./actions";
import {SchemaTreeState} from "../../state";
import {DataHelper} from "../../../controllers/utils/dataHelper";
import {TreeNode} from "../../../interface";

export function reducer(state: SchemaTreeState, action: SchemaTreeAction) {
    let newTreeData: TreeNode[];
    switch (action.type) {
        case types.SELECT_NODE:
            return update(state, {
                nodeSelected: {$set: action.node},
            });
        case types.SET_TREE_DATA:
            return update(state, {
                treeData: {$set: action.treeData}
            });
        case types.ADD_NODE:
            if (!state.nodeSelected) return state;
            newTreeData = new DataHelper().addTreeNode(state.treeData, state.nodeSelected.id, action.name, action.dataType);
            return update(state, {
                treeData: {$set: newTreeData},
                _mark: {$set: state._mark + 1}
            });
        case types.REMOVE_NODE:
            if (!state.nodeSelected) return state;
            newTreeData = new DataHelper().removeTreeNodeById(state.treeData, state.nodeSelected.id);
            return update(state, {
                treeData: {$set: newTreeData},
                _mark: {$set: state._mark + 1}
            });
        default:
            return state;
    }
}

export {SchemaTreeAction};
