import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import parse from 'html-react-parser';

const FeatureSectionV42 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase font-semibold text-sm mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title1', '').length !== 0 && <h4 className={`text-center text-4xl font-medium nx-section-heading-font mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <span className={`nx-text-primary italic`}>{get(props, 'title2')}</span></h4>}
            <div className='relative max-w-6xl mx-auto'>
                <Swiper loop={true} onSwiper={(swiper)=> (swiperRef.current=swiper)} breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1440: {
                        slidesPerView: `${get(props, 'sectionKeyNo')}`
                    }
                }} spaceBetween={30}>
                    {get(props, 'items', []).map((item) => <SwiperSlide>
                        <div className={`group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'image', '').length !== 0 && <figure className='border p-2'>
                                <div className='relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:transition-all before:duration-700 before:ease-in-out group-hover:before:bg-rose-800/60'>
                                    <NexImage src={get(item, 'image')} className={`!relative !h-auto !w-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} />
                                </div>
                            </figure>}
                            <div className='-mt-20 max-w-xs mx-auto relative z-10 bg-white'>
                                <div className='p-5 shadow-lg'>
                                    {get(item, 'name', '').length !== 0 && <PrimaryLink href={get(item, 'ctaLink')}><h1 className={`text-center font-semibold text-2xl nx-text-hover-primary mb-3 ${get(tailwindClasses, 'sectionName')}`} style={get(style, 'sectionName')}>{get(item, 'name')}</h1></PrimaryLink>}
                                    {get(item, 'description', '').length !== 0 && <h1 className={`text-center text-gray-500 font-medium mb-3 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description')}</h1>}
                                </div>
                                {get(item, 'ctaText').length !== 0 && <button className={`bg-rose-800 text-white px-5 py-2 text-center w-full font-medium ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink></button>}
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`custom-prev absolute xl:-left-20 -left-5 max-sm:-left-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-black ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'prevIcon'))}
                    </button>
                )}
                {get(props, 'nextIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`custom-next absolute xl:-right-20 -right-5 max-sm:-right-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-black ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </div>
        </section>
    )
}

FeatureSectionV42.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    subTitle: string,
    title1: string,
    title2: string,
    items: arrayOf(object)
}

FeatureSectionV42.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionImage: {},
        sectionName: {},
        sectionDescription: {},
        sectionCta: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionImage: "",
        sectionName: "",
        sectionDescription: "",
        sectionCta: ""
    },
    sectionKeyNo: 3,
    subTitle: "Services",
    title1: "Our",
    title2: "Services",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`,
    items: [
        {
            image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=700&h=550&fit=crop&dpr=1",
            name: "Haircut",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aspernatur voluptates nostrum odit.",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=700&h=550&fit=crop&dpr=1",
            name: "Haircut",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aspernatur voluptates nostrum odit.",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=700&h=550&fit=crop&dpr=1",
            name: "Haircut",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aspernatur voluptates nostrum odit.",
            ctaLink: "#",
            ctaText: "Learn More"
        },
        {
            image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=700&h=550&fit=crop&dpr=1",
            name: "Haircut",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aspernatur voluptates nostrum odit.",
            ctaLink: "#",
            ctaText: "Learn More"
        },
    ]
}
export default FeatureSectionV42
