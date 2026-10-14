import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import NexAnimation from '@nex-components/NexAnimation';
import { arrayOf, number, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';
import parse from 'html-react-parser';

const HeroSectionV54 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };

    return (
        <div className={`relative overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper freeMode={true} modules={[FreeMode, Pagination]} onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange();
            }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                    handleSlideChange();
                }}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={`overflow-hidden relative w-full h-[500px] md:h-[500px] lg:h-[600px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                            {get(item, 'bgImage', "").length !== 0 && <NexImage src={get(item, 'bgImage')} className={`!relative !w-full !h-full object-cover ${get(tailwindClasses, 'bgImage')}`} style={get(style, 'bgImage')} />}
                                <div className='absolute top-1/2 sm:left-1/2 -translate-y-1/2 sm:-translate-x-1/2 max-w-xl text-white z-10'>
                                <NexAnimation type={get(props, 'contentAnimation')}>
                                    {get(item, 'logoImage', '').length !== 0 && <div className="flex items-center justify-center space-x-4 mb-5">
                                        <div className="flex gap-2">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                                            ))}
                                        </div>
                                        <NexImage src={get(item, 'logoImage')} alt="Icon" className={`!relative !w-auto !h-10 ${get(tailwindClasses, 'logoImage')}`} style={{ filter: "grayscale(100%) brightness(150%)", ...get(style, 'logoImage') }} />
                                        <div className="flex gap-2">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                                            ))}
                                        </div>
                                    </div>}
                                    {get(item, 'title', "").length !== 0 && <h1 className={`text-5xl mx-auto text-center mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h1>}
                                    {get(item, 'subTitle', "").length !== 0 && <h1 className={`text-base text-center uppercase mb-5 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(item, 'subTitle')}</h1>}
                                    <div className='flex justify-center space-x-4 mx-auto'>
                                        {get(item, 'cta1Text', '') && <button className={`rounded-lg nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}>
                                            <PrimaryLink href={get(item, 'cta1Link')}>{get(item, 'cta1Text')}</PrimaryLink>
                                        </button>}
                                        {get(item, 'cta2Text', '') && <button className={` bg-gray-600 bg-opacity-30 rounded-lg hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}>
                                            <PrimaryLink href={get(item, 'cta2Link')}>{get(item, 'cta2Text')}</PrimaryLink>
                                        </button>}
                                    </div>
                                    </NexAnimation> </div>
                            
                        </div>
                    </SwiperSlide>)}
            </Swiper>
            <div className="relative flex justify-end mx-20 -mt-10 pb-10 space-x-2 z-10">
                {Array.isArray(get(props, 'items', [])) && get(props, "items", []).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? `nx-bg-primary w-8` : "bg-gray-600"
                            }`}
                        onClick={() => swiperRef.current?.slideTo(index)}
                    ></button>
                ))}
            </div>
            {get(props, 'prevIcon', "").length !== 0 && (
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    className={`custom-prev absolute left-0 max-sm:left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 ${isBeginning
                        ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
                        : 'nx-btn-primary nx-btn-primary:hover'
                        } ${get(tailwindClasses, 'ctaIcon')}`}
                    style={get(style, 'ctaIcon')}
                >
                    {parse(get(props, 'prevIcon'))}
                </button>
            )}
            {get(props, 'nextIcon', "").length !== 0 && (
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    className={`custom-next absolute right-0 max-sm:right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 ${isEnd
                        ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
                        : 'nx-btn-primary nx-btn-primary:hover'
                        } ${get(tailwindClasses, 'ctaIcon')}`}
                    style={get(style, 'ctaIcon')}
                >
                    {parse(get(props, 'nextIcon'))}
                </button>
            )}
        </div>
    )
}

HeroSectionV54.propTypes = {
    style: object,
    tailwindClasses: object,
    nextIcon: string,
    prevIcon: string,
    items: arrayOf(object)
}

HeroSectionV54.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        logoImage: {},
        title: {},
        subTitle: {},
        cta1: {},
        cta2: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        logoImage: "",
        title: "",
        subTitle: "",
        cta1: "",
        cta2: "",
        ctaIcon: ""
    },
    contentAnimation: "",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`,
    items: [
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop&dpr=1",
            logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
            title: "Welcome To The Restora",
            subTitle: "People who love to eat are always the best people",
            cta1Link: "#",
            cta1Text: "Our Story",
            cta2Link: "#",
            cta2Text: "View Menu",
        },
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop&dpr=1",
            logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
            title: "5 looks we love this month",
            subTitle: "People who love to eat are always the best people",
            cta1Link: "#",
            cta1Text: "Our Story",
            cta2Link: "#",
            cta2Text: "View Menu",
        },
        {
            bgImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop&dpr=1",
            logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
            title: "5 looks we love this month",
            subTitle: "People who love to eat are always the best people",
            cta1Link: "#",
            cta1Text: "Our Story",
            cta2Link: "#",
            cta2Text: "View Menu",
        }
    ]
}
export default withData(HeroSectionV54)
