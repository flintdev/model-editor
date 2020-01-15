// src/interface.d.ts

export type NodeType = "root" | "string" | "number" | "integer" | "boolean" | "array" | "object";

interface NodeParamsBase {
    required: boolean
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

export type NodeParams = StringNodeParams;

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

export interface ModelEditorProps {
    modelName: string,
    editorData?: EditorData,
    onSaved?: (schemaData: object, editorData: object) => void,
}
