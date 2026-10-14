import React from 'react';
import PropTypes from 'prop-types'
import get from 'lodash.get';
import parse from 'html-react-parser/lib/index';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';



const BlogV13 = (props) => {
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {})

    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                {get(props, 'subTitle',"").length !== 0 && <h1 className={`nx-text-primary text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title',"").length !==0 && <h1 className={`text-center font-bold text-4xl mb-3 max-w-xl mx-auto nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                <div className={`w-auto grid grid-cols-3 max-md:grid-cols-1 gap-4`}>
                    {(get(props, 'section1SubTitle',"").length !== 0 || get(props, 'section1Title',"").length !==0 || get(props, 'section1CtaText',"").length !== 0 || get(props, 'section1Text',"").length !== 0) &&<div className={`relative col-span-2 max-md:col-span-1 flex flex-col justify-end p-4 bg-cover bg-center text-white rounded-lg shadow-lg bg-teal-400 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={{ background: `url(${get(props, 'section1BgImage')})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" ,...get(style, 'sectionBox') }}>
                        <div className='relative z-10'>
                        {get(props, 'section1SubTitle',"").length !== 0 && <p className={`m-1 font-light text-xs ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section1SubTitle')}</p>}
                        {get(props, 'section1Title',"").length !==0 && <h1 className={`m-1 font-bold text-base ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section1Title')}</h1>}
                        {get(props, 'section1Text',"").length !== 0 && <div className='flex items-center m-1 space-x-2'>
                            {get(props, 'section1Icon',"").length !== 0 && <span className={`${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section1Icon'))}</span>}
                            {<p className={`font-light text-sm m-1 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section1Text')}</p>}
                        </div>}
                        {get(props, 'section1CtaText',"").length !== 0 && <PrimaryLink href={get(props, "section1CtaLink")}><button className={`px-5 py-2 text-xs nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, 'section1CtaText')}</button></PrimaryLink>
                        }</div>
                    </div>}
                    <div className='grid grid-cols-1 gap-4'>
                        {(get(props, 'section2SubTitle',"").length !== 0 || get(props, 'section2Title',"").length !==0 || get(props, 'section2CtaText',"").length !== 0 || get(props, 'section2Text',"").length !== 0) &&<div className={`relative flex flex-col justify-end p-4 bg-cover bg-center text-white rounded-lg shadow-lg bg-teal-400 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={{ background: `url(${get(props, 'section2BgImage')})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" ,...get(style, 'sectionBox') }}>
                            <div className='relative z-10'>
                            {get(props, 'section2SubTitle',"").length !== 0 && <p className={`m-1 font-light text-xs ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section2SubTitle')}</p>}
                            {get(props, 'section2Title',"").length !==0 && <h1 className={`m-1 font-bold text-base ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section2Title')}</h1>}
                            {get(props, 'section2Text',"").length !== 0 && <div className='flex items-center m-1 space-x-2'>
                                {get(props, 'section2Icon',"").length !== 0 && <span className={`${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section2Icon'))}</span>}
                                {<p className={`font-light text-sm m-1 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section2Text')}</p>}
                            </div>}
                            {get(props, 'section2CtaText',"").length !== 0 && <PrimaryLink href={get(props,"section2CtaLink")}><button className={`px-5 py-2 text-xs nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, 'section2CtaText')}</button></PrimaryLink>}
                            </div>
                        </div>}
                        {(get(props, 'section3SubTitle',"").length !== 0 || get(props, 'section3Title',"").length !==0 || get(props, 'section3CtaText',"").length !== 0 || get(props, 'section3Text',"").length !== 0) && <div className={`relative flex flex-col justify-end p-4 bg-cover bg-center text-white rounded-lg shadow-lg bg-teal-400 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={{ background: `url(${get(props, 'section3BgImage')})`, ...get(style, 'sectionBox') }}>
                            <div className='relative z-10'>
                            {get(props, 'section3SubTitle',"").length !== 0 && <p className={`m-1 font-light text-xs ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props, 'section3SubTitle')}</p>}
                            {get(props, 'section3Title',"").length !==0 && <h1 className={`m-1 font-bold text-base ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'section3Title')}</h1>}
                            {get(props, 'section3Text',"").length !== 0 && <div className='flex items-center m-1 space-x-2'>
                                {get(props, 'section3Icon',"").length !== 0 && <span className={`${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(props, 'section3Icon'))}</span>}
                                { <p className={`font-light text-sm m-1 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'section3Text')}</p>}
                            </div>}
                            {get(props, 'section3CtaText',"").length !== 0 && <PrimaryLink href={get(props, "section3CtaLink")}><button className={`px-5 py-2 text-xs nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]  ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, 'section3CtaText')}</button></PrimaryLink>}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogV13.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionSubTitle: {},
        sectionTitle: {},
        sectionIcon: {},
        sectionText: {},
        sectionCta:{}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionSubTitle: "",
        sectionTitle: "",
        sectionIcon: "",
        sectionText: "",
        sectionCta:""
    },
    subTitle: "Start Donating Poor people",
    title: "Checkout Our Upcoming Full Event List",
    section1SubTitle: "October 19,2025",
    section1BgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section1Title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium.",
    section1Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section1Text: "135 W,46nd Street,New York",
    section1CtaText: "Read more..",
    section1CtaLink:"#",
    section2SubTitle: "October 19,2025",
    section2BgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section2Title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium.",
    section2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section2Text: "135 W,46nd Street,New York",
    section2CtaText: "Read more..",
    section2CtaLink:"#",
    section3SubTitle: "October 19,2025",
    section3BgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    section3Title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium.",
    section3Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>`,
    section3Text: "135 W,46nd Street,New York",
    section3CtaText: "Read more..",
    section3CtaLink:"#",
}
BlogV13.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    section1SubTitle: PropTypes.string,
    section1BgImage: PropTypes.string,
    section1Title: PropTypes.string,
    section1Icon: PropTypes.string,
    section1Text: PropTypes.string,
    section2SubTitle: PropTypes.string,
    section2BgImage: PropTypes.string,
    section2Title: PropTypes.string,
    section2Icon: PropTypes.string,
    section2Text: PropTypes.string,
    section3SubTitle: PropTypes.string,
    section3BgImage: PropTypes.string,
    section3Title: PropTypes.string,
    section3Icon: PropTypes.string,
    section3Text: PropTypes.string,
}

export default withData(BlogV13);
