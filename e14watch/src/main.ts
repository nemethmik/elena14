//import "./style.css"
import {html,LitElement,TemplateResult} from "lit"
import { customElement, property } from "lit/decorators.js"
import "@ui5/webcomponents-theme-base/dist/Assets"
import {setTheme} from "@ui5/webcomponents-base/dist/config/Theme"
import "@ui5/webcomponents-fiori/dist/Assets"
import "./page-products"
import "./page-config"
import {TConfigEventType, TConfigEventDetail} from "./page-config"
import "./page-demo"

// const app = document.querySelector<HTMLDivElement>("#app")!
// render(html`<my-app></my-app>`,app)

type TAppPages = "Products" | "Login" | "Config" | "Demo"

@customElement("my-app")
class MobileApp extends LitElement {
  @property({type:Boolean}) dark = false
  @property() page:TAppPages = "Config"
  override render():TemplateResult {
    return html`
      ${this.page == "Demo" ? html`<page-demo></page-demo>` : ``}
      ${this.page == "Config" ? html`<page-config ?dark=${this.dark}></page-config>` : ``}
      ${this.page == "Products" ? html`<page-products></page-products>` : ``}
      ${this.page == "Login" ? html`<page-login></page-login>` : ``}
    `
  }
  override connectedCallback():void {
    super.connectedCallback()
    if(this.dark) setTheme("sap_fiori_3_dark")
    //setTheme("sap_belize_hcb")
    //setTheme("sap_belize_hcw")
    //setTheme("sap_belize")
    //setTheme("sap_fiori_3_hcb")
    //setTheme("sap_fiori_3_hcw")
    // WARNING!!! DON'T DEFINE an EVENT LISTENER on THE SHADOW ROOT if you want to reference "THIS"
    // this.shadowRoot!.addEventListener( DON'T DO THIS )
    this.addEventListener(TConfigEventType,this.onConfigEvent as EventListener)
    this.addEventListener("DemoEvent",((e:CustomEvent):void => {
      console.log("MobileApp",e)
      this.page = "Config"
    }) as EventListener)
    this.addEventListener("ProductsEvent",((e:CustomEvent)=>{
      console.log("MobileApp",e)
      this.page = "Config"
    }) as EventListener)
  }
  // // Removel of event listeners on the app level is optional, but definitely a good practice
  // override disconnectedCallback():void {
  //   super.disconnectedCallback()
  //   this.removeEventListener(TCustomEvents.ConfigDone,this.onConfigDone as EventListener)
  // }
  onConfigEvent(e:CustomEvent):void {
    //console.log("MobileApp:onConfigEvent",e)
    const payload = e.detail as TConfigEventDetail
    if(payload.action == "Demo") this.page = "Demo"
    else if(payload.action == "Products") this.page = "Products"
    else if(payload.action == "ThemeChange") {
      //Some components have changed the dark theme and it dispatched a notification event,
      //and the application component is responsible to change the state accordingly.
      this.dark = payload.darkTheme
      if(this.dark) setTheme("sap_fiori_3_dark")
      else setTheme("sap_fiori_3")
    } else console.log("MobileApp:onConfigEvent",e)
  }
}
declare global { interface HTMLElementTagNameMap { "my-app": MobileApp}}