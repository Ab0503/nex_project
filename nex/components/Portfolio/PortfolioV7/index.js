import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'

const PortfolioV7 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="xl:mx-20">
                {(get(props, 'subTitle', "").length !== 0 || get(props, 'title1').length !==0 )&&<div className="flex flex-wrap mx-[15px] !text-center">
                    <div className="xl:w-10/12 lg:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-14">
                        {get(props, 'subTitle', "").length !== 0 && <h2 className={`text-[0.8rem] tracking-[0.02rem] uppercase nx-text-primary !mb-3 !leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title1', "").length !== 0 && (
                            <h3 className={`nx-section-heading-font text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] xl:text-[2.2rem] tracking-[-0.03em] ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                                {get(props, 'title1')}{" "}
                                <span className="!relative z-[1] style-1">
                                    <div className="absolute -rotate-1 -translate-x-2/4 -translate-y-2/4 nx-border-primary border-[3px] border-solid border-t-0 opacity-100 rounded-[80%] top-[52%] left-2/4 w-[111%] h-[110%] z-[-1] max-md:hidden" />
                                    <em>{get(props, 'title2')}</em>
                                    <div className="absolute -rotate-2 -translate-x-2/4 -translate-y-2/4 bg-bottom bg-no-repeat block nx-border-primary border-[3px] border-solid border-b-0 border-l-0 opacity-100 rounded-[80%] top-[52%] left-2/4 w-[107%] h-[111%] z-[-1] max-md:hidden" />
                                </span>{" "}
                                {get(props, 'title3')}
                            </h3>
                        )}

                    </div>
                </div>}
                <div className="flex flex-wrap mx-[15px] mt-[-50px] items-center mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
                    <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px]">
                        <div className={`rounded-xl nx-bg-primary-light ${get(tailwindClasses, 'section1Box')}`} style={get(style, 'section1Box')}>
                            <div className="!px-9 py-0 overflow-hidden">
                                <div className="flex flex-wrap mx-[10px] xl:mx-[22.5px] lg:mx-[22.5px] md:mx-[22.5px]">
                                    <div className="w-6/12 flex-[0_0_auto] px-[10px] xl:px-[22.5px] lg:px-[22.5px] md:px-[22.5px] max-w-full">
                                        {get(props, 'section1Image1', "").length !== 0 && <figure className="mt-9"><PrimaryLink href={get(props, 'section1Image1Link')}><NexImage className={`!relative shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-t-[0.4rem] ${get(tailwindClasses, 'section1Image1')}`} style={get(style, 'section1Image1')} src={get(props, 'section1Image1')} alt="image" /></PrimaryLink></figure>}
                                    </div>
                                    <div className="w-6/12 flex-[0_0_auto] px-[10px] xl:px-[22.5px] lg:px-[22.5px] md:px-[22.5px] max-w-full">
                                        {get(props, 'section1Image2', "").length !== 0 && <figure><PrimaryLink href={get(props, 'section1Image2Link')}><NexImage className={`!relative shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-br-[0.4rem] rounded-bl-[0.4rem] ${get(tailwindClasses, 'section1Image2')}`} style={get(style, 'section1Image2')} src={get(props, 'section1Image2')} alt="image" /></PrimaryLink></figure>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto mt-[50px]">
                        {get(props, 'section1Title', "").length !== 0 && <h3 className={`text-3xl font-bold tracking-[-0.03em] mb-2 !leading-[1.3] nx-section-heading-font ${get(tailwindClasses, 'section1Title')}`} style={get(style, 'section1Title')}>{get(props, 'section1Title')}</h3>}
                        {get(props, 'section1SubTitle', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[0.9rem] font-bold nx-text-primary mb-4 ${get(tailwindClasses, 'section1SubTitle')}`} style={get(style, 'section1SubTitle')}>
                            <span>{get(props, 'section1SubTitle')}</span>
                        </div>}
                        {get(props, 'section1Description', "").length !== 0 && <p className={`!mb-6 text-gray-600 ${get(tailwindClasses, 'section1Description')}`} style={get(style, 'section1Description')}>{get(props, 'section1Description')}</p>}
                        {get(props, 'section1CtaText', "").length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] hover:translate-y-[-0.15rem] font-bold rounded-lg px-5 py-3 ${get(tailwindClasses, 'section1Cta')}`} style={get(style, 'section1Cta')}>
                            <PrimaryLink href={get(props, 'section1CtaLink')}>{get(props, 'section1CtaText')}</PrimaryLink>
                        </button>}
                    </div>
                </div>
                <div className="flex flex-wrap mx-[15px] mt-[-50px] items-center">
                    <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 mt-[50px]">
                        <div className={`rounded-xl nx-bg-primary-light ${get(tailwindClasses, 'section2Box')}`} style={get(style, 'section2Box')}>
                            <div className="!p-12 overflow-hidden">
                                {get(props, 'section2Image', "").length !== 0 && <figure><PrimaryLink href={get(props, 'section2ImageLink')}><NexImage className={`!relative ${get(tailwindClasses, 'section2Image')}`} style={get(style, 'section2Image')} src={get(props, 'section2Image')} alt="image" /></PrimaryLink></figure>}
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mr-auto mt-[50px]">
                        {get(props, 'section2Title', "").length !== 0 && <h3 className={`nx-section-heading-font text-3xl font-bold tracking-[-0.03em] mb-2 !leading-[1.3] ${get(tailwindClasses, 'section2Title')}`} style={get(style, 'section2Title')}>{get(props, 'section2Title')}</h3>}
                        {get(props, 'section2SubTitle', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[0.9rem] font-bold nx-text-primary mb-4 ${get(tailwindClasses, 'section2SubTitle')}`} style={get(style, 'section2SubTitle')}>
                            <span>{get(props, 'section2SubTitle')}</span>
                        </div>}
                        {get(props, 'section2Description', "").length !== 0 && <p className={`!mb-6 text-gray-600 ${get(tailwindClasses, 'section2Description')}`} style={get(style, 'section2Description')}>{get(props, 'section2Description')}</p>}
                        {get(props, 'section2CtaText', "").length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] hover:translate-y-[-0.15rem] font-bold rounded-lg px-5 py-3 ${get(tailwindClasses, 'section2Cta')}`} style={get(style, 'section2Cta')}>
                            <PrimaryLink href={get(props, 'section2CtaLink')}>{get(props, 'section2CtaText')}</PrimaryLink>
                        </button>}
                    </div>
                </div>
            </div>
        </section>
    )
}

