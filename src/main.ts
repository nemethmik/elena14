//import './style.css'
//import {html,render} from "lit"
import "@ui5/webcomponents/dist/Button.js"
const B1ID = "btn1"
const app = document.querySelector<HTMLDivElement>('#app')!
// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
app.innerHTML = /*html*/`
  <div style="margin:5px;">
    <ui5-button design=Emphasized id=${B1ID}>Hello UI5 Web Components</ui5-button>
  </div>
`
// Solution with lit-html
// const myButton = (id:string) => html`
//   <ui5-button design=Emphasized id=${id}>Hello UI5 Web Components</ui5-button>
// `
// render(myButton(B1ID),app)
document.getElementById(B1ID)?.addEventListener("click",(e)=>{
  console.log(e)
  window.alert((e.target as HTMLButtonElement).innerText)
})