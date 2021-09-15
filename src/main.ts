/*
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/
import {html,LitElement,TemplateResult} from "lit"
import {property,customElement} from "lit/decorators.js"
import "@ui5/webcomponents/dist/Button.js"

type TAppState = {
  targetDate: string,
  eventName: string, 
}
const appState:TAppState = {
  targetDate: "2022-08-11",
  eventName: "birthday", 
}
@customElement("my-app")
class MyApp extends LitElement {
  @property() targetDate!:string
  @property() eventName!:string
  // constructor(targetDate:string,eventName:string) {
  //   super()
  //   this.targetDate = targetDate
  //   this.eventName = eventName
  // }
  onTargetDateChange = (e:Event):void => {
    appState.targetDate = (e.target as HTMLInputElement).value
  }
  onEventNameChange = (e:Event):void => {
    //console.log(e)
    appState.eventName = (e.target as HTMLInputElement).value
  }
  onButtonClick = (e:Event):void => {
    //console.log(e.target)
    window.alert((e.target as HTMLButtonElement).innerText)
  }  
  render():TemplateResult {
    const days = Math.round((new Date(this.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    return html`
      <p>
        <span style=${days > 100 ? "color:red" : ""}>${days}</span> 
        days left before ${this.eventName} on ${this.targetDate}
      </p>
      <p>
        Event <input value=${this.eventName} @keyup=${this.onEventNameChange}> is on
        <input type=date value=${this.targetDate} @change=${this.onTargetDateChange}/>
      </p>
      <ui5-button design=Emphasized @click=${this.onButtonClick}>Hello UI5 Web Components</ui5-button>
    `
  }
}
declare global { interface HTMLElementTagNameMap { "my-app": MyApp}}
