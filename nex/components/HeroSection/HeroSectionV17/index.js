import React from 'react'
import { object, string } from "prop-types";
import get from "lodash.get";
import parse from 'html-react-parser';
import { useState } from 'react'
import NexImage from '@nex-core-ui/NexImage';

const HeroSectionV17 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    const [activeIndex, setActiveIndex] = useState(0);
return (
<div>
    <div className={`relative bg-gray-300 w-full p-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className={`mx-auto max-w-5xl bg-blue-300 border rounded-2xl shadow-lg ${get(tailwindClasses, 'container1')}`} style={get(style, 'container1')}>
            {
            props.items.map((item, index) => {
                return (
                <div class="flex-wrap inline-flex -mt-2 justify-evenly items-center text-gray-600 mb-4">
                    {
                        get(props.items[activeIndex], 'tabName',"").length != 0 &&
                        <button className={`font-semibold text-gray-50 py-2 px-4 rounded-full ${activeIndex == index ? "bg-gray-800 text-teal-500" : "bg-teal-500 text-white"} ${get(tailwindClasses, 'button')}`} style={get(style, 'button')} onClick={() => setActiveIndex(index)}>{item.tabName}</button>
                    }
                </div>
                )
            })
            }
            <div className="relative w-full">
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2 px-10 py-14 max-sm:pt-1 lg:px-6 lg:py-16 mb-4">
                    <div className="w-full max-sm:grid-cols-1">
                    {
                        get(props.items[activeIndex], 'title',"").length != 0 &&
                        <h1 className={`text-pretty lg:text-4xl text-xl font-bold tracking-tight text-gray-900 max-sm:text-4xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                        {props.items[activeIndex].title}
                        </h1>
                    }
                    {
                        get(props.items[activeIndex], 'description',"").length != 0 &&
                        <p className={`mt-2 text-pretty lg:text-2xl text-lg font-medium text-gray-500 sm:text-xl/8 ${get(tailwindClasses, 'description')}`}  style={get(style, 'description')}>
                        {props.items[activeIndex].description}
                        </p>
                    }
                    {
                        (get(props.items[activeIndex], 'icon1',"").length != 0 || get(props.items[activeIndex], 'text1',"").length != 0 || get(props.items[activeIndex], 'icon2',"").length != 0 || get(props.items[activeIndex], 'text2',"").length != 0 || get(props.items[activeIndex], 'icon3',"").length != 0 || get(props.items[activeIndex], 'text3',"").length != 0 || get(props.items[activeIndex], 'icon4',"").length != 0 || get(props.items[activeIndex], 'text4',"").length != 0 ) &&
                        (<div className={`relative rounded-xl bg-gray-50 max-sm:w-64 p-4 mt-4 flex items-center shadow-lg ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                            <div>
                                    <div className="flex w-full flex-none gap-x-4 text-start">
                                        <div className="flex-none">
                                            <span className="sr-only">List</span>
                                            {
                                                get(props.items[activeIndex], 'icon1',"").length != 0 &&
                                                <span className={`${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>
                                                {parse(props.items[activeIndex].icon1)}
                                                </span>
                                            }
                                        </div>
                                        {
                                            get(props.items[activeIndex], 'text1',"").length != 0 &&
                                            <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{props.items[activeIndex].text1}</p>
                                        }
                                    </div>
                                    <div className="flex w-full flex-none gap-x-4 text-start">
                                        <div className="flex-none">
                                            <span className="sr-only">List</span>
                                            {
                                                get(props.items[activeIndex], 'icon2',"").length != 0 &&
                                                <span className={`${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>
                                                {parse(props.items[activeIndex].icon2)}
                                                </span>
                                            }
                                        </div>
                                        {
                                            get(props.items[activeIndex], 'text2',"").length != 0 &&
                                            <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{props.items[activeIndex].text2}</p>
                                        }
                                    </div>
                                    <div className="flex w-full flex-none gap-x-4 text-start">
                                        <div className="flex-none">
                                            <span className="sr-only">List</span>
                                            {
                                                get(props.items[activeIndex], 'icon3',"").length != 0 &&
                                                <span className={`${get(tailwindClasses, 'icon3')}`} style={get(style, 'icon3')}>
                                                {parse(props.items[activeIndex].icon3)}
                                                </span>
                                            }
                                        </div>
                                        {
                                            get(props.items[activeIndex], 'text3',"").length != 0 &&
                                            <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{props.items[activeIndex].text3}</p>
                                        }
                                    </div>
                                    <div className="flex w-full flex-none gap-x-4 text-start">
                                        <div className="flex-none">
                                            <span className="sr-only">List</span>
                                            {
                                                get(props.items[activeIndex], 'icon4',"").length != 0 &&
                                                <span className={`${get(tailwindClasses, 'icon4')}`} style={get(style, 'icon4')}>
                                                {parse(props.items[activeIndex].icon4)}
                                                </span>
                                            }
                                        </div>
                                        {
                                            get(props.items[activeIndex], 'text4',"").length != 0 &&
                                            <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text4')}`} style={get(style, 'text4')}>{props.items[activeIndex].text4}</p>
                                        }
                                    </div>
                            </div>
                        </div>)
                    }
                    </div>
                    <div className="mx-auto items-center justify-center max-sm:mt-2 max-sm:w-64 max-sm:h-64 h-80 w-80">
                    {
                        get(props.items[activeIndex], 'imagePath',"").length != 0 &&
                        <NexImage src={props.items[activeIndex].imagePath} className={`!relative !h-80 !w-80 mb-4 rounded-full bg-gray-50 object-cover  ${get(tailwindClasses, 'image')}`}  style={get(style, 'image')}/>
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

HeroSectionV17.propTypes = {
    style: object,
    tailwindClasses: object,
    items: object,
    title: string
  }
  
  HeroSectionV17.defaultProps = {
    style: {
      container: {},
      container1: {},
      button: {},
      title: {},
      description: {},
      box: {},
      icon1: {},
      text1: {},
      icon2: {},
      text2: {},
      icon3: {},
      text3: {},
      icon4: {},
      text4: {},
      image: {}
    },
    tailwindClasses:{
      container: "",
      container1: "",
      button: "",
      title: "",
      description: "",
      box: "",
      icon1: "",
      text1: "",
      icon2: "",
      text2: "",
      icon3: "",
      text3: "",
      icon4: "",
      text4: "",
      image: ""
    },
    items: [
    {
        tabName:"Full Inspiration",
        title:"Igniting Hopes with Acts Kindness",
        description: "Together, Hello Everyone, we can create a brigter futur. Join with us. ",
        icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text1: "Designing function office spaces",
        icon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text2: "Designing function office spaces",
        icon3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text3: "Communication Tips smooth construction project",
        icon4:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text4: "Communication Tips smooth construction project",
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    },
    {
        tabName:"Make a Difference",
        title:"Kindness Hopes with Act",
        description: "Hello Eveyone, Together, we can create a brigter future. Join with us. ",
        icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text1: "Communication Tips smooth construction project",
        icon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text2: "Communication Tips smooth construction project",
        icon3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text3: "Designing function office spaces",
        icon4:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text4: "Designing function office spaces",
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    },
    {
        tabName:"Our Approach",
        title:"Igniting Act Kindness",
        description: "hello World, Communication Tips, we can create a brighter future. Join with us.",
        icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text1: "Designing function office spaces",
        icon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text2: "Communication Tips smooth construction project",
        icon3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text3: "Transforming your Bathrooms",
        icon4:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
        text4: "Transforming your Bathrooms",
        imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    },
]

}
export default HeroSectionV17;
  
