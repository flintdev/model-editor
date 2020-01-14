// src/controllers/utils/dataHelper.ts

import {TreeNode} from "../../interface";

export class DataHelper {

    findPathOfTreeNode = (treeData: TreeNode[], targetNode: TreeNode) => {
        let path: Array<string | number> = [];
        return this._recurToGetPath(treeData, path, targetNode);
    };

    _recurToGetPath = (nodes: TreeNode[], path: Array<string | number>, targetNode: TreeNode) => {
        for (let i=0; i<nodes.length; i++) {
            const newPath = [...path, i];
            const node = nodes[i];
            if (node.id === targetNode.id) {
                return newPath;
            } else if (!!node.children && node.children.length > 0) {
                this._recurToGetPath(node.children, newPath, targetNode);
            }
        }
        return path;
    }
}