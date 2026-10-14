import React, { useState } from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";

const BlogV12 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});

    const [selectedCategory, setSelectedCategory]= useState("All Category")

    const filteredData = selectedCategory === "All Category" ? props.items : props.items.filter((item)=> item.category === selectedCategory) 

  return (
    <div>
        <div className={`bg-gray-50 w-full ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="text-center mb-4">
                <div className="mt-2 inline-flex gap-2">
                {
                    get(props, 'icon',"").length != 0 &&    
                    <span className={`bg-orange-500 rounded-full ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                }
                {
                    get(props, 'subTitle',"").length != 0 &&
                    <p className={`lg:text-sm max-sm:text-sm text-green-800 font-medium tracking-wide ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                }
                </div>
                {
                    get(props, 'title',"").length != 0 &&
                    <h1 className={`text-3xl font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h1>
                }
                <div className="flex flex-wrap justify-center space-x-4 mt-4 mx-auto max-sm:text-xs">
                {
                   props.categories.map((item)=>
                    <button onClick={()=>setSelectedCategory(get(item,'category'))} className={`px-4 py-2 mb-3 hover:text-gray-50 text-gray-800 bg-gray-200 hover:bg-orange-500 ${selectedCategory == get(item,'category') ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-500"} rounded-full ${get(tailwindClasses, 'button')}`} style={get(style, 'button')}>{get(item,"category")}</button>
                )}
                </div>
            </div>
            
            <div className="lg:max-w-4xl md:max-w-2xl max-lg:max-w-5xl mx-auto grid sm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:gap-4 sm:gap-2">    
                {/* Card one */}
            {
            filteredData.map((item) => (get(item, 'imagePath1',"").length != 0 || get(item, 'icon1',"").length != 0 || 
            get(item, 'roundText1',"").length != 0 || get(item, 'roundText2',"").length != 0 || get(item, 'roundText3',"").length != 0 || 
            get(item, 'subTitle1',"").length != 0 || get(item, 'title1',"").length != 0 || get(item, 'description1',"").length != 0 || 
            get(item, 'box2Icon1',"").length != 0 || get(item, 'box2Text1',"").length != 0 || get(item, 'box2Text2',"").length != 0 || 
            get(item, 'box2Icon2',"").length != 0 || get(item, 'box2Text3',"").length != 0 || get(item, 'box2Text4',"").length != 0) &&
                (<div className='relative mb-4 mx-auto'>
                    <div className='relative'>
                    {
                        get(item, 'imagePath1',"").length != 0 &&
                        <NexImage className={`!h-56 !w-56 lg:w-56 md:w-64 max-sm:w-64 sm:w-80 object-cover bg-cover !relative rounded-lg -mb-20 ml-16 right-16 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item,"imagePath1")}/>
                    }
                    </div>
                    <div className={`lg:w-72 md:w-80 max-sm:w-80 sm:w-96 bg-gray-50 rounded-lg shadow-lg overflow-hidden ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                        <div className={`absolute lg:w-72 md:w-80 max-sm:w-60 sm:w-80 flex items-center bg-green-800 hover:bg-orange-500 p-2 rounded-full mb-4 ${get(tailwindClasses, 'roundBox')}`} style={get(style, 'roundBox')}>
                        {
                            get(item, 'icon1',"").length != 0 &&
                            <span className={`lg:text-xl md:text-md max-sm:text-sm font-bold ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>
                            {parse(get(item, 'icon1'))}
                            </span>
                        }
                            <div className="relative flex gap-16 w-fit p-2">
                                <div className='relative'>
                                {
                                    get(item, 'roundText1',"").length != 0 &&
                                    <h2 className={`text-start text-sm font-semibold ${get(tailwindClasses, 'roundText1')}`} style={get(style, 'roundText1')}>{get(item,"roundText1")}</h2>
                                }
                                {
                                    get(item, 'roundText2',"").length != 0 &&   
                                    <p className={`text-start text-xs font-medium text-gray-800 ${get(tailwindClasses, 'roundText2')}`} style={get(style, 'roundText2')}>{get(item,"roundText2")}</p>
                                }
                                </div>
                                <div className="h-8 w-2 bg-gray-400 rounded-full overflow-hidden rotate-180">
                                    <div className={`h-5 bg-green-400 rounded-full`}></div>
                                </div>
                            </div> 
                            {
                                get(item, 'roundText3',"").length != 0 &&
                                <p className={`text-xs ${get(tailwindClasses, 'roundText2')}`} style={get(style, 'roundText2')}>{get(item,"roundText3")}</p>
                            }
                        </div>
                        <div className="p-6 text-start">
                        {
                            get(item, 'category',"").length != 0 &&
                            <h2 className={`text-orange-500 font-bold text-sm mb-2 mt-16 ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(item,"category")}</h2>
                        }
                        {
                            get(item, 'title1',"").length != 0 &&
                            <h3 className={`text-xl font-semibold text-gray-800 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(item,"title1")}</h3>
                        }
                        {
                            get(item, 'description1',"").length != 0 &&
                            <p className={`text-gray-600 text-sm mt-2 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(item,"description1")}</p>  
                        }
                        </div>
                    </div>
                    <div className='bg-gray-300 rounded-lg lg:w-72 md:w-80 sm:w-96'>
                        <div className="flex justify-around items-center p-4">
                            <div className='inline-flex gap-2'>
                                {
                                    get(item, 'box2Icon1',"").length != 0 && 
                                    <span className={`text-orange-500 ${get(tailwindClasses, 'box2Icon')}`} style={get(style, 'box2Icon')}>{parse(get(item, 'box2Icon1'))}</span>
                                }
                                <div className="text-start text-sm">
                                {
                                    get(item, 'box2Text1',"").length != 0 &&
                                    <p className={`text-gray-800 font-bold ${get(tailwindClasses, 'box2Text1')}`} style={get(style, 'box2Text1')}>{get(item,"box2Text1")}</p>
                                }
                                {
                                    get(item, 'box2Text2',"").length != 0 &&
                                    <p className={`text-gray-500 font-bold ${get(tailwindClasses, 'box2Text2')}`} style={get(style, 'box2Text2')}>{get(item,"box2Text2")}</p>
                                }
                                </div>
                            </div>
                            <div className='inline-flex gap-2'>
                                {
                                    get(item, 'box2Icon2',"").length != 0 &&
                                    <span className={`text-orange-500 ${get(tailwindClasses, 'box2Icon')}`} style={get(style, 'box2Icon')}>{parse(get(item, 'box2Icon2'))}</span>
                                }
                                <div className="text-start text-sm">
                                {
                                    get(item, 'box2Text3',"").length != 0 &&
                                    <p className={`text-gray-800 font-bold ${get(tailwindClasses, 'box2Text3')}`} style={get(style, 'box2Text3')}>{get(item,"box2Text3")}</p>
                                }
                                {
                                    get(item, 'box2Text4',"").length != 0 &&
                                    <p className={`text-gray-500 font-bold ${get(tailwindClasses, 'box2Text4')}`} style={get(style, 'box2Text4')}>{get(item,"box2Text4")}</p>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                ))
            }
            </div>
        </div>
    </div>
  )
}

BlogV12.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
BlogV12.defaultProps = {
    style: {
        container: {},
        icon: {},
        subTitle: {},
        title: {},
        button: {},
        image: {},
        roundBox: {},
        icon1: {},
        roundText1: {},
        roundText2: {},
        box1: {},
        subTitle1: {},
        title1: {},
        description1: {},
        box2: {},
        box2Icon: {},
        box2Text1: {},
        box2Text2: {},
        box2Text3: {},
        box2Text4: {}
    },
    tailwindClasses: {
        container: "",
        icon: "",
        subTitle: "",
        title: "",
        button: "",
        image: "",
        roundBox: "",
        icon1: "",
        roundText1: "",
        roundText2: "",
        box1: "",
        subTitle1: "",
        title1: "",
        description1: "",
        box2: "",
        box2Icon: "",
        box2Text1: "",
        box2Text2: "",
        box2Text3: "",
        box2Text4: ""
    },

    subTitle:"Our Global Cases",
    title:"Spread joy with a Donation",
    categories: [
        {category:"All Category"}, 
        {category:"Health & Food"},
        {category:"Water & Environment"},
        {category:"Hunger & Nutrition"}],
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    items: [
        {
            imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-9 rounded-md">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" /></svg>`,
            roundText1: "charity",
            roundText2: "30,000/85,000",
            roundText3: "20%",
            category: "Health & Food",
            title1: "Potable water for villages in Mozambique",
            description1: "These activities offer opportunities to connect with others, build friendship & foster sense...",
            box2Icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>`,
            box2Icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>`,
            box2Text1: "Days",
            box2Text2: "29 Days Left",
            box2Text3: "50+",            
            box2Text4: "Supporters",
        },
        {
            imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-9 rounded-md">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" /></svg>`,
            roundText1: "charity",
            roundText2: "30,000/85,000",
            roundText3: "50%",
            category: "Hunger & Nutrition",
            title1: "Feed nutritious meals to a poor rural child",
            description1: "These activities offer opportunities to connect with others, build friendship & foster sense...",
            box2Icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>`,
            box2Icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>`,
            box2Text1: "Days",
            box2Text2: "29 Days Left",
            box2Text3: "50+",   
            box2Text4: "Supporters",
        },
        {
            imagePath1:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-9 rounded-md">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" /></svg>`,
            roundText1: "charity",
            roundText2: "30,000/85,000",
            roundText3: "50%",
            category: "Water & Environment",
            title1: "Potable water for villages in Mozambique",
            description1: "These activities offer opportunities to connect with others, build friendship & foster sense...",
            box2Icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>`,
            box2Icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>`,
            box2Text1: "Days",
            box2Text2: "29 Days Left",
            box2Text3: "50+",   
            box2Text4: "Supporters",
        }
    ],
    
}
export default withData(BlogV12);