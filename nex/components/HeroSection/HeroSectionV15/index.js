import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import parse from 'html-react-parser';
import NexImage from '@nex-core-ui/NexImage';

const HerosectionV15 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
        <div className={`relative w-full min-h-screen bg-gray-50 ${get(tailwindClasses, 'container')}`}  style={get(style, 'container')}>
            <div className='grid lg:grid-cols-2 max-sm:grid-rows-2 md:grid-rows-2 lg:h-96 max-sm:h-auto'>
                <div className="w-1/2 xl:pl-20 lg:pl-1 lg:text-left md:text-center max-sm:text-center">
                    <div className="lg:relative mt-10">
                        <div className="max-sm:text-center mt-20">
                            {
                                get(props, 'imagePath1',"").length != 0 &&
                                <div className='absolute lg:max-w-xs md:w-96 max-sm:w-48 lg:h-80 max-sm:h-52 lg:left-48 md:left-72 max-sm:left-36'><NexImage src={get(props, 'imagePath1')} className={`!relative rounded-lg object-cover ${get(tailwindClasses, 'image1')}`}  style={get(style, 'image1')}/></div> 
                            }
                            <div className={`absolute p-4 lg:h-36 max-sm:h-24 lg:w-36 max-sm:w-24 max-sm:left-8 md:left-24 lg:left-7 bg-orange-500 text-white max-sm:px-5 rounded-tl-full shadow-md ${get(tailwindClasses, 'tagLine')}`} style={get(style, 'tagLine')}>
                            {
                                get(props, 'taglineText1',"").length != 0 &&
                                <h1 className={`lg:text-3xl md:text-2xl max-sm:text-xl font-semibold lg:pl-16 md:pl-8 max-sm:pl-6 ${get(tailwindClasses, 'taglineText1')}`} style={get(style, 'taglineText1')}>{get(props, 'taglineText1')}</h1> 
                            }
                            {
                                get(props, 'taglineText2',"").length != 0 &&
                                <h2 className={`lg:text-2xl max-sm:text-xs text-black text-end ${get(tailwindClasses, 'taglineText2')}`} style={get(style, 'taglineText2')}>{get(props, 'taglineText2')}</h2> 
                            }
                            </div>    
                        </div>
                        <div>
                        {
                            get(props, 'imagePath2',"").length != 0 &&
                            <div className='absolute lg:h-80 lg:w-72 md:h-72 md:w-72 max-sm:h-40 lg:max-w-md max-sm:w-48 lg:top-40 max-sm:top-48 md:top-48  lg:left-8 md:left-32 max-sm:left-10'><NexImage src={get(props, 'imagePath2')} className={`!relative object-cover rounded-tr-full rounded-lg border-4 border-white ${get(tailwindClasses, 'image2')}`}  style={get(style, 'image2')}/></div> 
                        }
                            </div>
                    </div>
                </div>
                <div className="w-full lg:pb-20 lg:pt-16 md:pt-10 xl:pl-10 lg:text-left md:text-center max-sm:text-center">
                    <div className="p-4 xl:pr-16 lg:pr-8">
                        <div className="inline-flex gap-2">
                        {
                            get(props, 'icon',"").length != 0 &&
                            <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                        }
                        {
                            get(props, 'subTitle',"").length != 0 &&
                            <h2 className={`flex-col text-sm font-semibold tracking-tight text-green-900 sm:text-4xl md:text-sm lg:text-sm xl:text-sm font-serif ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                                {get(props, 'subTitle')}
                            </h2>
                        }
                        </div>
                        {
                            get(props, 'title',"").length != 0 &&
                            <h1 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                            {get(props, 'title')}
                            </h1>
                        }
                        {
                            get(props, 'description',"").length != 0 &&
                            <p className={`mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                            {get(props, 'description')}
                            </p>
                        }
                        <div className='inline-flex text-start md:gap-6 lg:gap-1 md:mb-4'>
                            <div className='mt-4'>
                            {
                                get(props, 'title1',"").length != 0 &&
                                <h1 className={`font-medium ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>
                                    {get(props, 'title1')}
                                </h1>
                            }
                            {
                                get(props, 'description1',"").length != 0 &&
                                <p className={`text-sm text-gray-500 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>
                                    {get(props, 'description1')}
                                </p>
                            }
                                <div>
                                    {
                                        get(props, 'items', []).map((item) => (
                                            <div className="flex w-full flex-none pt-6 gap-x-2 text-start">
                                                <div className="flex-none">
                                                    <span className="sr-only"></span>
                                                    {
                                                        get(item, 'icon',"").length != 0 &&
                                                        <span>
                                                        {parse(get(item, 'icon'))}
                                                        </span>
                                                    }
                                                </div>
                                                {
                                                    get(item, 'text',"").length != 0 &&
                                                    <p className={`text-sm/3 font-medium text-gray-900 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</p>
                                                }
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                            </div>
                            <div className={`lg:w-60 md:w-72 max-sm:w-56 mt-6 space-y-4 bg-teal-700 text-white rounded-lg p-4 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                            {
                                get(props, 'boxText1',"").length != 0 &&
                                <h1 className=''>{get(props, 'boxText1')}</h1>
                            }
                            <hr></hr>
                            {
                                get(props, 'boxText2',"").length != 0 &&
                                <h2 className=''>{get(props, 'boxText2')}</h2>
                            }
                            {
                                get(props, 'boxText3',"").length != 0 &&
                                <h2 className='text-gray-300'>{get(props, 'boxText3')}</h2>
                            }
                            </div>
                        </div>
                        <div className="max-sm:mt-6 mt-2 sm:flex text-sm">
                        {
                            get(props, 'ctaText',"").length != 0 &&
                            <a href="#" className={`inline-flex gap-2 place-content-center rounded-full bg-orange-500 text-white font-semibold hover:bg-black p-3 lg:w-32 md:w-36 max-sm:w-32 max-sm:h-12 mb-6 ${get(tailwindClasses, 'ctaText')}`}>{get(props, 'ctaText')} 
                                {parse(get(props, 'ctaTextIcon'))}
                            </a>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
HerosectionV15.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
}
HerosectionV15.defaultProps = {
    style: {
      container: {},
      image1: {},
      image2: {},
      tagLine: {},
      taglineText1: {},
      taglineText2: {},
      icon: {},
      subtitle: {},
      title : {},
      description: {},
      title1: {},
      description1: {},
      text: {},
      box: {},
      boxText1: {},
      boxText2: {},
      boxText3: {},
      ctaText: {},
      ctaTextIcon: {}
    },
    tailwindClasses: {
        container: "",
        image1: "",
        image2: "",
        tagLine: "",
        taglineText1: "",
        taglineText2: "",
        icon: "",
        subtitle: "",
        title: "",
        description: "",
        title1: "",
        description1: "",
        text: "",
        box: "",
        boxText1: "",
        boxText2: "",
        boxText3: "",
        ctaText: "",
        ctaTextIcon: ""
    },
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text: "Designing functionctional office"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text: "Communication Tips smooth"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text: "Transforming your Bathrooms"
        }
    ],
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    taglineText1: "25+",
    taglineText2: "years of experience",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle: "About Company",
    title: "We Believe that we save more life's with you",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    title1: "Milestones",
    description1: "We are dedicated to making a tangible difference by providing",
    boxText1: "The General, affordable Coverage for Everyone.",
    boxText2: "Terry Wideman",
    boxText3: "/Founder",
    ctaText: "Read More",
    ctaTextIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>`
}
export default HerosectionV15;
