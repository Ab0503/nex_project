import React from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from "@nex-core-ui/NexImage";

const BlogV37 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});

    return (
        <section className={`overflow-hidden py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                {get(props, 'title', "").length !== 0 &&
                    <h2 className={`text-3xl font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                        {get(props, 'title')} <span className={`nx-text-primary ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, 'title1')}</span>
                    </h2>
                }
                <div className={`w-20 h-1 nx-bg-primary mx-auto mt-2 mb-6 rounded ${get(tailwindClasses, 'underline')}`} style={get(style, 'underline')}></div>
                {get(props, 'subtitle', "").length !== 0 &&
                    <p className={`text-gray-500 italic max-w-2xl mx-auto ${get(tailwindClasses, 'subtitle')}`} style={get(style, 'subtitle')}>
                        {get(props, 'subtitle')}
                    </p>
                }
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        get(props, 'items', []).map((item) =>
                        (get(item, 'imagePath', "").length !== 0) &&
                            (<div>
                                {get(item, 'imagePath', "").length !== 0 &&
                                <NexImage src={get(item, 'imagePath')} className={`!relative !w-full !h-80 object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                                }
                                <div className={`absolute -mt-28 max-sm:-mt-56 ml-8 bg-gray-50 rounded shadow-md overflow-hidden border-b-4 border-yellow-500 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                                    <div className="w-72 p-6 text-left">
                                        {get(item, 'title2', "").length !== 0 &&
                                            <h3 className={`text-lg font-semibold text-gray-800 ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(item, 'title2')}</h3>
                                        }
                                        <div className="flex text-sm text-gray-500 mt-2">
                                            {get(item, 'icon1', "").length !== 0 &&
                                                <span className="mr-4 flex items-center">
                                                    <span className={`nx-text-primary mr-1 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(item, 'icon1'))}</span> {get(item, 'text1')}
                                                </span>
                                            }
                                            {get(item, 'icon2', "").length !== 0 &&
                                                <span className="flex items-center">
                                                    <span className={`nx-text-primary mr-1 ${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>{parse(get(item, 'icon2'))}</span> {get(item, 'text2')}
                                                </span>
                                            }
                                        </div>
                                        {get(item, 'description', "").length !== 0 &&
                                        <p className={`text-sm text-gray-600 mt-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                                            {get(item, 'description')}
                                        </p>
                                        }
                                        {get(item, 'ctaText', "").length !== 0 &&
                                            <button className={`mt-4 px-4 py-2 nx-btn-primary nx-btn-primary:hover hover:bg-blue-900 text-gray-700 hover:text-gray-50 rounded ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(item, 'ctaText')}</button>
                                        }
                                    </div>
                                </div>
                            </div>)
                        )}
                </div>
            </div>
        </section>

    )
}

BlogV37.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
}
BlogV37.defaultProps = {
    style: {
        container: {},
        title: {},
        title1: {},
        underline: {},
        subtitle: {},
        image: {},
        box: {},
        title2: {},
        icon1: {},
        text1: {},
        icon2: {},
        text2: {},
        description: {},
        ctaText: {},
        ctaLink: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        title1: "",
        underline: "",
        subtitle: "",
        image: "",
        box: "",
        title2: "",
        icon1: "",
        text1: "",
        icon2: "",
        text2: "",
        description: "",
        ctaText: "",
        ctaLink: ""
    },
    title: "FEATURED",
    title1: "NEWS",
    subtitle: "We have some great teachers and trainers in our staff who have professional experience along high education. Which gives you peace of mind.",
    items: [
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            title2: "Learn Basic Computer Skills",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>`,
            text1: "By: Ateeq",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
            </svg>`,
            text2: "3 Comments",
            description: "Our best computer skills always available to make you better in your computer classes ...",
            ctaText: "Read More",
            ctaLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            title2: "How to attend a seminar?",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>`,
            text1: "By: Ateeq",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
            </svg>`,
            text2: "3 Comments",
            description: "Our best computer skills always available to make you better in your computer classes ...",
            ctaText: "Read More",
            ctaLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            title2: "What are best institutes",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>`,
            text1: "By: Ateeq",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
            </svg>`,
            text2: "3 Comments",
            description: "Our best computer skills always available to make you better in your computer classes ...",
            ctaText: "Read More",
            ctaLink: "#"
        }
    ]
}
export default BlogV37;
