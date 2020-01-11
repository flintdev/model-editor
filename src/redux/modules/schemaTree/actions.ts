// src/redux/modules/schemaTree/actions.ts

import * as types from './types';

export interface SelectNode {
    type: typeof types.SELECT_NODE,
    node: object,
}

export function selectNode(node: object): SelectNode {
    return { type: types.SELECT_NODE, node }
}

export type SchemaTreeAction = SelectNode;

