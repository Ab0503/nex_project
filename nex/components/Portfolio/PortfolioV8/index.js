import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { number, object, string } from 'prop-types';
import React from 'react'
import CountUp from 'react-countup';

const PortfolioV8 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xl:mx-20">
                {get(props, 'title', "").length !== 0 && <div className="flex flex-wrap mx-[15px] mb-10">
                    <div className="md:w-9/12 lg:w-7/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        {get(props, 'counterNum', "").length !== 0 && <div className="counter-wrapper">
                            <h3 className={`xl:!text-[3.5rem] text-[calc(1.475rem_+_2.7vw)] mb-3 text-[#3f78e0] !leading-none !text-center font-bold ${get(tailwindClasses, 'counterNum')}`} style={get(style, 'counterNum')}><CountUp end={get(props, 'counterNum')} enableScrollSpy /></h3>
                        </div>}
                        <h2 className={`text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[2rem] mb-3 !text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
                    </div>
                </div>}
                <div className="demos-wrapper">
                    <div className="project mb-10">
                        <div className={`rounded-xl bg-[#f0f0f8] ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                            <div className="xl:!pl-14 px-[40px] py-0 overflow-hidden">
                                <div className="flex flex-wrap mx-[15px] md:mx-[20px] xl:mx-[35px] items-center">
                                    <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
                                        <div className="flex flex-wrap mx-[-17.5px]">
                                            <div className="w-6/12 flex-[0_0_auto] px-[17.5px] max-w-full">
                                                {get(props, 'sectionImage1').length !== 0 && <figure className="itooltip itooltip-grape mt-9" title='<h5 className="!mb-0">Click to see the demo</h5>'><a href="../../demo18.html" target="_blank"><NexImage className={`!relative shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-t-[0.4rem] ${get(tailwindClasses, 'sectionImage1')}`} style={get(style, 'sectionImage1')} src={get(props, 'sectionImage1')} alt="image" /></a></figure>}
                                            </div>
                                            <div className="w-6/12 flex-[0_0_auto] px-[17.5px] max-w-full">
                                                {get(props, 'sectionImage2', "").length !== 0 && <figure className="itooltip itooltip-grape" title='<h5 className="!mb-0">Click to see the demo</h5>'><a href="../../demo18.html" target="_blank"><NexImage className={`!relative shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-br-[0.4rem] rounded-bl-[0.4rem] ${get(tailwindClasses, 'sectionImage2')}`} style={get(style, 'sectionImage2')} src={get(props, 'sectionImage2')} alt="image" /></a></figure>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-5/12 lg:w-5/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full hidden xl:block lg:block">
                                        {get(props, 'sectionTitle', "").length !== 0 && <h2 className={`xl:text-[1.7rem] text-[calc(1.275rem_+_0.3vw)] mb-4 !leading-[1.35] font-bold ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'sectionTitle')}</h2>}
                                        <ul className="pl-0 list-none bullet-grape flex flex-wrap mx-[-15px] ml-0 mt-[-10px]">
                                            <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                                                {get(props, 'checkIcon', "").length !== 0 && <span className={`absolute top-[0.2rem] text-[1rem] text-[#605dba] left-[-0.1rem] ${get(tailwindClasses, 'sectionCheckIcon')}`} style={get(style, 'sectionCheckIcon')}>{parse(get(props, 'checkIcon'))}</span>}
                                                {get(props, 'sectionText1', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'sectionText1')}</span>}
                                            </li>
                                            <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                                                {get(props, 'checkIcon', "").length !== 0 && <span className={`absolute top-[0.2rem] text-[1rem] text-[#605dba] left-[-0.1rem] ${get(tailwindClasses, 'sectionCheckIcon')}`} style={get(style, 'sectionCheckIcon')}>{parse(get(props, 'checkIcon'))}</span>}
                                                {get(props, 'sectionText2', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'sectionText2')}</span>}
                                            </li>
                                            <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                                                {get(props, 'checkIcon', "").length !== 0 && <span className={`absolute top-[0.2rem] text-[1rem] text-[#605dba] left-[-0.1rem] ${get(tailwindClasses, 'sectionCheckIcon')}`} style={get(style, 'sectionCheckIcon')}>{parse(get(props, 'checkIcon'))}</span>}
                                                {get(props, 'sectionText3', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'sectionText3')}</span>}
                                            </li>
                                            <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                                                {get(props, 'checkIcon', "").length !== 0 && <span className={`absolute top-[0.2rem] text-[1rem] text-[#605dba] left-[-0.1rem] ${get(tailwindClasses, 'sectionCheckIcon')}`} style={get(style, 'sectionCheckIcon')}>{parse(get(props, 'checkIcon'))}</span>}
                                                {get(props, 'sectionText4', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'sectionText4')}</span>}
                                            </li>
                                        </ul>
                                        {get(props, 'sectionCtaText', "").length !== 0 && <button className={`text-gray-50 bg-[#605dba] border-[#605dba] hover:text-gray-50 hover:bg-[#605dba] hover:border-[#605dba] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#605dba] active:border-[#605dba] disabled:text-gray-50 disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 mt-3 ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>
                                            <a href={get(props, 'sectionCtaLink')} >{get(props, 'sectionCtaText')}</a>
                                        </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {get(props, 'ctaText',"").length !==0 &&<div className="text-center mt-12">
                        <button className={`text-gray-50 bg-[#3f78e0] border-[#3f78e0] hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <a href={get(props, 'ctaLink')} >{get(props, 'ctaText')}</a>
                        </button>
                    </div>}
                </div>
            </div>
        </section>
    )
}

PortfolioV8.propTypes={
    style: object,
    tailwindClasses: object,
    counterNum: number,
    title: string,
    checkIcon: string,
    sectionImage1: string,
    sectionImage1Link: string,
    sectionImage2: string,
    sectionImage2Link: string,
    sectionTitle: string,
    sectionText1: string,
    sectionText2: string,
    sectionText3: string,
    sectionText4: string,
    sectionCtaLink: string,
    sectionCtaText: string,
    ctaLink: string,
    ctaText: string
},

PortfolioV8.defaultProps = {
    style:{
        container:{},
        counterNum:{},
        title:{},
        sectionBox:{},
        sectionImage1:{},
        sectionImage2:{},
        sectionTitle:{},
        sectionText:{},
        sectionCheckIcon:{},
        sectionCta:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        counterNum:"",
        title:"",
        sectionBox:"",
        sectionImage1:"",
        sectionImage2:"",
        sectionTitle:"",
        sectionText:"",
        sectionCheckIcon:"",
        sectionCta:"",
        cta:""
    },
    counterNum: 21,
    title: "Functional, impressive and rich demos to start with",
    checkIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
</svg>
`,
    sectionImage1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736502147.d18.jpg",
    sectionImage1Link: "#",
    sectionImage2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736502188.d18-2.jpg",
    sectionImage2Link: "#",
    sectionTitle: "Demo Layout XVIII",
    sectionText1: "Network, Marketing",
    sectionText2: "SVG icons",
    sectionText3: "3D illustrations",
    sectionText4: "Gradient image",
    sectionCtaLink: "#",
    sectionCtaText: "See Demo",
    ctaLink: "#",
    ctaText: "See All Demos"
}
export default PortfolioV8