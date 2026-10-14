import get from 'lodash.get';
import { React, useState, useRef } from 'react';
import parse from "html-react-parser";
import PdpPreviewV1 from "@nex-components/Ecommerce/Pdp/PdpPreviewV1";
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { arrayOf, number, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';
import PlpTileV1 from '@nex-components/Ecommerce/Plp/PlpTileV1';

const RecentProductsV1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    
    const openQuickViewModal =  (productId) => {
        setIsOpen(true);
      }

    const handleSlideChange = () => {
        if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
        }
    };

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <div className={`py-8 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='flex items-center mb-5'>
                {get(props, 'title','').length !==0 &&<h1 className={`w-11/12 text-2xl font-bold nx-section-heading-font nx-text-primary ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, 'title')}</h1>}
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className={`custom-prev px-2 py-2 rounded-full ${isBeginning
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
                        className={`ml-2 custom-next px-2 py-2 rounded-full ${isEnd
                            ? '!bg-gray-300 !text-gray-500 cursor-not-allowed'
                            : 'nx-btn-primary nx-btn-primary:hover'
                            } ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </div>
            <div className={"border-t border-gray-200 py-3"}></div>
            <Swiper spaceBetween={30} onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange();
            }}
                onSlideChange={handleSlideChange}
                breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: `${get(props, 'sectionKeyNo')}`
                    }
                }} freeMode={true} modules={[FreeMode]}>
                {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => (
                    <SwiperSlide>
                        <PlpTileV1 {...item} openQuickViewModal={openQuickViewModal}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isOpen && (
                <PdpPreviewV1 isOpen={true} setIsOpen={setIsOpen} isClose={()=> setIsOpen(false)}/>
            )
            }
        </div>
    )
}

RecentProductsV1.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    title: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    ctaText: string,
    items: arrayOf(object)
}
RecentProductsV1.defaultProps = {
    style: {
        container: {},
        title:{},
        ctaIcon:{},
        sectionBox: {},
        image: {},
        previewIcon: {},
        badgeText: {},
        productName: {},
        priceText: {},
        oldPrice: {},
        cta: {},
        wishlistIcon: {},
        dialogBox: {},
        closedIcon: {}
    },
    tailwindClasses: {
        container: "",
        title:"",
        ctaIcon:"",
        sectionBox: "",
        image: "",
        previewIcon: "",
        badgeText: "",
        productName: "",
        priceText: "",
        oldPrice: "",
        cta: "",
        wishlistIcon: "",
        dialogBox: "",
        closedIcon: ""
    },
    sectionKeyNo: 4,
    title: "Recent Products",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
    items: [
        {
            id: 1,
            name: "Xerat fulicom lan",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$129.00",
            oldPrice: "$150.00",
            discount: "12%",
            rating: 4,
            ctaText: "Add to Cart",
        },
        {
            id: 2,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$400.00",
            oldPrice: "$456.00",
            discount: "12%",
            rating: 5,
            ctaText: "Add to Cart",
        },
        {
            id: 3,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$400.00",
            oldPrice: "$456.00",
            discount: "12%",
            rating: 5,
            ctaText: "Add to Cart",
        },
        {
            id: 4,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$400.00",
            oldPrice: "$456.00",
            discount: "12%",
            rating: 5,
            ctaText: "Add to Cart",
        },
        {
            id: 5,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$400.00",
            oldPrice: "$456.00",
            discount: "12%",
            rating: 5,
            ctaText: "Add to Cart",
        },
        {
            id: 6,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "$400.00",
            oldPrice: "$456.00",
            discount: "12%",
            rating: 5,
            ctaText: "Add to Cart",
        },
    ]
}
export default withData(RecentProductsV1)
