import {Param} from "../../../components/AutoForm/interface";

export const ParamsDef: Param[] = [
    {
        key: 'itemType',
        name: 'Item Type',
        type: 'select',
        defaultValue: 'string',
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