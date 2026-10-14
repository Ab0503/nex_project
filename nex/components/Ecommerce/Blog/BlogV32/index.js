import PrimaryLink from '@nex-core-ui/PrimaryLink';
import React from 'react'
import { object, string } from "prop-types";
import get from "lodash.get";
import parse from 'html-react-parser';
import NexImage from '@nex-core-ui/NexImage';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const BlogV32 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <div className={`p-6 bg-gray-50 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <Swiper breakpoints={{
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
                        }} spaceBetween={12} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 p-6">
        {get(props, 'items', []).map((item) => 
        <SwiperSlide>
            <div className="relative overflow-hidden shadow-md bg-gray-50 before:content-[''] before:block before:absolute hover:before:z-[1] hover:before:w-full hover:before:h-full before:left-[-100%] hover:before:left-0 hover:before:top-0 hover:before:bg-white/40 hover:before:transition-all hover:before:duration-400 hover:before:ease-in">
                {/* Background Image */}
                <NexImage src={get(item, 'imagePath')} className={`!relative !w-full !h-64 object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-gray-50 z-10">
                <h2 className={`text-lg w-48 mt-20 text-center font-semibold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h2>
                    
                {/* Price Tag */}
                <div className={`absolute inline-flex gap-1 top-44 right-20 bg-orange-500 text-gray-50 px-3 py-1 rounded-full text-md font-bold ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}><span>{parse(get(item, 'icon'))}</span>
                {get(item, 'price')}
                </div>

                {/* "See More" Link */}
                <PrimaryLink href={get(item, 'ctaLink')} className={`text-orange-500 font-semibold mt-2 ml-14 flex gap-2 text-center items-center ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(item, 'ctaText')}
                <span>{parse(get(item, 'ctaIcon'))}</span>
                </PrimaryLink>
                </div>
            </div>
        </SwiperSlide>
        )}
        </div>
        </Swiper>
    </div>)
}
BlogV32.propTypes = {
    style: object,
  }

  BlogV32.defaultProps = {
    style: {
        container: {},
        image: {},
        title: {},
        price: {},
        ctaText: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        title: "",
        price: "",
        ctaText: ""
    },
    items:[
    {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739280492.dummy_370x220_000000_d69a0e.png",
        title: "Going Somewhere?",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>`,
        price: "60",
        ctaText: "See More",
        ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>`,
        ctaLink: "#"
    },
    {
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739280492.dummy_370x220_000000_d69a0e.png",
        title: "colorful kick iphone 6 plus",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>`,
        price: "250",
        ctaText: "See More",
        ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>`,
        ctaLink: "#"
    },
    {   
        imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739280492.dummy_370x220_000000_d69a0e.png",
        title: "colorful kick punchy sandals",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>`,
        price: "140",
        ctaText: "See More",
        ctaIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>`,
        ctaLink: "#"
    }
    ]
}
export default BlogV32;