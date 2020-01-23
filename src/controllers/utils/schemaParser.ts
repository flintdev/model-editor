// src/controllers/utils/schemaParser.ts

import {SchemaData, TreeNode} from "../../interface";
import * as _ from 'lodash';

export class SchemaParser {
    treeData: TreeNode[];
    constructor(treeData: TreeNode[]) {
        this.treeData = treeData;
    }

    convertToOpenAPIV3Schema = () => {
        return this.recurToGenerateSchema(this.treeData, {});
    };

    private recurToGenerateSchema = (nodes: TreeNode[], properties: any) => {
        for (let i=0; i<nodes.length; i++) {
            const node = nodes[i];
            const {name, type, params} = node;
            if (type === 'string') {
                properties[name] = {type, ...params};
            } else if (type === 'object') {
                const children = !!node.children? node.children : [];
                const data = this.recurToGenerateSchema(children, {});
                properties[name] = {
                    type,
                    properties: data
                };
            } else if (type === 'array') {
                const children = !!node.children? node.children : [];
                const data = this.recurToGenerateSchema(children, {});
                properties[name] = {
                    type,
                    items: data
                };
            }
        }
        return properties;
    };
}