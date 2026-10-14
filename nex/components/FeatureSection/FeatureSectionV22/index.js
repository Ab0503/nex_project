import parse from 'html-react-parser/lib/index';
import get from 'lodash.get';
import React from 'react';
import PropTypes from 'prop-types'


const FeatureSectionV22 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});

    return (
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`grid ${get(props,'videoUrl').length ===0 ? 'grid-cols-2': 'grid-cols-3'} overflow-hidden max-md:grid-cols-1 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className={`py-20 flex flex-col justify-center items-center text-gray-50 hover:scale-110 ${get(tailwindClasses, 'leftBox')}`} style={{ backgroundImage: `url(${get(props, 'leftBoxBgImage')})`, backgroundSize: 'contain', ...get(style, 'leftBox') }}>
                    {get(props, 'icon1').length !==0 && <span className={`${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(props, 'icon1'))}</span>}
                    {get(props, 'subTitle1').length !== 0 && <h1 className={`font-light text-sm mb-1 ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props, 'subTitle1')}</h1>}
                    {get(props, 'title1').length !==0 && <h1 className={`text-3xl font-bold mb-3 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, 'title1')}</h1>}
                    {get(props, 'ctaText1').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded-full text-xs ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}>{get(props, 'ctaText1')}</button>}
                </div>
                {get(props,'videoUrl').length !==0 && <video className={`h-full w-full object-cover ${get(tailwindClasses,'video')}`} style={get(style,'video')} controls autoPlay loop muted src={get(props,'videoUrl')}/>}
                <div className={`py-20 flex flex-col justify-center items-center hover:scale-110 text-gray-50 ${get(tailwindClasses, 'rightBox')}`} style={{ backgroundImage: `url(${get(props, 'rightBoxBgImage')})`, backgroundSize: 'contain', ...get(style, 'rightBox') }}>
                    {get(props, 'icon2').length !==0 && <span className={`${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>{parse(get(props, 'icon2'))}</span>}
                    {get(props, 'subTitle2').length !== 0 && <h1 className={`font-light text-sm mb-1 ${get(tailwindClasses, 'subTitle2')}`} style={get(style, 'subTitle2')}>{get(props, 'subTitle2')}</h1>}
                    {get(props, 'title2').length !==0 && <h1 className={`text-3xl font-bold mb-3 ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props, 'title2')}</h1>}
                    {get(props, 'ctaText2').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded-full text-xs ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}>{get(props, 'ctaText2')}</button>}
                </div>
            </div>
        </div >
    )
}


FeatureSectionV22.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        leftBox: {},
        icon1: {},
        subTitle1: {},
        title1: {},
        cta1: {},
        rightBox: {},
        icon2: {},
        subTitle2: {},
        title2: {},
        cta2: {},
        video:{}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        leftBox: "",
        icon1: "",
        subTitle1: "",
        title1: "",
        cta1: "",
        rightBox: "",
        icon2: "",
        subTitle2: "",
        title2: "",
        cta2: "",
        video:""
    },
    videoUrl:"https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
    leftBoxBgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    rightBoxBgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>`,
    subTitle1: "We give child a gift of education",
    title1: "Become a Volunteer?",
    ctaText1: "Contact Now",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>`,
    subTitle2: "We give child a gift of education",
    title2: "Become a Volunteer?",
    ctaText2: "Contact Now",
}
FeatureSectionV22.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    videoUrl: PropTypes.string,
    leftBoxBgImage: PropTypes.string,
    rightBoxBgImage: PropTypes.string,
    icon1: PropTypes.string,
    subTitle1: PropTypes.string,
    title1: PropTypes.string,
    ctaText1: PropTypes.string,
    icon2: PropTypes.string,
    title2: PropTypes.string,
    ctaText2: PropTypes.string,
}
export default FeatureSectionV22
