import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV30 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap mx-[15px] xl:mx-20 lg:mx-[20px] mt-[-40px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[20px] mt-[40px] max-w-full xl:!order-2 lg:!order-2">
                    <NexAnimation type={get(props, 'rightContentAnimation')}>
                        <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] mt-[-25px]">
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end mt-[25px]">
                                {get(props, 'image1', "").length !== 0 && <figure className="rounded-[0.4rem]"><NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, 'image1')} alt="image" /></figure>}
                            </div>
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end mt-[25px]">
                                {get(props, 'image2', "").length !== 0 && <figure className="rounded-[0.4rem]"><NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, 'image2')} alt="image" /></figure>}
                            </div>
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] mt-[25px]">
                                {get(props, 'image3', "").length !== 0 && <figure className="rounded-[0.4rem]"><NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props, 'image3')} alt="image" /></figure>}
                            </div>
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start mt-[25px]">
                                {get(props, 'image4', "").length !== 0 && <figure className="rounded-[0.4rem]"><NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses, 'image4')}`} style={get(style, 'image4')} src={get(props, 'image4')} alt="image" /></figure>}
                            </div>
                        </div>
                    </NexAnimation>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] mt-[40px] max-w-full">
                    <NexAnimation type={get(props, 'leftContentAnimation')}>
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        <p className={`lead !mb-8 xxl:!pr-2 !text-[1.4rem] !leading-[1.6] text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description1')} <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">{get(props, 'description2')}</span> {get(props, 'description3')}</p>
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-30px]">
                            {get(props, 'items', []).map((item) => <div className="md:w-6/12 lg:w-full xl:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                                <div className={`flex flex-row ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    <div>
                                        {get(item, 'icon', "").length !== 0 && <div className={`nx-text-primary nx-bg-primary-light pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}> {parse(get(item, 'icon'))} </div>}
                                    </div>
                                    <div>
                                        {get(item, 'title', "").length !== 0 && <h4 className={`!mb-1 text-lg font-bold nx-section-heading-font ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>}
                                        <p className={`!mb-0 text-gray-600 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>
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

FeatureSectionV30.propTypes = {
    style: object,
    tailwindClasses: object,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    title: string,
    description1: string,
    description2: string,
    description3: string,
    items: arrayOf(object)
}

FeatureSectionV30.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image1: {},
        image2: {},
        image3: {},
        image4: {},
        title: {},
        description: {},
        sectionBox: {},
        sectionIcon: {},
        sectionTitle: {},
        sectionDescription: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        title: "",
        description: "",
        sectionBox: "",
        sectionIcon: "",
        sectionTitle: "",
        sectionDescription: ""
    },
    image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736145478.g1.jpg",
    image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736145521.g2.jpg",
    image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736145618.g3.jpg",
    image4: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736145670.g4.jpg",
    title: "What We Do?",
    description1: "The full service we are offering is",
    description2: "specifically",
    description3: "designed to meet your business needs and projects.",
    leftContentAnimation: "",
    rightContentAnimation: "",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" /></svg>`,
            title: "24/7 Support",
            description: "Nulla vitae elit libero pharetra augue dapibus."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>`,
            title: "Secure Payments",
            description: "Vivamus sagittis lacus augue laoreet vel."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
            title: "Daily Updates",
            description: "Cras mattis consectetur purus sit amet."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>`,
            title: "Market Research",
            description: "Aenean lacinia bibendum nulla sed consectetur."
        }
    ]
}
export default FeatureSectionV30
