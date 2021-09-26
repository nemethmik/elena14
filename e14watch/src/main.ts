//import "./style.css"
import {html,render,LitElement,TemplateResult} from "lit"
import { customElement, property } from "lit/decorators.js"
import "./page-products"
const app = document.querySelector<HTMLDivElement>("#app")!
// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
render(html`<my-app></my-app>`,app)

type TAppPages = "Products" | "Login"

@customElement("my-app")
class MobileApp extends LitElement {
  @property() page:TAppPages = "Products"
  override render():TemplateResult {
    return html`
      ${this.page == "Products" ? html`<page-products></page-products>` : ``}
      ${this.page == "Login" ? html`<page-login></page-login>` : ``}
    `
  }
  // override connectedCallback():void {
  //   super.connectedCallback()
  //   // WARNING!!! DON'T DEFINE an EVENT LISTENER on THE SHADOW ROOT if you want to reference "THIS"
  //   // this.shadowRoot!.addEventListener( DON'T DO THIS )
  //   this.addEventListener(TCustomEvents.ConfigDone,this.onConfigDone as EventListener)
  // }
  // // Removel of event listeners on the app level is optional, but definitely a good practice
  // override disconnectedCallback():void {
  //   super.disconnectedCallback()
  //   this.removeEventListener(TCustomEvents.ConfigDone,this.onConfigDone as EventListener)
  // }
  // onConfigDone(e:CustomEvent):void {
  //   console.log("MobileApp:onConfigDone",e)
  //   this.page = "Login"
  // }
}
declare global { interface HTMLElementTagNameMap { "my-app": MobileApp}}