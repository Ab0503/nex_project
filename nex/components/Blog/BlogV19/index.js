import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser/lib/index';
import get from 'lodash.get'
import {PropTypes} from 'prop-types'
import React from 'react'
import withData from "@nex-core-ui/HOC/withData";

const BlogV19 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`py-10 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`mx-64  max-lg:mx-10 max-md:mx-32 max-xl:mx-24 max-sm:mx-8 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                {get(props, 'subTitle',"").length !== 0 && <h1 className={`text-sm text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title',"").length !== 0 && <h1 className={`text-4xl text-center font-bold mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                <div className='flex flex-col gap-5'>
                    {(get(props, 'section1Image',"").length !==0 || get(props, 'section1BadgeText',"").length !==0 || get(props, 'section1Title',"").length !==0 || get(props, 'section1Text1',"").length !==0 || get(props, 'section1Text2',"").length !==0 || get(props, 'section1CtaText',"").length !==0 || get(props, 'section1Title2',"").length !== 0 || get(props, 'section1SubTitle',"").length !== 0)&&<div className={`relative flex items-center max-md:flex-col justify-between bg-gray-200 rounded-lg shadow-xl ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        {get(props, 'section1Image',"").length !== 0 && <div>
                            <NexImage className={`!relative !w-64 max-md:w-full max-lg:h-64 max-sm:w-full rounded-lg ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section1Image')} alt="" />
                            {get(props, 'section1BadgeText',"").length !==0 && <p className={`absolute left-0 bottom-0 max-md:bottom-[340px] bg-emerald-900 text-gray-50 text-xs p-2 px-5 rounded-r-xl ${get(tailwindClasses, 'sectionBadgeText')}`} style={get(style, 'sectionBadgeText')}>{get(props, 'section1BadgeText')}</p>}
                        </div>}
                        <div className='py-5 flex flex-col items-center'>
                            {get(props, 'section1Title',"").length !==0 && <h1 className={`font-medium mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section1Title')}</h1>}
                            {get(props, 'section1Text1',"").length !==0 && <div className='flex items-center gap-2 mb-2'>
                                {get(props, 'section1Icon1',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section1Icon1'))}</span>}
                                <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section1Text1')}</p>
                            </div>}
                            {get(props, 'section1Text2').length !==0 && <div className='flex items-center gap-2 mb-6'>
                                {get(props, 'section1Icon2',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section1Icon2'))}</span>}
                                <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section1Text2')}</p>
                            </div>}
                            {get(props, 'section1CtaText',"").length !==0 && <button className={`bg-orange-500 text-gray-50 text-xs p-2 px-5 rounded-full ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><a href={get(props, 'section1CtaLink')}>{get(props, 'section1CtaText')}</a></button>}
                        </div>
                        <div className='bg-gray-50 p-4 px-10 rounded-lg max-md:w-full'>
                            {get(props, 'section1Title2',"").length !==0 && <h1 className={`text-orange-500 text-center font-medium bg-gray-200 p-5 mb-3 rounded-xl ${get(tailwindClasses, 'sectionTitle2')}`} style={get(style, 'sectionTitle2')}>{get(props, 'section1Title2')}</h1>}
                            {get(props, 'section1SubTitle',"").length !==0 && <p className={`text-orange-500 text-xs font-bold text-center mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section1SubTitle')}</p>}
                            <div className='flex justify-center'>
                                {get(props, 'section1Person1Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 ${get(tailwindClasses, 'sectionPersonImage')}`} style={get(style, 'sectionPerson1Image')} src={get(props, 'section1Person1Image')} alt="" />}
                                {get(props, 'section1Person2Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson2Image')}`} style={get(style, 'sectionPerson2Image')} src={get(props, 'section1Person2Image')} alt="" />}
                                {get(props, 'section1Person3Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson3Image')}`} style={get(style, 'sectionPerson3Image')} src={get(props, 'section1Person3Image')} alt="" />}
                                {get(props, 'section1Person4Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson4Image')}`} style={get(style, 'sectionPerson4Image')} src={get(props, 'section1Person4Image')} alt="" />}
                            </div>
                        </div>
                    </div>}
                    {(get(props, 'section2Image',"").length !==0 || get(props, 'section2BadgeText',"").length !==0 || get(props, 'section2Title',"").length !==0 || get(props, 'section2Text1',"").length !==0 || get(props, 'section2Text2',"").length !==0 || get(props, 'section2CtaText',"").length !==0 || get(props, 'section2Title2',"").length !== 0 || get(props, 'section2SubTitle',"").length !== 0) && <div className={`relative flex flex-row-reverse items-center max-md:flex-col justify-between bg-gray-200 rounded-lg shadow-xl ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        {get(props, 'section2Image',"").length !==0 && <NexImage className={`!relative !w-64 max-md:w-full max-lg:h-64 max-sm:w-full rounded-lg ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section2Image')} alt="" />}
                        {get(props, 'section2BadgeText',"").length !==0 && <p className={`absolute right-0 bottom-0 max-md:bottom-[340px] bg-emerald-900 text-gray-50 text-xs p-2 px-5 rounded-r-xl ${get(tailwindClasses, 'sectionBadgeText')}`} style={get(style, 'sectionBadgeText')}>{get(props, 'section2BadgeText')}</p>}
                        <div className='py-5 flex flex-col items-center'>
                            {get(props, 'section2Title',"").length !==0 && <h1 className={`font-medium mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section2Title')}</h1>}
                            {get(props, 'section2Text1',"").length !==0 && <div className='flex items-center gap-2 mb-2'>
                                {get(props, 'section2Icon1',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section2Icon1'))}</span>}
                                <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section2Text1')}</p>
                            </div>}
                            {get(props, 'section2Text2',"").length !==0 && <div className='flex items-center gap-2 mb-6'>
                                {get(props, 'section2Icon2',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section2Icon2'))}</span>}
                                <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section2Text2')}</p>
                            </div>}
                            {get(props, 'section2CtaText',"").length !==0 && <button className={`bg-orange-500 text-gray-50 text-xs p-2 px-5 rounded-full ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><a href={get(props, 'section2CtaLink')}>{get(props, 'section2CtaText')}</a></button>}
                        </div>
                        <div className='bg-gray-50 p-4 px-10 rounded-lg max-md:w-full'>
                            {get(props, 'section2Title2',"").length !==0 && <h1 className={`text-orange-500 text-center font-medium bg-gray-200 p-5 mb-3 rounded-xl ${get(tailwindClasses, 'sectionTitle2')}`} style={get(style, 'sectionTitle2')}>{get(props, 'section2Title2')}</h1>}
                            {get(props, 'section2SubTitle',"").length !==0 && <p className={`text-orange-500 text-xs font-bold text-center mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section2SubTitle')}</p>}
                            <div className='flex justify-center'>
                                {get(props, 'section2Person1Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 ${get(tailwindClasses, 'sectionPersonImage')}`} style={get(style, 'sectionPerson1Image')} src={get(props, 'section2Person1Image')} alt="" />}
                                {get(props, 'section2Person2Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson2Image')}`} style={get(style, 'sectionPerson2Image')} src={get(props, 'section2Person2Image')} alt="" />}
                                {get(props, 'section2Person3Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson3Image')}`} style={get(style, 'sectionPerson3Image')} src={get(props, 'section2Person3Image')} alt="" />}
                                {get(props, 'section2Person4Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson4Image')}`} style={get(style, 'sectionPerson4Image')} src={get(props, 'section2Person4Image')} alt="" />}
                            </div>
                        </div>
                    </div>}
                    {(get(props, 'section3Image',"").length !==0 || get(props, 'section3BadgeText',"").length !==0 || get(props, 'section3Title',"").length !==0 || get(props, 'section3Text1',"").length !==0 || get(props, 'section3Text2',"").length !==0 || get(props, 'section3CtaText',"").length !==0 || get(props, 'section3Title2',"").length !== 0 || get(props, 'section3SubTitle',"").length !== 0)&& <div className={`relative flex items-center max-md:flex-col justify-between bg-gray-200 rounded-lg shadow-xl ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        {get(props, 'section3Image',"").length !==0 && <NexImage className={`!w-64 max-md:w-full max-lg:h-64 max-sm:w-full rounded-lg !relative ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, 'section3Image')} alt="" />}
                        {get(props, 'section3BadgeText',"").length !==0 && <p className={`absolute left-0 bottom-0 max-md:bottom-[340px] bg-emerald-900 text-gray-50 text-xs p-2 px-5 rounded-r-xl ${get(tailwindClasses, 'sectionBadgeText')}`} style={get(style, 'sectionBadgeText')}>{get(props, 'section3BadgeText')}</p>}
                        <div className='py-5 flex flex-col items-center'>
                            {get(props, 'section3Title',"").length !==0 && <h1 className={`font-medium mb-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section3Title')}</h1>}
                            {get(props, 'section3Text1',"").length !==0 && <div className='flex items-center gap-2 mb-2'>
                                {get(props, 'section3Icon1',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section3Icon1'))}</span>}
                                <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section3Text1')}</p>
                            </div>}
                            {get(props, 'section3Text2',"").length !==0 && <div className='flex items-center gap-2 mb-6'>
                                {get(props, 'section3Icon2',"").length !==0 && <span className={`text-orange-500 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section3Icon2'))}</span>}
                                 <p className={`text-xs font-light text-gray-500 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section3Text2')}</p>
                            </div>}
                            {get(props, 'section3CtaText',"").length !==0 && <button className={`bg-orange-500 text-gray-50 text-xs p-2 px-5 rounded-full ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><a href={get(props, 'section3CtaLink')}>{get(props, 'section3CtaText')}</a></button>}
                        </div>
                        <div className='bg-gray-50 p-4 px-10 rounded-lg max-md:w-full'>
                            {get(props, 'section3Title2',"").length !== 0 && <h1 className={`text-orange-500 text-center font-medium bg-gray-200 p-5 mb-3 rounded-xl ${get(tailwindClasses, 'sectionTitle2')}`} style={get(style, 'sectionTitle2')}>{get(props, 'section3Title2')}</h1>}
                            {get(props, 'section3SubTitle',"").length !== 0 && <p className={`text-orange-500 text-xs font-bold text-center mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section3SubTitle')}</p>}
                            <div className='flex justify-center'>
                                {get(props, 'section3Person1Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 ${get(tailwindClasses, 'sectionPersonImage')}`} style={get(style, 'sectionPerson1Image')} src={get(props, 'section3Person1Image')} alt="" />}
                                {get(props, 'section3Person2Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson2Image')}`} style={get(style, 'sectionPerson2Image')} src={get(props, 'section3Person2Image')} alt="" />}
                                {get(props, 'section3Person3Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson3Image')}`} style={get(style, 'sectionPerson3Image')} src={get(props, 'section3Person3Image')} alt="" />}
                                {get(props, 'section3Person4Image',"").length !==0 && <NexImage className={`!relative rounded-full !h-10 !w-10 -ml-2 ${get(tailwindClasses, 'sectionPerson4Image')}`} style={get(style, 'sectionPerson4Image')} src={get(props, 'section3Person4Image')} alt="" />}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div >
    )
}

BlogV19.propTypes = {
    style:  PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    section1Image: PropTypes.string,
    section1BadgeText: PropTypes.string,
    section1Title: PropTypes.string,
    section1Icon1: PropTypes.string,
    section1Text1: PropTypes.string,
    section1Icon2: PropTypes.string,
    section1Text2: PropTypes.string,
    section1CtaText: PropTypes.string,
    section1CtaLink: PropTypes.string,
    section1Title2: PropTypes.string,
    section1SubTitle: PropTypes.string,
    section1Person1Image: PropTypes.string,
    section1Person2Image: PropTypes.string,
    section1Person3Image: PropTypes.string,
    section1Person4Image: PropTypes.string,
    section2Image: PropTypes.string,
    section2BadgeText: PropTypes.string,
    section2Title: PropTypes.string,
    section2Icon1: PropTypes.string,
    section2Text1: PropTypes.string,
    section2Icon2: PropTypes.string,
    section2Text2: PropTypes.string,
    section2CtaText: PropTypes.string,
    section2CtaLink: PropTypes.string,
    section2Title2: PropTypes.string,
    section2SubTitle: PropTypes.string,
    section2Person1Image: PropTypes.string,
    section2Person2Image: PropTypes.string,
    section2Person3Image: PropTypes.string,
    section2Person4Image: PropTypes.string,
    section3Image: PropTypes.string,
    section3BadgeText: PropTypes.string,
    section3Title: PropTypes.string,
    section3Icon1: PropTypes.string,
    section3Text1: PropTypes.string,
    section3Icon2: PropTypes.string,
    section3Text2: PropTypes.string,
    section3CtaText: PropTypes.string,
    section3CtaLink: PropTypes.string,
    section3Title2: PropTypes.string,
    section3SubTitle: PropTypes.string,
    section3Person1Image: PropTypes.string,
    section3Person2Image: PropTypes.string,
    section3Person3Image: PropTypes.string,
    section3Person4Image: PropTypes.string,
}
BlogV19.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionImage: {},
        sectionBadgeText: {},
        sectionTitle: {},
        sectionIcon: {},
        sectionText: {},
        sectionCta: {},
        sectionTitle2: {},
        sectionSubTitle: {},
        sectionPersonImage: {},
        sectionPerson2Image: {},
        sectionPerson3Image: {},
        sectionPerson4Image: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionImage: "",
        sectionBadgeText: "",
        sectionTitle: "",
        sectionIcon: "",
        sectionText: "",
        sectionCta: "",
        sectionTitle2: "",
        sectionSubTitle: "",
        sectionPersonImage: "",
        sectionPerson2Image: "",
        sectionPerson3Image: "",
        sectionPerson4Image: "",
    },
    subTitle: "Our Recent Events",
    title: "Join Upcoming Events",
    section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section1BadgeText: "Eduction",
    section1Title: "Improve Education",
    section1Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"> <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" /></svg>`,
    section1Text1: "07:00 am -5:00 pm",
    section1Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section1Text2: "6354 Elgin St. Kilda Road,Australia",
    section1CtaText: "Event Details",
    section1CtaLink: "#",
    section1Title2: "17-29 March",
    section1SubTitle: "Our Speakers",
    section1Person1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section1Person2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section1Person3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section1Person4Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section2BadgeText: "Eduction",
    section2Title: "Improve Education",
    section2Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"> <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" /></svg>`,
    section2Text1: "07:00 am -5:00 pm",
    section2Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section2Text2: "6354 Elgin St. Kilda Road,Australia",
    section2CtaText: "Event Details",
    section2CtaLink: "#",
    section2Title2: "17-29 March",
    section2SubTitle: "Our Speakers",
    section2Person1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section2Person2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section2Person3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section2Person4Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section3BadgeText: "Eduction",
    section3Title: "Improve Education",
    section3Icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"> <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" /></svg>`,
    section3Text1: "07:00 am -5:00 pm",
    section3Icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section3Text2: "6354 Elgin St. Kilda Road,Australia",
    section3CtaText: "Event Details",
    section3CtaLink: "#",
    section3Title2: "17-29 March",
    section3SubTitle: "Our Speakers",
    section3Person1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section3Person2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section3Person3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
    section3Person4Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png",
}
export default withData(BlogV19);
