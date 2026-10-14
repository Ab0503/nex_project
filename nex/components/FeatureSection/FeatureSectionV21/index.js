import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import NexAnimation from "@nex-components/NexAnimation";
import parse from 'html-react-parser';
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const FeatureSectionV21 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <div className={`bg-gray-100 py-20 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <NexAnimation type={get(props,'topContentAnimation')}>
                <div className="text-center mb-8 max-sm:p-2">
                    {
                        get(props, 'subtitle', '').length != 0 && <p className={`nx-text-primary italic p-2 ${get(tailwindClasses, 'subtitle')}`} style={get(style, 'subtitle')}>{get(props, 'subtitle')}</p>
                    }
                    {
                        get(props, 'title', '').length != 0 && <h1 className={`nx-section-heading-font text-4xl font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>
                    }
                </div>
            </NexAnimation>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 p-2">
                <NexAnimation type={get(props,'centerLeftContentAnimation')}>
                    <div className="relative">
                        {
                            get(props, 'imagePath1', '').length != 0 &&
                            <NexImage src={get(props, 'imagePath1')} className={`w-full h-auto object-cover ${get(tailwindClasses, 'imagePath1')}`} style={get(style, 'imagePath1')} />
                        }

                        <div className="absolute inset-0 bg-yellow-500 opacity-50 mix-blend-multiply hover:-translate-y-1 hover:scale-110  hover:opacity-70" />
                    </div>
                </NexAnimation>
                <NexAnimation type={get(props,'centerContentAnimation')}>
                    <div>
                        {
                            get(props, 'imagePath2', '').length != 0 &&
                            <NexImage src={get(props, 'imagePath2')}
                                className={`!relative object-cover hover:-translate-y-1 hover:scale-110 hover:opacity-70 ${get(tailwindClasses, 'imagePath2')}`} style={get(style, 'imagePath2')} />
                        }

                    </div>
                </NexAnimation>
                
                <NexAnimation type={get(props,'centerRightContentAnimation')}>
                    <div className="relative">
                        {
                            get(props, 'imagePath3', '').length != 0 &&
                            <NexImage src={get(props, 'imagePath3')} className={`w-full h-auto object-cover hover:-translate-y-1 hover:scale-110  hover:opacity-70 ${get(tailwindClasses, 'imagePath3')}`} style={get(style, 'imagePath3')} />

                        }

                        <div className="absolute inset-0 bg-orange-500 opacity-50 mix-blend-multiply hover:-translate-y-1 hover:scale-110  hover:opacity-70" />
                    </div>
                    </NexAnimation>
                    {(get(props, 'text', '').length !== 0||get(props, 'subtext', '').length !== 0 || get(props,'ctaIcon',"").length !==0) && <div className={`absolute -bottom-16  left-1/2  border-2 -translate-x-1/2 max-sm:-bottom-30 max-sm:left-0 max-sm:translate-x-0 transform  transition-transform duration-500 hover:scale-110 p-2 bg-gray-50 shad rounded-lg ${get(tailwindClasses,'ctaSection')}`} style={get(style,'ctaSection')}>
                    <div className="flex text-center p-3 items-center justify-center gap-8">
                        <div>
                            {
                                get(props, 'text', '').length != 0 && <h1 className={`text-2xl  font-semibold text-gray-800 ${get(tailwindClasses, 'subtext')}`} style={get(style, 'text')} >{get(props, 'text')}</h1>
                            }
                            {
                                get(props, 'subtext', '').length != 0 && <p className={`text-sm font-light text-left ${get(tailwindClasses, 'subtext')}`} style={get(style, 'subtext')} > {get(props, 'subtext')}</p>
                            }

                        </div>
                        {get(props,'cta',"").length !==0 && <button className={`rounded-full p-1 nx-btn-primary nx-btn-primary:hover text-gray-700 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <PrimaryLink href={get(props,'ctaLink')}>{parse(get(props,'cta'))}</PrimaryLink>
                        </button>}
                    </div>
            </div>
            }
            </div>
            
        </div>
    );

};
FeatureSectionV21.propTypes = {
    style: object,
    title: string,
    subTitle: string,
    description: string,
    ctaText: string,
    ctaLink: string,
};

FeatureSectionV21.defaultProps = {
    style: {
        container: {},
        subtitle: {},
        title: {},
        imagePath1: {},
        imagePath2: {},
        imagePath3: {},
        text: {},
        subtext: {},
        cta: {},
    },
    tailwindClasses: {
        container: "",
        subtitle: "",
        title: "",
        text: "",
        subtext: "",
        imagePath1: "",
        imagePath2: "",
        imagePath3: "",
        cta: "",
    },
    title: "Our Case Study About Helping People",
    subtitle: "We are always open for children",
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    text: "Old People & Child trouble",
    subtext: " Child and old care",
    cta: `<svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>`,
    ctaLink: "#",
    topContentAnimation:"",
    centerLeftContentAnimation:"",
    centerContentAnimation:"",
    centerRightContentAnimation:"",
}

export default FeatureSectionV21;
