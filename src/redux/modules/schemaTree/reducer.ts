// src/redux/modules/schemaTree/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {SchemaTreeAction} from "./actions";

export function reducer(state: object, action: SchemaTreeAction) {
    switch (action.type) {
        case types.SELECT_NODE:
            return update(state, {
                nodeSelected: {$set: action.node},
            });
        case types.SET_TREE_DATA:
            return update(state, {
                treeData: {$set: action.treeData}
            });

        default:
            return state;
    }
}

export {SchemaTreeAction};
