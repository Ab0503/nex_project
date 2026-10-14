import { MinusIcon } from '@heroicons/react/24/outline';
import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'

const PortfolioV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="">
                <div className="projects-tiles">
                    <div className="project itemgrid grid-view">
                        <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] isotope ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
                            <NexAnimation type={get(props,'leftContentAnimation')}>
                                <div className="project-details flex justify-center !self-end  flex-col !pl-0 !pb-0 mb-10">
                                    <div className="post-header">
                                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] mb-4 xxl:!pr-20 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                                        {get(props, 'description', "").length !== 0 && <p className={`lead text-[1.4rem] !leading-[1.6] font-medium !mb-0 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                                    </div>
                                </div>
                                <div className={`${get(tailwindClasses,'section1Box')}`} style={get(style,'section1Box')}>
                                    {get(props, 'section1Image', "").length !== 0 && <figure className="hover:-translate-y-1 hover:transform hover:transition-all hover:ease-in-out hover:duration-300 !mb-6"><PrimaryLink href={get(props, 'section1ImageLink')}> <NexImage className={`!relative rounded ${get(tailwindClasses, 'section1Image')}`} style={get(style, 'section1Image')} src={get(props, 'section1Image')} alt="image" /></PrimaryLink></figure>}
                                    {get(props, 'section1Title', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[1rem] font-bold text-line nx-text-primary relative align-top pl-[1.4rem] mb-3 ${get(tailwindClasses, 'section1Title')}`} style={get(style, 'section1Title')}><MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary'/>{get(props, 'section1Title')}</div>}
                                    {get(props, 'section1Text', "").length !== 0 && <h2 className={`text-[1.4rem] font-semibold ${get(tailwindClasses, 'section1Text')}`} style={get(style, 'section1Text')}>{get(props, 'section1Text')}</h2>}
                                </div>
                                </NexAnimation>
                            </div>
                            <div className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full max-sm:mt-5">
                            <NexAnimation type={get(props,'topRightContentAnimation')}>
                                <div className={`mb-5 ${get(tailwindClasses,'section2Box')}`} style={get(style,'section2Box')}>
                                    {get(props, 'section2Image', "").length !== 0 && <figure className="hover:-translate-y-1 hover:transform hover:transition-all hover:ease-in-out hover:duration-300 !mb-6"><PrimaryLink href={get(props, 'section2ImageLink')}> <NexImage className={`!relative rounded ${get(tailwindClasses, 'section2Image')}`} style={get(style, 'section2Image')} src={get(props, 'section2Image')} alt="image" /></PrimaryLink></figure>}
                                    {get(props, 'section2Title', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[1rem] font-bold text-line relative align-top pl-[1.4rem] nx-text-primary mb-3 ${get(tailwindClasses, 'section2Title')}`} style={get(style, 'section2Title')}><MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary'/>{get(props, 'section2Title')}</div>}
                                    {get(props, 'section2Text', "").length !== 0 && <h2 className={`text-[1.4rem] font-semibold ${get(tailwindClasses, 'section2Text')}`} style={get(style, 'section2Text')}>{get(props, 'section2Text')}</h2>}
                                </div>
                                </NexAnimation>
                                <NexAnimation type={get(props,'bottomRightContentAnimation')}>
                                <div className={`${get(tailwindClasses,'section3Box')}`} style={get(style,'section3Box')}>
                                    {get(props, 'section3Image', "").length !== 0 && <figure className="hover:-translate-y-1 hover:transform hover:transition-all hover:ease-in-out hover:duration-300 !mb-6"><PrimaryLink href={get(props, 'section3ImageLink')}> <NexImage className={`!relative rounded ${get(tailwindClasses, 'section3Image')}`} style={get(style, 'section3Image')} src={get(props, 'section3Image')} alt="image" /></PrimaryLink></figure>}
                                    {get(props, 'section2Title', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[1rem] font-bold text-line relative align-top pl-[1.4rem] nx-text-primary mb-3 ${get(tailwindClasses, 'section3Title')}`} style={get(style, 'section3Title')}><MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary'/>{get(props, 'section3Title')}</div>}
                                    {get(props, 'section3Text', "").length !== 0 && <h2 className={`text-[1.4rem] font-semibold ${get(tailwindClasses, 'section3Text')}`} style={get(style, 'section3Text')}>{get(props, 'section3Text')}</h2>}
                                </div>
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

PortfolioV1.propTypes ={
    style: object,
    tailwindClasses: object,
    title: string,
    description: string,
    section1ImageLink: string,
    section1Image: string,
    section1Title: string,
    section1Text: string,
    section2ImageLink: string,
    section2Image: string,
    section2Title: string,
    section2Text: string,
    section3ImageLink: string,
    section3Image: string,
    section3Title: string,
    section3Text: string,
}

PortfolioV1.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        title:{},
        description:{},
        section1Box:{},
        section1Image:{},
        section1Title:{},
        section1Text:{},
        section2Box:{},
        section2Image:{},
        section2Title:{},
        section2Text:{},
        section3Box:{},
        section3Image:{},
        section3Title:{},
        section3Text:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        title:"",
        description:"",
        section1Box:"",
        section1Image:"",
        section1Title:"",
        section1Text:"",
        section2Box:"",
        section2Image:"",
        section2Title:"",
        section2Text:"",
        section3Box:"",
        section3Image:"",
        section3Title:"",
        section3Text:""
    },
    title: "Check out some of our recent projects below.",
    description: "We love to turn ideas into beautiful things.",
    section1ImageLink: "#",
    section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736400171.rp2.jpg",
    section1TitleColor:"[#7cb798]",
    section1Title: "Invitation",
    section1Text: "Mollis Ipsum Mattis",
    section2ImageLink: "#",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736400128.rp1.jpg",
    section2TitleColor:"[#a07cc5]",
    section2Title: "Stationary",
    section2Text: "Ipsum Ultricies Cursus",
    section3ImageLink: "#",
    section3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736400196.rp3.jpg",
    section3TitleColor:"[#747ed1]",
    section3Title: "Notebook",
    section3Text: "Magna Tristique Inceptos",
    leftContentAnimation:"",
    topRightContentAnimation:"",
    bottomRightContentAnimation:""
}

export default PortfolioV1