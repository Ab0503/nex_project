import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV34 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <section className={`nx-bg-primary-light overflow-hidden ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className={`flex flex-wrap mx-[15px] xl:mx-20 lg:mx-10 mt-[-50px] items-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full mt-[50px]">
                        <div className="flex flex-wrap mx-[15px] mt-[-30px] !text-center">
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <NexAnimation  type={get(props, 'leftImageContentAnimation', '')}>
                                <div className={`rounded-lg overflow-hidden !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mb-6 nx-bg-primary ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    {get(props, 'section1Image',"").length !==0 &&<figure className="overlay overlay-1 group">
                                        <PrimaryLink href={get(props, 'section4Link')}><NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section1Image')} alt="image" /></PrimaryLink>
                                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                            <h5 className={`from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4 text-lg font-bold ${get(tailwindClasses, 'sectionImageText')}`} style={get(style, 'sectionImageText')}>{get(props, 'section1ImageText')}</h5>
                                        </figcaption>
                                    </figure>}
                                    <div className="p-4">
                                        <h3 className={`text-[1.2rem] font-bold !mb-0 ${get(tailwindClasses,'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section1Text')}</h3>
                                    </div>
                                </div>
                                <div className={`rounded-lg overflow-hidden !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] nx-bg-primary ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    {get(props, 'section2Image',"").length !==0 &&<figure className="overlay overlay-1 group">
                                        <PrimaryLink href={get(props, 'section4Link')}><NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section2Image')} alt="image" /></PrimaryLink>
                                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                            <h5 className={`from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4 text-lg font-bold ${get(tailwindClasses, 'sectionImageText')}`} style={get(style, 'sectionImageText')}>{get(props, 'section2ImageText')}</h5>
                                        </figcaption>
                                    </figure>}
                                    <div className="p-4">
                                        <h3 className={`text-[1.2rem] font-bold mb-0 ${get(tailwindClasses,'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section2Text')}</h3>
                                    </div>
                                </div>
                            </NexAnimation>
                            </div>
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <NexAnimation  type={get(props, 'rightImageContentAnimation', '')}>
                                <div className={`rounded-lg overflow-hidden shadow-[0_0.25rem_1.75rem_rgba(30,34[],40,0.07)] xl:mt-6 lg:mt-6 md:mt-6 mb-6 nx-bg-primary ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    {get(props, 'section3Image',"").length !==0 &&<figure className="overlay overlay-1 group">
                                        <PrimaryLink href={get(props, 'section4Link')}><NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section3Image')} alt="image" /></PrimaryLink>
                                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                            <h5 className={`from-top mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4 text-lg font-bold ${get(tailwindClasses, 'sectionImageText')}`} style={get(style, 'sectionImageText')}>{get(props, 'section3ImageText')}</h5>
                                        </figcaption>
                                    </figure>}
                                    <div className="p-4">
                                        <h3 className={`text-[1.2rem] font-bold mb-0 ${get(tailwindClasses,'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section3Text')}</h3>
                                    </div>
                                </div>
                                <div className={`rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] overflow-hidden nx-bg-primary ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    {get(props, 'section4Image',"").length !==0 &&<figure className="overlay overlay-1 group">
                                        <PrimaryLink href={get(props, 'section4Link')}><NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section4Image')} alt="image" /></PrimaryLink>
                                        {get(props, 'section4ImageText', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                            <h5 className={`from-top !mb-0 !absolute w-full translate-y-[-80%] px-4 py-3 left-0 top-2/4 group-hover:-translate-y-2/4 text-lg font-bold ${get(tailwindClasses, 'sectionImageText')}`} style={get(style, 'sectionImageText')}>{get(props, 'section4ImageText')}</h5>
                                        </figcaption>}
                                    </figure>}
                                    <div className="p-4">
                                        {get(props, 'section4Text', "").length !== 0 && <h3 className={`text-[1.2rem] font-bold !mb-0 ${get(tailwindClasses,'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section4Text')}</h3>}
                                    </div>
                                </div>
                            </NexAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[50px]">
                    <NexAnimation  type={get(props, 'ContentAnimation', '')}>
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[2rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.3rem] leading-[1.6] font-medium text-gray-600 mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                        {get(props, 'description', "").length !== 0 && <p className={`mb-3 text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'ctaText', "").length !== 0 && 
                        <button className={`p-3 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-[50rem] mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                            <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
                        </button>}
                    </NexAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

FeatureSectionV34.propTypes={
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    description: string,
    ctaLink: string,
    ctaText: string,
    section1Link: string,
    section1Image: string,
    section1ImageText: string,
    section1Text: string,
    section2Link: string,
    section2Image: string,
    section2ImageText: string,
    section2Text: string,
    section3Link: string,
    section3Image: string,
    section3ImageText: string,
    section3Text: string,
    section4Link: string,
    section4Image: string,
    section4ImageText: string,
    section4Text: string,
}

FeatureSectionV34.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        title:{},
        subTitle:{},
        description:{},
        cta:{},
        sectionBox:{},
        sectionImage:{},
        sectionImageText:{},
        sectionText:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        title:"",
        subTitle:"",
        description:"",
        cta:"",
        sectionBox:"",
        sectionImage:"",
        sectionImageText:"",
        sectionText:""
    },
    leftImageContentAnimation: "",
    rightImageContentAnimation: "",
    ContentAnimation: "",
    title: "My Services",
    subTitle: "I would like to give you a unique photography experience, capture your products with excellent composition and lighting skills.",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula mollis metus auctor fringilla.",
    ctaLink: "#",
    ctaText: "More Details",
    section1Link: "#",
    section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736238063.fs4.jpg",
    section1ImageText: "View Gallery",
    section1Text: "Products",
    section2Link: "#",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736238063.fs4.jpg",
    section2ImageText: "View Gallery",
    section2Text: "Recipes",
    section3Link: "#",
    section3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736238063.fs4.jpg",
    section3ImageText: "View Gallery",
    section3Text: "Restaurants",
    section4Link: "#",
    section4Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736238063.fs4.jpg",
    section4ImageText: "View Gallery",
    section4Text: "Still Life",
}
export default FeatureSectionV34