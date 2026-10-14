import React, { useState } from 'react'
import get from 'lodash.get'
import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage'
import parse from 'html-react-parser'
import { arrayOf, object, string } from 'prop-types';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const AboutV15 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})

    const [activeFilter, setActiveFilter] = useState(get(props, 'category[0].category', ''))

    const filteredItems = activeFilter ? get(props, 'items', []).filter(item => get(item, 'title') === activeFilter) : get(props, 'items', [])

    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !mb-8 text-center">
                <NexAnimation type={get(props, 'topContentAnimation')}>
                    {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                        {get(props, 'title')}
                    </h2>}
                    {get(props, 'subTitle', "").length !== 0 && <p className={`nx-text-primary lead text-[1.05rem] leading-[1.6] font-medium mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                        {get(props, 'subTitle')}
                    </p>}
                </NexAnimation>
                <div className="!relative z-[5] filter mb-10 text-center">
                    <NexAnimation type={get(props, 'topContentAnimation')}>
                        <ul className="flex flex-wrap justify-between xl:mx-20 lg:mx-14 md:mx-10 p-0 list-none">
                            {get(props, 'category', []).map((item) => get(item, 'category', "").length !== 0 && <li onClick={() => setActiveFilter(get(item, 'category'))} className={`inline uppercase tracking-[0.02rem] text-sm font-bold cursor-pointer px-5 py-3 mb-3 ${activeFilter === get(item, 'category') && "nx-btn-primary nx-btn-primary:hover"} ${get(tailwindClasses, 'categoryText')}`} style={get(style, 'categoryText')}>
                                <button>
                                    {get(item, 'category')}
                                </button>
                            </li>)}
                        </ul>
                    </NexAnimation>
                </div>
            </div>
            {filteredItems.map((item) => <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px] !relative">
                    <NexAnimation type={get(props, 'leftContentAnimation')}>
                        {get(item, 'image', "").length !== 0 && <figure className="m-0 p-0"><NexImage className={`!relative !w-auto ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(item, 'image')} alt="image" /></figure>}
                    </NexAnimation>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
                    <NexAnimation type={get(props, 'rightContentAnimation')}>
                        {get(item, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h3>}
                        {get(item, 'description', "").length !== 0 && <p className={`!mb-5 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</p>}
                        <div className="flex flex-wrap mt-[-15px]">
                            <ul className="pl-0 list-none bullet-bg bullet-soft-leaf !mb-0">
                                <li className="relative pl-6">
                                    {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'icon'))}</span>}
                                    {get(item, 'text1', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text1')}</span>}
                                </li>
                                <li className="mt-3 relative pl-6">
                                    {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'icon'))}</span>}
                                    {get(item, 'text2', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text2')}</span>}
                                </li>
                                <li className="relative pl-6">
                                    {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'icon'))}</span>}
                                    {get(item, 'text3', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text3')}</span>}
                                </li>
                                <li className="mt-3 relative pl-6">
                                    {get(props, 'icon', "").length !== 0 && <span className={`leading-none tracking-[normal] text-center table nx-text-primary nx-bg-primary-light absolute rounded-[100%] left-0 top-[0.2rem] ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'icon'))}</span>}
                                    {get(item, 'text4', "").length !== 0 && <span className={`${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text4')}</span>}
                                </li>
                            </ul>
                            {get(item, 'ctaText', "").length !== 0 && <button className={`text-[0.75rem] font-medium nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] !mt-3 ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink></button>}
                        </div>
                    </NexAnimation>
                </div>
            </div>)}
        </section>
    )
}

AboutV15.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    icon: string,
    category: arrayOf(object),
    items: arrayOf(object)
}

