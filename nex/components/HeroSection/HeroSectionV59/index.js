import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import { React, useRef } from 'react'
import { Autoplay, EffectFade, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';
import withData from '@nex-core-ui/HOC/withData';


const HeroSectionv59 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
   
    return (
        <section className={`!h-screen text-white ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
                autoplay={{
                    delay: `${get(props, 'sliderDelay')}`,
                }} loop={true} effect='fade' fadeEffect={{crossFade:true}} spaceBetween={10} pagination={{ clickable: true }} freeMode={true} modules={[FreeMode, Pagination, Autoplay,EffectFade]} className="h-full w-screen [&_.swiper-pagination-bullet]:bg-red-600 [&_.swiper-pagination-bullet-active]:bg-red-600 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet-active]:h-3 [&_.swiper-pagination-bullet-active]:w-3">
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <SwiperSlide className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] " style={{ backgroundImage: `url(${get(item, 'bgImage')})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="!relative z-[2] !h-full">
                        <div className={`flex justify-${get(item, 'boxPosition')} flex-wrap !h-full`}>
                            <div className={`md:w-11/12 lg:w-8/12 xl:w-6/12 ${get(item, 'boxPosition') === "start" ? "lg:ml-[8.333333333%]" : ""} xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-${get(item, 'textPosition')} justify-center self-center`}>
                                <NexAnimation type={get(props, 'contentAnimation')}>
                                    {get(item, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font uppercase font-bold leading-[1.2] xl:text-[2rem] text-[calc(1.405rem_+_1.86vw)] mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h2>}
                                    {get(item, 'description', "").length !== 0 && <p className={`xl:text-[2rem] text-[calc(1.405rem_+_1.86vw)] uppercase leading-normal mb-7 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                                    {get(item, 'ctaText', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-1s"><button className={`relative overflow-hidden group nx-btn-primary text-[12px] uppercase font-medium py-2 px-4 rounded ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                                        <span className="absolute inset-0 nx-btn-primary:hover scale-0 group-hover:scale-150 transition-transform duration-300 ease-out rounded-full origin-center z-0"></span>
                                        <PrimaryLink href={get(item,'ctaLink')} className="relative z-10">{get(item,'ctaText')}</PrimaryLink>
                                    </button></div>}
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`custom-prev absolute left-0 max-sm:left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full z-10 nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'prevIcon'))}
                    </button>
                )}
                {get(props, 'nextIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`custom-next absolute right-0 max-sm:right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full z-10 nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </Swiper>
        </section>
    )
}

HeroSectionv59.propTypes = {
    style: object,
    tailwindClasses: object,
    sliderDelay: number,
    playIcon: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    items: arrayOf(object)
}

HeroSectionv59.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        cta: {},
        ctaIcon: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        description: "",
        cta: "",
        ctaIcon: "",
    },
    sliderDelay: 3000,
    playIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" /></svg>`,

    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
</svg>

`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>
`,
    items: [
        {
            boxPosition: "center",
            textPosition: "center",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "Best Online Learning",
            description: "The Easier Way",
            ctaLink: "#",
            ctaText: "start a course",
        },
        {
            boxPosition: "start",
            textPosition: "left",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "Best Online Learning",
            description: "The Easier Way",
            ctaLink: "#",
            ctaText: "start a course",
        },
        {
            boxPosition: "end",
            textPosition: "left",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "Best Online Learning",
            description: "The Easier Way",
            ctaLink: "#",
            ctaText: "start a course",
        },
    ],
    contentAnimation: ""
}

export default withData(HeroSectionv59)