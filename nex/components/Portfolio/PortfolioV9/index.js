import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types';
import { useState, useRef, React } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PortfolioV9 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

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
            <div className="pt-10 pb-1 xl:px-20 lg:px-20 md:px-10 max-sm:px-5">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto text-center">
                        {get(props,'subTitle',"").length !==0 &&<h2 className={`nx-text-primary text-[0.8rem] uppercase mb-3 leading-[1.35] ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h2>}
                        {get(props,'title',"").length !==0 &&<h3 className={`nx-section-heading-font xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold tracking-[-.01rem] mb-[2.5rem] leading-[1.25] ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h3>}
                    </div>
                </div>
                <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
                <div className="container mx-auto mb-[4.5rem]">
                    <Swiper onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleSlideChange();
                    }}
                        breakpoints={{
                            340: {
                                slidesPerView: 1
                            },
                            640: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 2
                            },
                            1440: {
                                slidesPerView: 2
                            }
                        }} onSlideChange={handleSlideChange} spaceBetween={30} freeMode={true} modules={[FreeMode]} grabCursor={true} className="overflow-visible">
                        {get(props, 'items', []).map((item, index) => <SwiperSlide className={`rounded-xl ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')} key={index}>
                            {get(item, 'image',"").length !==0 &&<figure className="mb-7"><a href={get(item, 'ctaLink')}><NexImage className={`!relative rounded-[.4rem] ${get(tailwindClasses,'sectionImage')}`} style={get(style,'sectionImage')} src={get(item, 'image')} alt="image" /></a></figure>}
                            <div className="project-details flex justify-center flex-col">
                                <div className="post-header">
                                    {get(item, 'title',"").length !==0 &&<h2 className={`text-[#343f52] hover:text-[#3f78e0] font-bold text-xl mb-3 ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'title')}</PrimaryLink></h2>}
                                    {get(item,'subTitle',"").length !==0 &&<div className={`nx-text-primary uppercase tracking-[0.02rem] text-[0.8rem] font-semibold mb-[0.4rem] ${get(tailwindClasses,'sectionSubTitle')}`} style={get(style,'sectionSubTitle')}>{get(item, 'subTitle')}</div>}
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                    <div className="flex justify-center gap-3 mt-4">
                        {get(props, 'prevIcon', "").length !== 0 && <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isBeginning}
                            className={`px-2 py-2 rounded-full ${isBeginning
                                && 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                                                 text-gray-50 nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                            {parse(get(props, 'prevIcon'))}
                        </button>}
                        {get(props, 'nextIcon', "").length !== 0 && <button
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={isEnd}
                            className={`px-2 py-2 rounded-full ${isEnd
                                && 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                                            text-gray-50 nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                            {parse(get(props, 'nextIcon'))}
                        </button>}
                    </div>
                </div>
                </NexAnimation>
            </div>
        </section>
    )
}

PortfolioV9.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    prevIcon: string,
    nextIcon: string,
    items: arrayOf(object)
}

PortfolioV9.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        sectionImage:{},
        sectionTitle:{},
        sectionSubTitle:{},
        ctaIcon:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        sectionImage:"",
        sectionTitle:"",
        sectionSubTitle:"",
        ctaIcon:""
    },
    leftContentAnimation: "",
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
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Cras Fermentum Sem",
            subTitle: "Mobile Design",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Venenatis Euismod Vehicula",
            subTitle: "Web Design",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Tortor Tellus Cursus",
            subTitle: "Stationary",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Ridiculus Sem Parturient",
            subTitle: "Web Application",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Cursus Sollicitudin Adipiscing",
            subTitle: "Web Design",
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736580992.sp1.jpg",
            ctaLink: "#",
            title: "Fringilla Quam Vulputate",
            subTitle: "Stationary",
        }
    ]
}
export default PortfolioV9
