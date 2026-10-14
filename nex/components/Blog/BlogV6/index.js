import PropTypes, { arrayOf, object } from 'prop-types'
import get from "lodash.get";
import parse from "html-react-parser/lib/index";
import withData from "@nex-core-ui/HOC/withData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const BlogV6 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="text-center mb-12">
                <NexAnimation  type={get(props, 'TitleContentAnimation', '')}>
                {
                    get(props, 'title1', '').length !== 0 && <h2 className={`text-4xl font-bold nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                        {get(props, 'title1')}<span> </span><span className={`nx-section-heading-font nx-text-primary ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props, 'title2')}</span>
                    </h2>
                }
                </NexAnimation>
                {
                    get(props, 'description', '').length !== 0 && <p className={`mt-4 p-4 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')} </p>
                }
            </div>
            <Swiper autoplay={{
                delay: 3000,
                disableOnInteraction: false,
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
                    slidesPerView: `${get(props,'boxNo')}`,
                },
            }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination,Autoplay]} style={{ paddingBottom: "50px" }}>
                <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 px-4 lg:px-16">
                    {get(props, 'items').map((article, index) => (
                        <SwiperSlide key={index}>
                            <PrimaryLink href={get(article,'ctaLink')}>
                            <div
                                style={{ backgroundImage: `url('${get(article, 'image')}')`, ...get(style, 'itemBox') }}
                                className={`rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, 'itemBox')}`}>
                                <div className="relative z-10">
                                    {
                                        get(article, 'category', '').length !== 0 && <span className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1  rounded ${get(tailwindClasses, 'itemCategory')}`} style={get(style, 'itemCategory')}> {get(article, 'category')}</span>
                                    }
                                    <div className="group p-6">
                                    {
                                        get(article, 'title', '').length !== 0 && <h3 className={`text-lg font-bold text-white mb-3 py-8 ${get(tailwindClasses, 'itemTitle')}`} style={get(style, 'itemTitle')}>{get(article, 'title', '')} </h3>
                                    }
                                    {
                                        get(article, 'description', '').length !== 0 && <p className={`text-white  text-sm mb-4 opacity-100 transition-opacity duration-500 ${get(tailwindClasses, 'itemDescription')}`} style={get(style, 'itemDescription')}>{get(article, 'description')}</p>
                                    }
                                    <div className={`flex items-center justify-between text-sm text-white`}>
                                        {get(article, 'date', '').length !== 0 && <span className={`${get(tailwindClasses, 'itemDate')}`} style={get(style, 'itemDate')}>{get(article, 'date')}</span>}
                                        {get(article, 'author', '').length !== 0 && <span className={`flex items-center space-x-1`}>
                                            {get(article, 'authorIcon').length !== 0 && <span className={`${get(tailwindClasses, 'itemAuthorIcon')}`} style={get(style, 'itemAuthorIcon')}>{parse(get(article, 'authorIcon'))}</span>}
                                            <span className={`${get(tailwindClasses, 'itemAuthor')}`} style={get(style, 'itemAuthor')}>{get(article, 'author')}</span>
                                        </span>}
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            </PrimaryLink>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>

    )
}

BlogV6.defaultProps = {
    style: {
        container: {},
        title: {},
        title2: {},
        description: {},
        itemBox: {},
        itemCategory: {},
        itemTitle: {},
        itemDescription: {},
        itemDate: {},
        itemAuthorIcon: {},
        itemAuthor: {},
        paginationBtn: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        title2: "",
        description: "",
        itemBox: "",
        itemCategory: "",
        itemTitle: "",
        itemDescription: "",
        itemDate: "",
        itemAuthorIcon: "",
        itemAuthor: "",
        paginationBtn: ""
    },
    TitleContentAnimation: "",
    boxNo:4,
    title1: "Our",
    title2: "Insights & items",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    paginationSelectColor: "bg-green-600",
    items: [
        {
            id: 1,
            category: "Garden care",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 2,
            category: "Garden Care",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 3,
            category: "Garden care",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 4,
            category: "Planting",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 5,
            category: "Planting",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 6,
            category: "Planting",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 7,
            category: "dummy",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 8,
            category: "dummy",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
        {
            id: 9,
            category: "dummy",
            title: "Ask The Agronomists: Lawncare Tips From The Experts",
            description:
                "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Aenean commodo ligula eget the dolor. Aenean massa. Cum sociis natoque.Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit.",
            date: "SEP 6 - 2021",
            author: "Admin",
            authorIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
            image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
            ctaLink:"#"
        },
    ]
}

BlogV6.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title1: PropTypes.string,
    title2: PropTypes.string,
    description: PropTypes.string,
    paginationSelectColor: PropTypes.string,
    items: arrayOf(object)
}

export default withData(BlogV6);