import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import React from 'react';
import withData from '@nex-core-ui/HOC/withData';
import { arrayOf, object, string } from 'prop-types';

const ProductListHomeV4 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <div className={`px-4 py-20 ${get(tailwindClasses, 'container')}`} style={{ ...get(style, 'container') }}>
            <div className={`${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center mb-3 nx-text-primary ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle', '')}</h1>}
                {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font text-center text-4xl mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-xl mx-auto ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                <div className="w-full max-w-6xl mx-auto p-4">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item, index) => (
                            <PrimaryLink href={`${get(props, 'link')}/${get(item, 'name')}/${get(item, 'id')}`}>
                                <div key={index} className={`relative flex justify-between items-center lg:pr-2 border-2 ${(get(item, 'label', '') !== null) ? "nx-border-primary" : "border-transparent"}`}>
                                    {get(item, 'label', '') !== null && (
                                        <div className={`absolute -top-[1.80rem] nx-btn-primary px-2 py-1 font-bold text-sm w-full uppercase ${get(tailwindClasses, 'labelText')}`} style={get(style, 'labelText')}>
                                            {get(item, 'label')}
                                        </div>
                                    )}

                                    <div className='flex max-lg:flex-col items-center gap-2'>
                                        {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`!relative !h-auto lg:!h-24 !w-auto max-lg:!w-full ${get(tailwindClasses, 'productImage')}`} style={get(style, 'productImage')} />}
                                        <div>
                                            {get(item, 'name', '').length !== 0 && <h3 className={`font-medium text-lg ${get(tailwindClasses, 'productName')}`} style={get(style, 'productName')}>{get(item, 'name')}</h3>}
                                            {get(item, 'description', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'productDescription')}`} style={get(style, 'productDescription')}>{get(item, 'description')}</p>}
                                        </div>
                                        {get(item, 'price', '').length !== 0 && <span className={`font-semibold text-lg lg:hidden ${get(tailwindClasses, 'productPrice')}`} style={get(style, 'productPrice')}>{get(item, 'price')}</span>}
                                    </div>
                                    {get(item, 'price', '').length !== 0 && <span className={`font-semibold text-lg max-lg:hidden ${get(tailwindClasses, 'productPrice')}`} style={get(style, 'productPrice')}>{get(item, 'price')}</span>}
                                </div>
                            </PrimaryLink>))}
                    </div>
                </div>
                {get(props, 'ctaText', '').length !== 0 && <div className="flex justify-center">
                    <button className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-lg ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                        <PrimaryLink href={get(props, 'ctaLink')}>
                            {get(props, 'ctaText')}
                        </PrimaryLink>
                    </button>
                </div>}
            </div>
        </div>
    )
}

ProductListHomeV4.propTypes = {
    style: object,
    tailwindClasses: object,
    bgImage: string,
    subTitle: string,
    title: string,
    description: string,
    ctaLink: string,
    ctaText: string,
    items: arrayOf(object)
}

ProductListHomeV4.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        description: {},
        labelText: {},
        productImage: {},
        productName: {},
        productDescription: {},
        productPrice: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        description: "",
        labelText: "",
        productImage: "",
        productName: "",
        productDescription: "",
        productPrice: "",
        cta: ""
    },
    link: "product",
    subTitle: "Delicious menu",
    title: "Chief Recommended",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque sequi ipsa aliquid vero sed.",
    ctaLink: "#",
    ctaText: "View All",
    items: [
        {
            id: "1",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Breakfast",
            name: "Pancakes",
            description: "Fluffy pancakes with syrup",
            price: "$8.5",
            label: ""
        },
        {
            id: "2",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Breakfast",
            name: "Omelette",
            description: "Cheese and veggie omelette",
            price: "$7.0",
            label: ""
        },
        {
            id: "3",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Lunch",
            name: "Grilled Chicken Sandwich",
            description: "Served with fries",
            price: "$12.0",
            label: ""
        },
        {
            id: "4",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Lunch",
            name: "Caesar Salad",
            description: "Fresh lettuce with dressing",
            price: "$10.5",
            label: "Featured"
        },
        {
            id: "5",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Dinner",
            name: "Baked Potato Pizza",
            description: "Potato / Bread / Cheese",
            price: "$20.9",
            label: ""
        },
        {
            id: "6",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Dinner",
            name: "Fresh Crab With Lemon",
            description: "Potato / Bread / Cheese",
            price: "$21.0",
            label: ""
        },
        {
            id: "7",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Dinner",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            price: "$12.3",
            label: "chef selection"
        },
        {
            id: "8",
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            category: "Dinner",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            price: "$12.3",
            label: ""
        },
    ]
}
export default withData(ProductListHomeV4)