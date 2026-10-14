import React from 'react';
import get from 'lodash.get';
import { object, arrayOf, number } from 'prop-types';
import parse from 'html-react-parser';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const FeatureSectionV44 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

    return (
        <section className={`py-16 px-5 lg:px-8 ${get(tailwindClasses, 'container')}`} style={{ ...get(style, 'container') }}>
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase font-semibold nx-text-primary text-sm mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title', '').length !== 0 && <h4 className={`text-center text-4xl font-medium nx-section-heading-font mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
            <div className="mx-auto max-w-6xl">
                <dl className={`grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                    {get(props, 'items', []).map((item) => (
                        <div className={`flex flex-col group ${get(tailwindClasses, 'sectionBox')}`} style={{ ...get(style, 'sectionBox') }}>
                            <dt className="text-base/7 font-semibold text-gray-900 flex flex-col">
                                {get(item, 'icon', '').length !== 0 && <div className="relative mb-6 inline-flex mr-auto">
                                    <div className={`absolute inset-0 size-10 group-hover:size-16 rounded-full bg-rose-800/10 transition-all duration-700 ${get(tailwindClasses, 'shape')}`} style={get(style, 'shape')}></div>
                                    <div className={`relative size-10 text-gray-800 group-hover:text-rose-800 transition-all duration-700 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                        {parse(get(item, 'icon'))}
                                    </div>
                                </div>}
                                {get(item, 'title', '').length !== 0 && <span className={`text-xl ${get(tailwindClasses, 'sectionTitle')}`} style={{ ...get(style, 'sectionTitle') }}>{get(item, 'title')}</span>}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                {get(item, 'description', '').length !== 0 && <p className={`flex-auto ${get(tailwindClasses, 'description')}`} style={{ ...get(style, 'description') }}>{get(item, 'description')}</p>}
                                {get(item, 'ctaText', '').length !== 0 && <p className="mt-6">
                                    <PrimaryLink href={get(item, 'ctaLink')} className={`font-semibold hover:underline nx-text-primary ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                        {get(item, 'ctaText')} <span aria-hidden="true">→</span>
                                    </PrimaryLink>
                                </p>}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

FeatureSectionV44.propTypes = {
    style: object,
    sectionKeyNo: number,
    items: arrayOf(object),
}

FeatureSectionV44.defaultProps = {
    style: {
        container: {},
        sectionBox: {},
        subTitle:{},
        title: {},
        icon: {},
        sectionTitle:{},
        description: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        sectionBox: "",
        subTitle:"",
        title: "",
        icon: "",
        sectionTitle:"",
        description: "",
        cta: ""
    },
    sectionKeyNo: 3,
    subTitle:"Best Services",
    title:"Our Services",
    items: [
        {
            title: "Body Treatments",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
        {
            title: "Aromatherapy",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
        {
            title: "Beauty & Clinic Service",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
        {
            title: "Hair Makeup",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
        {
            title: "Organic Kulk Service",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
        {
            title: "Massages",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry.",
            ctaLink: "#",
            ctaText: "Read More"
        },
    ]
}
export default FeatureSectionV44