AboutV15.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        categoryText: {},
        contentContainer: {},
        sectionImage: {},
        sectionTitle: {},
        sectionDescription: {},
        sectionIcon: {},
        sectionText: {},
        sectionCta: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        subTitle: "",
        categoryText: "",
        contentContainer: "",
        sectionImage: "",
        sectionTitle: "",
        sectionDescription: "",
        sectionIcon: "",
        sectionText: "",
        sectionCta: "",
    },
    activeColor: "bg-red-400 text-white border-none",
    title: "About ABC",
    subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasply dummy texindustry’type.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
    topContentAnimation: "",
    leftContentAnimation: "",
    rightContentAnimation: "",
    category: [
        {
            category: "Who Are We"
        },
        {
            category: "Our Mission!"
        },
        {
            category: "Our Vision!"
        },
        {
            category: "Honor & Awards"
        },
    ],
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735221213.i14@2x.png",
            title: "Who Are We",
            description: "At ABC Events, we bring your visions to life with creativity, precision, and passion. Founded in 2012, we specialize in curating memorable experiences tailored to your unique needs. From corporate gatherings to private celebrations, our dedicated team ensures every event is seamless, stunning, and unforgettable. With over a decade of experience, we pride ourselves on transforming ordinary moments into extraordinary memories.",
            text1: "With over a decade in the industry, we’ve successfully managed events of all sizes, ensuring every detail is meticulously planned and executed.",
            text2: "We believe every event is unique. Our personalized approach ensures your ideas and goals are at the heart of every decision we make.",
            text3: "From innovative designs to unique themes, our creative team ensures every event stands out with flair and elegance.",
            text4: "Our highly skilled and passionate team works tirelessly to deliver exceptional results, making your event stress-free and enjoyable.",
            ctaLink: "#",
            ctaText: "Read more"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735221213.i14@2x.png",
            title: "Our Mission!",
            description: "At ABC Event Management, we aim to create unforgettable experiences by bringing ideas to life with passion, creativity, and precision. We strive to transform every occasion into a seamless and extraordinary celebration that resonates with your vision and exceeds your expectations.",
            text1: "We prioritize understanding your unique needs and goals, ensuring every detail aligns perfectly with your vision.",
            text2: "Our team of innovative professionals crafts exceptional designs and concepts to deliver experiences that stand out.",
            text3: "With meticulous planning and expert coordination, we ensure every event runs smoothly from start to finish.",
            text4: "We are committed to environmentally responsible practices, incorporating eco-friendly solutions to create events that are memorable and mindful of the planet.",
            ctaLink: "#",
            ctaText: "Read more"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735221213.i14@2x.png",
            title: "Our Vision!",
            description: "At ABC, our vision is to create unforgettable experiences that bring people together, foster connections, and celebrate life’s most cherished moments. We strive to be the go-to event management company, blending creativity, innovation, and excellence to deliver seamless and memorable events tailored to our clients' needs.",
            text1: "We focus on understanding your unique vision and turning it into reality, ensuring every detail reflects your personality and preferences.",
            text2: "Our team embraces out-of-the-box thinking and cutting-edge technology to design events that inspire and captivate.",
            text3: "From meticulous planning to seamless on-site coordination, we ensure every event runs smoothly and leaves a lasting impression.",
            text4: "We are committed to hosting eco-friendly events, minimizing waste, and supporting local communities to make a positive impact.",
            ctaLink: "#",
            ctaText: "Read more"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735221213.i14@2x.png",
            title: "Honor & Awards",
            description: "At ABC, excellence is our hallmark, and recognition is a testament to our unwavering commitment to delivering extraordinary event experiences. Over the years, our dedication to creativity, meticulous planning, and seamless execution has earned us prestigious accolades and awards. These honors reflect not only our expertise but also our passion for crafting moments that inspire and captivate.",
            text1: "Recognized for innovative event concepts that set trends and redefine the industry standard.",
            text2: "Honored for flawless event delivery, ensuring every detail exceeds client expectations.",
            text3: "Acknowledged for incorporating eco-friendly and sustainable solutions in our events.",
            text4: "Celebrated for exceptional client service and creating unforgettable guest experiences.",
            ctaLink: "#",
            ctaText: "Read more"
        },
    ]
}
export default AboutV15
