import get from 'lodash.get';
import React from 'react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';

const OrderHistoryPageV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`px-4 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h2 className={`text-xl font-bold uppercase nx-bg-primary p-3 mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                {get(props, 'title')}
            </h2>}
            <div className="border-b pb-3 mb-3">
                <div className="sm:grid grid-cols-4 hidden">
                    {get(props, 'columnText1', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                    {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                    {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                    {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
                    {get(props, 'columnText5', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText5')}</span>}
                </div>
            </div>
            {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) =>
                <div key={get(item, 'id', '')} className="grid grid-cols-2 md:grid-cols-4 items-center border-b py-3">
                    <div className='flex flex-col'>
                        {get(props, 'columnText1', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                        {get(item, 'id', '').length !== 0 && <span className={`${get(tailwindClasses, 'orderId')}`} style={get(style, 'orderId')}>#{get(item, 'id')}</span>}
                    </div>
                    <div className='flex flex-col max-sm:mb-5'>
                        {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                        {get(item, 'status', '').length !== 0 && <span className={`${get(tailwindClasses, 'statusText')}`} style={get(style, 'statusText')}>{get(item, 'status')}</span>}
                    </div>
                    <div className='flex flex-col'>
                        {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                        {get(item, 'price', '').length !== 0 && <span className={`${get(tailwindClasses, 'priceText')}`} style={get(style, 'priceText')}>{get(props, 'currencySign')}{get(item, 'price')}</span>}
                    </div>
                    <div className='flex flex-col'>
                        {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
                        <div className="flex items-center justify-between">
                            {get(item, 'date', '').length !== 0 && <span className={`${get(tailwindClasses, 'date')}`} style={get(style, 'date')}>{get(item, 'date')}</span>}
                            {get(props, 'ctaText', '').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-4 py-2 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(item, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

OrderHistoryPageV1.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    columnText1: string,
    columnText2: string,
    columnText3: string,
    columnText4: string,
    columnText5: string,
    currencySign: string,
    ctaText: string,
    items: arrayOf(object)
};

OrderHistoryPageV1.defaultProps = {
    style: {
        container: {},
        title: {},
        columnText: {},
        orderId: {},
        statusText:{},
        priceText: {},
        date: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        columnText: "",
        statusText: "",
        priceText: "",
        date: "",
        cta: ""
    },
    title: "Order History",
    columnText1: "Order ID",
    columnText2: "Order Status",
    columnText3: "Price",
    columnText4: "Puchased On",
    currencySign: "$",
    ctaText: "View Details",
    items: [
        {
            id: 1,
            status: "Delivered",
            price: '50.00',
            date: 'Feb 10, 2025',
            total: '100.00',
            ctaLink: "#",
        },
        {
            id: 2,
            status: "Delivered",
            price: '50.00',
            date: 'Feb 10, 2025',
            total: '100.00',
            ctaLink: "#",
        },
        {
            id: 3,
            status: "Delivered",
            price: '50.00',
            date: 'Feb 10, 2025',
            total: '100.00',
            ctaLink: "#",
        },
        {
            id: 4,
            status: "Delivered",
            price: '50.00',
            date: 'Feb 10, 2025',
            total: '100.00',
            ctaLink: "#",
        },
    ]
}

export default withData(OrderHistoryPageV1);
