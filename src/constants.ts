// src/constants.ts

import {TreeNode} from "./interface";

export enum NodeTypeOption {
    string = 'string',
    number = 'number',
    integer = 'integer',
    boolean = 'boolean',
    array = 'array',
    object = 'object',
}

export enum StringFormat {
    date = 'date',
    datetime = 'date-time',
    password = 'password',
    byte = 'byte',
    binary = 'binary'
}

export const getRootNode = (modelName: string): TreeNode => {
    return {
        id: 'root',
        name: modelName,
        type: 'root'
    }
};
