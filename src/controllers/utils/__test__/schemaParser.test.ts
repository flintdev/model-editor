// src/controllers/utils/__test__/schemaParser.test.ts

import {editorDataSample1} from "./editorDataSample1";
import {SchemaParser} from "../schemaParser";

test('convert to schema - 1', () => {
    const treeData = editorDataSample1.treeData;
    const result = new SchemaParser(treeData).convertToOpenAPIV3Schema();
    console.log(JSON.stringify(result, null, 2));
});
