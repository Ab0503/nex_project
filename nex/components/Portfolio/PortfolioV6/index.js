import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'

const PortfolioV6 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-5 pb-5 md:mx-[20px] xl:mx-[25px]">
                <div className="flex flex-wrap mx-[15px] items-center mb-10">
                    <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:pr-40">
                        {get(props, 'title', "").length !== 0 && <h2 className={`text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.4rem] !leading-[1.6] font-medium mb-0 text-gray-600 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                    </div>
                    <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
                        {get(props, 'ctaText', "").length !== 0 && <button className={`text-gray-50 bg-[#3f78e0] border-[#3f78e0] hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-3 font-semibold ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                            <a href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</a>
                        </button>}
                    </div>
                </div>
                <div className="flex flex-wrap mx-[15px] md:mx-[20px] xl:mx-[25px]">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto]  max-w-full">
                        <div className={`rounded-xl overflow-hidden bg-[#f3f8f5] mb-10 lg:!mb-0 ${get(tailwindClasses,'section1Box')}`} style={get(style,'section1Box')}>
                            <div className="p-14 pb-0 max-sm:p-5">
                                {get(props, 'section1SubTitle', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[0.9rem] font-bold mb-3 text-[#7cb798] ${get(tailwindClasses, 'section1SubTitle')}`} style={get(style, 'section1SubTitle')}>{get(props, 'section1SubTitle')}</div>}
                                {get(props, 'section1Title', "").length !== 0 && <h3 className={`text-3xl !mb-3 !leading-[1.3] font-bold ${get(tailwindClasses, 'section1Title')}`} style={get(style, 'section1Title')}>{get(props, 'section1Title')}</h3>}
                                {get(props, 'section1Description', "").length !== 0 && <p className={`mb-3 text-lg text-gray-600 ${get(tailwindClasses, 'section1Description')}`} style={get(style, 'section1Description')}>{get(props, 'section1Description')}</p>}
                                {get(props, 'section1CtaText', "").length !== 0 && <button className={`text-[#7cb798] focus:text-[#a07cc5] hover:text-[#a07cc5] hover:underline font-bold text-lg mb-3 ${get(tailwindClasses, 'section1Cta')}`} style={get(style, 'section1Cta')}>
                                    <a className='flex items-center gap-1' href={get(props, 'sectionCtaLink')} >
                                        <span>{get(props, 'section1CtaText')}</span>
                                        <span>{parse(get(props, 'sectionCtaIcon'))}</span>
                                    </a>
                                </button>}
                            </div>
                            {get(props, 'section1Image', "").length !== 0 && <NexImage className={`!relative ${get(tailwindClasses, 'section1Image')}`} style={get(style, 'section1Image')} src={get(props, 'section1Image')} alt="image" />}
                        </div>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:pl-[25px] lg:pl-[20px] max-sm:pl-0 max-w-full">
                        <div className={`rounded-xl overflow-hidden bg-[#fbf1f4] mb-10 lg:!mb-0 ${get(tailwindClasses,'section2Box')}`} style={get(style,'section2Box')}>
                            <div className="p-14 pb-0 max-sm:p-5">
                                {get(props, 'section2SubTitle', "").length !== 0 && <div className={`uppercase tracking-[0.02rem] text-[0.9rem] font-bold mb-3 text-[#d16b86] ${get(tailwindClasses, 'section2SubTitle')}`} style={get(style, 'section2SubTitle')}>{get(props, 'section2SubTitle')}</div>}
                                {get(props, 'section2Title', "").length !== 0 && <h3 className={`text-3xl !mb-3 !leading-[1.3] font-bold ${get(tailwindClasses, 'section2Title')}`} style={get(style, 'section2Title')}>{get(props, 'section2Title')}</h3>}
                                {get(props, 'section2Description', "").length !== 0 && <p className={`mb-3 text-lg text-gray-600 ${get(tailwindClasses, 'section2Description')}`} style={get(style, 'section2Description')}>{get(props, 'section2Description')}</p>}
                                {get(props, 'section2CtaText', "").length !== 0 && <button className={`text-[#d16b86] focus:text-[#d16b86] hover:text-[#d16b86] hover:underline font-bold text-lg mb-3 ${get(tailwindClasses, 'section2Cta')}`} style={get(style, 'section2Cta')}>
                                    <a className='flex items-center gap-1' href={get(props, 'sectionCtaLink')} >
                                        <span>{get(props, 'section2CtaText')}</span>
                                        <span>{parse(get(props, 'sectionCtaIcon'))}</span>
                                    </a>
                                </button>}
                            </div>
                            {get(props, 'section2Image', "").length !== 0 && <NexImage className={`!relative ${get(tailwindClasses, 'section2Image')}`} style={get(style, 'section2Image')} src={get(props, 'section2Image')} alt="image" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

PortfolioV6.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    ctaLink: string,
    ctaText: string,
    sectionImage: string,
    sectionSubTitle: string,
    sectionTitle: string,
    sectionDescription: string,
    sectionCtaLink: string,
    sectionCtaText: string,
    sectionCtaIcon: string,
}

PortfolioV6.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        cta: {},
        section1Box: {},
        section1SubTitle: {},
        section1Title: {},
        section1Description: {},
        section1Cta: {},
        section1Image: {},
        section2Box: {},
        section2SubTitle: {},
        section2Title: {},
        section2Description: {},
        section2Cta: {},
        section2Image: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        subTitle: "",
        cta: "",
        section1Box: "",
        section1SubTitle: "",
        section1Title: "",
        section1Description: "",
        section1Cta: "",
        section1Image: "",
        section2Box: "",
        section2SubTitle: "",
        section2Title: "",
        section2Description: "",
        section2Cta: "",
        section2Image: ""
    },
    title: "Latest Projects",
    subTitle: "Check out some of my latest projects with creative ideas.",
    ctaLink: "#",
    ctaText: "See All Projects",
    section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736489664.f4.png",
    section1SubTitle: "Web Design",
    section1Title: "Missio Theme",
    section1Description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    section1CtaLink: "#",
    section1CtaText: "See Project",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736489664.f4.png",
    section2SubTitle: "Mobile Design",
    section2Title: "Storage App",
    section2Description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    section2CtaLink: "#",
    section2CtaText: "See Project",
    sectionCtaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
}

export default PortfolioV6