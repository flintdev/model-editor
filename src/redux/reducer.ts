// src/redux/reducer.ts

import {StoreState} from "./state";
import {reducer as schemaTreeReducer, SchemaTreeAction} from "./modules/schemaTree/reducer";
import {reducer as fieldPanelReducer, FieldPanelAction} from "./modules/fieldPanel/reducer";

export type Action = SchemaTreeAction & FieldPanelAction;

export function reducer(state: StoreState, action: Action) {
    return {
        schemaTree: schemaTreeReducer(state.schemaTree, action),
        fieldPanel: fieldPanelReducer(state.fieldPanel, action),
    }
}
