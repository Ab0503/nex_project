import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV35 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <section className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className={`flex flex-wrap mx-[15px] xl:mx-20 lg:mx-10 mt-[-50px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full xl:!ml-[8.33333333%] xl:!order-2 lg:!ml-[8.33333333%] lg:!order-2 mt-[50px]">
                        {get(props, 'title1', "").length !== 0 && <h2 className={`text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <em>{get(props, 'title2')}</em></h2>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.4rem] !leading-[1.6] font-medium mb-3 text-gray-600 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                        {get(props, 'description', "").length !== 0 && <p className={`mb-3 text-gray-600 text-[1.05rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'ctaText', "").length !== 0 && <button className={`text-gray-50 bg-[#3f78e0] border-[#3f78e0] hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-3 font-bold ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')} >{get(props, 'ctaText')}</a></button>}
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0  max-w-full mt-[50px]">
                        <div className="flex flex-wrap mx-[15px] mt-[-30px] !text-center">
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                                <div className="flex flex-wrap mx-[-15px]">
                                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                                        <div className={`rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                            <div className="flex-[1_1_auto] p-[40px]">
                                                {get(props, 'section1Icon',"").length !==0 &&<span className={`!mb-1 m-[0_auto] inline-flex text-[#3f78e0] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section1Icon'))}</span>}
                                                {get(props, 'section1Title',"").length !==0 &&<h3 className={`text-[1.4rem] font-bold mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section1Title')}</h3>}
                                                {get(props, 'section1Description',"").length !==0 &&<p className={`!mb-2 text-[1.05rem] text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section1Description')}</p>}
                                                {get(props, 'section1CtaText',"").length !==0 &&<button className={`bg-transparent border border-[#3f78e0] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-gray-50 px-4 py-1 rounded-full ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}>
                                                    <a href={get(props, 'section1CtaLink')}>{get(props, 'section1CtaText')}</a>
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                                        <div className={`rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                        <div className="flex-[1_1_auto] p-[40px]">
                                                {get(props, 'section2Icon',"").length !==0 &&<span className={`!mb-1 m-[0_auto] inline-flex text-[#3f78e0] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section2Icon'))}</span>}
                                                {get(props, 'section2Title',"").length !==0 &&<h3 className={`text-[1.4rem] font-bold mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section2Title')}</h3>}
                                                {get(props, 'section2Description',"").length !==0 &&<p className={`!mb-2 text-[1.05rem] text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section2Description')}</p>}
                                                {get(props, 'section2CtaText',"").length !==0 &&<button className={`bg-transparent border border-[#3f78e0] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-gray-50 px-4 py-1 rounded-full ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}>
                                                    <a href={get(props, 'section2CtaLink')}>{get(props, 'section2CtaText')}</a>
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                                <div className="flex flex-wrap mx-[-15px]">
                                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                                        <div className={`rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !mb-6 xl:mb-0 lg:mb-0 md:mb-0 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                        <div className="flex-[1_1_auto] p-[40px]">
                                                {get(props, 'section3Icon',"").length !==0 &&<span className={`!mb-1 m-[0_auto] inline-flex text-[#3f78e0] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section3Icon'))}</span>}
                                                {get(props, 'section3Title',"").length !==0 &&<h3 className={`text-[1.4rem] font-bold mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section3Title')}</h3>}
                                                {get(props, 'section3Description',"").length !==0 &&<p className={`!mb-2 text-[1.05rem] text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section3Description')}</p>}
                                                {get(props, 'section3CtaText',"").length !==0 &&<button className={`bg-transparent border border-[#3f78e0] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-gray-50 px-4 py-1 rounded-full ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}>
                                                    <a href={get(props, 'section3CtaLink')}>{get(props, 'section3CtaText')}</a>
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                                        <div className={`rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                        <div className="flex-[1_1_auto] p-[40px]">
                                                {get(props, 'section4Icon',"").length !==0 &&<span className={`!mb-1 m-[0_auto] inline-flex text-[#3f78e0] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section4Icon'))}</span>}
                                                {get(props, 'section4Title',"").length !==0 &&<h3 className={`text-[1.4rem] font-bold mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section4Title')}</h3>}
                                                {get(props, 'section4Description',"").length !==0 &&<p className={`!mb-2 text-[1.05rem] text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'section4Description')}</p>}
                                                {get(props, 'section4CtaText',"").length !==0 &&<button className={`bg-transparent border border-[#3f78e0] text-[#3f78e0] hover:bg-[#3f78e0] hover:text-gray-50 px-4 py-1 rounded-full ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}>
                                                    <a href={get(props, 'section4CtaLink')}>{get(props, 'section4CtaText')}</a>
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

FeatureSectionV35.propTypes={
    style: object,
    tailwindClasses: object,
    title1: string,
    title2: string,
    subTitle: string,
    description: string,
    ctaLink: string,
    ctaText: string,
    section1Icon: string,
    section1Title: string,
    section1Description: string,
    section1CtaLink: string,
    section1CtaText: string,
    section2Icon: string,
    section2Title: string,
    section2Description: string,
    section2CtaLink: string,
    section2CtaText: string,
    section3Icon: string,
    section3Title: string,
    section3Description:string,
    section3CtaLink: string,
    section3CtaText: string,
    section4Icon: string,
    section4Title: string,
    section4Description: string,
    section4CtaLink: string,
    section4CtaText: string,
}

FeatureSectionV35.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        title:{},
        subTitle:{},
        description:{},
        cta:{},
        sectionBox:{},
        sectionIcon:{},
        sectionTitle:{},
        sectionDescription:{},
        sectionCta:{}
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        title:"",
        subTitle:"",
        description:"",
        cta:"",
        sectionBox:"",
        sectionIcon:"",
        sectionTitle:"",
        sectionDescription:"",
        sectionCta:""
    },
    title1: "My areas of",
    title2: "expertise",
    subTitle: "The full service I am offering is specifically designed to meet your business needs.",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula magna mollis.",
    ctaLink: "#",
    ctaText: "More Details",
    section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
</svg>
`,
    section1Title: "Content Marketing",
    section1Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
    section1CtaLink: "#",
    section1CtaText: "Learn More",
    section2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
</svg>
`,
    section2Title: "Social Engagement",
    section2Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
    section2CtaLink: "#",
    section2CtaText: "Learn More",
    section3Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z" clip-rule="evenodd" />
  <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
</svg>
`,
    section3Title: "Product Design",
    section3Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
    section3CtaLink: "#",
    section3CtaText: "Learn More",
    section4Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
  <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
</svg>
`,
    section4Title: "Identity & Branding",
    section4Description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
    section4CtaLink: "#",
    section4CtaText: "Learn More",
}

export default FeatureSectionV35
