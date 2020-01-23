// src/containers/fieldPanel/ObjectFieldPanel/definition.ts

import {Param} from "../../../components/AutoForm/interface";

export const ParamRef: Param[] = [
    {
        key: 'name',
        name: 'Field Name',
        type: 'string',
        required: true,
    },
    {
        key: 'type',
        name: 'Data Type',
        type: 'select',
        options: [
            'string',
            'number',
            'integer',
            'boolean',
            'object',
            'array'
        ]
    }
];