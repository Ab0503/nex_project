import React, { useRef } from 'react';
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { arrayOf, object } from 'prop-types';

const TestimonialsV23 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(0);
    return (
        <Swiper onSwiper={(swiper) => swiperRef.current = swiper} loop={true}>
            {get(props, 'items', []).map((item) =>
                <SwiperSlide>
                    <section className={`flex md:justify-end py-20 px-5 md:px-24 ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(item, 'bgImage')})`, backgroundSize: "cover", ...get(style, 'container') }}>
                        <div className={`relative before:content-['❝'] before:absolute before:text-yellow-600 before:text-[100px] before:font-bold before:top-5 before:-left-5 max-w-lg bg-[rgb(255,255,255,0.9)] p-16 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'description', '').length !== 0 && <p className={`text-gray-600 text-[1.075rem] mb-6 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                            <div className='flex flex-wrap items-center justify-between space-y-2'>
                                <div>
                                    {get(item, 'name', '').length !== 0 && <h4 className={`font-bold text-xl ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(item, 'name')}</h4>}
                                    {get(item, 'designation', '').length !== 0 && <p className={`text-gray-500 font-semibold ${get(tailwindClasses, 'designation')}`} style={get(style, 'designation')}>{get(item, 'designation')}</p>}
                                </div>
                                <div>
                                    <button onClick={() => swiperRef.current?.slidePrev()}
                                        className={`custom-prev text-gray-400 border-[3px] border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-700 p-2 ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')} >
                                        <ChevronLeftIcon strokeWidth={3} className='w-5 h-5' />
                                    </button>
                                    <button onClick={() => swiperRef.current?.slideNext()}
                                        className={`custom-next text-gray-400 border-[3px] border-l-0 border-gray-400 hover:border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-700 p-2 ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')} >
                                        <ChevronRightIcon strokeWidth={3} className='h-5 w-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

TestimonialsV23.propTypes={
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
}

TestimonialsV23.defaultProps = {
    style: {
        container: {},
        description: {},
        name: {},
        designation: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        description: "",
        name: "",
        designation: "",
        ctaIcon: ""
    },
    items: [
        {
            bgImage: "https://images.pexels.com/photos/975657/pexels-photo-975657.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop&crop=faces&dpr=1",
            description: "Rule yielding him fruit fill. Stars our creeping seas fill beast yielding void life signs day image. From together from creepeth you’re subdue very abundantly moveth his sixth fly their.",
            name: "Amanda Seyfried",
            designation: "Founder & CEO, Arcade Systems"
        },
        {
            bgImage: "https://images.pexels.com/photos/8871950/pexels-photo-8871950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop&crop=faces&dpr=1",
            description: "We thought a lot before choosing the Financial WordPress Theme because we wanted to sure our investment would yield results. This was clearly the best choice.",
            name: "Cintia Le Corre",
            designation: "Chairman, Harmony Corporation"
        },
    ]
}
export default TestimonialsV23
