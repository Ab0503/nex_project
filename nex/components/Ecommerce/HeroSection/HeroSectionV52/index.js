import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import NexAnimation from '@nex-components/NexAnimation';
import { arrayOf, number, object } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';

const HeroSectionV52 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})

    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);
    return (
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper autoplay={{
                delay: `${get(props,'sliderDelay')}`
            }} spaceBetween={10} freeMode={true} modules={[FreeMode, Pagination, Autoplay]} onSwiper={(swiper) => swiperRef.current = swiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={`overflow-hidden relative w-full h-[300px] md:h-[300px] lg:h-full  ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                            {get(item, 'bgImage', "").length !== 0 && <NexImage src={get(item, 'bgImage')} className={`!relative !w-full !h-full object-cover ${get(tailwindClasses, 'bgImage')}`} style={get(style, 'bgImage')} />}
                            <div className='absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 max-w-xl'>
                                <NexAnimation type={get(props, 'contentAnimation')}>
                                    {get(item, 'subTitle', "").length !== 0 && <h1 className={`text-[.75rem] uppercase mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(item, 'subTitle')}</h1>}
                                    {get(item, 'title', "").length !== 0 && <h1 className={`text-5xl max-w-lg mx-auto mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h1>}
                                    {get(item, 'ctaText', '').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                        <PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink>
                                    </button>}
                                </NexAnimation>
                            </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
            <div className="relative flex justify-center -mt-4 space-x-2 z-10">
                {Array.isArray(get(props, 'items', [])) && get(props, "items", []).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? `nx-bg-primary w-8` : "bg-gray-600"
                            }`}
                        onClick={() => swiperRef.current?.slideTo(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}

HeroSectionV52.propTypes={
    style: object,
    tailwindClasses: object,
    sliderDelay: number,
    items: arrayOf(object)
}

HeroSectionV52.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        subTitle:{},
        title:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        subTitle:"",
        title:"",
        cta:""
    },
    sliderDelay:3000,
    contentAnimation:"",
    items: [
        {
            bgImage: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1920&h=510&fit=crop&dpr=1",
            subTitle: "the shopping list",
            title: "5 looks we love this month",
            ctaLink: "#",
            ctaText: "see more"
        },
        {
            bgImage: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1920&h=510&fit=crop&dpr=1",
            subTitle: "the shopping list",
            title: "5 looks we love this month",
            ctaLink: "#",
            ctaText: "see more"
        },
        {
            bgImage: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1920&h=510&fit=crop&dpr=1",
            subTitle: "the shopping list",
            title: "5 looks we love this month",
            ctaLink: "#",
            ctaText: "see more"
        }
    ]
}
export default withData(HeroSectionV52)
