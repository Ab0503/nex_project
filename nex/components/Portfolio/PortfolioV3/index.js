import get from 'lodash.get';
import parse from 'html-react-parser';
import { useState, useRef, React } from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NexImage from '@nex-core-ui/NexImage';
import { arrayOf, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';

const PortfolioV3 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };
    return (
        <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="p-5">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                        {get(props, 'subTitle', "").length !== 0 && <h2 className={`nx-text-primary text-[.75rem] uppercase mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                    </div>
                </div>
            </div>
            <div className="container mx-auto xl:!px-6 lg:!px-6 md:!px-6 relative">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleSlideChange();
                    }}
                    breakpoints={{
                        340:{
                            slidesPerView:1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 2,
                        },
                    }}
                    onSlideChange={handleSlideChange}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="swiper-container blog grid-view "
                    style={{ paddingBottom: "40px" }}
                >
                    {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item, index) => (
                        <SwiperSlide key={index}>
                            <figure className="rounded-[0.4rem]">
                                <NexImage className={`!relative rounded-[0.4rem] ${get(tailwindClasses,'image')}`} style={get(style,'image')} src={get(item, 'image')} alt="Project Image" />
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Previous Button */}
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className={`custom-prev absolute left-7 max-sm:left-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10 ${isBeginning
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'nx-btn-primary nx-btn-primary:hover'
                            } ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon') }
                    >
                        {parse(get(props, 'prevIcon'))}
                    </button>
                )}

                {/* Next Button */}
                {get(props, 'nextIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={isEnd}
                        className={`custom-next absolute right-7 max-sm:right-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10 ${isEnd
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'nx-btn-primary nx-btn-primary:hover'
                            } ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </div>
        </section>
    )
}

PortfolioV3.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    prevIcon: string,
    nexIcon: string,
    items: arrayOf(object)  
}

PortfolioV3.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        image:{},
        ctaIcon:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        image:"",
        ctaIcon:""
    },
    subTitle: "Latest Projects",
    title: "Check out some of our awesome projects with creative ideas and great design.",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
`,
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736413923.pp10.jpg",
        },
    ]
}
export default withData(PortfolioV3)