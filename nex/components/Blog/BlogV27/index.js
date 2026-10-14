import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import get from 'lodash.get';
import parse from 'html-react-parser';
import PropTypes, { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';
import { MinusIcon } from '@heroicons/react/24/outline';

const BlogV27 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="xl:mx-20 lg:mx-16 md:mx-10 max-sm:mx-5">
                <div className={`flex items-center flex-wrap xl:mx-[35px] lg:mx-[20px] ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px]  max-w-full xl:mt-2 lg:mt-2 mt-[-50px] max-sm:mb-5">
                        <NexAnimation type={get(props, 'leftContentAnimation')}>
                            {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold lg:text-4xl leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                            {get(props, 'description', "").length !== 0 && <p className={`lead !text-[1.05rem] leading-[1.6] !mb-6 xxl:pr-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                            {get(props, 'ctaText', "").length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink></button>}
                        </NexAnimation>
                    </div>
                    <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 max-w-full">
                        <div className='container mx-auto'>
                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                <Swiper breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    }
                                }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                                    {get(props, 'items', []).map((item, index) => <SwiperSlide>
                                        <article key={index} className={`overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                            {get(item, 'img', "").length !== 0 && <figure className="overlay overlay-1 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(30,34,40,.5)] hover-scale group rounded !mb-5"> <NexImage className={` transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative  ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item, 'img')} alt="image" />
                                                {get(item, 'imgText', "").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] p-2">
                                                    <PrimaryLink href={get(item, 'ctaLink')}>
                                                        <h5 className={`text-white text-xl font-bold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(item, 'imgText')}</h5>
                                                    </PrimaryLink>
                                                </figcaption>}
                                            </figure>}
                                            <div className="post-header">
                                                {get(item, 'title', "").length !== 0 && <div className={`inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-sm font-bold nx-text-primary relative align-top pl-[1.4rem] ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>
                                                    <MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary' />
                                                    <PrimaryLink href={get(item, 'ctaLink')} className="hover" rel="category">{get(item, 'title')}</PrimaryLink>
                                                </div>}
                                                {get(item, 'description', "").length !== 0 && <h2 className="text-[.75rem] font-semibold post-title h3 !mt-1 !mb-3"><PrimaryLink className={`${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')} href={get(item, 'ctaLink')}>{get(item, 'description')}</PrimaryLink></h2>}
                                            </div>
                                            <div className={`post-footer ${get(tailwindClasses, 'footerSection')}`} style={get(style, 'footerSection')}>
                                                <ul className="flex justify-between text-md m-0 p-0 list-none  !mb-0">
                                                    {get(item, 'dateText', "").length !== 0 && <li className="post-date flex items-center gap-2">
                                                        {get(item, 'dateIcon', "").length !== 0 && <span className={`${get(tailwindClasses, 'dateIcon')}`} style={get(style, 'dateIcon')}>{parse(get(item, 'dateIcon'))}</span>}
                                                        <span className={`${get(tailwindClasses, 'dateText')}`} style={get(style, 'dateText')}>{get(item, 'dateText')}</span>
                                                    </li>}
                                                    {get(item, 'commentText', "").length !== 0 && <li className="flex gap-2 items-center post-comments">{get(item, 'commentIcon', "").length !== 0 && <PrimaryLink className={`${get(tailwindClasses, 'commentIcon')}`} style={get(style, 'commentIcon')} href={get(item, 'ctaLink')}>
                                                        {parse(get(item, 'commentIcon'))}
                                                    </PrimaryLink>}
                                                        <span className={`${get(tailwindClasses, 'commentText')}`} style={get(style, 'commentText')}>{get(item, 'commentText')}</span>
                                                    </li>}
                                                </ul>
                                            </div>
                                        </article>
                                    </SwiperSlide>)}
                                </Swiper>
                            </NexAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogV27.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
BlogV27.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        description: {},
        cta: {},
        sectionBox: {},
        image: {},
        imgText: {},
        sectionTitle: {},
        sectionDescription: {},
        dateIcon: {},
        dateText: {},
        commentIcon: {},
        commentText: {},
        footerSection: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        title: "",
        description: "",
        cta: "",
        sectionBox: "",
        image: "",
        imgText: "",
        sectionTitle: "",
        sectionDescription: "",
        dateIcon: "",
        dateText: "",
        commentIcon: "",
        commentText: "",
        footerSection: ""
    },
    title: "Our Journal",
    description: "Here are the latest company news from our blog that got the most attention.",
    ctaText: "View All News",
    ctaLink: "#",
    sectionTitleColor: "[#3f78e0]",
    leftContentAnimation: "",
    rightContentAnimation: "",
    items: [
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            description: "Ligula tristique quis risus",
            dateText: "14 Apr 2022",
            dateIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            commentText: "4",
            commentIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            description: "Ligula tristique quis risus",
            dateText: "14 Apr 2022",
            dateIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            commentText: "4",
            commentIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734419240.b4.jpg",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            description: "Ligula tristique quis risus",
            dateText: "14 Apr 2022",
            dateIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            commentText: "4",
            commentIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1734419240.b4.jpg",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            description: "Ligula tristique quis risus",
            dateText: "14 Apr 2022",
            dateIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            commentText: "4",
            commentIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
    ]
}
export default BlogV27
