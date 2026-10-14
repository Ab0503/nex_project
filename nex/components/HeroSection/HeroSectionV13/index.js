import get from 'lodash.get';
import React from 'react';
import parse from 'html-react-parser/lib/index';
import PropTypes from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const HeroSectionV13 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`relative nx-bg-primary-light overflow-hidden ${get(tailwindClasses, "container")}`} style={{backgroundImage: `url(${get(props,"bgImage")})`,...get(style, "container")}}>
            <div className={`max-lg:hidden absolute bottom-0 left-0 ${get(tailwindClasses, 'leftImageContainer')}`} style={get(style, 'leftImageContainer')}>
            <NexAnimation  type={get(props, 'Image1ContentAnimation', '')}>
                <div className='grid items-end'>
                    {get(props, "leftImage").length!==0 && <NexImage className={`rounded-t-full rounded-bl-full ml-2 !relative !h-[450px] !w-[220px] ${get(tailwindClasses, 'leftImage')}`} style={get(style, 'leftImage')} src={get(props, "leftImage")} alt="" />}
                </div>
            </NexAnimation>
            </div>
            <div className={`flex flex-col justify-center mx-56 max-lg:mx-0 max-sm:mx-0 pt-10 ${get(tailwindClasses, "contentContainer")}`} style={get(style, "contentContainer")}>
                {get(props, "title").length !==0 && <h1 className={`nx-section-heading-font text-center text-5xl max-md:text-4xl font-bold m-5 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, "title")}</h1>}
                {get(props, "description").length !== 0 && <p className={`text-center font-light text-sm m-5 ${get(tailwindClasses,'description')}`} style={get(style,'description')} >{get(props, "description")}</p>}
                <div className={`flex justify-center gap-2`}>
                    {get(props, "cta1Text").length !== 0 && <PrimaryLink href={get(props, "cta1Link")} className={`nx-btn-primary nx-btn-primary:hover p-2 max-sm:text-xs  px-6 rounded-full text-gray-50 ${get(tailwindClasses, "cta1")}`} style={get(style, "cta1")}>{get(props, "cta1Text")}</PrimaryLink>}
                    {get(props, "cta2Text").length !== 0 && <PrimaryLink href={get(props, "cta2Link")} className={`nx-btn-primary nx-btn-primary:hover p-2 max-sm:text-xs  px-6 rounded-full text-gray-50 ${get(tailwindClasses, "cta2")}`} style={get(style, "cta2")}>{get(props, "cta2Text")}</PrimaryLink>}
                </div>
            </div>
            <div className={`absolute bottom-0 right-0 max-lg:hidden ${get(tailwindClasses, "rightImageContainer")}`} style={get(style, "rightImageContainer")}>
                <NexAnimation  type={get(props, 'Image4ContentAnimation', '')}>
                <div className='grid items-end justify-end'>
                    {get(props, "rightImage").length!==0 &&<NexImage className={`rounded-t-full rounded-br-full !relative !h-[500px] !w-[220px] ${get(tailwindClasses, "rightImage")}`} style={get(style, "rightImage")} src={get(props, "rightImage")} alt="" />}
                </div>
                </NexAnimation>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <NexAnimation  type={get(props, 'Image2ContentAnimation', '')}>
                {get(props, 'centerLeftImage') !== 0 &&
                    <NexImage className={`items-end rounded-tl-full !relative !h-[250px] !w-auto !max-xl:h-[180px] !max-md:h-[150px] pr-5 ${get(tailwindClasses, 'centerLeftImage')}`} style={get(style, "centerLeftImage")} src={get(props, "centerLeftImage")} alt="" />}
                </NexAnimation>
                {get(props, 'centerIcon') !== 0 &&
                    <div className={`text-gray-50 p-5 max-sm:p-1 rounded-full ${get(tailwindClasses, "centerIcon")}`} style={get(style, 'centerIcon')}>
                        {parse(get(props, 'centerIcon'))}
                    </div>}
                <NexAnimation  type={get(props, 'Image3ContentAnimation', '')}>
                {get(props, 'centerRightImage') !== 0 &&
                    <NexImage className={`rounded-tr-full !relative !h-[250px] !max-xl:h-[180px] !max-md:h-[150px] pl-5 !w-auto ${get(tailwindClasses, 'centerRightImage')}`} style={get(style, 'centerRightImage')} src={get(props, "centerRightImage")} alt="" />}
                </NexAnimation>
            </div>
        </div>
    )
}


HeroSectionV13.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        description: {},
        leftImage: {},
        leftImageContainer: {},
        rightImage: {},
        rightImageContainer: {},
        centerLeftImage: {},
        centerRightImage: {},
        cta1: {},
        cta2: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        title: "",
        description: "",
        leftImage: "",
        leftImageContainer: "",
        rightImage: "",
        rightImageContainer: "",
        centerLeftImage: "",
        centerRightImage: " ",
        cta1: "",
        cta2: "",
    },
    Image1ContentAnimation:"",
    Image2ContentAnimation:"",
    Image3ContentAnimation:"",
    Image4ContentAnimation:"",
    bgImage:"",
    leftImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    rightImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    centerLeftImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    centerRightImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    centerIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-dasharray="4 4" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" /></svg>`,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis possimus aperiam quaerat, doloribus praesentium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet consequuntur odit assumenda.",
    cta1Text: "Donate Now",
    cta1Link:"#",
    cta2Text: "Donate Now",
    cta2Link:"#"
}

HeroSectionV13.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.string,
    bgImage: PropTypes.string,
    leftImage: PropTypes.string,
    rightImage: PropTypes.string,
    centerLeftImage: PropTypes.string,
    centerRightImage: PropTypes.string,
    centerIcon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cta1Text: PropTypes.string,
    cta2Text: PropTypes.string,
}
export default HeroSectionV13
