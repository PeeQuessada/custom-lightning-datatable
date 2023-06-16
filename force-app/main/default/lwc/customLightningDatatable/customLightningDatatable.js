import { LightningElement, api, track } from "lwc";
import {generateRowsWithColumnsData} from "./customLightningDatatableHelper.js";

export default class CustomLightningDatatable extends LightningElement {

    // Basic variables and functionalitys
    @api keyField;
    columns = [
        { label: "Opportunity name", fieldName: "OpportunityName", type: "text" },
        {
            label: "Confidence",
            fieldName: "Confidence",
            type: "percent", 
            cellAttributes: {
                iconName: { fieldName: "TrendIconConfidence" },
                iconPosition: "right",
            },
        },
        {
            label: "Amount",
            fieldName: "Amount",
            type: "currency",
            typeAttributes: { currencyCode: "EUR", step: "0.001" },
            cellAttributes: {
                iconName: { fieldName: "TrendIconAmount" },
                iconPosition: "right",
            },
        },
        { label: "Contact Email", fieldName: "Contact", type: "email" },
        { label: "Contact Phone", fieldName: "Phone", type: "phone" },
    ];
    rows  = [
        {
            Id: "a",
            OpportunityName: "Cloudhub",
            Confidence: 0.2,
            Amount: 25000,
            Contact: "jrogers@cloudhub.com",
            Phone: "2352235235",
            TrendIconConfidence: "utility:down",
            TrendIconAmount: "utility:left",
        },
        {
            Id: "b",
            OppId: "abc",
            OpportunityName: "Quip",
            Confidence: 0.78,
            Amount: 740000,
            Contact: "quipy@quip.com",
            Phone: "2352235235",
            TrendIconConfidence: "utility:up",
            TrendIconAmount: "utility:right",
        },
    ];
    
    get rowsWithColumnsData() {
        return generateRowsWithColumnsData(this.rows, this.columns);
    }

    // default functionalitys

    //colum save and variables
    save(value) {
        this.dispatchEvent(new CustomEvent("save", { detail: value }));
    }

    //errors lofic and variables
    errors(value) {
        this.dispatchEvent(new CustomEvent("errors", { detail: value }));
    }

    //colum width lofic and variables
    @api minColumnWidth;

    resize(value) {
        this.dispatchEvent(new CustomEvent("resize", { detail: value }));
    }

    // row Selection Logic and Varuables
    @api selectedRows;

    rowSelection(value) {
        this.dispatchEvent(new CustomEvent("rowselection", { detail: value }));
    }

    // Load More Logic and Variables
    @api enableInfiniteLoading;

    loadMore(value) {
        this.dispatchEvent(new CustomEvent("loadmore", { detail: value }));
    }

    // header Action Logic and Variables
    headerAction(value) {
        this.dispatchEvent(new CustomEvent("headeraction", { detail: value }));
    }

    // rowAction Logic and Variables
    rowAction(value) {
        this.dispatchEvent(new CustomEvent("oowaction", { detail: value }));
    }

    // wrapTextMaxLines Logic and Variables
    @api wrapTextMaxLines;

    // aria Label Logic and Variables
    @api ariaLabel;

    // aria Labelledby Logic and Variables
    @api ariaLabelledby;

}