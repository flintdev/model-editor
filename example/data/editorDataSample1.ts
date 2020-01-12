import {EditorData} from "../../src/interface";

export const editorDataSample1: EditorData = {
    treeData: [
        {
            id: 'root-creator',
            name: 'creator',
            type: 'object',
            children: [
                {
                    id: 'root-creator-name',
                    name: 'name',
                    type: 'string',
                }
            ]
        },
        {
            id: 'root-time',
            name: 'time',
            type: 'string',
        },
        {
            id: 'root-records',
            name: 'records',
            type: 'array',
            children: [
                {
                    id: 'root-records-items',
                    name: 'items',
                    type: 'string',
                }
            ]
        }
    ]
};