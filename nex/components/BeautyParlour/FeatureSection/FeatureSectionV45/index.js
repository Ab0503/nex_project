import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get';
import React from 'react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, number, object, string } from 'prop-types';


const FeatureSectionV45 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <section className={`py-16 px-5 lg:px-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto'>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                    {get(props, 'items', []).map((item) =>
                        <div>
                            {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`!relative !h-auto !w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                            <div className={`-mt-10 max-w-xs mx-auto relative z-10 bg-white p-6 shadow-lg rounded-lg ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                {get(item, 'title', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><h1 className={`text-center font-semibold text-xl nx-text-hover-primary mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h1></PrimaryLink>}
                                {get(item, 'description', '').length !== 0 && <p className={`text-center text-gray-500 font-medium mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                                {get(props, 'ctaIcon').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover p-2 text-center font-medium absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(item, 'ctaLink')}>{parse(get(props, 'ctaIcon'))}</PrimaryLink></button>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

FeatureSectionV45.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    ctaIcon: string,
    items: arrayOf(object)
}

FeatureSectionV45.defaultProps = {
    style: {
        container: {},
        sectionBox:{},
        image:{},
        title:{},
        description:{},
        cta:{}
    },
    tailwindClasses: {
        container: "",
        sectionBox:"",
        image:"",
        title:"",
        description:"",
        cta:""
    },
    sectionKeyNo: 3,
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
`,
    items: [
        {
            image: "https://images.pexels.com/photos/5793890/pexels-photo-5793890.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Body Treatments",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/6186765/pexels-photo-6186765.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Massages",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/7984976/pexels-photo-7984976.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Organic Kulk Service",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/2263142/pexels-photo-2263142.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Hair Makeup",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/29692108/pexels-photo-29692108/free-photo-of-beauty-professional-applying-makeup-in-salon.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&dpr=1",
            title: "Beauty & Clinic Service",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
        {
            image: "https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Aromatherapy",
            description: "Lorem Ipsum is simply dummy text of the printing.",
            ctaLink: "#"
        },
    ]
}
export default FeatureSectionV45
