import get from 'lodash.get'
import React from 'react'
import PropTypes from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';


const FeatureSectionV17 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    return (
        <div className={`py-5 ${get(tailwindClasses, 'container')}`} style={get(style, "container")}>
            <div className={`grid grid-cols-6 max-lg:grid-cols-10 max-md:grid-cols-1 ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                <div className={`grid col-start-2 max-lg:col-span-6 max-lg:col-start-2 col-span-3 grid-cols-1 gap-4`}>
                    <div>
                        {get(props, "subTitle").length !==0 && <a href={get(props, "subTitleLink")}><button className={`text-xs text-green-400 bg-transparent hover:bg-green-800 hover:text-white hover:border-none px-3 py-1 border border-green-400 rounded-xl mb-2 ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props, "subTitle")}</button></a>}
                        {get(props, "title").length !==0 && <h1 className={`max-md:text-center mr-40 max-md:mr-0 text-4xl font-bold ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, "title")}</h1>}
                    </div>
                    <div className='grid grid-cols-3 max-md:grid-cols-1 max-md:justify-center'>
                        <div className='relative flex items-start max-md:justify-center'>
                            {get(props,'leftImage').length !==0 && <NexImage className={`!h-64 !w-[200px] !relative ${get(tailwindClasses,'leftImage')}`} style={get(style,'leftImage')} src={get(props,'leftImage')} alt="" />}
                            {get(style,'leftOverlapImage').length !==0 && <div className='absolute -bottom-2 -right-2'><NexImage className={`!relative max-lg:botttom-0 max-lg:-right-4 max-xl:-right-4 max-xl:bottom-1 max-md:hidden rounded-t-full !h-56 !w-auto ${get(tailwindClasses,'leftOverlapImage')}`} style={get(style,'leftOverlapImage')} src={get(props,'leftOverlapImage')} alt="" /></div>}
                        </div>
                        <div className='col-span-2 px-10'>
                            {get(props, "description1").length !==0 && <p className={`font-bold text-sm mb-2 ${get(tailwindClasses,'description1')}`} style={get(style,'description1')}>{get(props, "description1")}</p>}
                            {get(props, "description2").length !==0 && <p className={`font-light text-sm mb-10 max-md:mb-5 ${get(tailwindClasses,'description2')}`}  style={get(style,'description2')}>{get(props, "description2")}</p>}
                            {get(props, 'ctaText').length !== 0 && <a href={get(props, "ctaLink")}><button className={`bg-green-800 text-gray-50 text-sm px-4 py-1 rounded-full hover:bg-transparent hover:text-green-800 hover:border hover:border-green-800 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props, 'ctaText')}</button></a>}
                        </div>
                    </div>
                </div>
                <div className='max-lg:col-span-2 flex items-end justify-end max-md:hidden'>
                    {get(props,'rightImage').length !==0 && <NexImage className={`!h-96 !w-48 !relative max-lg:h-[425px] max-lg:w-56 rounded-b-full ${get(tailwindClasses,'rightImage')}`} style={get(style,'rightImage')} src={get(props,'rightImage')} alt="" />}
                </div>
            </div>
        </div>
    )
}


FeatureSectionV17.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle:{},
        title:{},
        description1:{},
        description2:{},
        leftImage:{},
        leftOverlapImage:{},
        rightImage:{},
        cta:{}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle:"",
        title:"",
        description1:"",
        description2:"",
        leftImage:"",
        leftOverlapImage:"",
        rightImage:"",
        cta:""
    },
    subTitle: "About Us",
    subTitleLink: "#",
    title: "Global Challenges Aid And Assistance Support",
    description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim, tenetur sunt reiciendis placeat quia recusandae ab accusantium exercitationem culpa pariatur hic amet. Sequi quibusdam culpa placeat, sed vel, tempora perspiciatis quod rem beatae blanditiis doloremque! Atque quo vitae iusto.",
    description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim, tenetur sunt reiciendis placeat quia recusandae ab accusantium exercitationem culpa pariatur hic amet. Sequi quibusdam culpa placeat, sed vel, tempora perspiciatis quod rem beatae blanditiis doloremque! Atque quo vitae iusto.",
    ctaText: "Read more",
    ctaLink: "#",
    leftImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    rightImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
    leftOverlapImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735308588.192x384.png",
}
FeatureSectionV17.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    subTitleLink: PropTypes.string,
    title: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    leftImage:PropTypes.string,
    rightImage:PropTypes.string,
    leftOverlapImage:PropTypes.string,
}
export default FeatureSectionV17
