// src/controllers/utils/dataHelper.ts

import {TreeNode} from "../../interface";
import * as _ from 'lodash';
import {ParamValues} from "../../components/AutoForm";

type NodePath = Array<string|number>;

export class DataHelper {

    findPathOfTreeNode = (treeData: TreeNode[], nodeId: string): NodePath => {
        let path: Array<string|number> = [];
        return this.recurToGetPath(treeData, path, nodeId);
    };

    updateNodeParamsInTreeData = (treeData: TreeNode[], nodeId: string, paramValues: ParamValues): TreeNode[] => {
        let path: NodePath = this.findPathOfTreeNode(treeData, nodeId);
        if (!path || path.length === 0) return treeData;
        const paramsPath: Array<string|number> = [...path, 'params'];
        treeData = _.set(treeData, paramsPath, paramValues);
        return treeData;
    };

    removeTreeNodeById = (treeData: TreeNode[], nodeId: string): TreeNode[] => {
        let path: NodePath = this.findPathOfTreeNode(treeData, nodeId);
        if (!path || path.length === 0) return treeData;
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
                if (result.length > 0) return result;
            }
        }
        return [];
    };

}