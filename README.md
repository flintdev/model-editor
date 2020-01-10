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
const onSaved = (modelData, editorData) => {
  console.log(modelData, editorData);
};
<ModelEditor
  editorData={editorData}
  onSaved={onSaved}
/>
```
