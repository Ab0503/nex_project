import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import NexAnimation from '@nex-components/NexAnimation';
import { arrayOf, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';
import parse from 'html-react-parser';

const HeroSectionV57 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {})

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };

    return (
        <div className={`relative overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper pagination={{clickable:true}} freeMode={true} modules={[FreeMode, Pagination]} onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange();
            }}
                onSlideChange={() => {
                    handleSlideChange();
                }} className="[&_.swiper-pagination-bullet]:bg-yellow-600 [&_.swiper-pagination-bullet-active]:bg-yellow-600 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet-active]:h-3 [&_.swiper-pagination-bullet-active]:w-3">
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={`overflow-hidden relative w-full h-[500px] md:h-[500px] lg:h-[700px] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                            {get(item, 'bgVideo','').length !==0 &&<video src={get(item, 'bgVideo')} className={`!relative !w-full !h-full object-cover ${get(tailwindClasses, 'bgVideo')}`} style={get(style, 'bgVideo')} autoPlay muted loop/>}
                                <div className='absolute top-[66%] sm:left-1/2 -translate-y-[66%] sm:-translate-x-1/2 max-w-xl text-white z-10 px-5'>
                                <NexAnimation type={get(props, 'contentAnimation')}>
                                    {get(item, 'title', "").length !== 0 && <h1 className={`text-3xl sm:text-5xl mx-auto text-center mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h1>}
                                    {get(item, 'subTitle', "").length !== 0 && <p className={`max-w-lg text-lg text-center mb-5 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(item, 'subTitle')}</p>}
                                    <div className='flex justify-center'>
                                        {get(item, 'ctaText', '').length !== 0 && <button className={`bg-gray-950 text-white border-2 border-gray-950 hover:bg-yellow-600 hover:text-gray-950 font-semibold transition-all duration-300 px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                                            <PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink>
                                        </button>}
                                    </div>
                                    </NexAnimation> 
                                    </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
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

HeroSectionV57.propTypes = {
    style: object,
    tailwindClasses: object,
    nextIcon: string,
    prevIcon: string,
    items: arrayOf(object)
}

HeroSectionV57.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        bgVideo:{},
        title: {},
        subTitle: {},
        cta: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        bgVideo:"",
        title: "",
        subTitle: "",
        cta: "",
        ctaIcon: ""
    },
    contentAnimation: "",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
    items: [
        {
            bgVideo: "https://v.ftcdn.net/01/86/75/10/700_F_186751055_B0ZrShFQTr8K7qJUJvc5vMdHRYNsOxsP_ST.mp4",
            title: "Welcome To The Consulting",
            subTitle: "Challenging established thinking, achieving sustainable advantage",
            ctaLink: "#",
            ctaText: "Our Services",
        },
        {
            bgVideo: "https://v.ftcdn.net/01/86/75/10/700_F_186751055_B0ZrShFQTr8K7qJUJvc5vMdHRYNsOxsP_ST.mp4",
            title: "Welcome To The Consulting",
            subTitle: "Challenging established thinking, achieving sustainable advantage",
            ctaLink: "#",
            ctaText: "Our Services",
        },
        {
            bgVideo: "https://v.ftcdn.net/01/86/75/10/700_F_186751055_B0ZrShFQTr8K7qJUJvc5vMdHRYNsOxsP_ST.mp4",
            title: "Welcome To The Consulting",
            subTitle: "Challenging established thinking, achieving sustainable advantage",
            ctaLink: "#",
            ctaText: "Our Services",
        },
    ]
}
export default withData(HeroSectionV57)

