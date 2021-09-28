import { LitElement, css, CSSResult,TemplateResult, html } from "lit"

export class PageUI5Base extends LitElement {
    static override get styles():CSSResult[] { return [
            css`
                ui5-page {height: 100vh;}
                main {color:var(--sapTextColor)}
            `,
        ]
    }
    get title():string {return "Title"}
    get main():TemplateResult {return html`<p>Please override main</p>`}
    get footer():TemplateResult {return html``}
    override render():TemplateResult {return html`
        <ui5-page id="page" background-design="List" floating-footer show-footer>
            <ui5-bar design="Header" slot="header">
                <ui5-button icon="home" title="Go home" slot="startContent"></ui5-button>
                <ui5-title>${this.title}</ui5-title>
                <ui5-button icon="action-settings" title="Go to settings" slot="endContent"></ui5-button>
            </ui5-bar>
            ${this.main}
            <footer slot="footer">${this.footer}</footer>
        </ui5-page>
    `}
    dispatchCustomEvent(type:string,detail:unknown):void {
        this.dispatchEvent(new CustomEvent(type,{detail,composed:true}))
    }
}