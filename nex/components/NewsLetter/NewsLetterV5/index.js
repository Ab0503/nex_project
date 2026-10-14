import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import Marquee from "react-fast-marquee";
import NexImage from '@nex-core-ui/NexImage';

const NewslettersV5 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});

    return (
        <div>
            <div className={`bg-gray-200 w-full h-auto ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="relative lg:w-1/4 lg:pt-2 lg:pb-2 max-sm:pt-4 md:pt-6">
                    <div className='relative min-h-[500px]'>
                    {
                        get(props, 'imagePath',"").length != 0 &&
                        <NexImage src={get(props, 'imagePath')} className={`rounded-r-full object-cover min-h-[500px] w-full md:max-w-2xl sm:max-w-xl ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}/>
                    }
                    </div>
                </div>
                <div className='lg:absolute sm:relative max-sm:relative grid grid-cols-4 max-lg:grid-cols-1 max-lg:gap-6 lg:gap-24 max-md:gap-10 max-sm:gap-4 sm:gap-6 max-lg:pl-44 xl:pl-52 lg:pl-12 md:pl-24 max-sm:pl-8 -mt-[440px]'>
                    {/* Hero Section */}
                    {
                    (get(props, 'icon',"").length != 0 || get(props, 'subTitle',"").length != 0 || get(props, 'title',"").length != 0 || 
                    get(props, 'text1',"").length != 0 || get(props, 'text2',"").length != 0 || get(props, 'emailIcon',"").length != 0 || 
                    get(props, 'email',"").length != 0 || get(props, 'text3',"").length != 0 || get(props, 'ctaLink',"").length != 0) && 
                    (<div className={`text-start items-center bg-gray-50 rounded-lg shadow-md p-4 xl:w-64 lg:w-64 max-md:w-72 max-sm:w-72 sm:w-64 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                        <div className="lg:w-fit">
                            <div className="inline-flex gap-2 mt-2">
                            {
                                get(props, 'icon',"").length != 0 &&
                                <span className={`bg-orange-500 rounded-full ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                            }
                            {
                                get(props, 'subTitle',"").length != 0 &&
                                <p className={`lg:text-sm max-sm:text-sm max-md:text-sm text-green-700 font-medium tracking-wide ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                            }
                            </div>
                            {
                                get(props, 'title',"").length != 0 &&
                                <h2 className={`text-3xl sm:text-2xl font-semibold mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
                            }
                            <hr></hr>
                            <form className="mt-3 space-y-4">
                                <div className='space-y-4'>
                                {
                                    get(props, 'text1',"").length != 0 &&
                                    <h2 className={`block text-md font-medium text-gray-900 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props,"text1")}</h2>
                                }
                                {
                                    get(props, 'text2',"").length != 0 &&
                                    <p className={`text-xs text-gray-500 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props,"text2")}</p>
                                }
                                </div>
                                <div className={`inline-flex gap-2 p-2 lg:w-48 lg:h-10 max-md:w-36 sm:w-48 items-center bg-orange-50 border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${get(tailwindClasses, 'emailBox')}`}style={get(style, 'emailBox')}>
                                {
                                    get(props, 'emailIcon',"").length != 0 &&
                                    <span className={`${get(tailwindClasses, 'emailIcon')}`}style={get(style, 'emailIcon')}>{parse(get(props, 'emailIcon'))}</span>
                                }
                                {
                                    get(props, 'email',"").length != 0 &&
                                    <input type="email" id="email" placeholder={get(props, 'email')} className={`bg-transparent outline-0 ${get(tailwindClasses, 'email')}`}style={get(style, 'email')}/>
                                }
                                    </div>
                                <div className="flex items-center">
                                    <input id="terms" name="terms" type="radio" className="h-3 w-3 rounded"/>
                                    {
                                        get(props, 'text3',"").length != 0 &&
                                        <label htmlFor="terms" className={`ml-2 block text-xs text-gray-600 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>
                                        {get(props,"text3")}
                                        </label>
                                    }
                                </div>
                                <div className="pt-2">
                                {
                                    get(props, 'ctaLink',"").length != 0 &&
                                    <a href="#" type="submit" className={`bg-orange-500 text-gray-50 w-36 h-10 p-2 rounded-full hover:bg-orange-600 ${get(tailwindClasses, 'ctaLink')}`} style={get(style, 'ctaLink')}>
                                    {get(props,"ctaLink")}
                                    </a>
                                }
                                </div>
                            </form>
                        </div>
                    </div>)
                    }
                    
                    {/* Blog Cards Section */}
                    <Marquee pauseOnHover={true} className='col-span-3'>{
                    
                    get(props, 'items', []).map((item,index) => (
                     
                    <div className='h-96 py-10 relative flex max-sm:col-auto md:gap-8 mb-4 -mt-6'> 
                        <div className="ml-10 max-lg:w-96 max-md:w-60 max-sm:w-72 sm:w-64">
                            
                            <div className='flex flex-col'>
                                {/* Blog Card */}
                                {
                                (get(item, 'icon1',"").length != 0 || get(item, 'box1Text',"").length != 0) &&
                                (<div className={`inline-flex gap-2 bg-teal-700 text-gray-50 hover:bg-orange-500 p-1 w-1/2 text-start rounded-l-md ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                                {
                                    get(item, 'icon1',"").length != 0 &&
                                    <span className={`${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(item, 'icon1'))}</span>
                                }
                                {
                                    get(item, 'box1Text',"").length != 0 &&
                                    <span className={`text-sm ${get(tailwindClasses, 'box1Text')}`} style={get(style, 'box1Text')}>{get(item,"box1Text")}</span>
                                }
                                </div>)
                                }
                                {
                                get(item, 'imagePath1',"").length != 0 && 
                                (<div className='h-40 w-auto'>
                                    <NexImage src={get(item, 'imagePath1')} className={`rounded-lg !relative !h-40 !w-full object-cover ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
                                {
                                    (get(item, 'box2Text1',"").length != 0 || get(item, 'box2Text2',"").length != 0) &&
                                    (<div className={`relative flex flex-col text-gray-800 bg-gray-50 w-16 text-sm -mt-14 p-2 hover:bg-orange-500 hover:text-gray-50 ${get(tailwindClasses, 'box2')}`} style={get(style, 'box2')}>
                                    {
                                        get(item, 'box2Text1',"").length != 0 &&
                                        <h2 className={`font-bold text-teal-500 ${get(tailwindClasses, 'box2Text1')}`} style={get(style, 'box2Text1')}>{get(item,"box2Text1")}</h2>
                                    }
                                    {
                                        get(item, 'box2Text2',"").length != 0 &&
                                        <p className={`font-medium ${get(tailwindClasses, 'box2Text2')}`} style={get(style, 'box2Text2')}>{get(item,"box2Text2")}</p>
                                    }
                                    </div>)
                                }
                                </div>)
                                }
                                {
                                (get(item, 'box3Title',"").length != 0 || get(item, 'box3Description',"").length != 0 || get(item, 'icon2',"").length != 0 ||
                                get(item, 'box3Text',"").length != 0 || get(item, 'box3ctaLink',"").length != 0 || get(item, 'box3ctaIcon',"").length != 0) &&
                                (<div className={`w-full text-start bg-gray-50 rounded-r-lg shadow-md p-4 ${get(tailwindClasses, 'box3')}`} style={get(style, 'box3')}>
                                {
                                    get(item, 'box3Title',"").length != 0 &&
                                    <h4 className={`text-md font-semibold ${get(tailwindClasses, 'box3Title')}`} style={get(style, 'box3Title')}>{get(item,"box3Title")}</h4>
                                }
                                {
                                    get(item, 'box3Description',"").length != 0 &&
                                    <p className={`text-sm sm:text-xs lg:text-md text-gray-600 mt-2 ${get(tailwindClasses, 'box3Description')}`} style={get(style, 'box3Description')}>{get(item,"box3Description")}</p>
                                }
                                    <div className="inline-flex mt-2 lg:gap-9 max-md:gap-32 max-sm:gap-14 sm:gap-6">
                                        <div className="inline-flex gap-1 mt-2">
                                        {
                                            get(item, 'icon2',"").length != 0 &&
                                            <span className={`text-orange-500 ${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>{parse(get(item, 'icon2'))}</span>
                                        }
                                        {
                                            get(item, 'box3Text',"").length != 0 &&
                                            <p className={`lg:text-xs max-sm:text-xs md:text-xs sm:text-xs text-green-700 font-normal ${get(tailwindClasses,'box3Text')}`} style={get(style,'box3Text')}>{get(item,"box3Text")}</p>
                                        }
                                        </div>
                                        {
                                            get(item, 'box3ctaLink',"").length != 0 &&
                                            <a className={`inline-flex items-center gap-1 text-xs text-gray-50 bg-orange-500 rounded-full p-2 hover:text-gray-900 font-normal ${get(tailwindClasses, 'box3ctaLink')}`} style={get(style, 'box3ctaLink')}>
                                            {get(item,"box3ctaLink")}
                                            {
                                                get(item, 'box3ctaIcon',"").length != 0 &&
                                                <span className={`${get(tailwindClasses, 'box3ctaIcon')}`}style={get(style, 'box3ctaIcon')}>{parse(get(item,"box3ctaIcon"))}</span>
                                            }
                                            </a>
                                        }
                                    </div>
                                </div>)
                                }
                            </div>
                        </div>
                    </div>
                    ))}</Marquee>
                </div>
                {/* <div className='mt-6 items-center'>
                    <div className='inline-flex w-full gap-4 justify-center mb-4'>
                    {
                        get(props, 'arrowIcon1',"").length != 0 &&
                        <span className={`bg-white ${get(tailwindClasses, 'arrowIcon')}`}style={get(style, 'arrowIcon')}>{parse(get(props,"arrowIcon1"))}</span>
                    }
                    {
                        get(props, 'arrowIcon2',"").length != 0 &&
                        <span className={`bg-white ${get(tailwindClasses, 'arrowIcon')}`} style={get(style, 'arrowIcon')}>{parse(get(props,"arrowIcon2"))}</span>
                    }
                    </div>
                </div> */}
            </div>
        </div>
    )
}

NewslettersV5.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
NewslettersV5.defaultProps = {
    style: {
        container: {},
        image: {},
        box:{},
        icon: {},
        subTitle: {},
        title: {},
        text1: {},
        text2: {},
        icon1: {},
        emailBox: {},
        email: {},
        text3: {},
        ctaLink: {},
        box1: {},
        icon2: {},
        box1Text:{},
        image1: {},
        box2: {},
        box2Text1: {},
        box2Text2: {},
        box3: {},
        box3Title: {},
        box3Description: {},
        icon3: {},
        box3Text: {},
        box3ctaLink: {},
        box3ctaIcon:{},
        arrowIcon: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        box:"",
        icon: "",
        subTitle: "",
        title: "",
        text1: "",
        text2: "",
        emailIcon: "",
        emailBox: "",
        email: "",
        text3: "",
        ctaLink: "",
        box1: "",
        icon1: "",
        box1Text:"",
        image1: "",
        box2: "",
        box2Text1: "",
        box2Text2: "",
        box3: "",
        box3Title: "",
        box3Description: "",
        icon2: "",
        box3Text: "",
        box3ctaLink: "",
        box3ctaIcon:"",
        arrowIcon: ""
    },
    items: [
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>`,
            box1Text:"Poverty",
            imagePath1: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            box2Text1:"21",
            box2Text2:"March",
            box3Title:"From Local to Global: The Ripple Effects of Charity",
            box3Description:"Perfectly simple and easy to distinguish a free undertakes laborious...",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>`,
            box3Text:"Markin Singh",
            box3ctaLink:"More Details",
            box3ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>`    
        },
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>`,
            box1Text:"Poverty",
            imagePath1: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            box2Text1:"21",
            box2Text2:"April",
            box3Title:"From Local to Global: The Ripple Effects of Charity",
            box3Description:"Perfectly simple and easy to distinguish a free undertakes laborious...",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>`,
            box3Text:"Markin Singh",
            box3ctaLink:"More Details",
            box3ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>` 
        },
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>`,
            box1Text:"Poverty",
            imagePath1: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            box2Text1:"21",
            box2Text2:"May",
            box3Title:"From Local to Global: The Ripple Effects of Charity",
            box3Description:"Perfectly simple and easy to distinguish a free undertakes laborious...",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>`,
            box3Text:"Markin Singh",
            box3ctaLink:"More Details",
            box3ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>`    
        }
    ],
    imagePath:"https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle:"Blog & Article",
    title:"Check Latest Blog Post",
    text1: "Newsletter",
    text2: "Subscribe to receive news & updates",
    emailIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>`,
    email:"Email Address",
    text3: "I agree to the terms & conditions",
    ctaLink: "Subscribe Now",
    arrowIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>`,
    arrowIcon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>`
}
export default NewslettersV5;
