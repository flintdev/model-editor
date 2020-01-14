// src/controllers/utils/dataHelper.ts

import {TreeNode} from "../../interface";

type NodePath = Array<string | number>;

export class DataHelper {

    findPathOfTreeNode = (treeData: TreeNode[], nodeId: string) => {
        let path: Array<string | number> = [];
        return this.recurToGetPath(treeData, path, nodeId);
    };

    private recurToGetPath = (nodes: TreeNode[], path: NodePath, nodeId: string): NodePath => {
        for (let i=0; i<nodes.length; i++) {
            const node = nodes[i];
            if (node.id === nodeId) {
                return [...path, i];
            } else if (!!node.children && node.children.length > 0) {
                const newPath = [...path, i, 'children'];
                const result = this.recurToGetPath(node.children, newPath, nodeId);
                if (!!result) return result;
            }
        }
    };

}