import get from 'lodash.get';
import React from 'react';
import PlpTileV2 from '../PlpTileV2';
import { useState,useEffect } from 'react';
import withData from '@nex-core-ui/HOC/withData';
import { arrayOf, number, object, string } from 'prop-types';

const ProductListV2 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const uniqueCategories = ["All",...new Set(Array.isArray(get(props, 'items', [])) ? (get(props, 'items', []).map(item => item.category)) : [])];

    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        if (uniqueCategories.length > 0 && !activeTab) {
            setActiveTab("All");
        }
    }, [uniqueCategories])

    return (
        <section className={`px-5 lg:px-20 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-5xl mx-auto mb-10'>
                <div className="flex flex-wrap justify-center space-x-6 pb-2">
                    {uniqueCategories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`nx-section-heading-font text-xl font-semibold transition-all duration-300 px-5 py-2 rounded-lg  ${activeTab === tab ? "nx-btn-primary nx-btn-primary:hover" : ""} ${get(tailwindClasses, 'tabs')}`} style={get(style, 'tabs')}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props,'sectionKeyNo')} gap-10`}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).filter(item=> activeTab === "All"|| item.category === activeTab).map((item) =>
                    <PlpTileV2 {...item} link={get(props, 'link', '')} />
                )}
            </div>
        </section>
    )
}

ProductListV2.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    link: string,
    items: arrayOf(object)
}

ProductListV2.defaultProps = {
    style:{
        container:{},
        tabs:{}, 
    },
    tailwindClasses:{
        container:"",
        tabs:""
    },
    sectionKeyNo: 4,
    link: "/product",
    items: [
        {
            id:"1",
            image: "https://images.pexels.com/photos/20004800/pexels-photo-20004800/free-photo-of-asian-soup-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Pancakes",
            description: "Fluffy pancakes with syrup",
            category: "Category1",
            price: "$8.5"
        },
        {
            id:"2",
            image: "https://images.pexels.com/photos/20943892/pexels-photo-20943892/free-photo-of-close-up-of-a-meal.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Omelette",
            description: "Cheese and veggie omelette",
            category: "Category2",
            price: "$7.0"
        },
        {
            id:"3",
            image: "https://images.pexels.com/photos/15058974/pexels-photo-15058974/free-photo-of-a-bowl-of-rice-with-tomatoes-and-yogurt.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Chicken Sandwich",
            description: "Served with fries",
            category: "Category1",
            price: "$12.0"
        },
        {
            id:"4",
            image: "https://images.pexels.com/photos/20408440/pexels-photo-20408440/free-photo-of-indian-curry-served-in-bronze-pan-with-decorations.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Caesar Salad",
            description: "Fresh lettuce with dressing",
            category: "Category3",
            price: "$10.5"
        },
        {
            id:"5",
            image: "https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Baked Potato Pizza",
            description: "Potato / Bread / Cheese",
            category: "Category2",
            price: "$20.9"
        },
        {
            id:"6",
            image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Fresh Crab With Lemon",
            description: "Potato / Bread / Cheese",
            category: "Category4",
            price: "$21.0"
        },
        {
            id:"7",
            image: "https://images.pexels.com/photos/4611424/pexels-photo-4611424.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            category: "Category3",
            price: "$12.3"
        },
        {
            id:"8",
            image: "https://images.pexels.com/photos/11974635/pexels-photo-11974635.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&fit=crop&dpr=1",
            name: "Grilled Salmon Sushi",
            description: "Potato / Bread / Cheese",
            category: "Category4",
            price: "$12.3"
        }
    ]
}
export default withData(ProductListV2)
