import React from "react";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import { arrayOf, object, string } from "prop-types";

const ProductListHomeV6 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`bg-pink-100 py-20 ${get(tailwindClasses, 'container')}`} style={{background:`url(${get(props,'bgImage')})`,backgroundSize:"cover",...get(style, 'container')}}>
            {get(props, 'subTitle', '').length !== 0 && <h4 className={`text-center font-semibold text-sm uppercase tracking-wide mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h4>}
            {get(props, 'title1', '').length !== 0 && <h2 className={`text-center text-4xl md:text-4xl font-semibold mb-8 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <span className="nx-text-primary italic">{get(props, 'title2')}</span></h2>}
            <div className={`bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 p-6 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                {get(props, 'items', []).map((item, index) => (
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

ProductListHomeV6.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title1: string,
    title2: string,
    items: arrayOf(object)
}

ProductListHomeV6.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox:{},
        image:{},
        name:{},
        description:{},
        price:{}
    },
    tailwindClasses: {
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        image:"",
        name:"",
        description:"",
        price:""
    },
    bgImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1742453963.bg10.jpg",
    subTitle: "Best Deal",
    title1: "Special",
    title2: "Pricing",
    items: [
        {
            name: "Deep Tissue Massage",
            duration: "60-100 Minute Session",
            price: "$40.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Hot Stone Massage",
            duration: "50-60 Minute Session",
            price: "$34.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Facial",
            duration: "15-30 Minute Session",
            price: "$38.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Swedish Massage",
            duration: "30-40 Minute Session",
            price: "$35.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Therapeutic Massage",
            duration: "40-60 Minute Session",
            price: "$30.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Couples Massage",
            duration: "20-30 Minute Session",
            price: "$42.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Body Waxing",
            duration: "80-100 Minute Session",
            price: "$65.00",
            image: "https://images.pexels.com/photos/12115041/pexels-photo-12115041.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]
}
export default ProductListHomeV6;
