// src/redux/modules/schemaTree/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {SchemaTreeAction} from "./actions";
import {SchemaTreeState} from "../../state";
import {DataHelper} from "../../../controllers/utils/dataHelper";

export function reducer(state: SchemaTreeState, action: SchemaTreeAction) {
    switch (action.type) {
        case types.SELECT_NODE:
            return update(state, {
                nodeSelected: {$set: action.node},
            });
        case types.SET_TREE_DATA:
            return update(state, {
                treeData: {$set: action.treeData}
            });
        case types.REMOVE_NODE:
            const newTreeData = new DataHelper().removeTreeNodeById(state.treeData, state.nodeSelected.id);
            return update(state, {
                treeData: {$set: newTreeData},
                _mark: {$set: state._mark + 1}
            });
        default:
            return state;
    }
}

export {SchemaTreeAction};
