'use client'
import React from "react";
import get from "lodash.get";
import parse from 'html-react-parser';
import PropTypes, { arrayOf, object } from 'prop-types'
import NexImage from "@nex-core-ui/NexImage";
import ImageOrVedio from "@nex-core-ui/ImageOrVedio";

const FeatureSectionV14 = (props) => {
    console.log(props);
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div class={`grid sm:grid-cols-1 md:grid-cols-2 gap-4 bg-green-400 text-gray-50 py-3 ${get(tailwindClasses, 'container')}`}
            style={get(style, 'container')}
        >
            <div className="flex flex-col items-center justify-center mx-10 max-sm:mx-3">
                {
                    get(props, 'title', '').length != 0 && <h4 className={`text-center bold font-bold mb-10 text-4xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title', '')} </h4>
                }

                {
                    get(props, 'description', '').length != 0 && <p className={`mb-3 text-sm text-center font-light ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
                }
                <div className={`grid grid-cols-2 gap-4 mb-5 p-2 max-lg:p-0 `}>
                    {
                        get(props, 'items', []).map((item,index) => (get(item, 'text').length !==0 &&
                            <div key={index} className={`flex items-center mb-3 bg-green-800 p-5 rounded-full shadow-green-600  shadow-xl hover:shadow-lg mix-blend-multiply hover:mix-blend-overlay transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${get(tailwindClasses, 'itemBox')}`} style={get(style, 'itemBox')}>
                                {get(item, 'icon').length !==0 && <span className={`${get(tailwindClasses, 'icon')}`} style={get(style,'icon')}>{parse(get(item, 'icon'))}</span>}
                                <span className={`ml-2 ${get(tailwindClasses, 'text')}`} style={get(style,'text')}>{get(item, 'text')}</span>
                            </div>
                        ))
                    }
                </div>
                {
                    get(props, 'cta', '').length !== 0 && <div className="flex justify-center">
                        <button className={`drop-shadow-xl bg-emerald-800 p-3 text-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-lg ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props, 'cta')}</button>
                    </div>
                }

            </div>

            {get(props, 'imagePath', '').length !== 0 &&
                <div>
                    <ImageOrVedio 
                     src={get(props, 'imagePath')} 
                     vedioSrc={get(props, 'vedioPath', '')}
                     className={`!relative ${get(tailwindClasses, 'image')}`} 
                     alt="Gardener Image" 
                     style={get(style, 'image')} 
                    />
                </div>
            }
        </div>
    );
}


FeatureSectionV14.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        itemBox: {},
        icon: {},
        text: {},
        cta: {},
        image: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        description: "",
        itemBox: "",
        icon: "",
        text: "",
        cta: "",
        image: ""
    },
    title: "Why Choose Us",
    description: "because we are good in this particular work that the reason you can choose us for this work",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
    cta:"About Us",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>`,
            text: 'Proper Take Care'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>`,
            text: 'Expert Farmerr'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>`,
            text: 'Clean working'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>`,
            text: 'Home Garedning'
        }
    ]
}

FeatureSectionV14.propTypes= {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    imagePath: PropTypes.string,
    cta: PropTypes.string,
    items: arrayOf(object)
}

export default FeatureSectionV14;