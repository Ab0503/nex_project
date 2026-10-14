import React, { useRef } from 'react';
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import NexImage from '@nex-core-ui/NexImage';
import { Autoplay, Parallax } from 'swiper/modules';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object } from 'prop-types';
import parse from 'html-react-parser';

const HeroSectionV55 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null)
    return (
        <section className={`bg-rose-800 h-[150px] md:h-[270px] xl:h-[500px] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='px-5 md:px-10 xl:px-20'>
                <Swiper onSwiper={(swiper) => swiperRef.current = swiper} autoplay={{ delay: 3000 }} loop={true} parallax={true} speed={3000} modules={[Parallax, Autoplay]}>
                    {get(props, 'items', []).map((item) => <SwiperSlide className='relative'>
                        {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`!relative !h-full max-sm:!h-[220px] !w-full z-[-1] ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                        {get(props, 'backgroundText', '').length !== 0 && <h4 className={`absolute top-[15%] left-[10%] text-[6rem] xl:text-[8rem] z-[1] font-serif font-semibold text-white max-sm:hidden ${get(tailwindClasses, 'backgroundText')}`} style={get(style, 'backgroundText')}>{get(props, 'backgroundText')}</h4>}
                        <div className='absolute z-[2] left-[15%] top-1/2 -translate-y-1/2 '>
                            {get(item, 'title', '').length !== 0 && <h4 className={`nx-text-primary text-2xl sm:text-6xl font-serif max-w-[10rem] sm:max-w-sm  leading-snug mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h4>}
                            {get(item, 'description', '').length !== 0 && <h4 className={`text-xl font-serif max-w-sm sm:max-w-lg ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</h4>}
                            <div className='flex gap-5 items-center mt-5'>
                                {get(item, 'cta1', '').length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover font-semibold px-6 py-3 hover:-translate-y-[.15rem] hover:shadow-xl max-sm:hidden ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}><PrimaryLink href={get(item, 'cta1Link')}>{get(item, 'cta1')}</PrimaryLink></button>}
                                {get(item, 'cta2', '').length !== 0 && <button className={`bg-black/80 text-white font-semibold px-6 py-3 hover:-translate-y-[.15rem] hover:shadow-xl max-sm:hidden ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}><PrimaryLink href={get(item, 'cta2Link')}>{get(item, 'cta2')}</PrimaryLink></button>}
                            </div>
                        </div>
                    </SwiperSlide>)}
                    {get(props, 'prevIcon', "").length !== 0 && (
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={`custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/25 py-8 px-1 hover:bg-white hover:text-black hover:transition-all hover:duration-700 ${get(tailwindClasses, 'ctaIcon')}`}
                                style={get(style, 'ctaIcon')}
                            >
                                {parse(get(props, 'prevIcon'))}
                            </button>
                        )}
                        {get(props, 'nextIcon', "").length !== 0 && (
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className={`custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/25 py-8 px-1 hover:bg-white hover:text-black hover:transition-all hover:duration-700 ${get(tailwindClasses, 'ctaIcon')}`}
                                style={get(style, 'ctaIcon')}
                            >
                                {parse(get(props, 'nextIcon'))}
                            </button>
                        )}
                </Swiper>
            </div>
        </section>
    )
}

HeroSectionV55.propTypes = {
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
}

HeroSectionV55.defaultProps = {
    style: {
        container: {},
        image:{},
        backgroundText:{},
        title:{},
        description:{},
        cta1:{},
        cta2:{},
        ctaIcon:{}
    },
    tailwindClasses: {
        container: {},
        image:{},
        backgroundText:{},
        title:{},
        description:{},
        cta1:{},
        cta2:{},
        ctaIcon:{}
    },
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`,
    backgroundText: "Nail Care",
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1742454593.slide5.jpg",
            title: "Experience In Nail Care",
            description: "Incredible Nail Designs & Special Promotions",
            cta1: "More About Us",
            cta1Link: "#",
            cta2: "Appointment",
            cta2Link: "#"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1742454593.slide5.jpg",
            title: "Experience In Nail Care",
            description: "Incredible Nail Designs & Special Promotions",
            cta1: "More About Us",
            cta1Link: "#",
            cta2: "Appointment",
            cta2Link: "#"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1742454593.slide5.jpg",
            title: "Experience In Nail Care",
            description: "Incredible Nail Designs & Special Promotions",
            cta1: "More About Us",
            cta1Link: "#",
            cta2: "Appointment",
            cta2Link: "#"
        },
    ]
}
export default HeroSectionV55
