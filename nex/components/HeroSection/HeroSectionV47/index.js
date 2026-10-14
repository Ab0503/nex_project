import parse from 'html-react-parser'
import get from 'lodash.get'
import { React, useState,useRef } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Dialog, DialogPanel } from '@headlessui/react'
import NexImage from '@nex-core-ui/NexImage'
import { object, string } from 'prop-types'
import NexAnimation from '@nex-components/NexAnimation'
import PrimaryLink from '@nex-core-ui/PrimaryLink'


const HeroSectionV47 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };
    return (
        <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className="pt-32 pb-24 xl:mx-20 lg:mx-10 mx-[15px]" style={{ zIndex: "5", position: "relative" }}>
                <div className={`flex flex-wrap justify-center mx-[15px] mt-[-70px] items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full content text-center lg:text-left xl:text-left mb-5" data-cues="slideInDown" data-group="page-title" data-delay="600">
                        <NexAnimation type={get(props, 'leftContentAnimation')}>
                            {get(props, 'title', "").length !== 0 && <h1 className={`nx-section-heading-font text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5  ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                            {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.4rem] leading-normal mb-7 xl:pr-10 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                            <div className="flex justify-center lg:justify-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900">
                                {get(props, 'cta1Text', "").length !== 0 && <span className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] me-2 ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}><PrimaryLink href={get(props, 'cta1Link')} >{get(props, 'cta1Text')}</PrimaryLink></span>}
                                {get(props, 'cta2Text', "").length !== 0 && <span className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] mt-3  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}><PrimaryLink href={get(props, 'cta2Link')} >{get(props, 'cta2Text')}</PrimaryLink></span>}
                            </div>
                        </NexAnimation>
                    </div>
                    <div className="lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full lg:!ml-[8.33333333%]">
                        <div className="container mx-auto flex justify-center !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]" >
                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                <Swiper onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                                handleSlideChange();
                                            }} onSlideChange={handleSlideChange} slidesPerView={"auto"} spaceBetween={5} pagination={{ clickable: true }} freeMode={true} modules={[FreeMode, Pagination]} >
                                    {get(props, 'image1', "").length !== 0 && <SwiperSlide><NexImage src={get(props, 'image1')} className={`!relative rounded ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} alt="image1" /></SwiperSlide>}
                                    {get(props, 'image2', "").length !== 0 && <SwiperSlide>
                                        {get(props, 'playIcon', "").length !== 0 && <span onClick={() => setIsOpen(true)} className={`nx-text-primary bg-white px-4 py-4 rounded-full !mx-auto mb-5 absolute ${get(tailwindClasses, 'playIcon')}`} style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "3", ...get(style, 'playIcon') }} data-glightbox data-gallery="hero">{parse(get(props, 'playIcon'))}</span>}
                                        <NexImage src={get(props, 'image2')} className={`!relative rounded ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} alt="image2" /></SwiperSlide>}
                                    {get(props, 'image3', "").length !== 0 && <SwiperSlide><NexImage src={get(props, 'image3')} className={`!relative rounded ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} alt="image3" /></SwiperSlide>}
                                    {get(props, 'prevIcon', "").length !== 0 && (
                                    <button
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        disabled={isBeginning}
                                        className={`custom-prev absolute left-0 max-sm:left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full z-10 ${isBeginning
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'nx-btn-primary nx-btn-primary:hover'
                                            } ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')}
                                    >
                                        {parse(get(props, 'prevIcon'))}
                                    </button>
                                )}
                                {get(props, 'nextIcon', "").length !== 0 && (
                                    <button
                                        onClick={() => swiperRef.current?.slideNext()}
                                        disabled={isEnd}
                                        className={`custom-next absolute right-0 max-sm:right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full z-10 ${isEnd
                                            ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
                                            : 'nx-btn-primary nx-btn-primary:hover'
                                            } ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')}
                                    >
                                        {parse(get(props, 'nextIcon'))}
                                    </button>
                                )}
                                </Swiper>
                            </NexAnimation>
                            {isOpen && (
                                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
                                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                            <DialogPanel
                                                className={`relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}
                                            >{get(props, 'videoUrl', "").length !== 0 && <video className={`${get(tailwindClasses, 'dialogVideo')}`} style={get(style, 'dialogVideo')} src={get(props, 'videoUrl')} autoPlay controls />}
                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => setIsOpen(false)}
                                                        className={`absolute top-2 right-2 rounded-full bg-gray-50 px-2 py-2 text-gray-900 shadow-sm hover:bg-gray-100 z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
                                                    >
                                                        {parse(get(props, 'closedIcon'))}
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                        </div>
                                    </div>
                                </Dialog>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

HeroSectionV47.propTypes = {
    style: object,
    tailwindClasses: object,
    bgImage: string,
    title: string,
    subTitle: string,
    cta1Link: string,
    cta1Text: string,
    cta2Link: string,
    cta2Text: string,
    image1: string,
    image2: string,
    image3: string,
    videoUrl: string,
    playIcon: string,
    closedIcon: string,
    prevIcon: string,
    nextIcon: string,
}
HeroSectionV47.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        subTitle: {},
        cta1: {},
        cta2: {},
        image1: {},
        image2: {},
        image3: {},
        playIcon: {},
        prevIcon: {},
        nextIcon: {},
        closedIcon: {},
        dialogBox: {},
        dialogVideo: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        title: "",
        subTitle: "",
        cta1: "",
        cta2: "",
        image1: "",
        image2: "",
        image3: "",
        playIcon: "",
        prevIcon: "",
        nextIcon: "",
        closedIcon: "",
        dialogBox: "",
        dialogVideo: "",
    },
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736601121.bg4.jpg",
    title: "Crafting project specific solutions with expertise.",
    subTitle: "We’re a creative company that focuses on establishing long-term relationships with customers.",
    cta1Link: "#",
    cta1Text: "Explore Now",
    cta2Link: "#",
    cta2Text: "Contact Us",
    image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736601391.about21.jpg",
    image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736601391.about21.jpg",
    image3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736601391.about21.jpg",
    videoUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4",
    playIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" /></svg>`,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
    leftContentAnimation: "",
    rightContentAnimation: "",
}
export default HeroSectionV47
