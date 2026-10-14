import React, { useState } from "react";
import get from "lodash.get";
import parse from "html-react-parser";
import NexImage from "@nex-core-ui/NexImage";
import { arrayOf, object, string } from "prop-types";
import NexAnimation from "@nex-components/NexAnimation";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const FeatureSectionV37 = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="xl:mx-20 lg:mx-10">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                        <NexAnimation type={get(props, 'topContentAnimation')}>
                            {get(props, 'subTitle', "").length !== 0 && <h2 className={`text-[.9rem] uppercase nx-text-primary !mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                            {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2rem] !leading-[1.3] mb-10 xl:!px-10 xxl:!px-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        </NexAnimation>
                    </div>
                </div>
                <ul className="flex justify-between xl:flex-row lg:flex-row flex-col text-left">
                    {get(props, 'items', []).map((item, index) =>
                        <NexAnimation type={get(props, 'topCenterContentAnimation')}>
                            <li key={index} onClick={() => handleTabClick(index)} className={`relative mb-[20px] px-5 py-6 ${activeTab === index ? "border !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]" : ""} rounded-xl xl:mr-9 lg:mr-9 mx-5 hover:translate-y-[-0.15rem] ${get(item, 'sectionBgColor')} ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}> <div className="!flex flex-row">
                                {get(item, 'icon', "").length !== 0 && <div className={`${get(item, 'iconColor')} !mr-4 inline-flex ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>
                                    {parse(get(item, 'icon'))}
                                </div>}
                                <div>
                                    {get(item, 'title', "").length !== 0 && <h4 className={`nx-section-heading-font text-xl font-semibold mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>}
                                    {get(item, 'text', "").length !== 0 && <p className={`mb-3 text-[1.125rem] text-gray-600 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text')}</p>}
                                </div>
                            </div>
                            {activeTab === index &&(<ArrowDownIcon className="absolute size-8 p-1 animate-fade-down animate-iteration-infinite -bottom-10 nx-btn-primary rounded-full left-1/2 -translate-x-1/2"/>)}
                            </li>
                        </NexAnimation>)}
                </ul>
                <div className="tab-content mt-6 xl:!mt-8 lg:!mt-8">
                    {get(props, 'itemsDetail', []).map((itemD, index) => {
                        if (activeTab === index) {
                            return (
                                <div key={index} className="tab-pane fade show active" id={`tab-${index}`}>
                                    <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'detailsContentContainer')}`} style={get(style, 'detailsContentContainer')}>
                                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                                            <NexAnimation type={get(props, 'bottomLeftContentAnimation')}>
                                                <div className="flex flex-wrap mx-[-12.5px] mt-[-25px] items-center">
                                                    <div className="w-6/12 flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                                        {get(itemD, 'image1', "").length !== 0 && <NexImage
                                                            className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex ml-auto ${get(tailwindClasses, 'detailImage1')}`} style={get(style, 'detailImage1')}
                                                            src={get(itemD, 'image1')}
                                                            alt="image"
                                                        />}
                                                    </div>
                                                    <div className="w-6/12 flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                                                        {get(itemD, 'image2', "").length !== 0 && <NexImage
                                                            className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mb-5 ${get(tailwindClasses, 'detailImage2')}`} style={get(style, 'detailImage2')}
                                                            src={get(itemD, 'image2')}
                                                            alt="image"
                                                        />}
                                                        {get(itemD, 'image3', "").length !== 0 && <NexImage
                                                            className={`!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] flex !w-10/12 flex-[0_0_auto ${get(tailwindClasses, 'detailImage3')}`} style={get(style, 'detailImage3')}
                                                            src={get(itemD, 'image3')}
                                                            alt="image"
                                                        />}
                                                    </div>
                                                </div>
                                            </NexAnimation>
                                        </div>
                                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                                            <NexAnimation type={get(props, 'bottomRightContentAnimation')}>
                                                {get(itemD, 'title', "").length !== 0 && <h2 className={`!mb-3 !leading-[1.35] text-3xl font-bold ${get(tailwindClasses, 'detailTitle')}`} style={get(style, 'detailTitle')}>{get(itemD, 'title')}</h2>}
                                                {get(itemD, 'description', "").length !== 0 && <p className={`mb-3 text-[1rem] text-gray-600 ${get(tailwindClasses, 'detailDescription')}`} style={get(style, 'detailDescription')}>{get(itemD, 'description')}</p>}
                                                <ul className="pl-0 list-none">
                                                    {get(itemD, 'text1', "").length !== 0 && <li className={`relative pl-6 text-[1rem] text-gray-600 ${get(tailwindClasses, 'detailText')}`} style={get(style, 'detailText')}>
                                                        <span className={`absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center ${get(itemD, 'checkIconBgColor')} ${get(itemD, 'checkIconColor')} rounded-[100%] top-[0.2rem] ${get(tailwindClasses, 'detailIcon')}`} style={get(style, 'detailIcon')}>{parse(get(props, 'checkIcon'))}</span>
                                                        {get(itemD, 'text1')}
                                                    </li>}
                                                    {get(itemD, 'text2', "").length !== 0 && <li className={`relative pl-6 mt-[.35rem] text-[1rem] text-gray-600 ${get(tailwindClasses, 'detailText')}`} style={get(style, 'detailText')}>
                                                        <span className={`absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center ${get(itemD, 'checkIconBgColor')} ${get(itemD, 'checkIconColor')} rounded-[100%] top-[0.2rem] ${get(tailwindClasses, 'detailIcon')}`} style={get(style, 'detailIcon')}>{parse(get(props, 'checkIcon'))}</span>
                                                        {get(itemD, 'text2')}
                                                    </li>}
                                                    {get(itemD, 'text3', "").length !== 0 && <li className={`relative pl-6 mt-[.35rem] text-[1rem] text-gray-600 ${get(tailwindClasses, 'detailText')}`} style={get(style, 'detailText')}>
                                                        <span className={`absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center ${get(itemD, 'checkIconBgColor')} ${get(itemD, 'checkIconColor')} rounded-[100%] top-[0.2rem] ${get(tailwindClasses, 'detailIcon')}`} style={get(style, 'detailIcon')}>{parse(get(props, 'checkIcon'))}</span>
                                                        {get(itemD, 'text3')}
                                                    </li>}
                                                </ul>
                                                {get(itemD, 'ctaText', "").length !== 0 && <button className={`text-gray-50 focus:shadow-[rgba(92,140,229,1)] !mt-3 px-5 py-3 rounded-xl hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] font-bold ${get(tailwindClasses, 'cta')}`} style={{ backgroundColor: `${get(itemD, 'ctaColor')}`, ...get(style, 'cta') }}><PrimaryLink href={get(itemD, 'ctaLink')}>
                                                    {get(itemD, 'ctaText')}
                                                </PrimaryLink>
                                                </button>}
                                            </NexAnimation>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

FeatureSectionV37.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    checkIcon: string,
    items: arrayOf(object),
    itemsDetail: arrayOf(object)
}

