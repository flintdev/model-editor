// src/containers/fieldPanel/StringFieldPanel/definition.ts

import {Param} from "../../../components/AutoForm/interface";

export const ParamsDef: Param[] = [
    {
        key: 'format',
        name: 'Format',
        type: 'select',
        defaultValue: 'text',
        required: true,
        options: ['text', 'password', 'date', 'date-time', 'email', 'uri', 'hostname']
    },
    {
        key: 'minLength',
        name: 'Minimum Length',
        type: 'number',
        defaultValue: 1,
    },
    {
        key: 'maxLength',
        name: 'Maximum Length',
        type: 'number',
        defaultValue: 12,
    },
    {
        key: 'pattern',
        name: 'Pattern',
        type: 'string',
        defaultValue: '^',
    },
];