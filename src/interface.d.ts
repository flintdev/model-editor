
export enum NodeType {
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

interface NodeParamsBase {
    required: boolean
}

export interface StringNodeParams extends NodeParamsBase {
    minLength?: number,
    maxLength?: number,
    pattern?: string,
    options?: Array<string>,
}

export type NodeParams = StringNodeParams;

export interface TreeNode {
    type: NodeType,
    id: string,
    name: string,
    params: NodeParams,
    children?: Array<TreeNode>
}

export interface EditorData {
    treeData: Array<TreeNode>
}

export interface ModelEditorProps {
    modelName: string,
    editorData?: EditorData,
    onSaved?: (schemaData: object, editorData: object) => void,
}
