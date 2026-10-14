import React, { useState } from 'react'
import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from "prop-types";
import NexImage from '@nex-core-ui/NexImage';

const TimelineV2 = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', []);
  return (
        <div className={`nx-bg-primary-light ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="w-full h-auto text-center items-center mb-4 text-gray-900 mt-8 m-auto">
                {
                    get(props, 'title',"").length != 0 &&
                    <h2 className={`nx-section-heading-font text-5xl font-semibold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
                }
                {
                    get(props, 'description',"").length != 0 &&
                    <p className={`text-sm font-sans mt-2 p-4 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,"description")}</p>
                }
                </div>
                <div className={`relative w-full h-auto flex max-lg:flex-wrap max-lg:items-center justify-center mb-4 lg:px-20 px-5  ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
                    <div className='lg:w-5/12 lg:ml-12'>
                        <NexImage src={items[activeIndex].imagePath} className={`!inline-flex !relative !w-80 !h-80 lg:mt-4 border rounded-full ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}>  
                        {
                            (get(props, 'circleboxText',"").length != 0) && 
                            (<div className={`absolute bottom-4 left-4 w-16 h-16 animate-bounce bg-red-500 text-gray-50 flex items-center justify-center rounded-full shadow-lg border-2 border-gray-50 ${get(tailwindClasses, 'circleBox')}`} style={get(style, 'circleBox')}>
                            {
                                get(props, 'circleboxText',"").length != 0 &&
                                <span className={`font-bold text-xs uppercase ${get(tailwindClasses, 'circleboxText')}`} style={get(style, 'circleboxText')}>{get(props,"circleboxText")}</span>
                            }
                            </div>)
                        }
                        </NexImage>
                        
                    </div>
                    <div className="lg:w-7/12 relative md:h-auto md:text-center lg:text-start space-y-4">
                    {
                        get(items[activeIndex], 'year',"").length != 0 &&
                        <p className={`text-red-600 lg:text-sm font-bold mb-2 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{items[activeIndex].year}</p>
                    }
                    {
                        get(items[activeIndex], 'title1',"").length != 0 &&
                        <h1 className={`text-3xl font-extrabold ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{items[activeIndex].title1}</h1>
                    }
                    {
                        get(items[activeIndex], 'description1',"").length != 0 &&
                        <h2 className={`text-gray-800 lg:text-xl md:text-2xl ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{items[activeIndex].description1}</h2>                           
                    }
                        <div className="flex w-full flex-none gap-x-4 text-start">
                            <div className="flex-none">
                                <span className="sr-only"></span>
                                {
                                    get(items[activeIndex], 'icon1',"").length != 0 &&
                                    <span className={`nx-text-primary ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>
                                        {(parse(get(items[activeIndex],"icon1")))}
                                    </span>
                                }
                            </div>
                            {
                                get(items[activeIndex], 'text1',"").length != 0 &&
                                <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{items[activeIndex].text1}</p>
                            }
                        </div>
                        <div className="flex w-full flex-none gap-x-4 text-start">
                            <div className="flex-none">
                                <span className="sr-only"></span>
                                {
                                    get(items[activeIndex], 'icon2',"").length != 0 &&
                                    <span className={`nx-text-primary ${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>
                                    {(parse(get(items[activeIndex],"icon2")))}
                                    </span>
                                }
                            </div>
                            {
                                get(items[activeIndex], 'text2',"").length != 0 &&
                                <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{items[activeIndex].text2}</p>
                            }
                        </div>
                        <div className="flex w-full flex-none gap-x-4 text-start">
                            <div className="flex-none">
                                <span className="sr-only"></span>
                                {
                                    get(items[activeIndex], 'icon3',"").length != 0 &&
                                    <span className={`nx-text-primary ${get(tailwindClasses, 'icon3')}`} style={get(style, 'icon3')}>
                                    {(parse(get(items[activeIndex],"icon3")))}
                                    </span>
                                }
                            </div>
                            {
                                get(items[activeIndex], 'text3',"").length != 0 &&
                                <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{items[activeIndex].text3}</p>
                            }
                        </div>
                        <div className="flex w-full flex-none gap-x-4 text-start">
                            <div className="flex-none">
                                <span className="sr-only"></span>
                                {
                                    get(items[activeIndex], 'icon4',"").length != 0 &&
                                    <span className={`nx-text-primary ${get(tailwindClasses, 'icon4')}`} style={get(style, 'icon4')}>
                                    {(parse(get(items[activeIndex],"icon4")))}
                                    </span>
                                }
                            </div>
                            {
                                get(items[activeIndex], 'text4',"").length != 0 &&
                                <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text4')}`} style={get(style, 'text4')}>{items[activeIndex].text4}</p>
                            }
                        </div>
                            
                    </div>
                </div>
                <div className="lg:mt-4 md:mt-8 w-full p-4 md:mb-4">
                    <div className="lg:flex md:block items-center lg:justify-between">
                        {
                            props.items.map((item, index) => {
                                return (<>
                                    <div className="text-center  m-2 cursor-pointer" onClick={() => setActiveIndex(index)}>
                                    {
                                        (get(item, 'year',"").length != 0) &&
                                        (<div className={`ml-6 mr-6 mb-2 w-22 h-12 p-3 flex items-center rounded-sm shadow-md ${activeIndex == index ? `nx-btn-primary` : `${get(props,'dotInactiveBg')}`} place-content-center mx-auto ${get(tailwindClasses, 'circles')}`} style={get(style, 'circles')} >
                                        {
                                            get(items[activeIndex], 'year',"").length != 0 &&
                                            <p className={`text-lg font-medium text-center ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{item.year}</p>
                                        }
                                        </div>)
                                    }
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            
        </div>
)
}

TimelineV2.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
}

TimelineV2.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        title: {},
        description: {},
        image: {},
        circleBox: {},
        circleboxText: {},
        text: {},
        title1: {},
        description1: {},
        icon1: {},
        text1: {},
        icon2: {},
        text2: {},
        icon3: {},
        text3: {},
        icon4: {},
        text4: {},
        circles: {}
    },
    tailwindClasses:{
        container: "",
        contentcontainer: "",
        title: "",
        description: "",
        image: "",
        circleBox: "",
        circleboxText: "",
        text: "",
        title1: "",
        description1: "",
        icon1: "",
        text1: "",
        icon2: "",
        text2: "",
        icon3: "",
        text3: "",
        icon4: "",
        text4: "",
        circles: ""
    },
    dotInactiveBg:"bg-gray-200",
    title: "Biograpy of Political Party",
    description: "We are offering the following information's about us that circular that what we actually.",
    circleboxText: "I Voted",
    items: [
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            year: "2014-2016",
            title1: 'Political Commentator of Loksabha',
            description1: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text1:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text2:"Et harum quidem rerum facilis",
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text3:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon4:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text4:"Et harum quidem rerum facilis" 
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            year: "2016-2018",
            title1: 'Campaign activities and overall',
            description1: "am libero tempore, cum soluta nobis Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text1:"Et harum quidem rerum facilis est et expedita distinctio.",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text2:"Et harum quidem rerum facilis est et expedita distinctio.",
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text3:"Et harum quidem rerum facilis est et expedita distinctio.",
            icon4:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text4:"Et harum quidem rerum facilis est et expedita distinctio." 
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            year: "2018-2020",
            title1: 'Potential abuse of power exist',
            description1: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text1:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text2:"Et harum quidem rerum facilis",
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text3:"seww gwetpd ase eeh easer",
            icon4:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text4:"qwes ikn serd mnb lop aesd cdx ukm axcr op" 
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            year: "2020-2022",
            title1: 'Election campaign data includes',
            description1: "am libero tempore, cum soluta nobis Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text1:"Et harum quidem rerum facilis",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text2:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text3:"seww gwetpd ase eeh easer",
            icon4:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text4:"qwes ikn serd mnb lop aesd cdx ukm axcr op" 
        },
        {
            imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            year: "2022-2024",
            title1: 'Such as their ability to rent space',
            description1:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text1:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon2:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text2:"Et harum quidem rerum facilis",
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text3:"qwes ikn serd mnb lop aesd cdx ukm axcr op",
            icon4:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>`,
            text4:"seww gwetpd ase eeh easer" 
        }
    ]
}
export default TimelineV2;