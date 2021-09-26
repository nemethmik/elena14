import { LitElement, css, CSSResult } from "lit"
export const TCustomEvents = {ConfigDone: "configdone", LoginBack: "loginback"} as const
export type TConfigDonePayload = {detail:{saved:boolean},composed: true}

export class PageBase extends LitElement {
    static get styles():CSSResult[] { return [
            css`section {
                display:flex;
                flex-direction:column;
                height: 100vh;
            }`,
            css`header {
                display:flex;align-items:center;justify-content:center; 
            }`,
            css`main { 
                overflow-y:scroll;
                -webkit-overflow-scrolling:touch;
                display:flex; flex-direction:column;
                align-items: center;
            }`,
            css`footer{
                display: flex; flex-flow: row; justify-content: center;
                position:fix; bottom:0;
            }`,
        ]
    }
}