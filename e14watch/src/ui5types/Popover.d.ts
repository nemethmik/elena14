import type Popup from "./Popup"
export default Popover
declare class Popover extends Popup {
    // static get metadata(): {
    //     tag: string;
    //     properties: {
    //         /**
    //          * Defines the header text.
    //          * <br><br>
    //          * <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
    //          *
    //          * @type {string}
    //          * @defaultvalue ""
    //          * @public
    //          */
    //         headerText: string;
    //         /**
    //          * Determines on which side the component is placed at.
    //          * <br><br>
    //          * Available options are:
    //          * <ul>
    //          * <li><code>Left</code></li>
    //          * <li><code>Right</code></li>
    //          * <li><code>Top</code></li>
    //          * <li><code>Bottom</code></li>
    //          * </ul>
    //          *
    //          * @type {PopoverPlacementType}
    //          * @defaultvalue "Right"
    //          * @public
    //          */
    //         placementType: any;
    //         /**
    //          * Determines the horizontal alignment of the component.
    //          * <br><br>
    //          * Available options are:
    //          * <ul>
    //          * <li><code>Center</code></li>
    //          * <li><code>Left</code></li>
    //          * <li><code>Right</code></li>
    //          * <li><code>Stretch</code></li>
    //          * </ul>
    //          *
    //          * @type {PopoverHorizontalAlign}
    //          * @defaultvalue "Center"
    //          * @public
    //          */
    //         horizontalAlign: any;
    //         /**
    //          * Determines the vertical alignment of the component.
    //          * <br><br>
    //          * Available options are:
    //          * <ul>
    //          * <li><code>Center</code></li>
    //          * <li><code>Top</code></li>
    //          * <li><code>Bottom</code></li>
    //          * <li><code>Stretch</code></li>
    //          * </ul>
    //          *
    //          * @type {PopoverVerticalAlign}
    //          * @defaultvalue "Center"
    //          * @public
    //          */
    //         verticalAlign: any;
    //         /**
    //          * Defines whether the component should close when
    //          * clicking/tapping outside of the popover.
    //          * If enabled, it blocks any interaction with the background.
    //          *
    //          * @type {boolean}
    //          * @defaultvalue false
    //          * @public
    //          */
    //         modal: boolean;
    //         /**
    //          * Defines whether the block layer will be shown if modal property is set to true.
    //          * @type {boolean}
    //          * @defaultvalue false
    //          * @public
    //          * @since 1.0.0-rc.10
    //          */
    //         hideBackdrop: boolean;
    //         /**
    //          * Determines whether the component arrow is hidden.
    //          *
    //          * @type {boolean}
    //          * @defaultvalue false
    //          * @public
    //          * @since 1.0.0-rc.15
    //          */
    //         hideArrow: boolean;
    //         /**
    //          * Determines if there is no enough space, the component can be placed
    //          * over the target.
    //          *
    //          * @type {boolean}
    //          * @defaultvalue false
    //          * @public
    //          */
    //         allowTargetOverlap: boolean;
    //         /**
    //          * Defines whether the content is scrollable.
    //          *
    //          * @type {boolean}
    //          * @defaultvalue false
    //          * @private
    //          */
    //         disableScrolling: boolean;
    //         /**
    //          * Sets the X translation of the arrow
    //          *
    //          * @private
    //          */
    //         arrowTranslateX: {
    //             type: any;
    //             defaultValue: number;
    //             noAttribute: boolean;
    //         };
    //         /**
    //          * Sets the Y translation of the arrow
    //          *
    //          * @private
    //          */
    //         arrowTranslateY: {
    //             type: any;
    //             defaultValue: number;
    //             noAttribute: boolean;
    //         };
    //         /**
    //          * Returns the calculated placement depending on the free space
    //          *
    //          * @private
    //          */
    //         actualPlacementType: {
    //             type: any;
    //             defaultValue: any;
    //         };
    //         _maxContentHeight: {
    //             type: any;
    //         };
    //     };
    //     managedSlots: boolean;
    //     slots: {
    //         /**
    //          * Defines the header HTML Element.
    //          *
    //          * @type {HTMLElement[]}
    //          * @slot
    //          * @public
    //          */
    //         header: HTMLElement[];
    //         /**
    //          * Defines the footer HTML Element.
    //          *
    //          * @type {HTMLElement[]}
    //          * @slot
    //          * @public
    //          */
    //         footer: HTMLElement[];
    //     };
    //     events: {};
    // };
    // static get styles(): any[];
    // static get template(): any;
    // static get MIN_OFFSET(): number;
    // _handleResize: any
    // onEnterDOM(): void;
    // onExitDOM(): void;
    // isOpenerClicked(event: any): boolean;
    // /**
    //  * Shows the popover.
    //  * @param {HTMLElement} opener the element that the popover is shown at
    //  * @param {boolean} preventInitialFocus prevents applying the focus inside the popover
    //  * @public
    //  * @async
    //  * @returns {Promise} Resolved when the popover is open
    //  */
    public showAt(opener: HTMLElement, preventInitialFocus?: boolean): Promise<any>
    // _opener: HTMLElement
    // _openerRect: DOMRect
    // /**
    //  * Override for the _addOpenedPopup hook, which would otherwise just call addOpenedPopup(this)
    //  * @private
    //  */
    // private _addOpenedPopup
    // /**
    //  * Override for the _removeOpenedPopup hook, which would otherwise just call removeOpenedPopup(this)
    //  * @private
    //  */
    // private _removeOpenedPopup
    // shouldCloseDueToOverflow(placement: any, openerRect: any): boolean;
    // shouldCloseDueToNoOpener(openerRect: any): boolean;
    // handleResize(): void;
    // reposition(): void;
    // _show(): any;
    // _oldPlacement: any
    // arrowTranslateX: any
    // arrowTranslateY: any
    // actualPlacementType: any
    // getPopoverSize(): {
    //     width: any;
    //     height: any;
    // };
    // get contentDOM(): any;
    // get arrowDOM(): any;
    // calcPlacement(targetRect: any, popoverSize: any): {
    //     arrowX: number;
    //     arrowY: number;
    //     top: number;
    //     left: number;
    //     placementType: any;
    // };
    // _preventRepositionAndClose: boolean
    // _width: string
    // _height: string
    // _maxContentHeight: number
    // _left: number
    // _top: number
    // /**
    //  * Calculates the position for the arrow.
    //  * @private
    //  * @param targetRect BoundingClientRect of the target element
    //  * @param popoverSize Width and height of the popover
    //  * @param left Left offset of the popover
    //  * @param top Top offset of the popover
    //  * @param isVertical if the popover is positioned vertically to the target element
    //  * @returns {{x: number, y: number}} Arrow's coordinates
    //  */
    // private getArrowPosition
    // /**
    //  * Fallbacks to new placement, prioritizing <code>Left</code> and <code>Right</code> placements.
    //  * @private
    //  */
    // private fallbackPlacement
    // getActualPlacementType(targetRect: any, popoverSize: any): any;
    // getVerticalLeft(targetRect: any, popoverSize: any): any;
    // getHorizontalTop(targetRect: any, popoverSize: any): any;
    // get isModal(): any;
    // get shouldHideBackdrop(): any;
    // get _ariaLabelledBy(): string;
    // get _ariaModal(): boolean;
    // get styles(): any;
    // /**
    //  * Hook for descendants to hide header.
    //  */
    // get _displayHeader(): any;
    // /**
    //  * Hook for descendants to hide footer.
    //  */
    // get _displayFooter(): boolean;
}
