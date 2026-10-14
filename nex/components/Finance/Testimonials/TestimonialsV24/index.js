import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialsV24 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-16 px-10 bg-gray-100 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl text-center font-bold relative after:block after:h-[6px] after:mx-auto after:w-10 after:bg-yellow-600 after:mt-2 mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className='max-w-6xl mx-auto'>
                <Swiper breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: `${get(props,'sectionKeyNo')}`
                    }
                }} spaceBetween={10} pagination={{clickable:true}} modules={[Pagination]} style={{paddingBottom:"50px"}} className="[&_.swiper-pagination-bullet]:bg-yellow-600 [&_.swiper-pagination-bullet-active]:bg-yellow-600 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet-active]:h-3 [&_.swiper-pagination-bullet-active]:w-3">
                    {get(props, 'items', []).map((item) => <SwiperSlide>
                        <div className={`flex max-sm:flex-wrap md:flex-row items-start gap-4 relative before:content-['❞'] before:absolute before:text-yellow-600 before:text-[80px] before:font-bold before:-top-7 before:left-0 before:z-[2] py-5`}>
                            {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} className={`!relative !h-20 !w-20 rounded-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                            <div>
                                {get(item, 'name', '').length !== 0 && <h1 className={`text-xl font-semibold mb-2 ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(item, 'name')}</h1>}
                                {get(item, 'designation', '').length !== 0 && <p className={`text-sm text-gray-600 mb-4 ${get(tailwindClasses, 'designation')}`} style={get(style, 'designation')}>{get(item, 'designation')}</p>}
                                {get(item, 'description', '').length !== 0 && <p className={`text-gray-600 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

TestimonialsV24.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    title: string,
    items: arrayOf(object)
}

TestimonialsV24.defaultProps = {
    style: {
        container:{},
        title:{},
        image:{},
        name:{},
        designation:{},
        description:{},
    },
    tailwindClasses: {
        container:"",
        title:"",
        image:"",
        name:"",
        designation:"",
        description:""
    },
    sectionKeyNo:2,
    title: "Our partner says",
    items: [
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Amanada Seyfried",
            designation: "Sales & Marketing, Alien Ltd.",
            description: "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
        },
        {
            image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&dpr=1",
            name: "Donald Simpson",
            designation: "Chief Financial Officer, Jamaica International",
            description: "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
        },
        {
            image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Christian Marcil",
            designation: "Partner & Managing Director, Grandier Co.",
            description: "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
        },
        {
            image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Donald Simpson",
            designation: "Chief Financial Officer, Jamaica International",
            description: "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable."
        },
    ]
}
export default TestimonialsV24
