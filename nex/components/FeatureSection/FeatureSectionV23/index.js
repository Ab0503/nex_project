import parse from 'html-react-parser/lib/index'
import get from 'lodash.get'
import React from 'react'
import PropTypes, { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage'
import NexAnimation from '@nex-components/NexAnimation'

const FeatureSectionV23 = (props) => {
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <div className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`xl:mx-20 md:mx-0 lg:mx-4 max-sm:mx-0 p-10`}>
                <div className={`grid grid-cols-2 max-md:grid-cols-1 gap-4 ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                    <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
                    <div className={`relative mx-auto max-sm:w-full h-auto xl:h-auto xl:w-80`}>
                        <NexImage className={`!relative rounded-lg ${get(tailwindClasses,'image')}`} style={get(style,'image')} src={get(props,'imageUrl')}/>
                        {get(props,'circleImage').length !== 0 && 
                        <div className='absolute bottom-5 md:-right-3 xl:-right-20 lg:-right-16'><NexImage className={`!relative !h-48 !w-48 !max-sm:h-32 !max-sm:w-32 border-4 border-white  rounded-full ${get(tailwindClasses,'circleImage')}`} style={get(style,'circleImage')} src={get(props,'circleImage')} alt=""/></div>}
                    </div>
                    </NexAnimation>
                    <NexAnimation  type={get(props, 'rightContentAnimation', '')}>
                    <div className={`md:ml-10 lg:ml-5 ${get(tailwindClasses,'textContainer')}`} style={get(style,'textContainer')}>
                        {get(props,'subTitle').length !== 0 && <h1 className={`nx-text-primary font-light text-sm mb-2 ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h1>}
                        {get(props,'title').length !== 0 && <h1 className={`nx-section-heading-font text-4xl font-bold mb-3 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h1>}
                        {get(props,'description').length !== 0 &&<p className={`text-sm font-light mb-2 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props,'description')}</p>}
                        {get(props,'cardText').length !== 0 && <div className={`border-l-4 nx-border-primary-dark border-t border-b border-r border-r-gray-100 border-b-gray-100 border-t-gray-100 shadow-xl p-2 rounded-lg my-4 px-3 ${get(tailwindClasses,'card')}`} style={get(style,'card')}>
                           <p className={`text-sm font-medium px-4 py-2 ${get(tailwindClasses,'cardText')}`} style={get(style,'cardText')}>{get(props,'cardText')}</p> 
                        </div>}
                        <div className='flex flex-wrap justify-between'>
                         {props.items.map((item) => get(item, 'text').length !== 0 && <div className='flex items-start gap-2 mb-3'>
                                {get(item, 'icon').length !== 0 && <span className={`nx-text-primary mt-1 ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(item, 'icon'))}</span>}
                                <span className={`text-sm font-medium ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(item, 'text')}</span>
                            </div>)} 
                        </div>
                        <div className='flex items-center justify-between'>
                            {get(props,'ctaText').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover text-[10px] font-medium px-8 py-3 md:px-10 rounded-full ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><a href={get(props,'ctaLink')}>{get(props,'ctaText')}</a></button>}
                            <div className='flex items-center gap-2'>
                                {get(props,'personImage').length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses,'personImage')}`} style={get(style,'personImage')} src={get(props,'personImage')} alt="" />}
                                <div>
                                    {get(props,'personSubTitle').length !== 0 && <p className={`text-[10px] md:text-[8px] font-extralight text-gray-500 ${get(tailwindClasses,'personSubTitle')}`} style={get(style,'personSubTitle')}>{get(props,'personSubTitle')}</p>}
                                    {get(props,'personTitle').length !== 0 && <p className={`text-xs md:text-[8px] font-bold ${get(tailwindClasses,'personTitle')}`} style={get(style,'personTitle')}>{get(props,'personTitle')}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    </NexAnimation>
                </div>
            </div>
        </div>
    )
}


FeatureSectionV23.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        circleImage:{},
        textContainer:{},
        subTitle:{},
        title:{},
        description:{},
        card:{},
        cardText:{},
        icon:{},
        text:{},
        cta:{},
        personImage:{},
        personSubTitle:{},
        personTitle:{},
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        image:"",
        circleImage:"",
        textContainer:"",
        subTitle:"",
        title:"",
        description:"",
        card:"",
        cardText:"",
        icon:"",
        text:"",
        cta:"",
        personImage:"",
        personSubTitle:"",
        personTitle:"",
    },
    leftContentAnimation:"",
    rightContentAnimation:"",
    imageUrl:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
    circleImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    subTitle:"Start Donating Poor People",
    title:"Donate Support to giving Make a Difference",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos delectus expedita dolorem eaque distinctio placeat maxime!",
    cardText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos delectus expedita dolorem eaque",
    ctaLink:"#",
    ctaText:"More About Us",
    personImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1732793119.photo-1519345182560-3f2917c472ef-removebg-preview.png",
    personSubTitle:"Ceo of Charity Fund",
    personTitle:"Leslie Alexander",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`,
            text: 'Giving Hope,Changing Lives'
        },
    ]
}
FeatureSectionV23.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    imageUrl: PropTypes.string,
    circleImage: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cardText: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaText: PropTypes.string,
    personImage: PropTypes.string,
    personSubTitle: PropTypes.string,
    personTitle: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
export default FeatureSectionV23
