import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { useState, React } from 'react';
import { Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const HeroSectionV49 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className={`!h-screen ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="relative z-10 h-full">
                <Swiper className='h-full' autoplay={{
                    delay: `${get(props,'sliderDelay')}`,
                }} grabCursor thumbs={{ swiper: thumbsSwiper }} modules={[Autoplay, Thumbs,]}>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {get(props,'items',[]).map((item)=><SwiperSlide className="bg-overlay bg-overlay-400 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]  bg-[#21262c] opacity-100  bg-image" data-image-src="./assets/img/photos/bg28.jpg" style={{ background: `url(${get(item, 'bgImage')})`, backgroundSize: "cover", backgroundPosition: "center" }}></SwiperSlide>)}
                        </div>
                    </div>
                </Swiper>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 !z-40'>
                    <div className='container'>
                        <Swiper onSwiper={setThumbsSwiper} slidesPerView={4} watchSlidesVisibility watchSlidesProgress modules={[Thumbs]}>
                            {get(props,'items',[]).map((item)=><SwiperSlide>
                                <NexImage src={get(item, 'bgImage')} className={`!relative rounded-full !w-12 !h-12 object-cover cursor-pointer border-2 mr-5 ${get(tailwindClasses,'paginationImage')}`} style={get(style,'paginationImage')}
                                />
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
                <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 z-50">
                    <div className="container !h-full flex items-center justify-center">
                        <div className="row">
                            <div className="lg:w-8/12 flex-[0_0_auto] px-[15px] max-w-full mx-auto mt-[-2.5rem] text-center">
                                {get(props, 'subTitle', "").length !== 0 && <h1 className={`text-[0.95rem] uppercase tracking-[0.05rem] text-gray-50 mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                                {get(props, 'title', "").length !== 0 && <h2 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] text-gray-50 mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                                {get(props, 'ctaText', "").length !== 0 &&<button className={`text-gray-50 bg-transparent border border-gray-50 hover:border-gray-50 focus:shadow-[rgba(255,255,255,1)] active:text-[#343f52] active:bg-[#ffffff] active:border-gray-50 disabled:text-gray-50 disabled:bg-transparent disabled:border-gray-50 rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

HeroSectionV49.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        cta:{},
        paginationImage:{},
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        cta:"",
        paginationImage:""
    },
    sliderDelay:3000,
    subTitle: "I'm Julia Sandbox",
    title: "couples & wedding photographer",
    ctaLink: "#",
    ctaText: "Know more",
    items:[
        {
            bgImage: "https://images.pexels.com/photos/6565251/pexels-photo-6565251.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop&dpr=1"
        },
        {
            bgImage: "https://images.pexels.com/photos/17206082/pexels-photo-17206082/free-photo-of-wedding-arbor-at-venue.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop&dpr=1"
        },
        {
            bgImage: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop&dpr=1"
        },
        {
            bgImage: "https://images.pexels.com/photos/8819328/pexels-photo-8819328.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop&dpr=1"
        },
    ]
}
export default HeroSectionV49
