import get from 'lodash.get';
import React from 'react';
import PropTypes from 'prop-types'
import NexAnimation from '@nex-components/NexAnimation';

const NewsLetterV6 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`py-20 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <NexAnimation  type={get(props, 'ContentAnimation', '')}>
            <div className={`lg:mx-40 max-sm:mx-5 md:mx-20`}>
                {(get(props,'title').length !==0 || get(props,'description').length !==0 || get(props,'ctaText').length !==0) && <div className={`flex max-sm:flex-col items-center px-16 max-sm:px-8 py-10 max-sm:py-6 border-2 nx-bg-primary-light nx-border-primary ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    <div className={`max-sm:mb-3`}>
                        {get(props,'title').length !==0 && <h1 className={`nx-section-heading-font text-4xl font-bold  ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,'title')}</h1>}
                        {get(props,'description').length !==0 && <h1 className={`text-2xl font-normal ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,'description')}</h1>}
                    </div>
                    {get(props,'ctaText').length !==0 && <button className={`text-xl font-semibold text-gray-50 nx-btn-primary nx-btn-primary:hover rounded-full px-5 py-1 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')}>{get(props,'ctaText')}</a></button>}
                </div>}
            </div>
        </NexAnimation>
        </div>
    )
}

NewsLetterV6.defaultProps={
    style:{
        container:{},
        sectionBox:{},
        title:{},
        description:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        sectionBox:"",
        title:"",
        description:"",
        cta:""
    },
    ContentAnimation:"",
    title:"Ready to get started?",
    description:"No waiting rooms. We make it simple to get healthcare whenever and wherever you want",
    ctaLink:"#",
    ctaText:"CREATE APPOINTMENT NOW!"
}

NewsLetterV6.propTypes={
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaText: PropTypes.string
}
export default NewsLetterV6
