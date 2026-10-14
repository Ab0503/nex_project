import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import parse from 'html-react-parser';
import NexImage from '@nex-core-ui/NexImage';


const HeroSectionV16 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
        <div className={`relative w-full max-sm:w-full bg-gray-50 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="lg:relative">
                <div className="flex flex-row w-full lg:pb-20 lg:pt-16 md:pt-10 lg:pl-20 lg:py-48 max-lg:text-center md:text-center max-sm:text-center">
                    <div className="max-sm:text-center p-4 lg:w-1/2 lg:pr-10 xl:pr-16 md:text-center lg:text-start">
                        <div className="inline-flex gap-2">
                        {
                            get(props, 'icon',"").length != 0 &&
                            <span className={``}>{parse(get(props, 'icon'))}</span>
                        }
                        {
                            get(props, 'subTitle',"").length != 0 &&
                            <h2 className={`flex-col text-sm font-semibold text-green-900 sm:text-sm md:text-sm max-lg:text-sm lg:text-sm font-serif ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                                {get(props, 'subTitle')}
                            </h2>
                        }
                        </div>
                        {
                            get(props, 'title',"").length != 0 &&
                            <h1 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl max-lg:text-3xl lg:text-3xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                                {get(props, 'title')}
                            </h1>
                        }
                        {
                            get(props, 'description',"").length != 0 &&
                            <p className={`mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                            {get(props, 'description')}
                            </p>
                        }
                        <div className="flex mt-5 justify-center">
                            <div className="absolute flex-col xl:start-40 max-lg:start-36 lg:start-36 max-sm:start-2 max-md:start-44 md:start-44">
                            {
                                get(props, 'imagePath1',"").length != 0 &&
                                <NexImage src={get(props, 'imagePath1')} className={`!relative !h-20 !w-20 !max-md:w-24 !max-md:h-24 !max-sm:h-20 !max-sm:w-20 object-cover border-2 border-black rounded-full  ${get(tailwindClasses, 'image1')}`}  style={get(style, 'image1')}/>
                            }
                            </div>
                            {
                            (get(props, 'boxText1',"").length != 0 || get(props, 'boxText2',"").length != 0) &&
                                (<div className={`bg-blue-400 rounded-full text-center xl:w-96 lg:h-20 lg:w-80 md:h-24 md:w-96 max-sm:h-22 max-sm:w-80 sm:w-80 sm:h-16 lg:p-2 lg:pl-20 max-sm:pl-20 md:p-2 max-sm:p-3 md:pl-20 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                                {
                                    get(props, 'boxText1',"").length != 0 &&
                                    <h1 className={`text-sm font-bold tracking-tight text-gray-900 max-sm:text-sm md:text-sm lg:text-sm xl:text-sm ${get(tailwindClasses, 'boxText1')}`} style={get(style, 'boxText1')}>
                                        {get(props, 'boxText1')}
                                    </h1>
                                }
                                {
                                    get(props, 'boxText2',"").length != 0 &&
                                    <p className={`mx-auto max-w-md text-sm text-gray-50 max-sm:text-sm md:max-w-2xl lg:text-sm ${get(tailwindClasses, 'boxText2')}`} style={get(style, 'boxText2')}>
                                        {get(props, 'boxText2')}
                                    </p>
                                }
                                </div>)
                            }
                        </div>
                        <div>
                            {
                                get(props, 'items', []).map((item) => (get(item, 'icon1',"").length != 0 || get(item, 'text1',"").length != 0) &&
                                    
                                    <div className="flex w-full flex-none pt-6 gap-x-4 text-start">
                                        <div className="flex-none">
                                            <span className="sr-only">List</span>
                                            {
                                                get(item, 'icon1',"").length != 0 &&
                                                <span className={`bg-orange-500 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>
                                                {parse(get(item, 'icon1'))}
                                                </span>
                                            }
                                        </div>
                                        {
                                            get(item, 'text1',"").length != 0 &&
                                            <p className={`text-sm/6 font-medium text-gray-900 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, 'text1')}</p>
                                        }
                                    </div>
                                )
                            }   
                        </div>
                        <div className="mt-4 sm:flex items-center justify-center text-sm">
                        {
                            get(props, 'ctaLink',"").length != 0 &&
                            <a href="#" className={`inline-flex gap-2 bg-orange-500 text-gray-50 font-semibold rounded-full hover:bg-gray-900 p-4 mb-6 ${get(tailwindClasses, 'ctaLink')}`} style={get(style, 'ctaLink')}>{get(props, 'ctaLink')}
                            {
                                get(props, 'ctaIcon',"").length != 0 &&
                                <span className={`${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(props, 'ctaIcon'))}</span>
                            }
                            </a>
                        }
                        </div>
                    </div>
                </div>
                <div className="relative h-full sm:h-80 md:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full justify-center my-40 mt-2 mb-4 lg:w-1/2">
                {
                    get(props, 'imagePath2',"").length != 0 &&
                    <NexImage src={get(props, 'imagePath2')} className={`!relative !h-full !w-full object-cover rounded-l-full opacity-30 py-20 max-lg:py-0 ${get(tailwindClasses, 'image2')}`}  style={get(style, 'image2')}/> 
                }
                        <div className="border-gray-300 ">
                        {
                            get(props, 'imagePath3',"").length != 0 &&
                            <div className='absolute xl:top-52 lg:top-56 max-lg:top-7 max-sm:top-0'><NexImage src={get(props, 'imagePath3')} className={`!relative !w-64 !h-64 !max-sm:h-44 !max-sm:w-44 !md:mt-10 border-2 ring-4 rounded-full object-cover ${get(tailwindClasses, 'image3')}`}  style={get(style, 'image3')}/></div>
                            
                        }
                        {
                            (get(props, 'taglineIcon',"").length != 0 || get(props, 'tagLine',"").length != 0) &&
                            <div className={`absolute place-content-center p-2 h-20 w-72 max-sm:w-64 lg:mt-64 sm:mt-32 max-sm:top-20 top-12 max-lg:top-20 max-sm:left-28 left-48 md:mt-10 bg-orange-500 text-gray-50 max-sm:px-5 rounded-l-full shadow-md ${get(tailwindClasses, 'tagLine')}`} style={get(style, 'tagLine')}>
                                <div className="flex items-center space-x-4">
                                {
                                    get(props, 'taglineIcon',"").length != 0 &&
                                    <span>{parse(get(props, 'taglineIcon'))}</span>
                                }
                                {
                                    get(props, 'tagLine',"").length != 0 &&
                                    <span>{get(props, 'tagLine')}</span>
                                }
                                </div>
                            </div>
                        }
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

HeroSectionV16.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    description: string
  }
  HeroSectionV16.defaultProps = {
    style: {
      container: {},
      icon: {},
      subtitle: {},
      title: {},
      description: {},
      icon1: {},
      text1: {},
      box: {},
      image1: {},
      boxText1: {},
      boxText2: {},
      ctaLink: {},
      image2: {},
      image3: {},
      tagLine: {},
      taglineIcon: {},
      ctaIcon: {}
    },
    tailwindClasses: {
      container: "",
      icon: "",
      subtitle: "",
      title: "",
      description: "",
      icon1: "",
      text1: "",
      box: "",
      image1: "",
      boxText1: "",
      boxText2: "",
      ctaLink: "",
      image2: "",
      image3: "",
      tagLine: "",
      taglineIcon: "",
      ctaIcon: ""

    },
    items: [
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text1: "Designing function office spaces"
        },
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text1: "Communication Tips smooth construction project"
        },
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>`,
            text1: "Transforming your Bathrooms"
        }
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle: "About Us",
    title: "We Believe that we save more life's with you",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    boxText1: "24/7 Stand Help",
    boxText2: "Get involved today & be part of the something meaningful",
    imagePath1: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    tagLine: "We have funded 50K dollar",
    taglineIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>`,
    ctaLink: "Read More",
    ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>`
  }
  
  export default HeroSectionV16;
