// src/redux/modules/fieldPanel/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {FieldPanelAction} from "./actions";

export function reducer(state: object, action: FieldPanelAction) {
    switch (action.type) {
        case types.OPEN_FIELD_PANEL:
            return update(state, {
                anchor: {$set: action.anchor}
            });
        case types.CLOSE_FIELD_PANEL:
            return update(state, {
                anchor: {$set: undefined}
            });
        default:
            return state;
    }
}

export {FieldPanelAction};