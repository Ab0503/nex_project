import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const ImageBannerV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-16 px-5 relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(0,0,0,.5)] ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, backgroundSize: "cover", ...get(style, 'container') }}>
            <div className='relative z-10 text-white'>
            {get(props, 'logo', '').length !== 0 && <NexImage src={get(props, 'logo')} className={`!relative !h-12 !w-auto mx-auto mb-3 ${get(tailwindClasses, 'logo')}`} style={{filter: "grayscale(100%) brightness(150%)",...get(style, 'logo')}} />}
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`uppercase text-center text-lg font-semibold mb-2 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title', '').length !== 0 && <h4 className={`nx-section-heading-font text-4xl font-bold text-center mb-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
            {get(props, 'description', '').length !== 0 && <h4 className={`max-w-lg mx-auto text-center ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</h4>}
            </div>
        </section>
    )
}

ImageBannerV1.propTypes={
    style: object,
    tailwindClasses: object,
    bgImage: string,
    logo: string,
    subTitle: string,
    title: string,
    description: string,
}

ImageBannerV1.defaultProps = {
    style: {
        container:{},
        logo:{},
        subTitle:{},
        title:{},
        description:{}
    },
    tailwindClasses: {
        container:"",
        logo:"",
        subTitle:"",
        title:"",
        description:""
    },
    bgImage: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=2100&h=400&fit=crop&dpr=1",
    logo: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    subTitle: "Menu Specials",
    title: "Fresh and Healthy",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis ab dolor.",
}
export default ImageBannerV1
