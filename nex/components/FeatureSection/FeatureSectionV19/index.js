import parse from 'html-react-parser/lib/index';
import get from 'lodash.get';
import React from 'react';
import { PropTypes, object, arrayOf } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';


const FeatureSectionV19 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`mx-48 max-sm:mx-0 max-xl:mx-24 max-lg:mx-0 max-md:mx-10 p-10 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className='container grid grid-cols-2 max-md:grid-cols-1 gap-4'>
                    <div className='relative flex items-center justify-center'>
                        {get(props, 'videoUrl',"").length !==0 && <video autoPlay loop muted className={`${get(tailwindClasses, 'video')}`} style={get(style, 'video')} controls src={get(props, 'videoUrl')}></video>}
                        {get(props, 'topImage',"").length !== 0 &&<div className='absolute max-xl:top-24 max-xl:-left-8 top-5 -left-8 max-md:top-3 max-md:left-3 max-sm:-top-8 max-sm:-left-4 '><NexImage className={`!relative !h-32 !max-sm:h-24 w-auto rounded-lg ${get(tailwindClasses, 'topImage')}`} style={get(style, 'topImage')} src={get(props, 'topImage')} alt="" /></div> }
                        {get(props, 'bottomImage',"").length !== 0 && <div className='absolute bottom-5 right-0 max-xl:bottom-24 max-xl:right-0 max-md:bottom-3 max-md:right-3 max-sm:-bottom-10 max-sm:right-0 border-none'><NexImage className={`!relative !h-32 !max-sm:h-24 w-auto  rounded-lg ${get(tailwindClasses, 'bottomImage')}`} style={get(style, 'bottomImage')} src={get(props, 'bottomImage')} alt="" /></div>}
                    </div>
                    <div className={`${get(tailwindClasses, 'textContainer')}`} style={get(style, 'textContainer')}>
                        {get(props, 'subTitle',"").length !== 0 && <h1 className={`text-sm text-green-900 m-3 mt-8 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                        {get(props, 'title',"").length !==0 && <h1 className={`text-4xl font-bold m-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                        {get(props, 'description',"").length !== 0 && <p className={`text-sm font-light m-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        <div className='flex m-3'>
                            <div className='flex items-center'>
                                {get(props, 'icon1',"").length !==0 && <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon1'))}</span>}
                                <div>
                                    {get(props, 'icon1Title',"").length !==0 && <h1 className={`font-semibold ${get(tailwindClasses, 'iconTitle')}`} style={get(style, 'iconTitle')}>{get(props, 'icon1Title')}</h1>}
                                    {get(props, 'icon1Description',"").length !==0 && <p className={`text-xs font-light ${get(tailwindClasses, 'iconDescription')}`} style={get(style, 'iconDescription')}>{get(props, 'icon1Description')}</p>}
                                </div>
                            </div>
                            <div className='flex items-center'>
                                {get(props, 'icon2',"").length !==0 && <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon2'))}</span>}
                                <div>
                                    {get(props, 'icon2Title',"").length !==0 && <h1 className={`font-semibold ${get(tailwindClasses, 'iconTitle')}`} style={get(style, 'iconTitle')}>{get(props, 'icon2Title')}</h1>}
                                    {get(props, 'icon2Description',"").length !==0 && <p className={`text-xs font-light ${get(tailwindClasses, 'iconDescription')}`} style={get(style, 'iconDescription')}>{get(props, 'icon2Description')}</p>}
                                </div>
                            </div>
                        </div>
                        {get(props,'items',[]).map((item) => <div className='my-2 mx-5'>
                            {get(item, 'text').length !==0 && <div className='flex items-center gap-2'>
                                {get(item, 'icon',"").length !==0 && <span className={`${get(tailwindClasses, "tickIcon")}`} style={get(style, 'tickIcon')}>{parse(get(item, 'icon'))}</span>}
                                <p className={`text-sm ${get(tailwindClasses, 'tickIconText')}`} style={get(style, 'tickIconText')}>{get(item, 'text')}</p>
                            </div>}
                        </div>)}
                        <div className='flex justify-between m-3'>
                            {get(props, 'ctaText',"").length !== 0 && <button className={`text-xs bg-yellow-400 hover:bg-yellow-600 text-black px-5 py-2 rounded-full ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</a></button>}
                            <div>
                                {get(props, 'phoneNumber',"").length !== 0 && <div className='flex items-center gap-2'>
                                    <span className={`${get(tailwindClasses, 'phoneIcon')}`}>{parse(get(props, 'phoneIcon'))}</span>
                                    <div className='flex flex-col'>
                                        <span className={`font-light text-xs text-gray-400 ${get(tailwindClasses, 'phoneText')}`} style={get(style, 'phoneText')}>{get(props, 'phoneText')}</span>
                                        <span className={`font-semibold text-sm ${get(tailwindClasses, 'phoneNumber')}`} style={get(style, 'phoneNumber')}>{get(props, 'phoneNumber')}</span>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

FeatureSectionV19.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        video: {},
        topImage: {},
        bottomImage: {},
        textContainer: {},
        subTitle: {},
        title: {},
        description: {},
        icon: {},
        iconTitle: {},
        iconDescription: {},
        tickIcon: {},
        tickIconText: {},
        cta: {},
        phoneIcon: {},
        phoneText: {},
        phoneNumber: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        video: "",
        topImage: "",
        bottomImage: "",
        textContainer: "",
        subTitle: "",
        title: "",
        description: "",
        icon: "",
        iconTitle: "",
        iconDescription: "",
        tickIcon: "",
        tickIconText: "",
        cta: "",
        phoneIcon: "",
        phoneText: "",
        phoneNumber: ""
    },
    topImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    videoUrl: "https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
    bottomImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    subTitle: "Start Donating Poor People",
    title: "Helping each other can make world better",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" /></svg>`,
    icon1Title: "Start helping them",
    icon1Description: "Raising awareness about the charity's mission and cause",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
    icon2Title: "Start helping them",
    icon2Description: "Raising awareness about the charity's mission and cause",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate provident beatae, repellendus quibusdam voluptatem non, molestias nemo ea placeat totam iure expedita veritatis sit ullam facere veniam error. Unde.",
    ctaText: "More about Us",
    ctaLink: "#",
    phoneIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
    phoneText: "Phone",
    phoneNumber: "9999999999",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ]
}
FeatureSectionV19.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    topImage: PropTypes.string,
    videoUrl: PropTypes.string,
    bottomImage: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    icon1: PropTypes.string,
    icon1Title: PropTypes.string,
    icon1Description: PropTypes.string,
    icon2: PropTypes.string,
    icon2Title: PropTypes.string,
    icon2Description: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    phoneIcon: PropTypes.string,
    phoneText: PropTypes.string,
    phoneNumber: PropTypes.string,
    items: arrayOf(object)
}

export default FeatureSectionV19
