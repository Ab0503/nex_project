import React from 'react';
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import { arrayOf, number, object, string } from 'prop-types';

const FeatureSectionV50 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-20 px-5 bg-gray-100 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-12 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className={`max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                {get(props, 'items', []).map((item) => <div className={`bg-white p-8 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    {get(item, 'title', '').length !== 0 && <h1 className={`text-2xl font-bold relative after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 mb-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1>}
                    {get(item, 'description', '').length !== 0 && <p className={`text-gray-500 mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                    {get(props, 'ctaText','').length !==0 &&<PrimaryLink href={get(item,'ctaLink')} className={`flex items-center gap-2 text-gray-600 group ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                        {get(props,'ctaIcon','').length !==0 &&<span className={`rounded-full text-white bg-yellow-600 group-hover:bg-gray-950 transition-all duration-500 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>{parse(get(props,'ctaIcon'))}</span>}
                        {get(props, 'ctaText')}
                    </PrimaryLink>}
                </div>)}
            </div>
        </section>
    )
}

FeatureSectionV50.propTypes={
    style:object,
    tailwindClasses:object,
    sectionKeyNo: number,
    title: string,
    ctaText: string,
    ctaIcon: string,
    items: arrayOf(object)
}

FeatureSectionV50.defaultProps = {
    style: {
        container:{},
        title:{},
        sectionBox:{},
        sectionTitle:{},
        description:{},
        cta:{},
        ctaIcon:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        sectionBox:"",
        sectionTitle:"",
        description:"",
        cta:"",
        ctaIcon:""
    },
    sectionKeyNo: 3,
    title: "Why traders choose us",
    ctaText: "Read more",
    ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>`,
    items: [
        {
            title: "Raw Spreads",
            description: "Receive premium pricing from Top Tier financial institutions. Pricing from Top Tier financial institutions.",
            ctaLink: "#"
        },
        {
            title: "No Dealing Desk",
            description: "Receive premium pricing from Top Tier financial institutions. Pricing from Top Tier financial institutions.",
            ctaLink: "#"
        },
        {
            title: "State of the Art",
            description: "Receive premium pricing from Top Tier financial institutions. Pricing from Top Tier financial institutions.",
            ctaLink: "#"
        },
    ]
}
export default FeatureSectionV50