FeatureSectionV37.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionIcon: {},
        sectionTitle: {},
        sectionText: {},
        detailsContentContainer: {},
        detailImage1: {},
        detailImage2: {},
        detailImage3: {},
        detailTitle: {},
        detailDescription: {},
        detailText: {},
        detailIcon: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionIcon: "",
        sectionTitle: "",
        sectionText: "",
        detailsContentContainer: "",
        detailImage1: "",
        detailImage2: "",
        detailImage3: "",
        detailTitle: "",
        detailDescription: "",
        detailText: "",
        detailIcon: "",
        cta: ""
    },
    subTitle: "Why Choose Sandbox?",
    title: "Here are a few reasons why our customers choose Sandbox.",
    checkIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>`,
    topContentAnimation:"",
    topCenterContentAnimation:"",
    bottomLeftContentAnimation:"",
    bottomRightContentAnimation:"",
    items: [
        {
            sectionBgColor: "bg-gray-50",
            iconColor: "text-[#fab758]",
            sectionLink: "#",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" /><path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" /></svg>`,
            title: "Easy Usage",
            text: "Duis mollis commodo luctus cursus commodo tortor mauris.",
        },
        {
            sectionBgColor: "bg-gray-50",
            iconColor: "text-[#45c4a0]",
            sectionLink: "#",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" /></svg>`,
            title: "Fast Transactions",
            text: "Vivamus sagittis lacus augue fusce dapibus tellus nibh.",
        },
        {
            sectionBgColor: "bg-gray-50",
            iconColor: "text-[#e2626b]",
            sectionLink: "#",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            title: "Secure Payments",
            text: "Vestibulum ligula porta felis maecenas faucibus mollis.",
        },
    ],

    itemsDetail: [
        {
            image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317166.sa13.jpg",
            image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317199.sa14.jpg",
            image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317227.sa15.jpg",
            title: "Easy Usage",
            description: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.",
            checkIconColor: "text-[#fab758]",
            checkIconBgColor: "bg-[#feeed9]",
            text1: "Aenean eu leo quam. Pellentesque ornare.",
            text2: "Nullam quis risus eget urna mollis ornare.",
            text3: "Donec id elit non mi porta gravida at eget.",
            ctaColor: "rgb(250 183 88)",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317166.sa13.jpg",
            image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317199.sa14.jpg",
            image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317227.sa15.jpg",
            title: "Fast Transactions",
            description: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.",
            checkIconColor: "text-[#45c4a0]",
            checkIconBgColor: "bg-[#def4ee]",
            text1: "Aenean eu leo quam. Pellentesque ornare.",
            text2: "Nullam quis risus eget urna mollis ornare.",
            text3: "Donec id elit non mi porta gravida at eget.",
            ctaColor: "rgb(69 196 160)",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317166.sa13.jpg",
            image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317199.sa14.jpg",
            image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736317227.sa15.jpg",
            title: "Secure Payments",
            description: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.",
            checkIconColor: "text-[#e2626b]",
            checkIconBgColor: "bg-[#fae3e4]",
            text1: "Aenean eu leo quam. Pellentesque ornare.",
            text2: "Nullam quis risus eget urna mollis ornare.",
            text3: "Donec id elit non mi porta gravida at eget.",
            ctaColor: "rgb(226 98 107)",
            ctaLink: "#",
            ctaText: "Learn More"
        }
    ]
}
export default FeatureSectionV37;
