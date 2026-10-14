import get from "lodash.get";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NexImage from "@nex-core-ui/NexImage";
import { object, string } from "prop-types";
import { arrayOf } from "prop-types";
import React, { Component } from 'react'
import PrimaryLink from "@nex-core-ui/PrimaryLink";

class AddToCartPageV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: get(this.props, 'items', []),
            subTotal: 0,
            cst: get(this.props,'cstTaxPercentage',0),
            gst: get(this.props,'gstTaxPercentage',0),
            taxAmount:0,
            discountPerc: get(this.props,'discountPercentage',0),
            discAmount:0,
            grandTotal: 0
        }
    }

    componentDidMount() {
        const cartList = JSON.parse(sessionStorage.getItem("cart")) || [];
        this.setState({ cartItems: Array.isArray(cartList) ? cartList : [] }, () => this.calculate());
    }

    handleQuantityChange = (id, delta) => {
        this.setState((prevItems) =>{
        let updatedCart = prevItems.cartItems.map((item) =>
                get(item, 'id', '') === id ? { ...item, quantity: Math.max(1, (Number(get(item, 'quantity', 0))) + delta) } : item
            );
        sessionStorage.setItem("cart",JSON.stringify(updatedCart));
        return {cartItems: updatedCart};
    },this.calculate);
    };

    handleRemoveItem = (id) => {
        this.setState((prevItems) => {
            let updatedCart = prevItems.cartItems.filter((item) => get(item, 'id', '') !== id);
            sessionStorage.setItem("cart", JSON.stringify(updatedCart));
            return { cartItems: updatedCart };
        }, this.calculate);
    }

    calculate() {
        let subTotal = this.state.cartItems.reduce((acc, item) => acc + get(item, 'price', 0) * get(item, 'quantity', 0), 0)
        let taxAmount = (subTotal * (this.state.cst + this.state.gst)) / 100
        let discAmount = (subTotal * this.state.discountPerc) / 100
        let grandTotal = (subTotal + taxAmount) - discAmount
        this.setState({
            taxAmount: taxAmount.toFixed(2),
            subTotal: subTotal.toFixed(2),
            discAmount: discAmount.toFixed(2),
            grandTotal: grandTotal.toFixed(2)
        });
        sessionStorage.setItem("discountSummary",JSON.stringify({
            discountPercentage: this.state.discountPerc,
            cst: this.state.cst,
            gst: this.state.gst
        }))
    }

    render() {
        const tailwindClasses = get(this.props, "tailwindClasses", {});
        const style = get(this.props, "style", {});

        return (
            <div className={`px-5 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <table className="max-md:hidden w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            {get(this.props, 'label1', '').length !== 0 && <th className={`p-3 border ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(this.props, 'label1')}</th>}
                            {get(this.props, 'label2', '').length !== 0 && <th className={`p-3 border ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(this.props, 'label2')}</th>}
                            {get(this.props, 'label3', '').length !== 0 && <th className={`p-3 border ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(this.props, 'label3')}</th>}
                            {get(this.props, 'label4', '').length !== 0 && <th className={`p-3 border ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(this.props, 'label4')}</th>}
                            {get(this.props, 'label5', '').length !== 0 && <th className={`p-3 border ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(this.props, 'label5')}</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(this.state.cartItems) && this.state.cartItems.map((item) => (
                            <tr key={get(item, 'id')} className="border">
                                <td className="p-3 flex items-center gap-2">
                                    {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} alt={get(item, 'name')} className="!relative !w-20 !h-20" />}
                                    {get(item, 'name', '').length !== 0 && <h1 className={`font-bold nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'name')}</h1>}
                                </td>
                                {get(item, 'price', '').length !== 0 && <td className={`p-3 border nx-text-primary ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(item, 'price')}</td>}
                                <td className="p-3 border">
                                    <div className="flex flex-col gap-1">
                                        {get(item, 'quantity', '').length !== 0 && <div className="flex items-center">
                                            <button
                                                className={`px-2 border size-7 ${get(tailwindClasses, 'minusIcon')}`}
                                                style={get(style, 'minusIcon')}
                                                onClick={() => this.handleQuantityChange(item.id, -1)}
                                                disabled={item.quantity === 1}
                                            >
                                                <MinusIcon />
                                            </button>
                                            <span className={`px-4 ${get(tailwindClasses, 'quantityText')}`} style={get(style, 'quantityText')}>{get(item, 'quantity')}</span>
                                            <button
                                                className={`px-2 border size-7 ${get(tailwindClasses, 'plusIcon')}`}
                                                style={get(style, 'plusIcon')}
                                                onClick={() => this.handleQuantityChange(item.id, 1)}>
                                                <PlusIcon />
                                            </button>
                                        </div>}
                                    </div>
                                </td>
                                {(get(item, 'price') || get(item, 'quantity')) && <td className={`p-3 border font-semibold ${get(tailwindClasses, 'total')}`} style={get(style, 'total')}>{(get(item, 'price') * get(item, 'quantity'))}</td>}
                                <td className="p-2"><button onClick={() => this.handleRemoveItem(get(item, 'id'))} className={`size-6 ${get(tailwindClasses, 'deleteIcon')}`} style={get(style, 'deleteIcon')}>
                                    <XMarkIcon />
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {(this.state.cartItems === null || this.state.cartItems.length ===0) && <div className="text-center nx-text-primary font-bold text-xl py-4">
                    {get(this.props, 'emptyCartText')}
                </div>}
                <div className="md:hidden">
                    {Array.isArray(this.state.cartItems) && this.state.cartItems.map((item) => (
                        <div key={get(item, 'id')} className="border p-4 rounded-md shadow-md flex flex-col gap-2 mb-4">
                            <div className="flex gap-3">
                                <NexImage src={get(item, 'image')} alt={get(item, 'name')} className="!relative !w-16 !h-16 rounded-md" />
                                <div>
                                    {get(item, 'name', '').length !== 0 && <h2 className={`text-lg font-bold nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'name')}</h2>}
                                    {get(item, 'price', '').length !== 0 && <p className={`nx-text-primary ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(item, 'price')}</p>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                {get(item, 'quantity', '').length !== 0 && <div className="flex items-center">
                                    <button
                                        className={`px-2 border size-7 ${get(tailwindClasses, 'minusIcon')}`}
                                        style={get(style, 'minusIcon')}
                                        onClick={() => this.handleQuantityChange(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <MinusIcon />
                                    </button>
                                    <span className={`px-4 ${get(tailwindClasses, 'quantityText')}`} style={get(style, 'quantityText')}>{get(item, 'quantity')}</span>
                                    <button
                                        className={`px-2 border size-7 ${get(tailwindClasses, 'plusIcon')}`}
                                        style={get(style, 'plusIcon')}
                                        onClick={() => this.handleQuantityChange(item.id, 1)}>
                                        <PlusIcon />
                                    </button>
                                </div>}
                                {(get(item, 'price') || get(item, 'quantity')) && <p className={`text-lg font-semibold ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{(get(item, 'price') * get(item, 'quantity'))}</p>}
                                <button onClick={() => this.handleRemoveItem(get(item, 'id'))} className={`size-6 ${get(tailwindClasses, 'deleteIcon')}`} style={get(style, 'deleteIcon')}>
                                    <XMarkIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-between mt-4">
                    <div className="flex items-center gap-2 max-sm:mb-3">
                        <input
                            type="text"
                            className={`border-t-0 nx-border-primary border-b-2 border-l-0 border-r-0 focus:ring-0 p-2 ${get(tailwindClasses, 'couponBox')}`}
                            style={get(style, 'couponBox')}
                            placeholder="Coupon Code"
                        />
                        {get(this.props, 'cta1Text', '').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] px-5 py-2 text-sm uppercase rounded-md ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}>{get(this.props, 'cta1Text')}</button>}
                    </div>
                    {get(this.props, 'cta2Text', '').length !== 0 && <button className={`bg-gray-600 text-white text-sm uppercase px-4 py-2 rounded ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}>{get(this.props, 'cta2Text')}</button>}
                </div>

                <div className="border-t mt-4 pt-4 text-right">
                    {this.state.subTotal && <p className={`text-lg font-semibold ${get(tailwindClasses, 'subTotal')}`} style={get(style, 'subTotal')}>Subtotal: {this.state.subTotal}</p>}
                    {this.state.taxAmount && <p className={`text-lg font-semibold ${get(tailwindClasses, 'taxAmount')}`} style={get(style, 'taxAmount')}>Tax amount: {this.state.taxAmount}</p>}
                    {this.state.discAmount && <p className={`text-lg font-semibold ${get(tailwindClasses, 'discAmount')}`} style={get(style, 'discAmount')}>Discount amount: {this.state.discAmount}</p>}
                    {this.state.grandTotal && <p className={`text-xl font-bold ${get(tailwindClasses, 'grandTotal')}`} style={get(style, 'grandTotal')}>Grand Total: {this.state.grandTotal}</p>}
                </div>
                <div className="text-right mt-4">
                    {get(this.props, 'cta3Text', '').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] px-5 py-2 text-lg uppercase rounded-md ${get(tailwindClasses, 'cta3')}`} style={get(style, 'cta3')}><PrimaryLink href={get(this.props,'cta3Link')}>{get(this.props, 'cta3Text')}</PrimaryLink></button>}
                </div>
            </div>
        )
    }
}

// const AddToCartPageV2 = (this.props) => {

//     const [cartItems, setCartItems] = useState(get(this.props, 'items', []));

//     useEffect(()=>{
//         setCartItems(JSON.parse(sessionStorage.getItem("cart")))
//     },[]);

//     useEffect(()=>{
//         sessionStorage.setItem("cart",JSON.stringify(cartItems));
//     },[cartItems])

//     const handleQuantityChange = (id, delta) => {
//         const cartList = this.state.cartList;


//         this.setState({
//             cartList: cartList
//         })

//         setCartItems((prevItems) => Array.isArray(prevItems) ?
//             prevItems.map((item) =>
//                 get(item, 'id', '') === id ? { ...item, quantity: Math.max(1, (Number(get(item, 'quantity', 0))) + delta) } : item
//             ) : []
//         );
//     };

//     const calcualte = (cartList) => {
//         // iterate
//         // sub total
//         // tax 18%
//         // tax
//         // discount = 0
//         this.setState({
//             cartList: 
//             subTotal:
//             taxPerc: 18,
//             tax: 
//             discout: 10%
//             discout: 'flat'
//         })

//     }
//     const handleRemoveItem = (id) => {
//         setCartItems((prevItems) => Array.isArray(prevItems) ? (prevItems.filter((item) => get(item, 'id', '') !== id)) : []);
//     }

//     const subtotal = cartItems.reduce((acc, item) => acc + get(item, 'price', 0) * get(item, 'quantity', 0), 0);

//     return (

//     );
// };

AddToCartPageV2.propTypes = {
    style: object,
    tailwindClasses: object,
    label1: string,
    label2: string,
    label3: string,
    label4: string,
    label5: string,
    cta1Text: string,
    cta2Text: string,
    cta3Text: string,
    emptyCartText: string,
    items: arrayOf(object)
}

AddToCartPageV2.defaultProps = {
    style: {
        container: {},
        label: {},
        image: {},
        title: {},
        price: {},
        quantityText: {},
        total: {},
        deleteIcon: {},
        plusIcon: {},
        minusIcon: {},
        inputBox: {},
        cta1: {},
        cta2: {},
        cta3: {},
        subTotal: {},
        taxAmount:{},
        discAmount:{},
        grandTotal: {}
    },
    tailwindClasses: {
        container: "",
        label: "",
        image: "",
        title: "",
        price: "",
        quantityText: "",
        total: "",
        deleteIcon: "",
        plusIcon: "",
        minusIcon: "",
        inputBox: "",
        cta1: "",
        cta2: "",
        cta3: "",
        subTotal: "",
        taxAmount:"",
        discAmount:"",
        grandTotal: ""
    },
    label1: "Items",
    label2: "Price",
    label3: "Quantity",
    label4: "Total",
    label5: "Remove",
    cta1Text: "apply coupon",
    cta2Text: "update cart",
    cta3Link:"#",
    cta3Text: "proceed to checkout",
    emptyCartText: "Add Something for a Checkout ....",
    discountPercentage:25,
    cstTaxPercentage:9,
    gstTaxPercentage:9,
    items: [
        {
            id: 1,
            name: "Baked Potato Pizza",
            price: 200,
            quantity: 1,
            image: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            name: "Confit de Burger",
            price: 300,
            quantity: 1,
            image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]
}
export default AddToCartPageV2;

