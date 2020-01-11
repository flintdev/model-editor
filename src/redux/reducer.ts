// src/redux/reducer.ts

import {StoreState} from "./state";
import {reducer as schemaTreeReducer, SchemaTreeAction} from "./modules/schemaTree/reducer";

export type Action = SchemaTreeAction;

export function reducer(state: StoreState, action: Action) {
    return {
        schemaTree: schemaTreeReducer(state.schemaTree, action),
    }
}
