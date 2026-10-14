import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";

const BlogV20 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
        <div className={`bg-gray-100 w-full p-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='inline-flex max-sm:flex-col gap-4 w-full'>
                {/* Card 1 */}
                {
                (get(props, 'box1Icon1',"").length != 0 || get(props, 'box2Text1',"").length != 0 ||
                get(props, 'title1',"").length != 0 || get(props, 'description1',"").length != 0 || get(props, 'ctaLink1',"").length != 0) &&
                (<div className="relative bg-gray-50 shadow-lg rounded-lg w-full h-72">
                    <div className="absolute inset-0">
                    {
                        get(props, 'imagePath1',"").length != 0 &&
                        <NexImage src={get(props, 'imagePath1')} className={`w-full h-72 rounded-lg object-cover ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
                    }
                        <div className="absolute inset-0 bg-teal-500 rounded-lg bg-opacity-30"></div>
                    </div>
                
                    <div className='absolute inset-32 max-lg:left-10 max-sm:left-20'>
                        <div className='inline-flex'>
                            <div className='relative'>
                            {
                                (get(props, 'box1Icon1',"").length != 0) &&
                                (<div className={`absolute place-content-center bg-orange-100 rounded-tl-lg lg:p-5 max-lg:p-3 max-sm:p-4 lg:h-20 max-lg:h-16 lg:w-16 max-lg:w-12 max-sm:w-14 -ml-8 ${get(tailwindClasses, 'box1')}`}style={get(style, 'box1')}>
                                {
                                    get(props, 'box1Icon1',"").length != 0 &&
                                    <span className={`text-orange-500 ${get(tailwindClasses, 'box1Icon')}`} style={get(style, 'box1Icon')}>{parse(get(props, "box1Icon1"))}</span>
                                }
                                </div>)
                            }
                            {
                                (get(props, 'box2Text1',"").length != 0) &&
                                (<div className={`absolute mt-16 -ml-4 max-lg:-ml-6 max-sm:-ml-4 ${get(tailwindClasses, 'box2')}`} style={get(style, 'box2')}>
                                {
                                    get(props, 'box2Text1',"").length != 0 &&
                                    <span class={`bg-orange-500 hover:bg-teal-500 text-gray-50 p-2 rounded-full ${get(tailwindClasses, 'box2Text')}`}style={get(style, 'box2Text')}>{get(props, "box2Text1")}</span>
                                }
                                </div>)
                            }
                            </div>
                            {
                                (get(props, 'title1',"").length != 0 || get(props, 'description1',"").length != 0 || get(props, 'ctaLink1',"").length != 0) &&
                                (<div className={`max-sm:pl-7 max-lg:pl-6 text-start space-y-2 bg-gray-50 h-40 w-60 max-lg:w-40 max-sm:w-56 max-lg:p-4 p-10 overflow-hidden ${get(tailwindClasses, 'box3')}`} style={get(style, 'box3')}>
                                {
                                    get(props, 'title1',"").length != 0 &&
                                    <h3 className={`text-md font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title1")}</h3>
                                }
                                {
                                    get(props, 'description1',"").length != 0 &&
                                    <p className={`text-xs text-gray-500 mt-2 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description1")}</p>
                                }
                                    <div className='flex'>
                                    {
                                        get(props, 'ctaLink1',"").length != 0 &&
                                        <a href="#" className={`inline-flex items-center gap-1 text-teal-500 font-medium ${get(tailwindClasses, 'ctaLink')}`} style={get(style, 'ctaLink')}>{get(props, "ctaLink1")}
                                        {
                                            get(props, 'ctaIcon1',"").length != 0 &&
                                            <span>{parse(get(props, "ctaIcon1"))}</span>
                                        }
                                        </a>
                                    }
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>)
                }
                {/* Card 2 */}
                <div className="relative bg-gray-50 shadow-lg rounded-lg w-full h-72">
                    <div className='absolute inset-0'>
                    {
                        get(props, 'imagePath2',"").length != 0 &&
                        <NexImage src={get(props, 'imagePath2')} className={`w-full h-72 rounded-lg object-cover ${get(tailwindClasses, 'image2')}`}style={get(style, 'image2')}/>
                    }
                        <div className="absolute inset-0 bg-yellow-500 rounded-lg bg-opacity-30"></div>
                    </div>
                    <div className='absolute inset-32 max-lg:left-10 max-sm:left-20'>
                        <div className='inline-flex'>
                            <div className='relative'>
                                <div className={`absolute place-content-center bg-orange-100  rounded-tl-lg lg:p-5 max-lg:p-3 max-sm:p-4 lg:h-20 max-lg:h-16 lg:w-16 max-lg:w-12 max-sm:w-14 -ml-8 ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                                {
                                    get(props, 'box1Icon2',"").length != 0 &&
                                    <span className={`text-orange-500 ${get(tailwindClasses, 'box1Icon')}`} style={get(style, 'box1Icon')}>{parse(get(props, "box1Icon2"))}</span>
                                }
                                </div>
                                <div className={`absolute mt-16 -ml-4 max-lg:-ml-6 max-sm:-ml-4 ${get(tailwindClasses, 'box2')}`}style={get(style, 'box2')}>
                                {
                                    get(props, 'box2Text2',"").length != 0 &&
                                    <span class={`bg-orange-500 hover:bg-teal-500 text-gray-50 p-2 rounded-full ${get(tailwindClasses, 'box2Text')}`} style={get(style, 'box2Text')}>{get(props, "box2Text2")}</span>
                                }
                                </div>
                            </div>
                            <div className={`max-sm:pl-7 max-lg:pl-6 text-start space-y-2 bg-gray-50 h-40 w-60 p-10 max-lg:w-40 max-sm:w-56 max-lg:p-4 overflow-hidden ${get(tailwindClasses, 'box3')}`}style={get(style, 'box3')}>
                            {
                                get(props, 'title2',"").length != 0 &&
                                <h3 className={`text-md font-bold text-gray-800 ${get(tailwindClasses, 'title')}`}style={get(style, 'title')}>{get(props, "title2")}</h3>
                            }
                            {
                                get(props, 'description2',"").length != 0 &&
                                <p className={`text-xs text-gray-500 mt-2 ${get(tailwindClasses, 'description')}`}style={get(style, 'description')}>{get(props, "description2")}</p>
                            }
                                <div className='flex'>
                                {
                                    get(props, 'ctaLink2',"").length != 0 &&
                                    <a href="#" className={`inline-flex items-center gap-1 text-teal-500 font-medium ${get(tailwindClasses, 'ctaLink')}`}style={get(style, 'ctaLink')}>{get(props, "ctaLink2")}
                                    {
                                        get(props, 'ctaIcon2',"").length != 0 &&
                                        <span>{parse(get(props, "ctaIcon2"))}</span>
                                    }
                                    </a>
                                }   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                 
                {/* Card 3 */}
                <div className="relative bg-gray-50 shadow-lg rounded-lg w-full h-72">
                    <div className='absolute inset-0'>
                    {
                        get(props, 'imagePath3',"").length != 0 &&
                        <NexImage src={get(props, 'imagePath3')} className={`!relative !w-full !h-72 rounded-lg object-cover ${get(tailwindClasses, 'image3')}`}style={get(style, 'image3')}/>
                    }
                        <div className="absolute inset-0 bg-red-500 rounded-lg bg-opacity-30"></div>
                    </div>
                    <div className='absolute inset-32 max-lg:left-10 max-sm:left-20'>
                        <div className='inline-flex'>
                            <div className='relative'>
                                <div className={`absolute place-content-center bg-orange-100  rounded-tl-lg lg:p-5 max-lg:p-3 max-sm:p-4 lg:h-20 max-lg:h-16 lg:w-16 max-lg:w-12 max-sm:w-14 -ml-8 ${get(tailwindClasses, 'box1')}`}style={get(style, 'box1')}>
                                {
                                    get(props, 'box1Icon3',"").length != 0 &&
                                    <span className={`text-orange-500 ${get(tailwindClasses, 'box1Icon')}`}style={get(style, 'box1Icon')}>{parse(get(props, "box1Icon3"))}</span>
                                }
                                </div>
                                <div className={`absolute mt-16 -ml-4 max-lg:-ml-6 max-sm:-ml-4 ${get(tailwindClasses, 'box2')}`} style={get(style, 'box2')}>
                                {
                                    get(props, 'box2Text3',"").length != 0 &&
                                    <span class={`bg-orange-500 hover:bg-teal-500 text-gray-50 p-2 rounded-full ${get(tailwindClasses, 'box2Text')}`}style={get(style, 'box2Text')}>{get(props, "box2Text3")}</span>
                                }
                                </div>
                            </div>
                            <div className={`max-sm:pl-7 max-lg:pl-6 text-start space-y-2 bg-gray-50 h-40 w-60 p-10 max-lg:w-40 max-sm:w-56 max-lg:p-4 overflow-hidden ${get(tailwindClasses, 'box3')}`}style={get(style, 'box3')}>
                            {
                                get(props, 'title3',"").length != 0 &&
                                <h3 className={`text-md font-bold text-gray-800 ${get(tailwindClasses, 'title')}`}style={get(style, 'title')}>{get(props, "title3")}</h3>
                            }
                            {
                                get(props, 'description3',"").length != 0 &&
                                <p className={`text-xs text-gray-500 ${get(tailwindClasses, 'description')}`}style={get(style, 'description')}>{get(props, "description3")}</p>
                            }
                                <div className='flex'>
                                {
                                    get(props, 'ctaLink3',"").length != 0 &&
                                    <a href="#" className={`inline-flex items-center gap-1 text-teal-500 font-medium ${get(tailwindClasses, 'ctaLink')}`}style={get(style, 'ctaLink')}>{get(props, "ctaLink3")}
                                    {
                                        get(props, 'ctaIcon3',"").length != 0 &&
                                        <span>{parse(get(props, "ctaIcon3"))}</span>
                                    }
                                    </a>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
BlogV20.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
BlogV20.defaultProps = {
    style: {
        container: {},
        image1: {},
        image2: {},
        image3: {},
        box1: {},
        box1Icon: {},
        box2: {},
        box2Text: {},
        box3: {},
        title: {},
        description:{},
        ctaLink: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        image1: "",
        image2: "",
        image3: "",
        box1: "",
        box1Icon: "",
        box2: "",
        box2Text: "",
        box3: "",
        title: "",
        description: "",
        ctaLink: "",
        ctaIcon: ""
    },
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    box1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
                </svg>`,
    box1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>`,
    box1Icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                </svg>`,
    box2Text1: "01",
    box2Text2: "02",
    box2Text3: "03",
    title1: "Pure Water",
    description1:"Includes food distribution, shelter & access to essential...",
    ctaLink1: "Read More",
    ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd"/></svg>`,
    title2: "Kids Education",
    description2:"We offer tutoring, scholarships, and workshops to help students...",
    ctaLink2: "Read More",
    ctaIcon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd"/></svg>`,
    title3: "Medical Care",
    description3:"Our health program includes free clinics, mental health support...",
    ctaLink3: "Read More",
    ctaIcon3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd"/></svg>`
}
export default withData(BlogV20);