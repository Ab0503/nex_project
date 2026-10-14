import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const AboutV17 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <div className={`px-5 py-16 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                <div className='w-full lg:w-6/12 flex flex-col items-center justify-center max-sm:mb-5'>
                    <NexAnimation type={get(props, 'leftContentAnimation', '')}>
                        {get(props, 'logoImage', '').length !== 0 && <NexImage src={get(props, 'logoImage')} className={`!relative !h-10 !w-auto mb-3 mx-auto ${get(tailwindClasses, 'logoImage')}`} style={get(style, 'logoImage')} />}
                        {get(props, 'subTitle', '').length !== 0 && <h1 className={`nx-text-primary font-semibold uppercase text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                        {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font font-bold text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                        {get(props, 'description', '').length !== 0 && <p className={`max-w-lg text-center mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'ctaText', '').length !== 0 && <div className='flex justify-center'>
                            <button className={`nx-btn-primary nx-btn-primary:hover px-5 py-2 rounded-xl hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>
                        </div>}
                    </NexAnimation>
                </div>
                <div className='w-full lg:w-6/12'>
                    <NexAnimation type={get(props, 'rightContentAnimation', '')}>
                        {get(props, 'image', '').length !== 0 && <NexImage src={get(props, 'image')} className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                    </NexAnimation>
                </div>
            </div>
        </div>
    )
}

AboutV17.propTypes={
    style: object,
    tailwindClasses: object,
    image: string,
    logoImage: string,
    subTitle: string,
    title: string,
    description: string,
    ctaLink: string,
    ctaText: string,
}

AboutV17.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        image:{},
        logoImage:{},
        subTitle:{},
        title:{},
        description:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        image:"",
        logoImage:"",
        subTitle:"",
        title:"",
        description:"",
        cta:""
    },
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    subTitle: "Our story",
    title: "About Restora",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iusto vero at maiores, eos accusamus cupiditate nihil quis odit voluptate numquam officiis nostrum quos doloribus repellat odio repellendus. Doloremque voluptatum impedit neque eaque nihil vel maiores aut sit. Saepe voluptates animi hic voluptatem. Animi error enim, est dolor illum rerum!",
    ctaLink: "#",
    ctaText: "Read more",
    leftContentAnimation:"",
    rightContentAnimation:""
}

export default AboutV17
