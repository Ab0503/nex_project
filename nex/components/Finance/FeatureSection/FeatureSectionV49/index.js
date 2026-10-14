import React from 'react';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import parse from 'html-react-parser';

const FeatureSectionV49 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-12 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className={`max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4`}>
                {get(props, 'items', []).map((item) => <div className={`${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                    <div className='flex items-center gap-3 mb-4'>
                        <span className={`w-12 h-12 bg-yellow-600 rounded-full p-2 text-white ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props,'icon'))}</span>
                        {get(item, 'title','').length !==0 &&<h1 className={`text-xl font-bold ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(item, 'title')}</h1>}
                    </div>
                    {get(item, 'description','').length !==0 &&<p className={`text-gray-600 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(item, 'description')}</p>}
                </div>)}
            </div>
        </section>
    )
}
FeatureSectionV49.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    icon: string,
    items: arrayOf(object)
}

FeatureSectionV49.defaultProps = {
    style: {
        container:{},
        title:{},
        sectionBox:{},
        icon:{},
        sectionTitle:{},
        description:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        sectionBox:"",
        icon:"",
        sectionTitle:"",
        description:""
    },
    title: "Range of Markets",
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
</svg>
`,
    items: [
        {
            title: "Forex",
            description: "Our team has expertise in developing compensation programs that increase workplace satisfaction and productivity."
        },
        {
            title: "Metals",
            description: "We recognize any issues and prescribe arrangements, we benchmark wage for made situations inside extending associations."
        },
        {
            title: "Indices",
            description: "We offer inventive ways to deal with your work issues when you are tested by everything."
        },
        {
            title: "Oil range",
            description: "Our experienced coaches work with employments of your company to help unleash their full potential and motivate them to perform better."
        },
    ]
}
export default FeatureSectionV49
