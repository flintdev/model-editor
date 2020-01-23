// src/controllers/utils/dataHelper.ts

import {NodeType, TreeNode} from "../../interface";
import * as _ from 'lodash';
import {NodeParams} from "../../interface";

type NodePath = Array<string|number>;

export class DataHelper {

    findPathOfTreeNode = (treeData: TreeNode[], nodeId: string): NodePath => {
        let path: Array<string|number> = [];
        return this.recurToGetPath(treeData, path, nodeId);
    };

    updateNodeParamsInTreeData = (treeData: TreeNode[], nodeId: string, paramValues: NodeParams): TreeNode[] => {
        let path: NodePath = this.findPathOfTreeNode(treeData, nodeId);
        if (!path || path.length === 0) return treeData;
        const paramsPath: Array<string|number> = [...path, 'params'];
        treeData = _.set(treeData, paramsPath, paramValues);
        return treeData;
    };

    addTreeNode = (treeData: TreeNode[], parentNodeId: string, nodeName: string, nodeType: NodeType): TreeNode[] => {
        let parentNodePath: NodePath = this.findPathOfTreeNode(treeData, parentNodeId);
        let nodePath: NodePath;
        if (!parentNodePath || parentNodePath.length === 0) {
            nodePath = [treeData.length];
        } else {
            const parentNode: TreeNode = _.get(treeData, parentNodePath);
            if (!!parentNode.children && parentNode.children.length > 0) {
                nodePath = [...parentNodePath, 'children', parentNode.children.length];
            } else {
                nodePath = [...parentNodePath, 'children', 0];
            }
        }
        const nodeData: TreeNode = {
            id: ['root', ...nodePath].join('-'),
            name: nodeName,
            type: nodeType
        };
        treeData = _.set(treeData, nodePath, nodeData);
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