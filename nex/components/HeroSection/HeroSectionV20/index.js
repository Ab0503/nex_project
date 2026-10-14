import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import NexAnimation from '@nex-components/NexAnimation'


const HeroSectionV20 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`overflow-hidden relative py-20 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`absolute w-[600px] h-[450px] right-0 top-0 nx-bg-primary-light rounded-full rounded-r-none ${get(tailwindClasses,'shape')}`} style={get(style,'shape')}></div>
            <div className={`lg:mx-32 md:mx-20 max-sm:mx-3`}>
                <div className={`relative flex items-center max-sm:flex-col ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className={`container px-3 max-sm:mb-5`}>
                        <NexAnimation type={get(props, 'contentAnimation', '')}>
                        {get(props, 'title',"").length !==0 && <h1 className={`nx-section-heading-font text-5xl font-bold mb-4 max-sm:text-center ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, 'title')}</h1>}
                        {get(props, 'description',"").length !==0 && <h1 className={`text-xl font-normal max-sm:text-center mb-4 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props, 'description')}</h1>}
                        <div className={`relative`}>
                           {get(props, 'placeholderText',"").length !==0 && <input className={`w-full rounded-full py-5 pr-40 shadow-xl border-gray-100 ${get(tailwindClasses,'inputSection')}`} style={get(style,'inputSection')} type="text" placeholder={get(props, 'placeholderText')} /> }
                           {get(props,'ctaText',"").length !==0 && <button className={`absolute nx-btn-primary nx-btn-primary:hover right-3 top-3 text-lg font-semibold bg-green-500 text-gray-50 px-8 py-2 rounded-full ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props,'ctaText')}</button>}
                        </div>
                        </NexAnimation>
                    </div>
                    <div className={`container`}>
                        <NexAnimation type={get(props, 'vedioBoxAnimation', '')}>
                        {get(props, 'videoUrl',"").length !==0 && <video autoPlay loop muted className={`rounded-r-full rounded-tr-full rounded-b-full ${get(tailwindClasses, 'video')}`} style={get(style, 'video')} src={get(props, 'videoUrl')}></video>}
                        </NexAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}


HeroSectionV20.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    placeholderText: PropTypes.string,
    videoUrl: PropTypes.string,
}
HeroSectionV20.defaultProps = {
    style: {
        container:{},
        contentContainer:{},
        shape:{},
        title:{},
        description:{},
        inputSection:{},
        cta:{},
        video:{}
    },
    tailwindClasses: {
        container:"",
        contentContainer:"",
        shape:"",
        title:"",
        description:"",
        inputSection:"",
        cta:"",
        video:""
    },
    title: "Online Medical Care",
    description: "Get a diagnosis, treatment plan, and prescription from original provider of quality medical care.",
    placeholderText: "Search doctor,medicines or clinic...",
    videoUrl: "https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
    ctaText:"SEARCH",
    contentAnimation: "",
    vedioBoxAnimation: ""
}
export default HeroSectionV20
