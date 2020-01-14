// src/redux/modules/fieldPanel/actions.ts

import * as types from './types';
import {TreeNode} from "../../../interface";

export interface AddSubfield {
    type: typeof types.ADD_SUBFIELD,
}

export function addSubfield(): AddSubfield {
    return { type: types.ADD_SUBFIELD }
}

export type FieldPanelAction = AddSubfield;
