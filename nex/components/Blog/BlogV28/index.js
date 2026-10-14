import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import get from 'lodash.get';
import parse from 'html-react-parser';
import PropTypes, { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const BlogV28 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <div className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5 pt-5`}>
                    <div className="flex flex-wrap mx-[15px]">
                        <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            {get(props,'title',"").length !== 0 && <h2 className={`nx-text-primary text-[.75rem] leading-[1.35] uppercase text-center ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h2>}
                            {get(props,'description',"").length !==0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-6 text-center ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props,'description')}</h3>}
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <NexAnimation type={get(props, 'boxAnimation', '')}>
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
                        }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                           {get(props,"items",[]).map((item)=> <SwiperSlide>
                                <article className={`overflow-hidden rounded-lg border border-gray-300 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                    <div className="card relative">
                                        {get(item,'img',"").length !== 0 && <figure className="card-img-top overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(30,34,40,.5)] group"><NexImage className={`!w-full !h-auto !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(item,'img')} alt="image" />
                                            <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] p-2">
                                                {get(item,'imgText',"").length !==0 &&<PrimaryLink href={get(item,'ctaLink')}><h5 className={`text-gray-50 text-xl font-bold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4 ${get(tailwindClasses, 'imgText')}`} style={get(style, 'imgText')}>{get(item,'imgText')}</h5></PrimaryLink>}
                                            </figcaption>
                                        </figure>}
                                        <div className="card-body flex-[1_1_auto] p-[40px] max-sm:p-[20px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                            <div className="post-header">
                                                {get(item,'title',"").length !==0 && <div className={`nx-text-primary inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-sm font-bold relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 text-${get(props,'sectionTitleColor')} before:bg-${get(props,'sectionTitleColor')} ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>
                                                    <PrimaryLink href={get(item,'ctaLink')} className="hover" rel="category">{get(item,'title')}</PrimaryLink>
                                                </div>}
                                                {get(item,'subTitle',"").length !== 0 &&<h2 className="text-2xl font-semibold post-title h3 mt-1 mb-3">
                                                    <PrimaryLink className={`text-[#343f52] hover:text-[#3f78e0] ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')} href={get(item, 'ctaLink')}>{get(item,'subTitle')}</PrimaryLink></h2>}
                                            </div>
                                            {get(item,'description',"").length !== 0 && <div className="!relative">
                                                <p className={`${get(tailwindClasses,'sectionDescription')}`} style={get(style,'sectionDescription')}>{get(item,'description')}</p>
                                            </div>}
                                        </div>
                                        {(get(item,'text1',"").length !== 0 || get(item,'text2',"").length !== 0 || get(item,'text3',"").length !== 0) &&<div className={`card-footer border-t border-gray-300 xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] p-[18px_40px] ${get(tailwindClasses,'bottomBox')}`} style={get(style,'bottomBox')}>
                                            <ul className="flex flex-wrap justify-between text-md max-sm:text-sm text-[#aab0bc] m-0 p-0 list-none mb-0">
                                                {get(item,'text1',"").length !== 0 && <li className="post-date flex items-center gap-2">
                                                    {get(item,'icon1',"").length !== 0 && <span className={`nx-text-primary ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item,'icon1'))}</span>}
                                                    <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item,'text1')}</span>
                                                    </li>}
                                                {get(item, 'text2',"").length !== 0 && <li className="flex items-center gap-2 post-comments">{get(item,'icon2',"").length !== 0 && <PrimaryLink className={`nx-text-primary hover:text-[#3f78e0] hover:border-[#3f78e0] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')} href={get(item, 'ctaLink')}>
                                                    {parse(get(item,'icon2'))}</PrimaryLink>}
                                                    <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text2')}</span>
                                                    </li>}
                                                {get(item,'text3',"").length !== 0 && <li className="flex gap-2 items-center post-likes">{get(item,'icon3',"").length !== 0 && <PrimaryLink className={`nx-text-primary hover:text-[#3f78e0] hover:border-[#3f78e0] ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')} href={get(item, 'ctaLink')}>{parse(get(item,'icon3'))}</PrimaryLink>}
                                                <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item,'text3')}</span></li>}
                                            </ul>
                                        </div>}
                                    </div>
                                </article>
                            </SwiperSlide>)}
                        </Swiper>
                        </NexAnimation>
                    </div>
                
            </div>
        </div>
    )
}

BlogV28.propTypes = {
    style: PropTypes.object,
    tailwindClasses:PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
BlogV28.defaultProps = {
    style:{
        container:{},
        title:{},
        description:{},
        sectionBox:{},
        sectionTitle:{},
        sectionSubTitle:{},
        sectionDescription:{},
        bottomBox:{},
        icon:{},
        text:{},
    },
    tailwindClasses:{
        container:"",
        title:"",
        description:"",
        sectionBox:"",
        sectionTitle:"",
        sectionSubTitle:"",
        sectionDescription:"",
        bottomBox:"",
        icon:"",
        text:"",
    },
    title: "Our News",
    description: "Here are the latest company news from our blog that got the most attention.",
    sectionTitleColor:"[#3f78e0]",
    items: [
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            subTitle: "Ligula tristique quis risus",
            description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`,
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`,
            text3:"5"
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            subTitle: "Ligula tristique quis risus",
            description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`,
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`,
            text3:"5"
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            subTitle: "Ligula tristique quis risus",
            description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`,
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`,
            text3:"5"
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            ctaLink: "#",
            title: "Coding",
            subTitle: "Ligula tristique quis risus",
            description:"Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`,
            icon3:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`,
            text3:"5"
        }
    ],
    boxAnimation: ""
}
export default BlogV28
