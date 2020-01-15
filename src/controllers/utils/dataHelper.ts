// src/controllers/utils/dataHelper.ts

import {TreeNode} from "../../interface";
import * as _ from 'lodash';

type NodePath = Array<string | number>;

export class DataHelper {

    findPathOfTreeNode = (treeData: TreeNode[], nodeId: string) => {
        let path: Array<string | number> = [];
        return this.recurToGetPath(treeData, path, nodeId);
    };

    removeTreeNodeById = (treeData: TreeNode[], nodeId: string): TreeNode[] => {
        let path: NodePath = this.findPathOfTreeNode(treeData, nodeId);
        if (!path) return treeData;
        else if (path.length === 1) {
            treeData.splice(path[0] as number, 1);
            return treeData;
        }
        _.update(treeData, path.slice(0, path.length - 1), (nodes: TreeNode[]) => {
            nodes.splice(path[path.length - 1] as number, 1);
            return nodes
        });
        return treeData;
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