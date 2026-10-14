import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV26 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="text-center xl:mx-20 md:mx-10">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
                        <NexAnimation type={get(props,'topContentAnimation')}>
                            {get(props, 'subTitle', "").length !== 0 && <h2 className={`nx-text-primary text-[.75rem] uppercase mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                            {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-10 xl:px-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        </NexAnimation>
                    </div>
                </div>
                <div className="!relative">
                    <NexAnimation type={get(props,'bottomContentAnimation')}>
                    <div className={`shape rounded-[50%] nx-bg-primary-light rellax !w-[6rem] !h-[6rem] !absolute max-sm:hidden z-10 ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{ bottom: "-0.5rem", right: "-2.2rem", ...get(style, 'shape1') }}></div>
                    <div className={`shape bg-dot yellow rellax !w-[6rem] !h-[7rem] !absolute opacity-50 max-sm:hidden z-10 ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="1" style={{ top: "-0.5rem", left: "-2.5rem", ...get(style, 'shape2') }}></div>
                    <div className={`grid md:grid-cols-2 xl:grid-cols-${get(props, 'boxNo')} mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] mt-[-25px] !text-center`}>
                        {get(props, 'items', []).map((item) => <div className="w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px] !relative !z-10">
                            <div className={`rounded-lg shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                <div className=" flex-[1_1_auto] p-[40px]">
                                    {get(item, 'icon', "").length !== 0 && <span className={`nx-text-primary mb-3 m-[0_auto] inline-flex ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                        {parse(get(item, 'icon'))}
                                    </span>}
                                    {get(item, 'title', "").length !== 0 && <h4 className={`font-bold text-lg ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>}
                                    {get(item, 'description', "").length !== 0 && <p className={`mb-3 text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                                    {get(item, 'ctaText', "").length !== 0 && <button className={`text-gray-50 focus:text-gray-50 hover:text-gray-50 nx-btn-primary nx-btn-primary:hover font-bold px-5 py-2 rounded-full text-[.75rem] hover:translate-x-0 hover:translate-y-0 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-105 hover:scale-y-105 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                        <PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink>
                                    </button>}
                                </div>
                            </div>
                        </div>)}
                    </div>
                    </NexAnimation>
                </div>
            </div>
        </section>
    )
}

FeatureSectionV26.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV26.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        shape1: {},
        shape2: {},
        sectionBox: {},
        icon: {},
        sectionTitle: {},
        sectionDescription: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        shape1: "",
        shape2: "",
        sectionBox: "",
        icon: "",
        sectionTitle: "",
        sectionDescription: "",
        cta: ""
    },
    boxNo: "3",
    subTitle: "What We Do?",
    title: "The service we offer is specifically designed to meet your needs.",
    topContentAnimation:"",
    bottomContentAnimation:"",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" /></svg>`,
            title: "SEO Services",
            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`,
            title: "Web Design",
            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`,
            title: "Social Engagement",
            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" /></svg>`,
            title: "Content Marketing",
            description: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo",
            ctaLink: "#",
            ctaText: "Learn More"
        },
    ]
}
export default FeatureSectionV26
