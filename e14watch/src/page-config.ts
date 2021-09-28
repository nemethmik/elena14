import { css, html,TemplateResult, CSSResult} from "lit"
import { customElement, property} from "lit/decorators.js"
import {ref,/*Ref,*/createRef} from "lit/directives/ref.js"
import "@ui5/webcomponents-fiori/dist/Page.js"
import "@ui5/webcomponents-fiori/dist/Bar.js"
import "@ui5/webcomponents/dist/Button.js"
import "@ui5/webcomponents/dist/Label.js"
import "@ui5/webcomponents/dist/Switch.js"
import "@ui5/webcomponents/dist/Input.js"
import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import "@ui5/webcomponents/dist/Popover.js"
import type UI5Popover from "./ui5types/Popover"
import {PageUI5Base} from "./page-ui5base"

export const TConfigEventType = "ConfigEvent"
export const TConfigActions = {Demo:"Demo", Reset: "Reset", Logout:"Logout", Products: "Products", ThemeChange: "ThemeChange"} as const
export type TConfigEventDetail = {action:keyof typeof TConfigActions,darkTheme:boolean}
@customElement("page-config")
class PageConfig extends PageUI5Base {
    @property({type:Boolean}) dark = false
    static override get styles():CSSResult[] {return [...super.styles,
            //css`main {display:flex;flex-direction:column;align-items:center;}`,
            css`table {display:flex;flex-direction:column;align-items:center;}`,
        ] 
    }
    //These are alternatives, all three work
    //@query("ui5-popover") morePopover!:UI5Popover
    //morePopover:Ref<UI5Popover> = createRef()
    morePopover = createRef<UI5Popover>()
    //inputRef = createRef<HTMLInputElement>()
    override get title():string {return "Config v01"}
    override get main():TemplateResult {return html`
        <table>
            <tr>
                <td></td>
                <td>
                    <ui5-checkbox text="HTTPS" checked></ui5-checkbox>
                    <ui5-checkbox text="Dark" ?checked=${this.dark} @change=${(e:Event):void => {
                        //This is typical reactive programming: since theme is a global state, and it is changed,
                        //a machinery is required to buble up the change to the top level, and let the responsible
                        //parent in the hierarchy to catch that event and change the state and rerender the entire 
                        //component tree. Lit-HTML has the machinery that only the necessary parts are actually
                        //changed in the DOM structure.
                        const darkTheme = (e.target as HTMLInputElement).checked
                        const detail:TConfigEventDetail = {action:TConfigActions.ThemeChange,darkTheme}
                        this.dispatchCustomEvent(TConfigEventType,detail)
                    }}></ui5-checkbox>
                </td>
            </tr>
            <tr><td><ui5-label>Host</ui5-label></td><td><ui5-input placeholder="tiva11"></ui5-input></td></tr>
            <tr><td><ui5-label>Domain</ui5-label></td><td><ui5-input placeholder="azurewebsites.net"></ui5-input></td></tr>
            <tr><td><ui5-label>Service</ui5-label></td><td><ui5-input placeholder="jobwatch"></ui5-input></td></tr>
            <tr><td><ui5-label>Port</ui5-label></td><td><ui5-input value=443 type=Number></ui5-input></td></tr>
        </table>
        <ui5-popover ${ref(this.morePopover)} header-text="More">
            <div style="display:flex;flex-direction:column">
                <ui5-button id=${TConfigActions.Reset} @click=${this.onMoreAction}>Reset</ui5-button>
                <ui5-button id=${TConfigActions.Logout} @click=${this.onMoreAction}>Logout</ui5-button>
                <ui5-button id=${TConfigActions.Demo} @click=${this.onMoreAction}>Demo</ui5-button>
                <ui5-button id=${TConfigActions.Products} @click=${this.onMoreAction}>Products</ui5-button>
            </div>
        </ui5-popover>
    `}
    override get footer():TemplateResult {return html`
        <ui5-bar design="FloatingFooter">
            <!--ui5-icon name="home" slot="startContent"></ui5-icon-->
            <ui5-button icon="arrow-right" icon-end design="Emphasized">Done</ui5-button>
            <ui5-button icon="bullet-text" @click=${(e:Event):void=>{
                //const b = e.currentTarget! as HTMLElement
                this.morePopover.value?.showAt(e.currentTarget as HTMLElement)
                //this.popover.showAt()
            }}>More</ui5-button>
            <!--ui5-button design="Transparent" slot="endContent">Cancel</ui5-button-->
        </ui5-bar>    
    `}
    async onMoreAction(e:Event):Promise<void> {
        //console.log("PageConfig:onMoreAction",e)
        const action = (e.target as HTMLElement).id as keyof typeof TConfigActions
        const detail:TConfigEventDetail = {action,darkTheme:this.dark}
        this.morePopover.value?.close()
        await new Promise((r) => setTimeout(r, 0))
        this.dispatchCustomEvent(TConfigEventType,detail)
    }
}
declare global { interface HTMLElementTagNameMap { "page-config": PageConfig}}