# model-editor
npm package to edit data model of application as flint component

## Installation

```npm
npm install flint-model-editor --save
```

## Import

```jsx
import ModelEditor from 'flint-model-editor';
```

## Example

```jsx
const onUpdated = (schemaData, editorData) => {
  // schemaData is the openapiv3 schema
  console.log(schemaData, editorData);
};
// 
<ModelEditor
  modelName={"userdata"}
  editorData={editorData}
  onUpdated={onUpdated}
/>
```
