// src/interface.ts

export type NodeType = "root" | "string" | "number" | "integer" | "boolean" | "array" | "object";

interface NodeParamsBase {
    required?: boolean
}

export interface StringNodeParams extends NodeParamsBase {
    format?: string,
    minLength?: number,
    maxLength?: number,
    pattern?: string,
    options?: Array<string>,
}

export interface NumberNodeParams extends NodeParamsBase {

}

export interface IntegerNodeParams extends NodeParamsBase {

}

export interface BooleanNodeParams extends NodeParamsBase {

}

export interface ArrayNodeParams extends NodeParamsBase {

}

export interface ObjectNodeParams extends NodeParamsBase {

}

export interface DefaultObject {
    [key: string]: string|number|undefined
}

export type NodeParams = DefaultObject | undefined;

export interface TreeNode {
    type: NodeType,
    id: string,
    name: string,
    params?: NodeParams,
    children?: Array<TreeNode>
}

export interface EditorData {
    treeData: Array<TreeNode>
}

export interface SchemaData {
    properties?: {
        [key: string]: object
    }
}

export interface ModelEditorProps {
    modelName: string,
    editorData?: EditorData,
    onUpdated?: (schemaData: object, editorData: object) => void,
}
