// src/redux/modules/fieldPanel/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {FieldPanelAction} from "./actions";

export function reducer(state: object, action: FieldPanelAction) {
    switch (action.type) {

        default:
            return state;
    }
}

export {FieldPanelAction};