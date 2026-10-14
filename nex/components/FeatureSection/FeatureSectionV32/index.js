import NexAnimation from '@nex-components/NexAnimation'
import NexImage from '@nex-core-ui/NexImage'
import parse from 'html-react-parser'
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types'
import React from 'react'

const FeatureSectionV32 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className="flex flex-wrap mx-[15px] !text-center">
                    <div className="lg:w-[68.67%] xl:w-6/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                        <NexAnimation type={get(props, 'topContentAnimation')}>
                            {get(props, 'image1', "").length !== 0 && <NexImage src={get(props, 'image1')} className={`!h-[3rem] absolute hidden xl:block lg:block ${get(tailwindClasses, 'image1')}`} style={{ top: "-45%", left: "-23%", ...get(style, 'image1') }} alt="image" />}
                            {get(props, 'image2', "").length !== 0 && <NexImage src={get(props, 'image2')} className={`!h-8 absolute hidden xl:block lg:block ${get(tailwindClasses, 'image2')}`} style={{ top: "6% ", left: "48%", ...get(style, 'image2') }} alt="image" />}
                            {get(props, 'subtitle', "").length !== 0 && <h2 className={`text-[1rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subtitle')}</h2>}
                            {get(props, 'title1', "").length !== 0 && <h3 className={`text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] mb-12 lg:!px-5 xl:!px-0 xxl:!px-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <span className="text-transparent bg-gradient-to-r from-[#605dba] to-[#3f78e0] bg-clip-text">{get(props, 'title2')}</span> {get(props, 'title3')}</h3>}
                        </NexAnimation>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[15px]">
                    <div className="xxl:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[15px] xl:mx-[20px] lg:mx-[20px] md:mx-[20px] mt-[-50px] !text-center">
                            {get(props, 'items', []).map((item) => <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <NexAnimation type={get(props, 'bottomContentAnimation')}>
                                    {get(item, 'icon', "").length !== 0 && <div className={`${get(item, 'bgColor')} !rounded-[0.8rem] mb-4 ${get(props, 'iconColor')} inline-flex p-3 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                        {parse(get(item, 'icon'))}
                                    </div>}
                                    {get(item, 'text', "").length !== 0 && <h4 className={`text-[1.2rem] font-bold ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</h4>}
                                </NexAnimation>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

FeatureSectionV32.propTypes = {
    style: object,
    tailwindClasses: object,
    image1: string,
    image2: string,
    subtitle: string,
    title1: string,
    title2: string,
    title3: string,
    iconColor: string,
    items: arrayOf(object)
}
FeatureSectionV32.defaultProps = {
    style: {
        container: {},
        image1: {},
        image2: {},
        subTitle: {},
        title: {},
        icon: {},
        text: {}
    },
    tailwindClasses: {
        container: "",
        image1: "",
        image2: "",
        subTitle: "",
        title: "",
        icon: "",
        text: ""
    },
    image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736166531.doodle3.svg",
    image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736166598.doodle4.svg",
    subtitle: "App Features",
    title1: "Sandbox makes your spending",
    title2: "stress-free",
    title3: "for you to have the perfect control.",
    iconColor: "text-[#343f52]",
    topContentAnimation: "",
    bottomContentAnimation: "",
    items: [
        {
            bgColor: "bg-[#fef3e4]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z" clip-rule="evenodd" /></svg>`,
            text: "Always up to Date",
        },
        {
            bgColor: "bg-[#e1f6f0]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" /></svg>`,
            text: "Easy Usage",
        },
        {
            bgColor: "bg-[#e9eaf8]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" /></svg>`,
            text: "Secure Payments",
        },
        {
            bgColor: "bg-[#f8e7ec]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" /><path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" /></svg>`,
            text: "Fast Transactions",
        },
        {
            bgColor: "bg-[#f0eaf6]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" /></svg>`,
            text: "Reports & Forecasting",
        },
        {
            bgColor: "bg-[#feece9]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`,
            text: "Online Banking",
        },
        {
            bgColor: "bg-[#e0e9fa]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" /></svg>`,
            text: "Configurable Fields",
        },
        {
            bgColor: "bg-[#eaf3ef]",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" /></svg>`,
            text: "List of Transactions",
        },
    ]
}
export default FeatureSectionV32
