// src/redux/modules/fieldPanel/actions.ts

import * as types from './types';

// functions

export function addField(name: string, dataType: string): AddField {
    return { type: types.ADD_FIELD, name, dataType }
}

export function openFieldPanel(anchor: Element): OpenFieldPanel {
    return { type: types.OPEN_FIELD_PANEL, anchor }
}

export function closeFieldPanel(): CloseFieldPanel {
    return { type: types.CLOSE_FIELD_PANEL }
}

// interfaces

export interface AddField {
    type: typeof types.ADD_FIELD,
    name: string
    dataType: string,
}

export interface CloseFieldPanel {
    type: typeof types.CLOSE_FIELD_PANEL,
}

export interface OpenFieldPanel {
    type: typeof types.OPEN_FIELD_PANEL,
    anchor: Element | undefined
}


export type FieldPanelAction =
    OpenFieldPanel |
    CloseFieldPanel |
    AddField;
