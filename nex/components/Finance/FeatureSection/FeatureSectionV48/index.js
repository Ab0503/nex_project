import { ChevronRightIcon } from '@heroicons/react/20/solid';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react';

const FeatureSectionV48 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-20 px-5 text-white relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgb(9,8,33,0.75)] ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className='relative z-[1]'>
                {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl font-bold text-center relative after:block after:h-[6px] after:w-12 after:mt-2 after:bg-yellow-600 after:mx-auto mb-10 nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                <div className={`max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3`}>
                    {get(props, 'items', []).map((item) => <div className='group'>
                        <div className='border-2 border-yellow-600 group-hover:bg-white group-hover:border-white py-8 px-14 transition-all duration-700'>
                            {get(item, 'title', '').length !== 0 && <h1 className={`text-center text-xl font-bold mb-3 nx-section-heading-font group-hover:text-gray-950 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1>}
                            {get(item, 'description', '').length !== 0 && <p className={`text-center text-sm mb-3 group-hover:text-gray-950 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                            {get(item, 'ctaText', '').length !== 0 && <div className='flex justify-center'>
                                <button className={`text-sm font-bold group-hover:text-gray-950 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink className="flex items-center gap-2" href={get(item, 'ctaLink')}>{get(item, 'ctaText')} <ChevronRightIcon className={`h-5 w-5 text-yellow-600 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')} /></PrimaryLink></button>
                            </div>}
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

FeatureSectionV48.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    bgImage: string,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV48.defaultProps = {
    style: {
        container:{},
        title:{},
        sectionTitle:{},
        description:{},
        cta:{},
        ctaIcon:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        sectionTitle:"",
        description:"",
        cta:"",
        ctaIcon:""
    },
    sectionKeyNo:3,
    bgImage: "https://images.pexels.com/photos/7989073/pexels-photo-7989073.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop&dpr=1",
    title: "Why traders choose us",
    items: [
        {
            title: "Raw Spreads",
            description: "Receive premium pricing from Top Tier financial institutions. Pricing from Top Tier financial institutions.",
            ctaText: "read more",
            ctaLink: "#"
        },
        {
            title: "No Dealing Desk",
            description: "With Consulting WP you’ll get no re-quotes, no dealer intervention and fair order execution.",
            ctaText: "read more",
            ctaLink: "#"
        },
        {
            title: "State of the Art",
            description: "Trade Forex and CFDs with the world’s best trading platforms on your desktop or mobile device.",
            ctaText: "read more",
            ctaLink: "#"
        },
    ]
}
export default FeatureSectionV48
