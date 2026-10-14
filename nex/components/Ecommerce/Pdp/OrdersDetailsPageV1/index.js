import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import React from 'react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object, string } from 'prop-types';

const OrdersDetailsPageV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    const grandTotal = get(props, 'items', []).reduce((acc, item) => acc + parseFloat(get(item, 'total', 0)), 0);
    return (
        <section className={`px-4 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props,'ctaText','').length !==0 &&<button className={`mb-4 nx-text-primary hover:underline ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><PrimaryLink href={get(props,'ctaLink')}>&larr; {get(props,'ctaText')}</PrimaryLink></button>}
            {get(props,'title','').length !==0 &&<h2 className={`text-xl font-bold uppercase nx-bg-primary p-3 mb-4 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h2>}
            {get(props, 'id', '').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'idTitle')}</span> #{get(props, 'id', 'N/A')}</p>}
            {get(props, 'date', '').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'dateTitle')}</span> {get(props, 'date', 'N/A')}</p>}
            {get(props, 'status', '').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'statusTitle')}</span> {get(props, 'status', 'N/A')}</p>}
            {get(props, 'shippingAddress', '').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'shippingAddressTitle')}</span> {get(props, 'shippingAddress', 'N/A')}</p>}
            {get(props, 'paymentMethod', '').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'paymentMethodTitle')}</span> {get(props, 'paymentMethod', 'N/A')}</p>}
            {get(props, 'grandTotalTitle','').length !==0 &&<p className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}><span className={`font-bold ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props, 'grandTotalTitle')}</span> {get(props, 'currencySign', '$')}{grandTotal.toFixed(2)}</p>}
            <div className='sm:grid grid-cols-5 hidden'>
                {get(props, 'columnText1', '').length !== 0 && <span className={`col-span-2 font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
            </div>
            <div className="border-t mt-2">
                {get(props, 'items', []).map((item) => (
                    <div key={get(item, 'id')} className="grid grid-cols-2 md:grid-cols-5 items-center border-b py-3">
                        <div className='flex flex-col col-span-2'>
                            {get(props, 'columnText1', '').length !== 0 && <span className={`col-span-2 font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                            <div className="flex items-center space-x-4">
                                {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image', '')} alt={get(item, 'name', '')} className={`!relative !w-20 !h-20 object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                                {get(item, 'name', '').length !== 0 && <span className={`${get(tailwindClasses, 'itemName')}`} style={get(style, 'itemName')}><PrimaryLink href={get(item, 'nameLink')}>{get(item, 'name')}</PrimaryLink></span>}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                            {get(item, 'price', '').length !== 0 && <span className={`${get(tailwindClasses, 'itemPrice')}`} style={get(style, 'itemPrice')}>{get(props, 'currencySign', '$')}{get(item, 'price')}</span>}
                        </div>
                        <div className='flex flex-col'>
                            {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                            {get(item, 'quantity', '').length !== 0 && <span className={`md:px-4 ${get(tailwindClasses, 'itemQuantity')}`} style={get(style, 'itemQuantity')}>{get(item, 'quantity')}</span>}
                        </div>
                        <div className='flex flex-col'>
                            {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
                            {get(item, 'total', '').length !== 0 && <span className={`${get(tailwindClasses, 'itemTotal')}`} style={get(style, 'itemTotal')}>{get(props, 'currencySign', '$')}{get(item, 'total')}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

OrdersDetailsPageV1.propTypes = {
    style: object,
    tailwindClasses: object,
    ctaLink: string,
    ctaText: string,
    title: string,
    idTitle: string,
    id: string,
    dateTitle: string,
    date: string,
    statusTitle: string,
    status: string,
    shippingAddressTitle: string,
    shippingAddress: string,
    paymentMethodTitle: string,
    paymentMethod: string,
    grandTotalTitle: string,
    columnText1: string,
    columnText2: string,
    columnText3: string,
    columnText4: string,
    items: arrayOf(object),
    currencySign: string,
};

OrdersDetailsPageV1.defaultProps = {
    style: {
        container: {},
        cta:{},
        title:{},
        text:{},
        value:{},
        columnText:{},
        image:{},
        itemName:{},
        itemPrice:{},
        itemQuantity:{},
        itemTotal:{},
    },
    tailwindClasses: {
        container: "",
        cta: "",
        title: "",
        text: "",
        value: "",
        columnText: "",
        image: "",
        itemName: "",
        itemPrice: "",
        itemQuantity: "",
        itemTotal: "",
    },
    ctaLink:"#",
    ctaText:"Back to Orders",
    title: "Order Details",
    idTitle: "Order ID: ",
    id: '1',
    dateTitle: "Order Date:",
    date: 'Feb 10, 2025',
    statusTitle: "Order Status:",
    status: 'Shipped',
    shippingAddressTitle: "Shipping To: ",
    shippingAddress: '123 Main St, New York, NY',
    paymentMethodTitle: "Payment Method:",
    paymentMethod: 'Credit Card',
    grandTotalTitle: "Total Order Amount: ",
    columnText1: "Item",
    columnText2: "Price",
    columnText3: "Quantity",
    columnText4: "Total",
    items: [
        {
            id: 1,
            name: 'Nami alan shankle tempus turpis',
            nameLink: "#",
            image: 'https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '50.00',
            quantity: 2,
            total: '100.00',
        },
        {
            id: 1,
            name: 'Nami alan shankle tempus turpis',
            nameLink: "#",
            image: 'https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '50.00',
            quantity: 2,
            total: '100.00',
        },
    ],
    currencySign: "$",
}

export default OrdersDetailsPageV1
