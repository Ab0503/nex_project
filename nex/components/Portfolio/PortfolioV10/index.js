import NexImage from '@nex-core-ui/NexImage';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState, useRef, React } from 'react';
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { arrayOf, object, string } from 'prop-types';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const PortfolioV10 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setIsOpen(true);
    };
    return (
        <section className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5">
                <div className="flex flex-wrap mx-[15px]">
                    <div className="lg:w-11/12 xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto mb-10">
                        {get(props, 'subTitle', "").length !== 0 && <h2 className={`nx-text-primary text-[0.8rem] uppercase text-center mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[2rem] text-center lg:px-5 xl:px-10 xxl:px-24 mb-0 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                    </div>
                </div>
                <div className="itemgrid grid-view projects-masonry">
                    <div className="flex flex-wrap mt-[-50px] xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px] isotope">
                        {get(props, 'items', []).map((item, index) => <div key={index} className="group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] max-sm:px-0 px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                        <NexAnimation type={get(props, 'boxAnimation', '')}>
                        <div className={`rounded-xl ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                            {get(item, 'image', "").length !== 0 && <figure className="relative rounded-[.4rem] !mb-6"><NexImage className={`!relative rounded-[.4rem] ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(item, 'image')} alt="image" />{get(props, 'imgToggleIcon',"").length !==0 &&<a onClick={() => handleImageClick(index)} className={`item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 nx-btn-primary nx-btn-primary:hover shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-6 group-hover:opacity-100 group-hover:right-[1rem] ${get(tailwindClasses, 'toggleIcon')}`} style={get(style, 'toggleIcon')}>{parse(get(props, 'imgToggleIcon'))}</a>}</figure>}
                            <div className="project-details flex justify-center flex-col">
                                <div className="post-header">
                                    {get(item, 'title', "").length !== 0 && <h2 className={`text-lg font-bold mb-3 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}><a href={get(item, 'ctaLink')} className="">{get(item, 'title')}</a></h2>}
                                    {get(item, 'text', "").length !== 0 && <div className={`nx-text-primary uppercase tracking-[0.02rem] text-[.8rem] font-bold mb-[0.4rem] ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'text')}</div>}
                                </div>
                            </div>
                        </div>
                        </NexAnimation>
                        </div>)}
                    </div>
                </div>
                {isOpen && (
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
                        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <DialogPanel
                                    className={`relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}
                                >
                                    <div className="container mx-auto">
                                        <Swiper
                                            onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                                handleSlideChange();
                                                swiper.slideTo(selectedImageIndex);
                                            }}
                                            slidesPerView={1}
                                            onSlideChange={handleSlideChange}
                                            spaceBetween={20}
                                            freeMode
                                            navigation={{
                                                nextEl: '.custom-next',
                                                prevEl: '.custom-prev',
                                            }}
                                            pagination={{ clickable: true }}
                                            modules={[FreeMode, Pagination]}
                                        >
                                            {get(props, 'items', []).map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <figure className="rounded-lg overflow-hidden">
                                                        <NexImage
                                                            className={`!relative rounded-lg ${get(tailwindClasses, 'dialogImage')}`}
                                                            style={get(style, 'dialogImage')}
                                                            src={get(item, 'image')}
                                                            alt="Project Image"
                                                        />
                                                    </figure>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    {get(props, 'prevIcon', "").length !== 0 && (
                                        <button
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            disabled={isBeginning}
                                            className={`custom-prev absolute left-7 max-sm:left-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10 ${isBeginning
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
                                            className={`custom-next absolute right-7 max-sm:right-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10 ${isEnd
                                                ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
                                                : 'nx-btn-primary nx-btn-primary:hover'
                                                } ${get(tailwindClasses, 'ctaIcon')}`}
                                            style={get(style, 'ctaIcon')}
                                        >
                                            {parse(get(props, 'nextIcon'))}
                                        </button>
                                    )}
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className={`absolute top-2 right-2 rounded-full nx-btn-primary nx-btn-primary:hover px-2 py-2 shadow-sm z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
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
                {get(props, 'ctaText', "").length !== 0 && <div className="text-center mt-10">
                    <button className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                        <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
                    </button>
                </div>}
            </div>
        </section>
    )
}

PortfolioV10.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    ctaLink: string,
    ctaText: string,
    imgToggleIcon: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    items: arrayOf(object)
}

PortfolioV10.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        sectionImage:{},
        sectionTitle:{},
        sectionText:{},
        toggleIcon:{},
        cta:{},
        dialogBox:{},
        dialogImage:{},
        ctaIcon:{},
        closedIcon:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        sectionImage:"",
        sectionTitle:"",
        sectionText:"",
        toggleIcon:"",
        cta:"",
        dialogBox:"",
        dialogImage:"",
        ctaIcon:"",
        closedIcon:""
    },
    subTitle: "Our Projects",
    title: "Check out some of our awesome projects with creative ideas and great design.",
    ctaLink: "#",
    ctaText: "Start a Project",
    imgToggleIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>`,
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                          </svg>
                          `,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                          `,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`,
    items: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Cras Fermentum Sem",
            text: "Stationary"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Mollis Ipsum Mattis",
            text: "Magazine, Book"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Ipsum Ultricies Cursus",
            text: "Packaging"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Inceptos Euismod Egestas",
            text: "Stationary, Branding"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Ipsum Mollis Vulputate",
            text: "Packaging"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736421465.pd7.jpg",
            ctaLink: "#",
            title: "Porta Ornare Cras",
            text: "Branding"
        },
    ],
    boxAnimation: ""
}
export default PortfolioV10
