# elena14

This is a multi-project repository for applications using
[SAP UI5 web components](https://sap.github.io/ui5-webcomponents/). Elena Pietrini ITA, 14.
SAP UI5 was written in pure JavaScript, and they developed their own base component [UI5Element](https://github.com/SAP/ui5-webcomponents/blob/894628fa2dc7225936bb1609037054c7d9243f8e/packages/base/src/UI5Element.js#L59), which can be referenced as @ui5/webcomponents-base/dist/UI5Element.js.
However, in these project I use (Google/Polymer) LitElement.
My other projects [paola18](https://github.com/nemethmik/paola18.git) and [cristina10/jobwatch](https://github.com/nemethmik/cristina10/tree/main/jobwatch) have a number of useful experimentings with UI5 web components, too, and a number of the results from these projects have been reused in this project.

## e14watch

Live demo on [Azure](https://lemon-island-020376c03.azurestaticapps.net/)

### Project Setup
The [SAP Getting Started](https://sap.github.io/ui5-webcomponents/playground) recommends to use [Vite](https://vitejs.dev/), which is awesome.
- *npm init vite* was called from the root folder of the repo, since the initializer will ask for a project name and it will generate a folder with that name. No README will be generated.
    - Project name: *e14watch*
        - A folder will be created with this name. 
    - Select a framework: vanilla
    - Select a variant: vanilla-ts
        - This generates a TypeScript project
- *npm i -D eslint copyfiles* for dev dependencies
  - *npx eslint --init* 
- *npm install lit @ui5/webcomponents*
- The [SAP Icons](https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons) are here. The webcomponents package included the icons, too; you can import all icons with one import or each icon one by one.

### Dark Theme
The CSS Variables are documented in
[css-vars-usage.json](e14watch\node_modules\@ui5\webcomponents-theme-base\css-vars-usage.json)

I started using *ui5-page* and I found it excellent.

### Loading Data Upon Component Startup
I've elaborated a solution for loading data when the component is connected: 
[I added my explanation to a discussion](https://github.com/lit/lit-element/issues/108#issuecomment-929684591)
strted on the same topic.
The instructor in [LitElement state management with MobX in a Vaadin Fusion project](https://youtu.be/MNxnZ8pzSBo?t=122) calls `this.todos = await endpoint.getTodos()` during `async connectedCallback()`, but in his example he is not showing up a progress (spinner) indicator. My situation was trickier, since I wanted the component rendered firts with the busy indicator. Later he moved this getTodos function into the MobX global app store object.


## Git Commit Message Formatting Guidelines
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
