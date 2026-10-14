import React, { Component } from "react";
import get from "lodash.get";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import withData from "@nex-core-ui/HOC/withData";
import NexImage from "@nex-core-ui/NexImage";
import { arrayOf, object, string } from "prop-types";

class CheckoutV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: get(props, 'items', []),
            subTotal: 0,
            cst: 0,
            gst: 0,
            taxAmount: 0,
            discountPrec: 0,
            discAmount: 0,
            grandTotal: 0,
        }
    }

    componentDidMount() {
        const cartList = JSON.parse(sessionStorage.getItem("cart")) || [];
        const discountData = JSON.parse(sessionStorage.getItem("discountSummary")) || {};
        this.setState({ productList: Array.isArray(cartList) ? cartList : [], discountPrec: discountData.discountPercentage, cst: discountData.cst, gst: discountData.gst }, () => this.calculate());
    }

    calculate() {
        let subTotal = this.state.productList.reduce((acc, item) => acc + get(item, 'price', 0) * get(item, 'quantity', 0), 0);
        let taxAmount = (subTotal * (this.state.cst + this.state.gst)) / 100;
        let discAmount = (subTotal * this.state.discountPrec) / 100;
        let grandTotal = (subTotal + taxAmount) - discAmount;
        this.setState({
            taxAmount: (taxAmount).toFixed(2),
            subTotal: (subTotal).toFixed(2),
            discAmount: (discAmount).toFixed(2),
            grandTotal: (grandTotal).toFixed(2)
        })
    }

    render() {
        const tailwindClasses = get(this.props, "tailwindClasses", {});
        const style = get(this.props, "style", {});

        return (
            <div className={`px-5 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        {get(this.props, 'leftTitle', '').length !== 0 && <h2 className={`text-2xl font-semibold mb-4 col-span-2 ${get(tailwindClasses, 'leftTitle')}`} style={get(style, 'leftTitle')}>{get(this.props, 'leftTitle')}</h2>}
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            First Name<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                        </label>
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Last Name<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                        </label>
                        <label className={`col-span-2 text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Company Name
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" />
                        </label>
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Email Address
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="email" />
                        </label>
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Phone<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="tel" required />
                        </label>
                        {/* <select className="border p-2 rounded col-span-2" placeholder="select a country">
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select> */}
                        <label className={`col-span-2 text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Address<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 mt-5 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                        </label>
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            City<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                        </label>
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Pincode<span className="text-red-500">*</span>
                            <input className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" required />
                        </label>
                    </div>
                    <div className="space-y-5">
                        {get(this.props, 'rightTitle', '').length !== 0 && <h2 className={`text-2xl font-semibold mb-7 ${get(tailwindClasses, 'rightTitle')}`} style={get(style, 'rightTitle')}>{get(this.props, 'rightTitle')}</h2>}
                        <label className={`text-gray-600 font-medium text-sm ${get(tailwindClasses, 'inputLabel')}`} style={get(style, 'inputLabel')}>
                            Order Notes
                            <textarea className={`border p-2 rounded w-full border-gray-300 focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')}></textarea>
                        </label>
                    </div>
                </div>
                <div>
                    {get(this.props, 'productListTitle', '').length !== 0 && <h2 className={`text-2xl font-semibold mt-6 mb-4 ${get(tailwindClasses, 'productListTitle')}`} style={get(style, 'productListTitle')}>{get(this.props, 'productListTitle')}</h2>}
                    <table className={`w-full border-collapse border border-gray-300 ${get(tailwindClasses, 'productListTable')}`} style={get(style, 'productListTable')}>
                        <thead>
                            <tr className={`bg-gray-200 ${get(tailwindClasses, 'tableTitle')}`} style={get(style, 'tableTitle')}>
                                <th className={`border p-2 ${get(tailwindClasses, 'columnTitle')}`} style={get(style, 'columnTitle')}>{get(this.props, 'column1Title')}</th>
                                <th className={`border p-2 ${get(tailwindClasses, 'columnTitle')}`} style={get(style, 'columnTitle')}>{get(this.props, 'column2Title')}</th>
                                <th className={`border p-2 ${get(tailwindClasses, 'columnTitle')}`} style={get(style, 'columnTitle')}>{get(this.props, 'column3Title')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.state.productList === null || this.state.productList.length === 0) && <div className="text-center nx-text-primary font-bold text-xl py-4">
                                {get(this.props, 'emptyCartText')}
                            </div>}
                            {Array.isArray(this.state.productList) && this.state.productList.map((item) => <tr>
                                {get(item, 'name','').length !==0 && <td className={`flex items-center gap-10 border p-2`}>
                                    {get(item, 'image','').length !==0 &&<NexImage src={get(item, 'image')} className={`!relative !h-20 !w-auto ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                                    <span className={`font-medium ${get(tailwindClasses,'name')}`} style={get(style,'name')}>{get(item, 'name')}</span>
                                </td>}
                                {get(item, 'quantity', '').length !== 0 && <td className={`border p-2 text-center ${get(tailwindClasses, 'quantity')}`} style={get(style, 'quantity')}>{get(item, 'quantity')}</td>}
                                {get(item, 'price', '').length !== 0 && <td className={`border p-2 text-center ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(item, 'price')}</td>}
                            </tr>)}
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-3">
                        {get(this.props, 'bottomTitle1', '').length !== 0 && <p className={`border p-2 w-48 font-bold bg-gray-200 ${get(tailwindClasses, 'bottomTitle')}`} style={get(style, 'bottomTitle')}>{get(this.props, 'bottomTitle1')}</p>}
                        {this.state.subTotal && <p className={`text-center border border-l-0 p-2 w-48 font-bold ${get(tailwindClasses, 'subtotal')}`} style={get(style, 'subtotal')}>{this.state.subTotal}</p>}
                    </div>
                    <div className="flex justify-end">
                        {get(this.props, 'bottomTitle2', '').length !== 0 && <p className={`border p-2 w-48 font-bold bg-gray-200 ${get(tailwindClasses, 'bottomTitle')}`} style={get(style, 'bottomTitle')}>{get(this.props, 'bottomTitle2')}</p>}
                        {this.state.taxAmount && <p className={`text-center border border-l-0 p-2 w-48 font-bold ${get(tailwindClasses, 'taxamount')}`} style={get(style, 'taxamount')}>{this.state.taxAmount}</p>}
                    </div>
                    <div className="flex justify-end">
                        {get(this.props, 'bottomTitle3', '').length !== 0 && <p className={`border p-2 w-48 font-bold bg-gray-200 ${get(tailwindClasses, 'bottomTitle')}`} style={get(style, 'bottomTitle')}>{get(this.props, 'bottomTitle3')}</p>}
                        {this.state.discAmount && <p className={`text-center border border-l-0 p-2 w-48 font-bold ${get(tailwindClasses, 'discamount')}`} style={get(style, 'discamount')}>{this.state.discAmount}</p>}
                    </div>
                    <div className="flex justify-end">
                        {get(this.props, 'bottomTitle4', '').length !== 0 && <p className={`border p-2 w-48 font-bold bg-gray-200 ${get(tailwindClasses, 'bottomTitle')}`} style={get(style, 'bottomTitle')}>{get(this.props, 'bottomTitle4')}</p>}
                        {this.state.grandTotal && <p className={`text-center border border-t-0 border-l-0 p-2 w-48 font-bold ${get(tailwindClasses, 'grandTotal')}`} style={get(style, 'grandTotal')}>{this.state.grandTotal}</p>}
                    </div>
                    {/* <h2 className="text-2xl font-semibold mt-6 mb-4">Payment Options</h2>
            <div className="flex flex-col gap-2">
                <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" /> Check Payments
                </label>
                <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" /> PayPal
                </label>
            </div> */}

                    {get(this.props, 'ctaText', '').length !== 0 && <div className="flex justify-end"><button className={`mt-6 nx-btn-primary nx-btn-primary:hover hover:-translate-y-[0.15rem] hover:shadow-lg px-6 py-2 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                        <PrimaryLink href={get(this.props, 'ctaLink')}>{get(this.props, 'ctaText')}</PrimaryLink>
                    </button></div>}
                </div>
            </div>
        )
    }
}

CheckoutV1.PropTypes={
    style:object,
    tailwindClasses:object,
    leftTitle: string,
    rightTitle: string,
    productListTitle: string,
    column1Title: string,
    column2Title: string,
    column3Title: string,
    ctaLink: string,
    ctaText: string,
    bottomTitle1: string,
    bottomTitle2: string,
    bottomTitle3: string,
    bottomTitle4: string,
    emptyCartText: string,
    items: arrayOf(object)
}

CheckoutV1.defaultProps = {
    style: {
        container: {},
        leftTitle: {},
        inputBox: {},
        inputLabel: {},
        rightTitle: {},
        productListTitle:{},
        productListTable:{},
        tableTitle:{},
        columnTitle:{},
        image:{},
        name:{},
        quantity:{},
        price:{},
        bottomTitle:{},
        subTotal:{},
        taxamount:{},
        discamount:{},
        grandTotal:{}
    },
    tailwindClasses: {
        container:"",
        leftTitle:"",
        inputBox:"",
        inputLabel:"",
        rightTitle:"",
        productListTitle:"",
        productListTable:"",
        tableTitle:"",
        columnTitle:"",
        image:"",
        name:"",
        quantity:"",
        price:"",
        bottomTitle:"",
        subTotal:"",
        taxamount:"",
        discamount:"",
        grandTotal:""
    },
    leftTitle: "Billing Details",
    rightTitle: "Additional Information",
    productListTitle: "Your Order",
    column1Title: "Items",
    column2Title: "Quantity",
    column3Title: "Total",
    ctaLink: "#",
    ctaText: "Proceed to Payment",
    bottomTitle1: "Subtotal",
    bottomTitle2: "Tax amount",
    bottomTitle3: "Discount",
    bottomTitle4: "Grand Total",
    emptyCartText: "Add Something for a Placing Order ....",
    items: [
        {
            image:"",
            name: "Deluxe Photo Prints",
            quantity: 2,
            price: 100
        },
        {
            image:"",
            name: "Cards and Canvas",
            quantity: 1,
            price: 40
        },
        {
            image:"",
            name: "Deluxe Photo Prints",
            quantity: 2,
            price: 100
        },
        {
            image:"",
            name: "Deluxe Photo Prints",
            quantity: 2,
            price: 100
        },
    ]
}
export default withData(CheckoutV1);
