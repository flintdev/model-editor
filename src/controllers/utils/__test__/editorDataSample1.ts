import {EditorData} from "../../../interface";

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
                    params: {
                        format: 'test',
                        minLength: 1,
                        pattern: '^123'
                    }
                },
                {
                    id: 'root-creator-password',
                    name: 'password',
                    type: 'string',
                }
            ]
        },
        {
            id: 'root-time',
            name: 'time',
            type: 'string',
            params: {
                format: 'date',
                minLength: 2,
                pattern: '^234'
            }
        },
        {
            id: 'root-records',
            name: 'records',
            type: 'array',
            children: [
                {
                    id: 'root-records-info',
                    name: 'info',
                    type: 'string',
                },
            ]
        }
    ]
};