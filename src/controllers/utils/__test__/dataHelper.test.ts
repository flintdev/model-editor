import {DataHelper} from "../dataHelper";
import {editorDataSample1} from "../../../../example/data/editorDataSample1";
import {TreeNode} from "../../../interface";


test('find path - 1', () => {
    const nodeId: string = 'root-records-items';
    const treeData = editorDataSample1.treeData;
    const result = new DataHelper().findPathOfTreeNode(treeData, nodeId);
    expect(result).toStrictEqual([2, 'children', 0])
});

test('find path - 2', () => {
    const nodeId: string = 'root-creator-name';
    const treeData = editorDataSample1.treeData;
    const result = new DataHelper().findPathOfTreeNode(treeData, nodeId);
    expect(result).toStrictEqual([0, 'children', 0])
});

test('find path - 3', () => {
    const nodeId: string = 'root-time';
    const treeData = editorDataSample1.treeData;
    const result = new DataHelper().findPathOfTreeNode(treeData, nodeId);
    expect(result).toStrictEqual([1])
});

test('find path - 4', () => {
    const nodeId: string = 'root-records-items123';
    const treeData = editorDataSample1.treeData;
    const result = new DataHelper().findPathOfTreeNode(treeData, nodeId);
    expect(result).toStrictEqual(undefined)
});