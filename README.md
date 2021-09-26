# elena14

This is a multi-project repository for applications using
[SAP UI5 web components](https://sap.github.io/ui5-webcomponents/). Elena Pietrini ITA, 14.
SAP UI5 was written in pure JavaScript, and they developed their own base component [UI5Element](https://github.com/SAP/ui5-webcomponents/blob/894628fa2dc7225936bb1609037054c7d9243f8e/packages/base/src/UI5Element.js#L59), which can be referenced as @ui5/webcomponents-base/dist/UI5Element.js.

The project [paola18]() has a number of useful experimentings with UI5 web components.

## Project Setup
The [SAP Getting Started](https://sap.github.io/ui5-webcomponents/playground) recommends to use Vite.
- **npm init vite** was called from the root folder of the repo, since the initializer will ask for a project name and it will generate a folder with that name. No README will be generated.
    - Project name: *e14watch*
        - A folder will be created with this name. 
    - Select a framework: vanilla
    - Select a variant: vanilla-ts
        - This generates a TypeScript project
- **npm install lit @ui5/webcomponents**
- The [SAP Icons](https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons) are here. The webcomponents package included the icons, too, but each icon should be imported in themoodule before using it, which is not a big deal.

**SAP UI5 worked excellently!**

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
