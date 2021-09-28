import {html, css, CSSResult, TemplateResult} from "lit"
import {customElement,state, query} from "lit/decorators.js"
import "@ui5/webcomponents/dist/Table.js"
import "@ui5/webcomponents/dist/TableColumn.js"
import "@ui5/webcomponents/dist/Button"
import "@ui5/webcomponents/dist/CheckBox"
import "@ui5/webcomponents/dist/Title"
import "@ui5/webcomponents/dist/Icon"
import "@ui5/webcomponents-icons/dist/download.js"
import "@ui5/webcomponents-icons/dist/arrow-left.js"
import "@ui5/webcomponents-icons/dist/arrow-right.js"
import "@ui5/webcomponents-icons/dist/bullet-text.js"
//import UI5CheckBox from "./ui5types/CheckBox"
import "@ui5/webcomponents-fiori/dist/ShellBar"
import "@ui5/webcomponents/dist/TableRow.js"
import "@ui5/webcomponents/dist/TableCell.js"
import "@ui5/webcomponents/dist/BusyIndicator.js"
import UI5BusyIndicator from "./ui5types/BusyIndicator"
import {PageBase} from "./page-base"

type TProduct = {
    Product: string,
    Supplier: string,
    Dimensions: string,
    Weight: string,
    Price: string,
}
@customElement("page-products")
class PageProducts extends PageBase {
    static DEMODELAYFORDATALOAD = 2000
    static BUSYINDICATORDELAY = 500
    @query("ui5-busy-indicator",true) busyIndicator!: UI5BusyIndicator
    @state() products:TProduct[] = []
    popin = true
    minWidth = 600
    colTxt(title:string):TemplateResult {return html`${title}`}
    //REMEMBER TO get the styles defined by the parents
    static override get styles():CSSResult[] {
        //This is important to force the table for full viewport width
        //otherwise the busy-indicator shrints it to a narrow column.
        return [...super.styles, 
            css`ui5-table {min-width:100vw}`,
            css`section {height:82vh}`, //Override section viewport height
        ]
    }
    override render():TemplateResult {
        console.log(`PageProducts.render: Number of products ${this.products.length}`)
        return html`
        <section>
            <header>
                <ui5-title level="H1">E14 Products</ui5-title>
                <!--
                <ui5-shellbar primary-title="E14 Products" 
                show-notifications notifications-count=22 show-product-switch>
                    <img slot=logo src="./tivalogo2.png"/>
                </ui5-shellbar>
                -->
            </header>
            <main>
                <ui5-busy-indicator size="Medium" text="Loading data ..." delay=${PageProducts.BUSYINDICATORDELAY}>
                    <ui5-table no-data-text="No Data" show-no-data
                        mode="SingleSelect" .stickyColumnHeader=${true}>
                        <ui5-table-column slot="columns" style="width: 12rem">
                            ${this.colTxt("Product")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin} >
                            ${this.colTxt("Supplier")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin} > 
                            ${this.colTxt("Dimensions")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns" min-width=${this.minWidth} ?demand-popin=${this.popin}>
                            ${this.colTxt("Weight")}
                        </ui5-table-column>
                        <ui5-table-column slot="columns">
                            ${this.colTxt("Price")}
                        </ui5-table-column>
                        ${this.products.map(p=>html`
                            <ui5-table-row>
                                <ui5-table-cell style="color:red;">${p.Product}</ui5-table-cell>
                                <ui5-table-cell>${p.Supplier}</ui5-table-cell>
                                <ui5-table-cell>${p.Dimensions}</ui5-table-cell>
                                <ui5-table-cell><b>${p.Weight}</b></ui5-table-cell>
                                <ui5-table-cell>${p.Price}</ui5-table-cell>
                            </ui5-table-row>
                        `)}
                    </ui5-table>
                </ui5-busy-indicator>
            </main>
        </section>
        <footer>
            <ui5-button icon="arrow-left">Back</ui5-button>    
            <ui5-button icon="download" icon-end @click=${this.addData} design="Emphasized">Re-Load</ui5-button>    
            <ui5-button icon="arrow-right" icon-end>Done</ui5-button>    
            <ui5-button icon="bullet-text">More</ui5-button>    
        </footer>
    `
    }
    override firstUpdated():void {
        this.addData()
    }
    async addData():Promise<void> {
        this.busyIndicator.active = true 
        try {
            this.products = []
            await new Promise((r) => setTimeout(r, PageProducts.DEMODELAYFORDATALOAD))
            const response = await fetch("./products.json")
            const data = await response.json()
            this.products = [...data, ...data, ...data, ...data]
            this.busyIndicator.active = false
            //See https://lit.dev/docs/components/events/ why the need for this 0 timeout await :)
            await new Promise((r) => setTimeout(r, 0))
            this.dispatchEvent(new CustomEvent("populate",{detail:this.products.length}))
        } finally {
            this.busyIndicator.active = false
        }
    }
    async clearData():Promise<void> {
        this.products = []
    }
}
declare global { interface HTMLElementTagNameMap { "page-products": PageProducts}}