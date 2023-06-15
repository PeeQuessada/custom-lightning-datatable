import { LightningElement, api, track } from 'lwc';

export default class CustomLightningDatatable extends LightningElement {


    // Basic variables and functionalitys
    @api keyField;
    @api data;
    @api columns;
    



    // default functionalitys

    //colum save and variables
    save(value) {
        this.dispatchEvent(new CustomEvent('save', { detail: value }));
    }

    //errors lofic and variables
    errors(value) {
        this.dispatchEvent(new CustomEvent('errors', { detail: value }));
    }

    //colum width lofic and variables
    @api minColumnWidth;

    resize(value) {
        this.dispatchEvent(new CustomEvent('resize', { detail: value }));
    }

    // row Selection Logic and Varuables
    @api selectedRows;

    rowSelection(value) {
        this.dispatchEvent(new CustomEvent('rowselection', { detail: value }));
    }

    // Load More Logic and Variables
    @api enableInfiniteLoading;

    loadMore(value) {
        this.dispatchEvent(new CustomEvent('loadmore', { detail: value }));
    }

    // header Action Logic and Variables
    headerAction(value) {
        this.dispatchEvent(new CustomEvent('headeraction', { detail: value }));
    }

    // rowAction Logic and Variables
    rowAction(value) {
        this.dispatchEvent(new CustomEvent('oowaction', { detail: value }));
    }

    // wrapTextMaxLines Logic and Variables
    @api wrapTextMaxLines;

    // aria Label Logic and Variables
    @api ariaLabel;

    // aria Labelledby Logic and Variables
    @api ariaLabelledby;

}