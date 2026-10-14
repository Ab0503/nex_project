import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const BlogV36 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    const items1 = get(props, 'items1', {});

    return (
        <div>
            <div className={`overflow-hidden py-12 px-4 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

                    {/* <!-- Left: Feature Cards --> */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            get(props, 'items', []).map((item) =>
                            (get(item,'imagePath',"").length !==0 || get(item,'title',"").length !==0 || 
                            get(item,'description',"").length !==0 || get(item,'ctaText',"").length !==0) &&
                                (<div className={`bg-gray-50 rounded-lg shadow p-4 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                                    <NexImage src={get(item, "imagePath")} className={`!relative !w-full !h-60 rounded-lg mb-4 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                                    <h3 className={`text-lg font-semibold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(item, "title")}</h3>
                                    <p className={`text-sm text-gray-600 mt-2 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                                        {get(item, "description")}
                                    </p>
                                    {get(item,'ctaText',"").length !==0 &&
                                    <PrimaryLink href={get(item, "ctaLink")} className={`inline-flex gap-1 text-blue-600 mt-4 text-sm font-medium hover:underline ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>
                                        {get(item, "ctaText")} <span>{(parse(get(item, "ctaIcon")))}</span>
                                    </PrimaryLink>
                                    }
                                </div>)
                            )
                        }
                    </div>

                    {/* <!-- Right: Recent Events --> */}
                    <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg shadow -mt-8">
                        <div className="border-b px-6 py-4 flex justify-between items-center">
                            {get(props,'title1',"").length !==0 &&
                            <h4 className={`font-semibold text-gray-800 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, "title1")}</h4>
                            }
                            {get(props,'ctaLink1',"").length !==0 &&
                            <PrimaryLink href={get(props, "ctaLink1")} className={`inline-flex text-sm text-blue-600 hover:underline ${get(tailwindClasses, 'ctaText1')}`} style={get(style, 'ctaText1')}>{get(props, "ctaText1")}{parse(get(props, "ctaIcon1"))}</PrimaryLink>
                            }
                        </div>
                        <ul className="divide-y">
                            {
                                get(props, 'items1', []).map((item) =>
                                    (get(item,'icon',"").length !==0 || get(item,'text1',"").length !==0 || get(item,'text2',"").length !==0) &&
                                    (<li className="px-6 py-5">
                                        <div className="flex items-start gap-2">
                                        {get(item,'icon',"").length !==0 &&
                                            <span className={`nx-text-primary mt-1 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, "icon"))}</span>
                                        }
                                            <div>
                                                <p className={`text-sm text-gray-600 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</p>
                                                <p className={`text-sm text-gray-800 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</p>
                                            </div>
                                        </div>
                                    </li>)
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogV36.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string
}
BlogV36.defaultProps = {
    style: {
        container: {},
        box: {},
        image: {},
        title: {},
        description: {},
        ctaText: {},
        ctaIcon: {},
        ctaLink: {},
        box1: {},
        title1: {},
        ctaText1: {},
        ctaIcon1: {},
        ctaLink1: {},
        icon: {},
        text1: {},
        text2: {}
    },
    tailwindClasses: {
        container: "",
        box: "",
        image: "",
        title: "",
        description: "",
        ctaText: "",
        ctaIcon: "",
        ctaLink: "",
        box1: "",
        title1: "",
        ctaText1: "",
        ctaIcon1: "",
        ctaLink1: "",
        icon: "",
        text1: "",
        text2: ""
    },
    items: [
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            title: "Best Qualified Faculty",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour don't look.",
            ctaText: "Read More",
            ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
            ctaLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            title: "Amazing Campus Life",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour don't look",
            ctaText: "Read More",
            ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
            ctaLink: "#"
        }
    ],
    items1: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>`,
            text1: "15 March 2019",
            text2: "There are many variations of passages of Lorem Ipsum available, but the."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>`,
            text1: "12 February 2019",
            text2: "There are many variations of passages of Lorem Ipsum available, but the."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>`,
            text1: "17 January 2019",
            text2: "There are many variations of passages of Lorem Ipsum available, but the."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>`,
            text1: "10 December 2018",
            text2: "There are many variations of passages of Lorem Ipsum available, but the."
        }
    ],
    title1: "Recent Events",
    ctaText1: "All Events",
    ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
    ctaLink1:"#"
}
export default BlogV36;