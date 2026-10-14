import React, { useState } from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import parse from 'html-react-parser';
import { useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { arrayOf, number, object, string } from 'prop-types';


const PortfolioV14 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ index:null ,image: "", title: "" })

    const mainSwiperRef = useRef(null);
    const modalSwiperRef = useRef(null);

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='relative max-w-6xl mx-auto'>
                <Swiper loop={true} onSwiper={(swiper) => (mainSwiperRef.current = swiper)} breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: `${get(props, 'sectionKeyNo')}`
                    }
                }}>
                    {get(props, 'items', []).map((item,index) => <SwiperSlide key={index}>
                        <div className={`group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'image', '').length !== 0 && <figure className='relative'>
                                <div className='relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:transition-all before:duration-700 before:ease-in-out group-hover:before:bg-rose-800/60'>
                                    <NexImage src={get(item, 'image')} className={`!relative !h-auto !w-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} />
                                </div>
                                <span onClick={() => { setSelectedItem({ index,image: get(item, 'image'), title: get(item, 'title') }); setIsOpen(true) }} className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 z-20 bg-white rounded-full p-5 cursor-pointer ${get(tailwindClasses,'openDialogIcon')}`} style={get(style,'openDialogIcon')}>{parse(get(props,'openDialogIcon'))}</span>
                                {get(item, 'title', '').length !== 0 && <figcaption className={`absolute bottom-10 left-5 max-w-[16rem] text-2xl font-medium text-white group-hover:opacity-0 transition-all duration-700 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, 'title')}</figcaption>}
                            </figure>}
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => mainSwiperRef.current?.slidePrev()}
                        className={`flex items-center uppercase custom-prev absolute left-0 max-sm:-left-5 top-1/2 transform -translate-y-1/2 z-10 text-white ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'prevIcon'))}Prev
                    </button>
                )}
                {get(props, 'nextIcon', "").length !== 0 && (
                    <button
                        onClick={() => mainSwiperRef.current?.slideNext()}
                        className={`flex items-center uppercase custom-next absolute right-0 max-sm:-right-5 top-1/2 transform -translate-y-1/2 z-10 text-white  ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        Next{parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </div>
            {isOpen && (
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
                    <div className={`fixed inset-0 bg-white transition-opacity ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}/>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <DialogPanel
                                className={`relative transform overflow-hidden rounded-lg pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full`}
                            >
                                <div className="mx-auto">
                                    <Swiper
                                        loop={true}
                                        onSwiper={(swiper) => {
                                            modalSwiperRef.current = swiper;
                                            swiper.slideTo(selectedItem.index)
                                        }}
                                        onSlideChange={(swiper) => {
                                            setSelectedItem(prev => ({ ...prev, index: swiper.activeIndex }));
                                        }}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        navigation={{
                                            nextEl: '.custom-next',
                                            prevEl: '.custom-prev',
                                        }}
                                    >
                                        {get(props, 'items', []).map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <figure className="rounded-lg overflow-hidden sm:max-w-md mx-auto px-5 pt-5">
                                                    <NexImage
                                                        className={`!relative !h-[500px] !w-full object-center ${get(tailwindClasses, 'dialogImage')}`}
                                                        style={get(style, 'dialogImage')}
                                                        src={get(item,'image')}
                                                        alt="Project Image"
                                                    />
                                                </figure>
                                                <h4 className={`text-xl text-center font-medium nx-btn-primary p-3 ${get(tailwindClasses, 'dialogTitle')}`} style={get(style, 'dialogTitle')}>{get(item,'title')}</h4>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                {get(props, 'prevIcon', "").length !== 0 && (
                                    <button
                                        onClick={() => modalSwiperRef.current?.slidePrev()}
                                        className={`custom-prev absolute left-7 max-sm:left-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10  nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')}
                                    >
                                        {parse(get(props, 'prevIcon'))}
                                    </button>
                                )}
                                {get(props, 'nextIcon', "").length !== 0 && (
                                    <button
                                        onClick={() => modalSwiperRef.current?.slideNext()}
                                        className={`custom-next absolute right-7 max-sm:right-0 top-1/2 transform -translate-y-[2.8rem] px-2 py-2 rounded-full z-10 nx-btn-primary nx-btn-primary:hover ${get(tailwindClasses, 'ctaIcon')}`}
                                        style={get(style, 'ctaIcon')}
                                    >
                                        {parse(get(props, 'nextIcon'))}
                                    </button>
                                )}
                            <div className='px-5 mt-5'>
                            <Swiper
                                breakpoints={{
                                    340: {
                                        slidesPerView: 3
                                    },
                                    640: {
                                        slidesPerView: 5
                                    },
                                    1024: {
                                        slidesPerView: 10
                                    }
                                }}
                                spaceBetween={5}
                                onSwiper={(swiper)=>{
                                    if(modalSwiperRef.current.control){
                                        modalSwiperRef.current.controller.control = swiper;
                                        swiper.controller.control = modalSwiperRef.current;
                                    }
                                }}
                            >
                                {get(props, 'items', []).map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <figure className={`cursor-pointer`} onClick={() => {modalSwiperRef.current?.slideTo(index),setSelectedItem({index, image: get(item, "image"), title: get(item, "title") })}}>
                                            <NexImage
                                                className={`!relative !h-20 !w-24 object-center ${selectedItem.index === index ? "border-4 nx-border-primary":""} ${get(tailwindClasses, 'dialogThumbImage')}`}
                                                style={get(style, 'dialogThumbImage')}
                                                src={get(item, 'image')}
                                                alt="Project Image"
                                            />
                                        </figure>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                            </DialogPanel>
                        </div>
                        <div className="absolute top-2 right-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`rounded-full nx-btn-primary nx-btn-primary:hover px-2 py-2 shadow-sm z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
                            >
                                {parse(get(props, 'closedIcon'))}
                            </button>
                        </div>
                    </div>
                </Dialog>
            )
            }
        </section>
    )
}

PortfolioV14.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    openDialogIcon: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    items: arrayOf(object)
}
PortfolioV14.defaultProps = {
    style:{
        container:{},
        sectionBox:{},
        sectionImage:{},
        openDialogIcon:{},
        title:{},
        dialogBox:{},
        dialogImage:{},
        dialogTitle:{},
        ctaIcon:{},
        dialogThumbImage:{},
        closedIcon:{}
    },
    tailwindClasses:{
        container:"",
        sectionBox:"",
        sectionImage:"",
        openDialogIcon:"",
        title:"",
        dialogBox:"",
        dialogImage:"",
        dialogTitle:"",
        ctaIcon:"",
        dialogThumbImage:"",
        closedIcon:""
    },
    sectionKeyNo: 4,
    openDialogIcon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                </svg>`,
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>`,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`,
    items: [
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 1"
        },
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 2"
        },
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 3"
        },
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 4"
        },
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 5"
        },
        {
            image: "https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&w=480&h=880&fit=crop&dpr=1",
            title: "Modern Hotel in London 6"
        },
    ]
}
export default PortfolioV14
