import get from 'lodash.get'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import parse from 'html-react-parser';
import { useState, useRef, React } from 'react';
import PropTypes, { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';


const BlogV30 = (props) => {
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
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='lg:mx-32 max-sm:mx-5 md:mx-10'>
                <div className="overflow-hidden">
                    <div className="container mx-auto py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                        <div className="flex flex-wrap mx-[15px]">
                            <div className="xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                                {get(props, 'title', "").length !== 0 && <h2 className={`text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] !text-center !mt-2 mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                            </div>
                        </div>
                        <Swiper onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            handleSlideChange();
                        }} breakpoints={{
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
                        }} onSlideChange={handleSlideChange} spaceBetween={30} freeMode={true} modules={[FreeMode]} className="swiper-container-custom overflow-visible pb-2">
                            <div className="swiper-wrapper">
                                {get(props, 'items', []).map((item) => <SwiperSlide className={`swiper-slide ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    <article>
                                        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                                            {get(item, 'image', "").length !== 0 && <figure className="card-img-top overlay overlay-1 hover-scale group"><a href={get(props, 'ctaLink')}> <NexImage className={`!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'image')} alt="image" /></a>
                                                {get(item, 'imgText', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                                    <h5 className={`from-top text-gray-50 font-bold text-xl !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(item, 'imgText')}</h5>
                                                </figcaption>}
                                            </figure>}
                                            <div className="card-body p-6">
                                                <div className="post-header">
                                                    {get(item, 'subTitle', "").length !== 0 && <div className={`inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-sm font-bold text-[#3f78e0] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>
                                                        <a href={get(props, 'ctaLink')} className="hover" rel="category">{get(item, 'subTitle')}</a>
                                                    </div>}
                                                    {get(item, 'title', "").length !== 0 && <h2 className="text-2xl font-semibold post-title h3 !mt-1 !mb-3"><a className={`text-[#343f52] hover:text-[#3f78e0] ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')} href={get(props, 'ctaLink')}>{get(item, 'title')}</a></h2>}
                                                </div>
                                                <div className={`post-footer ${get(tailwindClasses, 'footerSection')}`} style={get(style, 'footerSection')}>
                                                    <ul className="text-md text-[#aab0bc] m-0 p-0 list-none flex justify-between !mb-0">
                                                        {get(item, 'text1', "").length !== 0 && <li className="post-date flex items-center gap-2">{get(props, 'icon1', "").length !== 0 && <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon1'))}</span>}<span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text1')}</span></li>}
                                                        {get(item, 'text2', "").length !== 0 && <li className="post-comments"><a className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0] flex items-center gap-2" href={get(props, 'ctaLink')}>{get(props, 'icon2', "").length !== 0 && <span className={get(tailwindClasses, 'icon')} style={get(style, 'icon')}>{parse(get(props, 'icon2'))}</span>}<span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text2')}</span></a></li>}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>)}
                            </div>
                        </Swiper>
                        <div className="flex justify-center gap-3 mt-4">
                            {get(props, 'prevIcon', "").length !== 0 && <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                disabled={isBeginning}
                                className={`px-2 py-2 rounded-full ${isBeginning
                                    && '!bg-gray-300 !text-gray-500 cursor-not-allowed'}
                                        bg-blue-500 text-gray-50 hover:bg-blue-600 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                                {parse(get(props, 'prevIcon'))}
                            </button>}
                            {get(props, 'nextIcon', "").length !== 0 && <button
                                onClick={() => swiperRef.current?.slideNext()}
                                disabled={isEnd}
                                className={`px-2 py-2 rounded-full ${isEnd
                                    && '!bg-gray-300 !text-gray-500 cursor-not-allowed'}
                                        bg-blue-500 text-gray-50 hover:bg-blue-600 ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                                {parse(get(props, 'nextIcon'))}
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

BlogV30.defaultProps = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    items: PropTypes.arrayOf(object)
}

BlogV30.defaultProps = {
    style: {
        container: {},
        title: {},
        sectionBox: {},
        image: {},
        imgText: {},
        sectionSubTitle: {},
        sectionTitle: {},
        text: {},
        icon: {},
        footerSection: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        sectionBox: "",
        image: "",
        imgText: "",
        sectionSubTitle: "",
        sectionTitle: "",
        text: "",
        icon: "",
        footerSection: "",
        ctaIcon: ""
    },
    title: "Here are the latest posts from my blog that grabbed the most attention.",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
`,
    ctaLink: "#",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
`,
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
`,
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            subTitle: "Wedding",
            title: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            text2: "4"
        },
    ]
}
export default BlogV30
