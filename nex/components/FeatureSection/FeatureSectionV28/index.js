import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const FeatureSectionV28 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px] !relative">
                    <NexAnimation type={get(props,'leftContentAnimation')}>
                        <div className={`shape rounded nx-bg-primary-light rellax !block !absolute ${get(tailwindClasses,'shape')}`} data-rellax-speed="0" style={{ top: "50%", left: "50%", width: "50%", height: "60%", transform: "translate(-50%,-50%)", zIndex: 0,...get(style,'shape') }}></div>
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !relative">
                            <div className="w-6/12 flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                                {get(props, 'image1', "").length !== 0 && <NexImage className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mb-5 ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, 'image1')} alt="image" />}
                                {get(props, 'image2', "").length !== 0 && <NexImage className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] ml-auto ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, 'image2')} alt="image" />}
                            </div>
                            <div className="w-6/12 flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                                {get(props, 'image3', "").length !== 0 && <NexImage className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] my-5 ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props, 'image3')} alt="image" />}
                                {get(props, 'image4', "").length !== 0 && <NexImage className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto] ${get(tailwindClasses, 'image4')}`} style={get(style, 'image4')} src={get(props, 'image4')} alt="image" />}
                            </div>
                        </div>
                        </NexAnimation>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
                    <NexAnimation type={get(props,'rightContentAnimation')}>
                        {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        {get(props, 'description', "").length !== 0 && <p className={`!mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                                    <li className="relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>}
                                        {get(props, 'text1', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</span>}
                                    </li>
                                    <li className="mt-3 relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>}
                                        {get(props, 'text2', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</span>}
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                                    <li className="relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>}
                                        {get(props, 'text3', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</span>}
                                    </li>
                                    <li className="mt-3 relative pl-6">
                                        {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>}
                                        {get(props, 'text4', "").length !== 0 && <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text4')}</span>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {get(props,'ctaText',"").length !==0 && <button className={`text-[0.75rem] font-medium nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] !mt-3 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><PrimaryLink href={get(props,'ctaLink')}>{get(props,'ctaText')}</PrimaryLink></button>}
                        </NexAnimation>
                        </div>
                </div>
        </section>
    )
}

FeatureSectionV28.propTypes = {
    style: object,
    tailwindClasses: object,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    title: string,
    description: string,
    icon: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    ctaLink: string,
    ctaText: string
}

FeatureSectionV28.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image1: {},
        image2: {},
        image3: {},
        image4: {},
        shape:{},
        title: {},
        description: {},
        icon: {},
        text: {},
        cta:{}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        shape:"",
        title: "",
        description: "",
        icon: "",
        text: "",
        cta:""
    },
    image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735987443.sa5.jpg",
    image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735987614.sa6.jpg",
    image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735987785.sa7.jpg",
    image4: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735987818.sa8.jpg",
    title: "We have considered our solutions to support every stage of growth.",
    description: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
    text1: "Aenean quam ornare curabitur blandit consectetur.",
    text2: "Etiam porta euismod malesuada mollis nisl ornare.",
    text3: "Nullam quis risus eget urna mollis ornare aenean leo.",
    text4: "Vivamus sagittis lacus augue rutrum maecenas odio.",
    ctaLink:"#",
    ctaText:"Read more",
    leftContentAnimation:"",
    rightContentAnimation:"",
}
export default FeatureSectionV28
