import get from 'lodash.get'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import parse from 'html-react-parser';
import PropTypes,{object} from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';
import { MinusIcon } from '@heroicons/react/24/outline';

const BlogV29 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`xl:mx-32 lg:mx-20 max-sm:mx-10`}>
                <div className="container">
                    <div className="flex flex-wrap mx-[15px] items-center">
                        <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:pr-40">
                        <NexAnimation  type={get(props, 'titleContentAnimation', '')}>
                            {get(props, 'title',"").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        </NexAnimation>
                        </div>
                        {get(props, 'ctaText',"").length !== 0 && <div className={`md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:ml-auto lg:ml-auto md:!ml-auto xl:text-right lg:text-right md:text-right mt-5 xl:mt-0 lg:mt-0 md:mt-0`}>
                            <PrimaryLink href={get(props, 'ctaLink')} className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.05)] px-5 py-2 text-lg ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props, 'ctaText')}</PrimaryLink>
                        </div>}
                    </div>
                    <div className="flex flex-wrap xl:mx-[-30px] lg:mx-[-20px] mx-[-15px] mt-[-50px] blog grid-view">
                        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[30px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                            <article className={`post mb-8 overflow-hidden ${get(tailwindClasses,'leftSection')}`} style={get(style,'leftSection')}>
                                {(get(props, 'image1',"").length !== 0 || get(props,'image2',"").length !== 0)&& <div className="container mx-auto rounded !mb-6">
                                    <Swiper autoplay={{
                                                      delay: `${get(props, 'sliderDelay')}`,
                                                    }} slidesPerView="auto" spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination,Autoplay]}>
                                        <div className="swiper-wrapper">
                                            {get(props, 'image1',"").length !== 0 && <SwiperSlide><NexImage className={`!relative !w-full !h-full ${get(tailwindClasses,'image1')}`} style={get(style,'image1')} src={get(props, 'image1')} alt="image" /></SwiperSlide>}
                                            {get(props,'image2',"").length !== 0 && <SwiperSlide><NexImage className={`!relative ${get(tailwindClasses,'image2')}`} style={get(style,'image2')} src={get(props, 'image2')} alt="image" /></SwiperSlide>}
                                        </div>
                                    </Swiper>
                                </div>}
                                <div className="post-header mb-5">
                                    <NexAnimation  type={get(props, 'leftTitleContentAnimation', '')}>
                                    {get(props, 'leftTitle',"").length !== 0 && <div className={`inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-md font-bold nx-text-primary relative align-top pl-[1.4rem] ${get(tailwindClasses,'leftTitle')}`} style={get(style,'leftTitle')}>
                                    <MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary'/>
                                        <PrimaryLink href={get(props,'ctaLink')} className="hover" rel="category">{get(props, 'leftTitle')}</PrimaryLink>
                                    </div>}
                                    </NexAnimation>
                                    {get(props, 'leftSubTitle',"").length !== 0 && <h2 className="post-title mt-1 mb-4"><PrimaryLink className={` text-2xl font-bold ${get(tailwindClasses,'leftSubTitle')}`} style={get(style,'leftSubTitle')} href={get(props, 'ctaLink')}>{get(props, 'leftSubTitle')}</PrimaryLink></h2>}
                                    <ul className="flex flex-wrap gap-2 items-center max-sm:justify-center text-[0.7rem] m-0 p-0 list-none !mb-0">
                                        {get(props, 'leftText1',"").length !==0 && <li className={`post-date flex gap-2 items-center text-base `}><span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'leftIcon1'))}</span><span className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props, 'leftText1')}</span></li>}
                                        {get(props, 'leftText2',"").length !== 0 && <li className="flex gap-2 items-center post-author text-base"><PrimaryLink className="flex gap-2 items-center" href={get(props,'ctaLink')}>{get(props, 'leftIcon2',"").length !== 0 && <span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'leftIcon2'))}</span>}<span className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props, 'leftText2')}</span></PrimaryLink></li>}
                                        {get(props, 'leftText3',"").length !==0 && <li className="flex items-center post-comments before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0]"><PrimaryLink className={`flex gap-2 items-center text-base`} href={get(props,'ctaLink')}>{get(props, 'leftIcon3',"").length !== 0 && <span className={`${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'leftIcon3'))}</span>}<span className={`${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props, 'leftText3')}</span></PrimaryLink></li>}
                                    </ul>
                                </div>
                                {get(props, 'leftDescription',"").length !== 0 && <div className="!relative">
                                    <p className={`${get(tailwindClasses,'leftDescription')}`} style={get(style,'leftDescription')}>{get(props, 'leftDescription')}</p>
                                </div>}
                            </article>
                        </div>
                        <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[30px] lg:px-[20px] px-[15px] max-w-full mt-[50px]">
                            <div className="flex-wrap mx-[-15px] mt-[-50px]">
                                {get(props, 'items',[]).map((item) => <div className="w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px]">
                                    <article className={`overflow-hidden ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                        {get(item, 'img',"").length !== 0 && <figure className="overlay overlay-1 hover-scale before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 hover:before:bg-[rgba(30,34,40,.5)] group rounded !mb-5"> <NexImage className={`!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 !relative ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(item, 'img')} alt="image" />
                                            {get(item, 'imgText',"").length !== 0 && <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] p-2">
                                                <PrimaryLink href={get(props, 'ctaLink')}><h5 className={`text-white text-xl font-bold from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] right-0 top-2/4 ${get(tailwindClasses, 'sectionImgText')}`} style={get(style, 'sectionImgText')}>{get(item, 'imgText')}</h5></PrimaryLink>
                                            </figcaption>}
                                        </figure>}
                                        <div className="post-header">
                                            {get(item, 'title',"").length !== 0 && <div className={`flex items-center mb-[.4rem] uppercase tracking-[0.02rem] text-sm font-bold nx-text-primary relative    align-top pl-[1.4rem]  ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>
                                                <MinusIcon className='absolute inline-flex -translate-y-1/2 size-5 left-0 top-[50%] nx-text-primary'/>
                                                <PrimaryLink href={get(props, 'ctaLink')} className="hover" rel="category">{get(item, 'title')}</PrimaryLink>
                                            </div>}
                                            {get(item, 'description',"").length !== 0 && <h2 className="text-[.75rem] font-semibold post-title h3 !mt-1 !mb-3"><PrimaryLink className={`${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')} href={get(props, 'ctaLink')}>{get(item, 'description')}</PrimaryLink></h2>}
                                        </div>
                                        <div className={`post-footer ${get(tailwindClasses,'footerSection')}`} style={get(style,'footerSection')}>
                                            <ul className="flex justify-between text-md m-0 p-0 list-none  !mb-0">
                                                {get(item, 'text1',"").length !== 0 && <li className="post-date flex items-center gap-2">
                                                    {get(item, 'icon1',"").length !==0 && <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, 'icon1'))}</span>}
                                                    <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text1')}</span>
                                                </li>}
                                                {get(item, 'text2',"").length !== 0 && <li className="flex gap-2 items-center post-comments">{get(item, 'icon2',"").length !== 0 && <PrimaryLink className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')} href={get(props, 'ctaLink')}>
                                                    {parse(get(item, 'icon2'))}
                                                </PrimaryLink>}
                                                    <span className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text2')}</span>
                                                </li>}
                                            </ul>
                                        </div>
                                    </article>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


BlogV29.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    image1: PropTypes.string,
    image2: PropTypes.string,
    leftTitle: PropTypes.string,
    leftSubTitle: PropTypes.string,
    leftText1: PropTypes.string,
    leftIcon1: PropTypes.string,
    leftText2: PropTypes.string,
    leftIcon2: PropTypes.string,
    leftText3: PropTypes.string,
    leftIcon3: PropTypes.string,
    leftDescription: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
BlogV29.defaultProps = {
    style: {
        container: {},
        title:{},
        cta:{},
        leftSection:{},
        image1:{},
        image2:{},
        leftTitle:{},
        leftSubTitle:{},
        leftDescription:{},
        sectionBox:{},
        sectionImage:{},
        sectionTitle:{},
        sectionDescription:{},
        icon:{},
        text:{},
        footerSection:{}
    },
    tailwindClasses: {
        container: "",
        title:"",
        cta:"",
        leftSection:"",
        image1:"",
        image2:"",
        leftTitle:"",
        leftSubTitle:"",
        leftDescription:"",
        sectionBox:"",
        sectionImage:"",
        sectionTitle:"",
        sectionDescription:"",
        icon:"",
        text:"",
        footerSection:""
    },
    titleContentAnimation: "",
    leftTitleContentAnimation: "",
    sliderDelay: 3000,
    title: "Company news from our blog that got the most attention.",
    ctaText: "View All News",
    ctaLink: "#",
    image1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
    image2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226768.730x490.png",
    leftTitle: "Ideas",
    leftSubTitle: "Fringilla Ligula Pharetra Amet",
    leftText1: "5 July 2022",
    leftIcon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>`,
    leftText2: "By Sandbox",
    leftIcon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    leftText3: "comments",
    leftIcon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /></svg>`,
    leftDescription: "Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    items: [
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            title: "Coding",
            description: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
        {
            img: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            imgText: "Read More",
            title: "Coding",
            description: "Ligula tristique quis risus",
            text1: "14 Apr 2022",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>`,
            text2: "4",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>`
        },
    ]
}
export default BlogV29
