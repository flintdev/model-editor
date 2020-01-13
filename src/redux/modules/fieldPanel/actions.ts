import * as types from './types';

export interface AddChildField {
    type: typeof types.ADD_CHILD_FIELD,
}

export function addChildField(): AddChildField {
    return { type: types.ADD_CHILD_FIELD }
}

export type FieldPanelAction = AddChildField;
