import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

const BlogV24 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (
    <div>
        <div className={`bg-gray-600 p-4 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className={`relative bg-cover bg-center ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')}> 
                {
                    get(props, 'imagePath2',"").length != 0 &&
                    <NexImage src={get(props, 'imagePath2')} className='!relative'/>
                }
                {
                    (get(props, 'icon',"").length != 0 || get(props, 'subTitle',"").length != 0 || get(props, 'title',"").length != 0) &&
                    (<div className={`absolute xl:-bottom-3 lg:bottom-6 max-lg:-bottom-1 xl:left-60 lg:left-36 max-lg:left-48 max-sm:left-32 lg:p-4 max-lg:p-6 max-sm:p-2 
                    lg:w-80 max-lg:w-80 max-sm:w-48 bg-gray-900 bg-opacity-40 flex items-center justify-center rounded-xl ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                        <div className="text-start text-gray-50">
                            <div className="inline-flex gap-2">
                            {
                                get(props, 'icon',"").length != 0 &&
                                <span className={`${get(tailwindClasses, 'icon')}`}style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                            }
                            {
                                get(props, 'subTitle',"").length != 0 &&
                                <p className={`lg:text-sm max-sm:text-sm text-sm font-bold uppercase ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                            }
                            </div>
                            {
                                get(props, 'title',"").length != 0 &&
                                <h1 className={`xl:text-3xl lg:text-xl max-lg:text-3xl max-sm:text-xl font-bold lg:mt-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h1>
                            }
                            </div>
                    </div>)
                }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    get(props, 'items', []).map((item) => (get(item, 'text1',"").length != 0 || get(item, 'description1',"").length != 0 ||
                    get(item, 'box1Icon1',"").length != 0 || get(item, 'box1Icon2',"").length != 0) &&
                    (<div className={`bg-gray-50 shadow-lg p-4 ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                        <div className="flex items-center text-gray-600">
                            <div>
                            {
                                get(item, 'text1',"").length != 0 &&
                                <h3 className={`max-lg:text-2xl text-xl font-semibold ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</h3>
                            }
                            {
                                get(item, 'description1',"").length != 0 &&
                                <p className={`max-sm:text-xl max-lg:text-lg text-sm mt-2 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(item,"description1")}</p>
                            }
                            </div>
                        </div>
                        <div className="inline-flex mt-8 text-orange-500 gap-52">
                        {
                            get(item, 'box1Icon1',"").length != 0 &&
                            <span className={`bg-blue-500 ${get(tailwindClasses, 'box1Icon1')}`} style={get(style, 'box1Icon1')}>{parse(get(item, 'box1Icon1'))}</span>
                        }
                        {
                            get(item, 'box1Icon2',"").length != 0 &&
                            <span className={`bg-gray-50 ${get(tailwindClasses, 'box1Icon2')}`} style={get(style, 'box1Icon2')}>{parse(get(item, 'box1Icon2'))}</span>
                        }
                        </div>
                    </div>)
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

BlogV24.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
}
BlogV24.defaultProps = {
    style: {
        container: {},
        image2: {},
        box: {},
        icon: {},
        subTitle: {},
        title: {},
        box1: {},
        text1: {},
        description1: {},
        box1Icon1: {},
        box1Icon2: {}
    },
    tailwindClasses: {
        container: "",
        image2: "",
        box: "",
        icon: "",
        subTitle: "",
        title: "",
        box1: "",
        text1: "",
        description1: "",
        box1Icon1: "",
        box1Icon2: ""
    },
    imagePath2:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 rounded-full bg-orange-500 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle:"Benifits of Giving",
    title:"Bring more meaning to your life" ,
    items:[
        {
            text1: "Reduce Your Stress",
            description1: "Perfectly simple & easy to distinguish a free undertakes laborious...",
            box1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" 
            clip-rule="evenodd" /></svg>`,
            box1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 shadow-xl">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`
        },
        {
            text1: "Financial Benefits",
            description1: "Perfectly simple & easy to distinguish a free undertakes laborious...",
            box1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>`,
            box1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 shadow-xl">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
        },
        {
            text1: "Familial Benefits",
            description1: "Perfectly simple & easy to distinguish a free undertakes laborious..",
            box1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>`,
            box1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 shadow-xl">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
        },
        {
            text1: "Improve Self Esteem",
            description1: "Perfectly simple & easy to distinguish a free undertakes laborious.",
            box1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>`,
            box1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 shadow-xl">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`
        }
    ],
    
}
export default BlogV24;