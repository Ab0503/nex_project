import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, number, object, string } from 'prop-types';
import { React, useState, useRef } from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dialog, DialogPanel } from '@headlessui/react'
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';
import withData from '@nex-core-ui/HOC/withData';


const HeroSectionv53 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

    const handleVideoOpen = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
        setIsOpen(true);
    };

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
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <SwiperSlide className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] " style={{ backgroundImage: `url(${get(item, 'bgImage')})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="!relative z-[2] !h-full">
                        <div className={`flex justify-${get(item, 'boxPosition')} flex-wrap !h-full`}>
                            <div className={`md:w-11/12 lg:w-8/12 xl:w-6/12 ${get(item, 'boxPosition') === "start" ? "lg:ml-[8.333333333%]" : ""} xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-${get(item, 'textPosition')} justify-center self-center`}>
                                <NexAnimation type={get(props, 'contentAnimation')}>
                                    {get(item, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font font-bold leading-[1.2] xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-5s ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</h2>}
                                    {get(item, 'description', "").length !== 0 && <p className={`lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-5s ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                                    {get(item, 'videoUrl', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-5s"><button onClick={() => handleVideoOpen(get(item, 'videoUrl'))} className={`inline-flex nx-text-primary bg-white px-4 py-4 rounded-full !mx-auto mb-5 ${get(tailwindClasses, 'playIcon')}`} style={get(style, 'playIcon')}>{parse(get(props, 'playIcon'))}</button></div>}
                                    {get(item, 'ctaText', "").length !== 0 && <div className="animate__animated animate__slideInUp animate__delay-1s"><button className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'ctaText')}</PrimaryLink></button></div>}
                                </NexAnimation>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className={`custom-prev absolute left-0 max-sm:left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full z-10 ${isBeginning
                            ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
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
                            >{selectedVideoUrl && <video className={`${get(tailwindClasses, 'dialogVideo')}`} style={get(style, 'dialogVideo')} src={selectedVideoUrl} autoPlay controls />}
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

HeroSectionv53.propTypes = {
    style: object,
    tailwindClasses: object,
    sliderDelay: number,
    playIcon: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    items: arrayOf(object)
}

HeroSectionv53.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        cta: {},
        playIcon: {},
        ctaIcon: {},
        dialogBox: {},
        dialogVideo: {},
        closedIcon: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        description: "",
        cta: "",
        playIcon: "",
        ctaIcon:"",
        dialogBox: "",
        dialogVideo: "",
        closedIcon: "",
    },
    sliderDelay: 3000,
    playIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" /></svg>`,

    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
    items: [
        {
            boxPosition: "start",
            textPosition: "left",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "We bring solutions to make life easier.",
            description: "We are a creative company that focuses on long term relationships with customers.",
            ctaLink: "#",
            ctaText: "Read more",
            videoUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4"
        },
        {
            boxPosition: "center",
            textPosition: "center",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "We are trusted by over a million customers.",
            description: "Here a few reasons why our customers choose us.",
            ctaLink: "#",
            ctaText: "Read more",
            videoUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4"
        },
        {
            boxPosition: "end",
            textPosition: "left",
            bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
            title: "Just sit and relax.",
            description: "We make sure your spending is stress free so that you can have the perfect control.",
            ctaLink: "#",
            ctaText: "Read more",
            videoUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4"
        },
    ],
    contentAnimation:""
}

export default withData(HeroSectionv53)