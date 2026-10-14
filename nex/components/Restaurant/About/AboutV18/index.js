import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const AboutV18 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <div className={`px-5 lg:px-20 py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className='w-full lg:w-6/12 max-sm:mb-5'>
                    <NexAnimation type={get(props, 'rightContentAnimation', '')}>
                        <div className='flex flex-col md:flex-row gap-10'>
                            {get(props, 'image1', '').length !== 0 && <NexImage src={get(props, 'image1')} className={`!relative !h-[400px] lg:!w-64 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                            {get(props, 'image2', '').length !== 0 && <NexImage src={get(props, 'image2')} className={`!relative !h-[400px] lg:!w-64 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                        </div>
                    </NexAnimation>
                </div>
                <div className='w-full lg:w-6/12 flex flex-col items-center justify-center'>
                    <NexAnimation type={get(props, 'leftContentAnimation', '')}>
                        {get(props, 'logoImage', '').length !== 0 && <NexImage src={get(props, 'logoImage')} className={`!relative !h-10 !w-auto mb-3 mx-auto ${get(tailwindClasses, 'logoImage')}`} style={get(style, 'logoImage')} />}
                        {get(props, 'subTitle', '').length !== 0 && <h1 className={`uppercase text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                        {get(props, 'title', '').length !== 0 && <h4 className={`nx-text-primary nx-section-heading-font text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                        {get(props, 'description', '').length !== 0 && <p className={`max-w-lg text-center mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props, 'ctaText', '').length !== 0 && <div className='flex justify-center'>
                            <button className={`uppercase nx-border-primary hover:border-b-2 text-sm pb-1 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>
                        </div>}
                    </NexAnimation>
                </div>
            </div>
        </div>
    )
}

AboutV18.propTypes = {
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

AboutV18.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        image: {},
        logoImage: {},
        subTitle: {},
        title: {},
        description: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        image: "",
        logoImage: "",
        subTitle: "",
        title: "",
        description: "",
        cta: ""
    },
    image1: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=256&h=400&fit=crop&dpr=1",
    image2: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=256&h=400&fit=crop&dpr=1",
    logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    subTitle: "The Restra",
    title: "The Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iusto vero at maiores, eos accusamus cupiditate nihil quis odit voluptate numquam officiis nostrum quos doloribus repellat odio repellendus. Doloremque voluptatum impedit neque eaque nihil vel maiores aut sit. Saepe voluptates animi hic voluptatem. Animi error enim, est dolor illum rerum!",
    ctaLink: "#",
    ctaText: "Read more",
    leftContentAnimation: "",
    rightContentAnimation: ""
}

export default AboutV18
