import {PropTypes,object} from 'prop-types'
import get from "lodash.get";
import parse from "html-react-parser/lib/index";
import NexImage from '@nex-core-ui/NexImage';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const HeroSectionV12 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <div className={`flex flex-wrap md:flex-nowrap items-center xl:px-32 lg:px-24 md:px-20 max-sm:px-5 overflow-hidden py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="md:w-1/2 space-y-6 pt-10 pb-10">
                <div className={`flex items-center space-x-2 ${get(tailwindClasses, 'leftBox')}`} style={get(style, 'leftBox')} >
                    <div >
                        <div >
                            <NexAnimation type={get(props, 'leftContentAnimation', '')}>
                            {get(props, 'subTitle').length !== 0 && <div className="flex items-center space-x-2 ">
                                {
                                    <span className={`nx-text-primary ${get(tailwindClasses,'subTitleIcon')}`} style={get(style,'subTitleIcon')}>{parse(get(props, 'subTitleIcon'))}</span>
                                }
                                <h1 className={`text-gray-700 font-bold p-2 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                                    {get(props, 'subTitle')}
                                </h1>
                            </div>}
                            {get(props, 'title1').length !== 0 && <h1 className={`nx-section-heading-font text-4xl md:text-5xl font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                                <span >  </span>
                                {get(props, 'title1')}<span className={`nx-section-heading-font nx-text-primary ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}> {get(props, 'title2')}</span>
                            </h1>}
                            {get(props, 'description').length !== 0 && <p className={`mt-5 text-gray-600  ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                                {get(props, 'description')}
                            </p>}
                            {(get(props, 'cta1Text', '').length !== 0 || get(props, 'cta2Text', '').length !== 0) && <div className="mt-5 flex flex-wrap items-center gap-x-6">
                                {
                                    get(props, 'cta1Text', '').length !== 0 && <div className="rounded-md shadow max-sm:mb-3">
                                        <PrimaryLink href={get(props, 'cta1Link')} className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] py-2 px-6 rounded-lg ${get(tailwindClasses, 'highlightCta')}`} style={get(style, 'highlightCta')}>{get(props, 'cta1Text')}</PrimaryLink>
                                    </div>
                                }
                                {
                                    get(props, 'cta2Text', '').length !== 0 && <div className="space-x-2 nx-text-primary hover:underline max-sm:mb-3">
                                        <PrimaryLink href={get(props, 'cta2Link')} className={`flex items-center space-x-2 nx-text-primary hover:underline ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                            <span>{get(props, 'cta2Text')}</span>
                                            <span className={`${get(tailwindClasses,'cta2Icon')}`} style={get(style,'cta2Icon')}>{parse(get(props, 'cta2Icon'))}</span>
                                        </PrimaryLink>
                                    </div>
                                }
                            </div>}
                            </NexAnimation>
                            <div className="flex space-x-6 mt-6 ">
                                {props.items.map((item) => <NexAnimation type={get(props, 'leftContentStatsAnimation', '')}><div>
                                    {
                                        get(item, 'count', '').length !== 0 && <h4 className={`text-lg font-bold ${get(tailwindClasses, 'count')}`} style={get(style, 'count')}>{get(item, 'count')}</h4>
                                    }
                                    {
                                        get(item, 'text', '').length !== 0 && <p className={`text-gray-600 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</p>
                                    }
                                </div>
                                </NexAnimation>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {get(props, 'imagePath').length !== 0 && <div className={`md:w-1/2 mt-8 md:mt-0 ${get(tailwindClasses, 'rightBox')}`} style={get(style, 'rightBox')}>
                <NexAnimation type={get(props, 'rightContentsAnimation', '')}>
                <ImageOrVedio 
                    src={get(props, 'imagePath')} 
                    vedioSrc={get(props, 'vedioPath', '')} 
                    className={`!relative rounded-xl w-full  ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} alt="" 
                />
                </NexAnimation>
            </div>}
        </div>
    );
};

HeroSectionV12.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title1: PropTypes.string,
    title2: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleIcon: PropTypes.string,
    description: PropTypes.string,
    cta1Text: PropTypes.string,
    cta1Link: PropTypes.string,
    cta2Text: PropTypes.string,
    cta2Icon: PropTypes.string,
    cta2Link: PropTypes.string,
    items: PropTypes.arrayOf(object),
    imagePath: PropTypes.string,
    leftBox: PropTypes.string,
    rightBox: PropTypes.string,
};

HeroSectionV12.defaultProps = {
    style: {
        container: {},
        subTitleIcon:{},
        subTitle: {},
        title: {},
        title2:{},
        text: {},
        count: {},
        description: {},
        cta: {},
        highlightCta: {},
        leftBox:{},
        rightBox:{},
    },
    tailwindClasses: {
        container: "",
        subTitleIcon: "",
        subTitle: "",
        title: "",
        title2: "",
        text: "",
        count: "",
        description: "",
        cta: "",
        highlightCta: "",
        leftBox: "",
        rightBox: "",
    },
    
    title1: "Perfect Landscape",
    title2: "Solution",
    subTitle: "Landscpe Planting Services",
    subTitleIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" /></svg>`,
    description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    cta1Text: "Get Started",
    cta1Link: "#",
    cta2Text: "See how it works",
    cta2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
    cta2Link: "#",
    leftBox:"",
    rightBox:"",
    items: [
        {
            text: "Happy Customers",
            count: "500+",
        },
        {
            text: "Garden Created",
            count: "900+",
        },
        {
            text: "Team Members",
            count: "100+",
        }
    ],
    imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    leftContentAnimation: "",
    leftContentStatsAnimation: "",
    rightContentsAnimation: ""
};

export default HeroSectionV12;