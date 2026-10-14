import withData from '@nex-core-ui/HOC/withData';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react'

const ProductListHomeV5 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-20 px-5 text-white relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(0,0,0,0.7)] ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, backgroundSize: "cover", ...get(style, 'container') }}>
            <div className='relative z-10'>
                {get(props, 'subTitle', '').length !== 0 && <h1 className={`font-semibold text-center uppercase text-sm mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font font-bold text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-xl mx-auto mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')} gap-8`}>
                    {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) =>
                        <PrimaryLink href={`${get(props, 'link')}/${get(item, 'name')}/${get(item, 'id')}`}>
                            <div className={`rounded overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`!relative !h-auto rounded mb-2 ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} />}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        {get(item, 'name', '').length !== 0 && <h1 className={`font-semibold mb-1 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'name')}</h1>}
                                        {get(item, 'description', '').length !== 0 && <p className={`text-[.7rem] max-w-[15rem] ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                                    </div>
                                    {get(item, 'price', '').length !== 0 && <span className={`font-bold nx-text-primary ${get(tailwindClasses, 'sectionPrice')}`} style={get(style, 'sectionPrice')}>{get(item, 'price')}</span>}
                                </div>
                            </div>
                        </PrimaryLink>)}
                </div>
                {get(props, 'ctaText', '').length !== 0 && <div className='flex justify-center mt-5'>
                    <button className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded hover:translate-y-[-0.15rem] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>
                </div>}
            </div>
        </section>
    )
}

ProductListHomeV5.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    bgImage: string,
    subTitle: string,
    title: string,
    description: string,
    ctaText: string,
    ctaLink: string,
    items: arrayOf(object)
}
ProductListHomeV5.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        description: {},
        sectionBox: {},
        sectionImage: {},
        sectionTitle: {},
        sectionDescription: {},
        sectionPrice: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        description: "",
        sectionBox: "",
        sectionImage: "",
        sectionTitle: "",
        sectionDescription: "",
        sectionPrice: "",
        cta: ""
    },
    link:"product",
    sectionKeyNo: 4,
    bgImage: "https://images.pexels.com/photos/30869948/pexels-photo-30869948/free-photo-of-delicious-breakfast-spread-with-coffee-and-pastries.jpeg?auto=compress&cs=tinysrgb&w=2100&h=1400&fit=crop&dpr=1",
    subTitle: "Menu Specials",
    title: "Chief recommended",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, alias animi tenetur delectus aliquam. Esse saepe incidunt.",
    ctaText: "View All",
    ctaLink: "#",
    items: [
        {
            id: "1",
            image: "https://images.pexels.com/photos/20004800/pexels-photo-20004800/free-photo-of-asian-soup-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Pancakes",
            description: "Fluffy pancakes with syrup",
            price: "$8.5"
        },
        {
            id: "2",
            image: "https://images.pexels.com/photos/20943892/pexels-photo-20943892/free-photo-of-close-up-of-a-meal.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Omelette",
            description: "Cheese and veggie omelette",
            price: "$7.0"
        },
        {
            id: "3",
            image: "https://images.pexels.com/photos/15058974/pexels-photo-15058974/free-photo-of-a-bowl-of-rice-with-tomatoes-and-yogurt.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Chicken Sandwich",
            description: "Served with fries",
            price: "$12.0"
        },
        {
            id: "4",
            image: "https://images.pexels.com/photos/20408440/pexels-photo-20408440/free-photo-of-indian-curry-served-in-bronze-pan-with-decorations.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Caesar Salad",
            description: "Fresh lettuce with dressing",
            price: "$10.5"
        },
        {
            id: "5",
            image: "https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Baked Potato Pizza",
            description: "Potato / Bread / Cheese",
            price: "$20.9"
        },
        {
            id: "6",
            image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Fresh Crab With Lemon",
            description: "Potato / Bread / Cheese",
            price: "$21.0"
        },
        {
            id: "7",
            image: "https://images.pexels.com/photos/4611424/pexels-photo-4611424.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            price: "$12.3"
        },
        {
            id: "8",
            image: "https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            price: "$12.3"
        }
    ]
}
export default withData(ProductListHomeV5)
