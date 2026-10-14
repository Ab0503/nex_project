import parse from 'html-react-parser';
import get from 'lodash.get';
import { number, object, string } from 'prop-types';
import { React, useState,useRef } from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dialog, DialogPanel } from '@headlessui/react'
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const HeroSectionv48 = (props) => {
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
        <section className={`!h-screen ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Swiper className='h-full w-screen' onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                                handleSlideChange();
                                            }} 
                onSlideChange={handleSlideChange} 
                autoplay={{
                delay: `${get(props, 'sliderDelay')}`,
            }} spaceBetween={10} pagination={{ clickable: true }} freeMode={true} modules={[FreeMode, Pagination, Autoplay]}>
                <SwiperSlide className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]" style={{ backgroundImage: `url(${get(props, 'bgImage1')})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="!relative z-[2] !h-full lg:mx-20">
                        <div className="flex flex-wrap !h-full">
                            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">
                                <NexAnimation type={get(props, "slide1ContentAnimation")}>
                                    {get(props, 'slide1Title', "").length !== 0 && <h2 className={`nx-section-heading-font font-bold leading-[1.2] xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s ${get(tailwindClasses, 'slide1Title')}`} style={get(style, 'slide1Title')}>{get(props, 'slide1Title')}</h2>}
                                    {get(props, 'slide1Description', "").length !== 0 && <p className={`lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-1s ${get(tailwindClasses, 'slide1Description')}`} style={get(style, 'slide1Description')}>{get(props, 'slide1Description')}</p>}
                                    {get(props, 'slide1CtaText', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-1s"><button className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'slide1Cta')}`} style={get(style, 'slide1Cta')}><PrimaryLink href={get(props, 'slide1CtaLink')}>{get(props, 'slide1CtaText')}</PrimaryLink></button></div>}
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] " style={{ backgroundImage: `url(${get(props, 'bgImage2')})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="!relative z-[2] !h-full">
                        <div className="flex flex-wrap !h-full">
                            <div className="md:w-11/12 lg:w-8/12  xl:w-7/12 xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center justify-center self-center">
                                <NexAnimation type={get(props, 'slide2ContentAnimation')}>
                                    {get(props, 'slide2Title', "").length !== 0 && <h2 className={`nx-section-heading-font font-bold leading-[1.2] xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-5s ${get(tailwindClasses, 'slide2Title')}`} style={get(style, 'slide2Title')}>{get(props, 'slide2Title')}</h2>}
                                    {get(props, 'slide2Description', "").length !== 0 && <p className={`lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-5s ${get(tailwindClasses, 'slide2Description')}`} style={get(style, 'slide2Description')}>{get(props, 'slide2Description')}</p>}
                                    {get(props, 'slide2PlayIcon', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-5s"><button onClick={() => setIsOpen(true)} className={`inline-flex nx-text-primary bg-white px-4 py-4 rounded-full !mx-auto mb-5 ${get(tailwindClasses, 'slide2PlayIcon')}`} style={get(style, 'slide2PlayIcon')}>{parse(get(props, 'slide2PlayIcon'))}</button></div>}
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] " style={{ backgroundImage: `url(${get(props, 'bgImage3')})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="!relative z-[2] !h-full">
                        <div className="flex flex-wrap !h-full">
                            <div className="md:w-10/12 flex-[0_0_auto] px-[15px] max-w-full md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[50%] xxl:w-5/12 xxl:!ml-[50%] text-center lg:text-left xl:text-left justify-center self-center items-start">
                                <NexAnimation type={get(props, 'slide3ContentAnimation')}>
                                    {get(props, 'slide3Title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.8rem] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s ${get(tailwindClasses, 'slide3Title')}`} style={get(style, 'slide3Title')}>{get(props, 'slide3Title')}</h2>}
                                    {get(props, 'slide3Description', "").length !== 0 && <p className={`lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s ${get(tailwindClasses, 'slide3Description')}`} style={get(style, 'slide3Description')}>{get(props, 'slide3Description')}</p>}
                                    {get(props, 'slide3CtaText', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-3s"><button className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'slide3Cta')}`} style={get(style, 'slide3Cta')}><PrimaryLink href={get(props, 'slide3CtaLink')} >{get(props, 'slide3CtaText')}</PrimaryLink></button></div>}
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
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
            {isOpen && (
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center max-sm:items-center sm:p-0">
                            <DialogPanel
                                className={`relative transform overflow-hidden rounded-lg bg-transparent px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}
                            >{get(props, 'videoUrl', "").length !== 0 && <video className={`${get(tailwindClasses, 'dialogVideo')}`} style={get(style, 'dialogVideo')} src={get(props, 'videoUrl')} autoPlay controls />}
                                <div className="mt-6">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className={`absolute top-2 right-2 rounded-full nx-btn-primary px-2 py-2 shadow-sm hover:bg-gray-400 z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
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
        </section>
    )
}

HeroSectionv48.propTypes = {
    style: object,
    tailwindClasses: object,
    sliderDelay: number,
    bgImage1: string,
    bgImage2: string,
    bgImage3: string,
    slide1Title: string,
    slide1Description: string,
    slide1CtaLink: string,
    slide1CtaText: string,
    slide2Title: string,
    slide2Description: string,
    slide2PlayIcon: string,
    slide3Title: string,
    slide3Description: string,
    slide3CtaLink: string,
    slide3CtaText: string,
    prevIcon: string,
    nextIcon: string,
}
HeroSectionv48.defaultProps = {
    style: {
        container: {},
        slide1Title: {},
        slide1Description: {},
        slide1Cta: {},
        slide2Title: {},
        slide2Description: {},
        slide2PlayIcon: {},
        slide3Title: {},
        slide3Description: {},
        slide3Cta: {},
        prevIcon: {},
        nextIcon: {},
        dialogBox: {},
        dialogVideo: {},
        closedIcon: {},
    },
    tailwindClasses: {
        container: "",
        slide1Title: "",
        slide1Description: "",
        slide1Cta: "",
        slide2Title: "",
        slide2Description: "",
        slide2PlayIcon: "",
        slide3Title: "",
        slide3Description: "",
        slide3Cta: "",
        prevIcon: "",
        nextIcon: "",
        dialogBox: "",
        dialogVideo: "",
        closedIcon: "",
    },
    sliderDelay: 3000,
    bgImage1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
    bgImage2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
    bgImage3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
    slide1Title: "We bring solutions to make life easier.",
    slide1Description: "We are a creative company that focuses on long term relationships with customers.",
    slide1CtaLink: "#",
    slide1CtaText: "Read More",
    slide2Title: "We are trusted by over a million customers.",
    slide2Description: "Here a few reasons why our customers choose us.",
    slide2PlayIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" /></svg>`,
    slide3Title: "Just sit and relax.",
    slide3Description: "We make sure your spending is stress free so that you can have the perfect control.",
    slide3CtaLink: "#",
    slide3CtaText: "Contact Us",
    videoUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
    slide1ContentAnimation: "",
    slide2ContentAnimation: "",
    slide3ContentAnimation: "",
}

export default HeroSectionv48