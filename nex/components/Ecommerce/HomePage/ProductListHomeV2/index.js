import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { React, useState, useRef } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const ProductListHomeV2 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <section className={`px-4 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex items-center border">
                {get(props, 'categoryName', '').length !== 0 && <PrimaryLink href={get(props, 'categoryLink')}>
                    <h2 className={`nx-section-heading-font w-full text-xl font-semibold uppercase nx-bg-primary text-white p-3 ${get(tailwindClasses, 'categoryName')}`} style={get(style, 'categoryName')}>{get(props, 'categoryName')}</h2>
                </PrimaryLink>}
                <ul className='flex flex-wrap items-center space-x-4 ml-4'>
                    {get(props, 'subCategories', []).map((sub, index) => (
                        get(sub, 'text').length !== 0 && <PrimaryLink href={get(sub, 'link')}>
                            <li key={index} className={`my-2 nx-text-hover-primary hover:underline ${get(tailwindClasses, 'subCategory')}`} style={get(style, 'subCategory')}>
                                {get(sub, 'text')}
                            </li>
                        </PrimaryLink>
                    ))}
                    {get(props, 'allText', "").length !== 0 && <p className={`nx-text-hover-primary hover:underline ${get(tailwindClasses, 'allText')}`} style={get(style, 'allText')}><PrimaryLink href={get(props, 'allLink')}>{get(props, 'allText')}</PrimaryLink></p>}
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 h-full'>
                <div className='w-full h-full col-span-2 overflow-hidden'>
                    <Swiper autoplay={{
                        delay: `${get(props, 'sliderDelay')}`
                    }} spaceBetween={10} freeMode={true} modules={[FreeMode, Pagination, Autoplay]} onSwiper={(swiper) => swiperRef.current = swiper} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
                        {get(props, 'bannerImages', '').map((banner) => <SwiperSlide><PrimaryLink href={get(banner, 'link')}>
                            <NexImage className={`!relative !h-[377px] border-r border-l border-b ${get(tailwindClasses, 'bannerImage')}`} style={get(style, 'bannerImage')} src={get(banner, 'image')} />
                        </PrimaryLink>
                        </SwiperSlide>)}
                    </Swiper>
                    <div className="relative flex justify-center -mt-4 space-x-2 z-10">
                        {Array.isArray(get(props, 'bannerImages', [])) && get(props, "bannerImages", []).map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? `nx-bg-primary w-8` : "bg-gray-600"
                                    }`}
                                onClick={() => swiperRef.current?.slideTo(index)}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className='w-full col-span-4 h-full p-5 border-r border-b'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) => <PrimaryLink href={`${get(props, 'link')}/${get(item, 'name')}/${get(item, 'id')}`}><div key={get(item, 'id')} className={`flex flex-wrap justify-center gap-2 !mb-2 ${get(tailwindClasses, 'listedBox')}`} style={get(style, 'listedBox')}>
                            {get(item, 'image', "").length !== 0 && <NexImage className={`!relative !h-24 !w-24 ${get(tailwindClasses, 'listedImage')}`} style={get(style, 'listedImage')} src={get(item, 'image')} />}
                            <div>
                                {get(item,'name','').length !== 0 && <h3 className={`text-[.75rem] font-semibold text-center ${get(tailwindClasses, 'listedName')}`} style={get(style, 'listedName')}>{get(item, 'name')}</h3>}
                                <div className="flex justify-center items-center gap-1 my-4">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`w-4 h-4 ${i < get(item, 'rating') ? "text-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                {get(item, 'price', '').length !== 0 && <p className={`text-base text-center font-bold nx-text-primary ${get(tailwindClasses, 'listedPriceText')}`} style={get(style, 'listedPriceText')}>
                                    {get(item, 'price')} <span className={`line-through text-gray-500 ${get(tailwindClasses, 'listedOldPrice')}`} style={get(style, 'listedOldPrice')}>{get(item, 'oldPrice')}</span>
                                </p>}
                            </div>
                        </div>
                        </PrimaryLink>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

ProductListHomeV2.propTypes = {
    style: object,
    tailwindClasses: object,
    categoryName: string,
    subCategories: arrayOf(object),
    allLink: string,
    allText: string,
    ctaText: string,
    closedIcon: string,
    items: arrayOf(object),
    products: arrayOf(object)
}

ProductListHomeV2.defaultProps = {
    style: {
        container: {},
        categoryName: {},
        subCategory: {},
        allText: {},
        bannerImage: {},
        listedBox: {},
        listedImage: {},
        listedName: {},
        listedPriceText: {},
        listedOldPrice: {}
    },
    tailwindClasses: {
        container: "",
        categoryName: "",
        subCategory: "",
        allText: "",
        bannerImage: "",
        listedBox: "",
        listedImage: "",
        listedName: "",
        listedPriceText: "",
        listedOldPrice: ""
    },
    sliderDelay: 3000,
    categoryName: "Fashion",
    subCategories: [
        {
            link: "#",
            text: "Clothing"
        },
        {
            link: "#",
            text: "Clothing"
        },
        {
            link: "#",
            text: "Clothing"
        }
    ],
    allLink: "#",
    allText: "View All",
    link: "product",
    bannerImages: [
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736433506.about28.jpg",
            link:"#"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736433506.about28.jpg",
            link:"#"
        },
        {
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736433506.about28.jpg",
            link:"#"
        },
    ],
    items: [
        {
            id: 1,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 7,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 8,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
        {
            id: 9,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle temp...",
            price: "$400.00",
            oldPrice: "$456.00",
            rating: 5,
        },
    ]
}
export default withData(ProductListHomeV2)
