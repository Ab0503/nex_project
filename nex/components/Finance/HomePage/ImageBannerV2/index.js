import get from 'lodash.get'
import { object, string } from 'prop-types';
import React from 'react'

const ImageBannerV2 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.8)] ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, backgroundSize: "cover", ...get(style, 'container') }}>
            <div className='max-w-2xl mx-auto relative z-[1]'>
                {get(props, 'text1','').length !==0 &&<h4 className={`text-center text-3xl font-semibold text-yellow-600 nx-section-heading-font ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')} <span className='text-gray-950'>{get(props, 'text2')}</span></h4>}
            </div>
        </section>
    )
}

ImageBannerV2.propTypes={
    style: object,
    tailwindClasses: object,
    bgImage: string,
    text1: string,
    text2: string,
}

ImageBannerV2.defaultProps = {
    style: {
        container:{},
        text:{}
    },  
    tailwindClasses: {
        container:"",
        text:""
    },
    bgImage: "https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop&dpr=1",
    text1: "To help entrepreneurs get their act together",
    text2: "before they talk to investors.",
}
export default ImageBannerV2
