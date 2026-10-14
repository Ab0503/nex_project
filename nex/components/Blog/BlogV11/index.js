import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import 'swiper/css';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute top-40 right-0 z-10' onClick={() => swiper.slideNext()}>{children}</button>;
  };
  const SwiperButtonPrevious = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute top-40 left-0 z-10' onClick={() => swiper.slidePrev()}>{children}</button>;
  };

const BlogV11 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const swiper = useSwiper();

  return (
    <div>
        <div className={`bg-red-50 w-full p-2 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-3 gap-3">
                {
                get(props, 'imagePath',"").length != 0 && <div className="relative  max-lg:col-span-full  col-span-2"><NexImage className={`!h-full bg-cover rounded-lg shadow-lg !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'imagePath')} />
                    {
                    (get(props, 'icon',"").length != 0 || get(props, 'subTitle',"").length != 0 || get(props, 'icon1',"").length != 0 || get(props, 'icon2',"").length != 0) &&
                    (<div className={`absolute p-5 max-xl:w-80 mx-auto text-center bottom-1 left-28 max-sm:left-6 max-lg:left-80 max-xl:left-16  rounded-lg bg-gray-50 bg-opacity-40 ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                        <div className="text-start text-black">
                            <div className="inline-flex gap-2">
                            {
                                get(props, 'icon',"").length != 0 && <span>{parse(get(props, 'icon'))}</span>
                            }
                            {
                                get(props, 'subTitle',"").length != 0 && <p className={`lg:text-sm max-sm:text-sm md:text-sm font-medium uppercase tracking-wide ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                            }
                            </div>
                            <h1 className={`lg:text-3xl max-sm:text-sm md:text-md font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h1>
                        </div>
                    </div>)
                    }
                </div>
                }  
                <div className='lg:inline-flex lg:col-span-3 max-md:col-auto max-lg:col-span-full md:gap-4'>

                <Swiper breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 2,
                            },

                            1440: {
                                slidesPerView: 3,
                            },
                        }} spaceBetween={10} freeMode={true} modules={[FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    
                    <SwiperButtonNext><span className={`flex p-1 bg-gray-500 text-black hover:bg-orange-100 rounded-full ${get(tailwindClasses, 'box1Icon')}`} style={get(style, 'box1Icon')}>{parse(get(props, 'Icon2'))}</span></SwiperButtonNext>
                    <SwiperButtonPrevious><span  className={`flex p-1 bg-gray-500 text-black hover:bg-orange-100 rounded-full ${get(tailwindClasses, 'box1Icon')}`} style={get(style, 'box1Icon')}>{parse(get(props, 'Icon1'))}</span></SwiperButtonPrevious>
                {
                    get(props, 'items', []).map((item) => (get(item, 'text1',"").length != 0 || get(item, 'description1',"").length != 0 || get(item, 'imagePath1',"").length != 0 || get(item, 'ctaLink1',"").length != 0) &&
                    (<SwiperSlide>
                        <div className={`p-4 bg-orange-50 hover:bg-gray-50 shadow-lg rounded-lg overflow-hidden max-sm:row-start-2 max-sm:h-96 ${get(tailwindClasses, 'box2')}`} style={get(style, 'box2')}>
                            <div className="p-4 text-center">
                                {
                                    get(item, 'text1',"").length != 0 && <h3 className={`lg:text-xl md:text-xl font-bold text-gray-800 mb-2 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</h3>
                                }
                                {
                                    get(item, 'description1',"").length != 0 && <p className={`text-gray-600 lg:text-sm md:text-md ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}> {get(item,"description1")}</p>
                                }
                                <div className="relative mt-4">
                                {
                                    get(item, 'imagePath1',"").length != 0 && <NexImage src={get(item, 'imagePath1')} className={`!relative !w-full !h-52 object-cover ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
                                }
                                </div>
                                <div className='mt-4'>
                                {
                                    get(item, 'ctaLink1',"").length != 0 &&
                                    <a href="#" className={`inline-flex gap-2 items-center text-green-700 lg:text-lg md:text-sm font-medium ${get(tailwindClasses, 'ctaLink1')}`} style={get(style, 'ctaLink1')}>{get(item,"ctaLink1")}  
                                        {
                                            get(item, 'ctalinkIcon1',"").length != 0 &&
                                            <span className={`text-green-700 ${get(tailwindClasses, 'ctalinkIcon1')}`} style={get(style, 'ctalinkIcon1')}>{parse(get(item, 'ctalinkIcon1'))}</span>
                                        }
                                    </a>
                                }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))
                }  
                </Swiper>
                </div> 
            </div>
        </div>
    </div>
  )
}

BlogV11.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    text1: string,
    text2: string,
    description: string,
    ctaLink: string,
}
BlogV11.defaultProps = {
    style: {
        container: {},
        image: {},
        icon: {},
        subTitle: {},
        title: {},
        box1: {},
        box1Icon: {},
        box2: {},
        text1: {},
        description1: {},
        image1: {},
        ctaLink1: {},
        ctalinkIcon1: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        icon: "",
        subTitle: "",
        title: "",
        box1: "",
        box1Icon: "",
        box2: "",
        text1: "",
        description1: "",
        image1: "",
        ctaLink1: "",
        ctalinkIcon1: ""
    },
    subTitle:"Benifits of Giving",
    title:"Bring more meaning to your life",
    icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 rounded-full bg-orange-500 text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    Icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>`,
    Icon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>`,
    imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    items: [
        {
            text1: "Kids Education",
            description1: "we offer for tutorings,scholarships and workshops to help students",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd" /></svg>`
        },
        {
            text1: "Pure Water",
            description1: "This includes food distribution, shelter & access to essential",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd" /></svg>`
        },
        {
            text1: "Medical Care",
            description1: "Our health program include to free clinics, mental health support....",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd"/></svg>`
        },
        {
            text1: "Kids Education",
            description1: "we offer for tutorings,scholarships and workshops to help students",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd" /></svg>`
        },
        {
            text1: "Pure Water",
            description1: "This includes food distribution, shelter & access to essential",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd" /></svg>`
        },
        {
            text1: "Medical Care",
            description1: "Our health program include to free clinics, mental health support....",
            imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
            ctaLink1: "Read More",
            ctalinkIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                            clip-rule="evenodd"/></svg>`
        }
    ]
}

export default BlogV11;