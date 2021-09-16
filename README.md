# elena14


Remove **useDefineForClassFields** from tsconfig and set **target** to **ES2021**, otherwise lit element will not work at all.
The useDefineForClassFields flag is related to ESNext, which should be avoided.
--

A [SAP UI5 web component](https://sap.github.io/ui5-webcomponents/) application for Elena Pietrini ITA, 14.
SAP UI5 is written in pure javascript, no typescript based on their own [UI5Element](https://github.com/SAP/ui5-webcomponents/blob/894628fa2dc7225936bb1609037054c7d9243f8e/packages/base/src/UI5Element.js#L59) which can be referenced as @ui5/webcomponents-base/dist/UI5Element.js.

Accompanying videos
- [SAP UI5 Web Components 01 Getting Started with ViteJS](https://youtu.be/cfdtbrs8sg0)

## Project Setup for Branch daysbeforebirthdaylitelementdemo
- The project was inspired by [What Would You Do Without a Framework? Front-End Anew with Lit-HTML by Adam Bar](https://youtu.be/eSILtbWYrNc) brilliant video.
- **npm init vite** should be called from a parent folder, since the initializer will ask for a project name and it will generate a folder with that name. No README will be generated.
  - Before doing this, I create a new branch *daysbeforebirthdaylitelementdemo* from the readme-only master, then I renamed temporarily the elena14 folder. 
  - Project name: elena14
      - A folder will be created with this name. 
  - Select a framework: vanilla
      - Do not select lit-element, since it is meant only for web component *library* projects 
  - Select a variant: nanilla-ts
      - This generates a typescript project
  - Make tsconfig to compatible with Lit Element reactive machinery. 
    ```json
    "target": "es2021", //VERY IMPORTANT !!!
    "useDefineForClassFields": false, //VERY IMPORTANT !!!
    "moduleResolution": "node",
    "experimentalDecorators": true, 
    "inlineSourceMap": true, 
    "noImplicitAny": false,    
    "strictNullChecks": true,  
    "strictFunctionTypes": true, 
    "noImplicitThis": true, 
    "noImplicitReturns": true,
    ```
    - *Remember to run npm install for the newly created project*
- **npm install -D eslint** 
- **npx eslint --init**
  ```json
    "@typescript-eslint/no-non-null-assertion":"off",
    "@typescript-eslint/explicit-function-return-type": "error", 
    "@typescript-eslint/explicit-module-boundary-types": ["warn", {"allowArgumentsExplicitlyTypedAsAny":true}], 
    "@typescript-eslint/no-explicit-any":"warn", 
    "quotes": ["error","double",{ "allowTemplateLiterals": true}], 
    "@typescript-eslint/semi": ["error", "never"], 
    "@typescript-eslint/ban-ts-comment": ["warn"]      
  ```    
 - **npm install @ui5/webcomponents lit** 

## Git Guidelines
[SAP UI5 git guidelines](https://sap.github.io/ui5-webcomponents/playground/docs/guidelines/)
committype(scope): do this and that for explanation
Here is an example: fix(ui5-button): correct focus with 'tab' key
Here are the commit types:
- fix - a bug fix (note: this will indicate a release)
- feat - a new feature (note: this will indicate a release)
- docs - documentation only changes
- style - changes that do not affect the meaning of the code
- refactor - a code change that neither fixes a bug nor adds a feature
- perf - a code change that improves performance
- test - adding missing tests
- chore - changes to the build process or auxiliary tools and libraries such as documentation generation
- revert - revert to a commit
- WIP - work in progress