PortfolioV7.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title1: string,
    title2: string,
    title3: string,
    section1Image1: string,
    section1Image1Link: string,
    section1Image2: string,
    section1Image2Link: string,
    section1Title: string,
    section1SubTitle: string,
    section1Description: string,
    section1CtaLink: string,
    section1CtaText: string,
    section2Image: string,
    section2ImageLink: string,
    section2Title: string,
    section2SubTitle: string,
    section2Description: string,
    section2CtaLink: string,
    section2CtaText: string,
}

PortfolioV7.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        section1Box: {},
        section1Image1: {},
        section1Image2: {},
        section1Title: {},
        section1SubTitle: {},
        section1Description: {},
        section1Cta: {},
        section2Box: {},
        section2Image: {},
        section2Title: {},
        section2SubTitle: {},
        section2Description: {},
        section2Cta: {},
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        section1Box: "",
        section1Image1: "",
        section1Image2: "",
        section1Title: "",
        section1SubTitle: "",
        section1Description: "",
        section1Cta: "",
        section2Box: "",
        section2Image: "",
        section2Title: "",
        section2SubTitle: "",
        section2Description: "",
        section2Cta: "",
    },
    subTitle: "Latest Projects",
    title1: "Check out some of our",
    title2: "awesome",
    title3: "projects with creative ideas and great design.",
    section1Image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736502147.d18.jpg",
    section1Image1Link: "#",
    section1Image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736502188.d18-2.jpg",
    section1Image2Link: "#",
    section1Title: "Wiretree Network Company",
    section1SubTitle: "Dashboard, Web Development",
    section1Description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.",
    section1CtaLink: "#",
    section1CtaText: "See Project",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736502351.f2.png",
    section2ImageLink: "#",
    section2Title: "Alphine Finance",
    section2SubTitle: "Branding, Web Design",
    section2Description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus. Donec sed odio dui. Vivamus sagittis lacus vel.",
    section2CtaLink: "#",
    section2CtaText: "See Project",
}
export default PortfolioV7
