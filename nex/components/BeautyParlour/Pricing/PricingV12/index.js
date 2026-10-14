import React, { useState } from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { TabList } from '@headlessui/react';
import { arrayOf, object } from 'prop-types';

const PricingV12 = (props) => {
    const uniqueCategories = [...new Set(Array.isArray(get(props, 'items', [])) ? get(props, 'items', []).map(item => item.category) : [])]

    const [activeTab, setActiveTab] = useState(uniqueCategories[0])

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`bg-pink-100 py-20 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='flex justify-center gap-5 flex-wrap mb-8'>
                {uniqueCategories.map((tab) =>
                    <div onClick={() => setActiveTab(tab)} className={`cursor-pointer p-6 bg-white nx-bg-hover-primary hover:text-white text-lg font-semibold ${activeTab === tab ? "nx-btn-primary" : ""}  ${get(tailwindClasses, 'tabs')}`} style={get(style, 'tabs')}>
                        {tab}
                    </div>)}
            </div>
            <div className={`bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 p-6 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).filter(item => item.category === activeTab).map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-400 border-dashed px-3">
                        <div className="flex items-center gap-3">
                            {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} alt={get(item, 'name')} className={`!relative !w-16 !h-16 object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                            <div>
                                {get(item, 'name', '').length !== 0 && <h4 className={`text-lg font-semibold ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(item, 'name')}</h4>}
                                {get(item, 'duration', '').length !== 0 && <p className={`text-sm text-gray-500 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'duration')}</p>}
                            </div>
                        </div>
                        {get(item, 'price', '').length !== 0 && <h4 className={`text-lg font-bold nx-text-primary ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(item, 'price')}</h4>}
                    </div>
                ))}
            </div>
        </section>
    )
}

PricingV12.propTypes={
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
}

PricingV12.defaultProps = {
    style: {
        container:{},
        tabs:{},
        sectionBox:{},
        image:{},
        name:{},
        description:{},
        price:{}
    },
    tailwindClasses: {
        container:"",
        tabs:"",
        sectionBox:"",
        image:"",
        name:"",
        description:"",
        price:""
    },
    items: [
        {
            name: "Deep Tissue Massage",
            category: "Spa",
            duration: "60-100 Minute Session",
            price: "$40.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Hot Stone Massage",
            category: "Massage",
            duration: "50-60 Minute Session",
            price: "$34.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Facial",
            category: "Hair Makeup",
            duration: "15-30 Minute Session",
            price: "$38.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Swedish Massage",
            category: "Spa",
            duration: "30-40 Minute Session",
            price: "$35.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Therapeutic Massage",
            category: "Massage",
            duration: "40-60 Minute Session",
            price: "$30.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Couples Massage",
            category: "Hair Makeup",
            duration: "20-30 Minute Session",
            price: "$42.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Spa",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Massage",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Hair Makeup",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Spa",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Deep Tissue Massage",
            category: "Spa",
            duration: "60-100 Minute Session",
            price: "$40.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Hot Stone Massage",
            category: "Massage",
            duration: "50-60 Minute Session",
            price: "$34.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Facial",
            category: "Hair Makeup",
            duration: "15-30 Minute Session",
            price: "$38.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Swedish Massage",
            category: "Spa",
            duration: "30-40 Minute Session",
            price: "$35.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Therapeutic Massage",
            category: "Massage",
            duration: "40-60 Minute Session",
            price: "$30.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Couples Massage",
            category: "Hair Makeup",
            duration: "20-30 Minute Session",
            price: "$42.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Spa",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Massage",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Hair Makeup",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            category: "Spa",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]
}
export default PricingV12
