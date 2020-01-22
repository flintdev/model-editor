// src/components/AutoForm/interface.ts

export type DataType = 'string' | 'number' | 'select'

export interface Param {
    key: string,
    name: string,
    type: DataType,
    options?: Array<string|number>,
    required?: boolean,
    defaultValue?: string|number
}

