import React from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { arrayOf, object, string } from 'prop-types';

const LogoCloudV8 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <section className={`py-14 px-5 bg-white relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(9,8,33,.75)] ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className='max-w-6xl mx-auto relative z-[2]'>
                <Swiper breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 6
                    }
                }}>
                    {get(props, 'items', []).map((item) => <SwiperSlide><div className='flex justify-center'><NexImage src={get(item, 'image')} className={`!relative !h-12 !w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} /></div></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

LogoCloudV8.propTypes = {
    style: object,
    tailwindClasses: object,
    bgImage: string,
    items: arrayOf(object)
}  

LogoCloudV8.defaultProps = {
    style: {
        container:{},
        image:{}
    },
    tailwindClasses: {
        container:"",
        image:""
    },
    bgImage: "https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop&dpr=1",
    items: [
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12eb349c7e06f14889735_VisionDefault.svg",
        },
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607d9af04bec23b2b36e85_Vancouver-white.svg",
        },
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12eb349c7e06f14889735_VisionDefault.svg",
        },
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607d9af04bec23b2b36e85_Vancouver-white.svg",
        },
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12eb349c7e06f14889735_VisionDefault.svg",
        },
        {
            image: "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607d9af04bec23b2b36e85_Vancouver-white.svg",
        },
    ]
}
export default LogoCloudV8
