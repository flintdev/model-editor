// src/redux/modules/fieldPanel/actions.ts

import * as types from './types';

export interface AddSubfield {
    type: typeof types.ADD_SUBFIELD,
}

export function addSubfield(): AddSubfield {
    return { type: types.ADD_SUBFIELD }
}

export interface OpenFieldPanel {
    type: typeof types.OPEN_FIELD_PANEL,
    anchor: Element | undefined
}

export function openFieldPanel(anchor: Element): OpenFieldPanel {
    return { type: types.OPEN_FIELD_PANEL, anchor }
}

export interface CloseFieldPanel {
    type: typeof types.CLOSE_FIELD_PANEL,
}

export function closeFieldPanel(): CloseFieldPanel {
    return { type: types.CLOSE_FIELD_PANEL }
}


export type FieldPanelAction =
    OpenFieldPanel |
    CloseFieldPanel |
    AddSubfield;
