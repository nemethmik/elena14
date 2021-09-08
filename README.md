# elena14

A [SAP UI5 web component](https://sap.github.io/ui5-webcomponents/) application for Elena Pietrini ITA, 14.
SAP UI5 is written in pure javascript, no typescript based on their own [UI5Element](https://github.com/SAP/ui5-webcomponents/blob/894628fa2dc7225936bb1609037054c7d9243f8e/packages/base/src/UI5Element.js#L59) which can be referenced as @ui5/webcomponents-base/dist/UI5Element.js.

Accompanying videos
- [SAP UI5 Web Components 01 Getting Started with ViteJS](https://youtu.be/cfdtbrs8sg0)

## Project Setup
The [Getting Started](https://sap.github.io/ui5-webcomponents/playground) recommends to use Vite.
- **npm init vite** should be called from a parent folder, since the initializer will ask for a project name and it will generate a folder with that name. No README will be generated.
    - Project name: elena14
        - A folder will be created with this name. 
    - Select a framework: lit-element
        - In my first video I selected vanilla, but then I reinitialized the project with lit-element-ts 
    - Select a variant: lit-element-ts
        - This generates a typescript project
- I created an elena14 GitHub repo and I linked the local folder to this remote repo.


## Vanilla Experiments with SAP UI5 Web Components for Video 01
- **npm install @ui5/webcomponents**
- Add `import "@ui5/webcomponents/dist/Button.js"` to src/main.ts, which will 
    - Importing this [Button.js](https://github.com/SAP/ui5-webcomponents/blob/master/packages/main/src/Button.js) will import the Button class which is derived from UI5Element, and executes Button.define() where *define* is a static async function in the parent UI5Element, and it registers the web component for the browser.
    '''
    Button.define();
    export default Button;
    '''
- Add *ui5-button* and an event handler:
    ```
        const B1ID = "btn1"
        app.innerHTML =/*html*/`
            <ui5-button design="Emphasized" id=${B1ID}>Hello UI5 Web Components Hehe</ui5-button>
        `
        document.getElementById(B1ID)?.addEventListener("click",(e)=>{
            console.log(e)
            window.alert((e.target as HTMLButtonElement).innerText)
        })    
    ```
    As seen from the example, that in plain projects the HTML blocks have been created with [template/back-tick string literals](https://blog.kevinchisholm.com/javascript/template-literals-basics/)
    [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) gives some syntax highlighting, but I am not convinced at all, and it gives no errors.
    The html tagged template literal function from lit-html doesn't return a string, it returns a template, so ot has iots own infrastructure.

## Using UI5 Web Components with Angular, React and Vue
These frameworks were not designed to support web components, they are a replacement technology for what web componnts are devised for. Using web components with these frameworks hs (severe) limitations or extra steps that make development cumbersome.
- React: "in order to use the events provided by UI5 Web Components, currently you need to get a ref to the component because React doesn’t support custom events"
- Angular: An extra package Origami is required for two-way data binding.
- Vue: "v-model binding doesn’t work as expected for custom elements"
So, this enforces my opinion that web components are standalone technology, best to use them without frameworks. 

## UI5 React Wrapper
The [UI5 react wrapper](https://github.com/SAP/ui5-webcomponents#ui5-web-components-for-react) has typescript definitions, but the base package doesn't.
The [react wrapper](https://github.com/SAP/ui5-webcomponents-react) is needed since React has a number of issues with web components.
It seems to me that react doesn't support slots. In the [mission.react-spa](https://developers.sap.com/mission.react-spa.html) tutorial I can see source code blocks [like](https://developers.sap.com/tutorials/ui5-webcomponents-react-card.html):
```
<div>
  <Card header={<CardHeader titleText="Card" />}>
    This is the content area of the Card
  </Card>
</div>
```
In a traditional web component approach it should be handlet with a slot, something like:
```
<div>
  <Card>
    <CardHeader slot="header" titleText="Card" />
    This is the content area of the Card
  </Card>
</div>
```
