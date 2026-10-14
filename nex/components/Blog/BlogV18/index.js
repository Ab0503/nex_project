import PropTypes, { object, string } from 'prop-types'
import get from "lodash.get";
import { useState } from "react";
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";
import NexAnimation from '@nex-components/NexAnimation';

const BlogV18 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    
    const [selectedCategory, setSelectedCategory] = useState("View All")

    const filteredData = selectedCategory === "View All" ? props.items : props.items.filter((item)=> item.category === selectedCategory)
    return (
        <div className={`py-8 overflow-hidden ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="text-center mb-6">
                {
                    get(props, 'subtitle', '').length !== 0 && <p className={`nx-text-primary uppercase text-sm ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subtitle')}</p>
                }
                {
                    get(props, 'title', '').length !== 0 && <h2 className={`nx-section-heading-font text-3xl font-semibold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}> {get(props, 'title')}
                    <span >
                    </span></h2>
                }
                {
                    get(props, 'description', '').length !== 0 && <p className={`max-w-xl mx-auto ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                        {get(props, 'description')} </p>
                }
            </div>

            <div className="flex flex-wrap justify-center space-x-4 mb-8">

                {get(props,'categories',[]).map((item) => get(item, 'category').length !== 0 &&(
                   
                   <button key={get(props,'category')} onClick={()=>setSelectedCategory(get(item,'category'))} className={`bg-gray-300 px-4 py-2 mb-3 rounded  transition ${selectedCategory === get(item,'category') && "nx-btn-primary nx-btn-primary:hover"} ${get(tailwindClasses, 'categoryCta')}`} style={get(style, 'categoryCta')} >{get(item,'category')}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20 ">
                {filteredData.map((item,index) => (
                    <NexAnimation type={get(props, 'boxAnimation', '')}>
                    <div
                        key={index}
                        className="shadow rounded  overflow-visible hover:shadow-lg transition hover:-translate-y-1 hover:scale-110"
                    >
                        {get(item, 'imagePath').length !== 0 && <NexImage
                            src={get(item, 'imagePath')}
                            className={`!relative !w-full !h-40 object-cover rounded ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} alt="" />}
                        <div className="p-4 group">
                            {
                                get(item, 'text', '').length !== 0 && <h3 className={`font-semibold text-lg  ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</h3>
                            }
                            {
                                get(item, 'subtext', '').length !== 0 && <p className={`${get(tailwindClasses, 'subtext')}`} style={get(style, 'subtext')} >{get(item, 'subtext')}</p>
                            }
                            {
                                get(item,'category','').length !==0 && <h1 className={`text-sm ${get(tailwindClasses, 'category')}`} style={get(style,'category')}>{get(item,'category')}</h1>
                            }
                        </div>
                    </div>
                    </NexAnimation>
                ))}
            </div>
        </div>
    );
}
BlogV18.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    categories : PropTypes.arrayOf(string),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(object)
};

BlogV18.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        description: {},
        categoryCta:{},
        text: {},
        subtext: {},
        image:{},
        category:{}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        description: "",
        categoryCta:"",
        text: "",
        subtext: "",
        image:"",
        category:""
    },
    title: "Introduce Some Projects",
    subtitle: "Latest Projects",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    categoryCtaSelectColor:"bg-red-600 text-gray-50 hover:bg-yellow-500",
    categories : [
        {
            category:"View All"
        }, 
        {
            category:"Garden Care"
        },
        {
            category: "Lawn Care"
        },
        {
            category: "Planting"
        }, 
        {
            category: "Landscape"
        }
    ],
    
    items: [
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care',
            subtext:"dummy",
            category:"Garden Care",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care1',
            subtext:"dummy...",
            category:"Garden Care",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care',
            subtext:"dummy",
            category:"Lawn Care",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care1',
            subtext:"dummy...",
            category:"Lawn Care",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care',
            subtext:"dummy",
            category:"Planting",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care1',
            subtext:"dummy...",
            category:"Planting",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care',
            subtext:"dummy",
            category:"Landscape",
        },
        {
            imagePath:
                "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            text: 'Proper Take Care1',
            subtext:"dummy...",
            category:"Landscape",
        },
        ],
        boxAnimation: ''

};

export default withData(BlogV18);