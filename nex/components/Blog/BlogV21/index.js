import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import 'swiper/css';
import NexImage from '@nex-core-ui/NexImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };
  const SwiperButtonPrevious = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
  };

const BlogV21 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const swiper = useSwiper();
    
  return (
    <div>
        <div class={`bg-gray-200 items-center justify-center ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {/* People Background  */}
            <div className={`container max-w-full place-content-center h-96 bg-gray-100 ${get(tailwindClasses, 'image')}`} style ={{background:`url('${get(props,'imagePath')}')`,"backgroundRepeat":"no-repeat","backgroundSize":"cover",...get(style, 'image')}}>
                {/* Foreground Content  */}
                <div className="flex items-center justify-center">
                {
                    (get(props, 'icon',"").length != 0 || get(props, 'subTitle',"").length != 0 || get(props, 'title',"").length != 0 ||
                    get(props, 'arrowIcon1',"").length != 0 || get(props, 'arrowIcon2',"").length != 0 || get(props, 'text1',"").length != 0 ||
                    get(props, 'text2',"").length != 0 || get(props, 'text3',"").length != 0 || get(props, 'text4',"").length != 0) &&
                    (<div className={`inline-flex max-sm:flex-col max-sm:items-center bg-gray-950 text-gray-50 rounded-xl mx-4 sm:mx-8 p-6 max-sm:p-4 shadow-lg max-w-3xl ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                        <div className='lg:w-1/2 text-start p-2'>
                            <div className='inline-flex gap-2'>
                            {
                                get(props, 'icon',"").length != 0 &&
                                <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                            }
                            {
                                get(props, 'subTitle',"").length != 0 &&
                                <h3 className={`text-orange-500 font-semibold text-xs uppercase mb-2 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h3>
                            }
                            </div>
                            {/* Title  */}
                            {
                                get(props, 'title',"").length != 0 &&
                                <h1 className={`text-xl lg:text-3xl font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>
                            }
                            </div>    
                            <div className='lg:w-1/2 justify-center'>
                            {/* Donor Carousel  */}
                                <div className="flex items-center justify-center space-x-4">
                                <Swiper
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
        
                                    1024: {
                                        slidesPerView: 3,
                                    },
        
                                    1440: {
                                        slidesPerView: 3,
                                    },
                                }} spaceBetween={1} freeMode={true} modules={[FreeMode]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >    
                                {/* Arrow Left  */}
                                {
                                    get(props, 'arrowIcon1',"").length != 0 &&
                                    <SwiperButtonPrevious>
                                    <a className={`absolute flex p-2 top-2 max-sm:p-1 rounded-full left-0 bg-gray-50 hover:bg-gray-600 focus:outline-none z-10 ${get(tailwindClasses, 'arrowIcon')}`} style={get(style, 'arrowIcon')}>
                                    {parse(get(props, 'arrowIcon1'))}
                                    </a>
                                    </SwiperButtonPrevious>
                                }

                                {/* Donor Profiles */}
                                <div className="flex">
                                {
                                    get(props, 'items', []).map((item) => (
                                    <SwiperSlide>
                                    <div className="text-center">
                                    {
                                        get(item, 'imagePath1',"").length != 0 &&
                                        <NexImage src={get(item, 'imagePath1')} className={`!relative !w-12 !h-12 ml-9 max-sm:w-8 max-sm:h-8 rounded-full border-2 border-gray-700 ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
                                    }
                                    </div>
                                    </SwiperSlide>
                                    ))
                                }
                                </div>

                                {/* Arrow Right */}
                                {
                                    get(props, 'arrowIcon2',"").length != 0 &&
                                    <SwiperButtonNext>
                                    <a className={`absolute top-2 flex p-2 max-sm:p-1 rounded-full right-0 bg-gray-50 hover:bg-gray-600 focus:outline-none z-10 ${get(tailwindClasses, 'arrowIcon')}`} style={get(style, 'arrowIcon')}>
                                    {parse(get(props, 'arrowIcon2'))}
                                    </a>
                                    </SwiperButtonNext>
                                }
                                </Swiper>
                                </div>

                            {/* Donor Details  */}
                            <div className="mt-6 text-gray-300">
                                <p className={`text-gray-50`}>
                                {
                                    get(props, 'text1',"").length != 0 &&
                                    <span className={`font-medium text-gray-50 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, 'text1')}</span>
                                }
                                {
                                    get(props, 'text2',"").length != 0 &&
                                    <span>{get(props, 'text2')}</span>
                                }<br />
                                {
                                    get(props, 'text3',"").length != 0 &&
                                    <span>{get(props, 'text3')}</span>
                                }
                                {
                                    get(props, 'text4',"").length != 0 &&<span className={`text-orange-500 ${get(tailwindClasses, 'text2')}`}style={get(style, 'text2')}>{get(props, 'text4')}</span>
                                }
                                    </p>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div>
        </div>
    </div>
  )
}

BlogV21.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
}
BlogV21.defaultProps = {
    style: {
        container: {},
        image: {},
        box: {},
        icon: {},
        subTitle: {},
        title: {},
        image1: {},
        arrowIcon: {},
        text1: {},
        text2: {},
    },
    tailwindClasses: {
        container: "",
        image: "",
        box: "",
        icon: "",
        subTitle: "",
        title: "",
        image1: "",
        arrowIcon: "",
        text1: "",
        text2: "",
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297550.1200x400 - Website banner.png",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 rounded-full bg-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle: "Recent Donors",
    title: "Thousands of donors choose pure hearts",
    arrowIcon1: `<svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>`,
    arrowIcon2: `<svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>`,
    text1: "Micro Labanol",
    text2: ", Liverpool",
    text3: "Donated",
    text4: " $249",
    items: [
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
        {
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297408.16x16 - favicon.png"
        },
    ]
    
}
export default BlogV21;