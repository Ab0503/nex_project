import React from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const PdpV8 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    const items1 = get(props, 'items1', {});
    const items2 = get(props, 'items2', {});
    const items3 = get(props, 'items3', {});
    const items4 = get(props, 'items4', {});

    return (
        <div className={`bg-gray-50 text-gray-800 px-12 py-10 mx-auto space-y-12 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex max-sm:flex-col gap-10 items-center flex-row-reverse">
                <div className="w-1/2 max-sm:w-full">
                    {get(props, 'title', "").length !== 0 &&
                        <h1 className={`text-4xl font-bold mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h1>
                    }
                    {get(props, 'subtitle', "").length !== 0 &&
                        <p className={`text-lg mb-6 ${get(tailwindClasses, 'subtitle')}`} style={get(style, 'subtitle')}>{get(props, "subtitle")}</p>
                    }
                    {
                        get(props, 'items', []).map((item) =>
                            get(item, 'list', "").length !== 0 &&
                            (<ul className="space-y-2 text-md inline-flex mr-12">
                                <li className={`flex items-center gap-1 ${get(tailwindClasses, 'list')}`} style={get(style, 'list')}><span className={`text-green-500 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                                    {parse(get(item, "icon"))}</span>{get(item, "list")}</li>
                            </ul>)
                        )}
                    <div className="flex gap-4 mt-6">
                        {get(props, 'ctaText1', "").length !== 0 &&
                            <button className={`nx-btn-primary nx-btn-primary:hover p-3 w-36 rounded-md ${get(tailwindClasses, 'ctaText1')}`} style={get(style, 'ctaText1')}><PrimaryLink href={get(props, "ctaLink1")}></PrimaryLink>{get(props, "ctaText1")}</button>
                        }
                        {get(props, 'ctaText2', "").length !== 0 &&
                            <button className={`outline nx-text-primary p-3 w-36 rounded-md nx-btn-primary:hover ${get(tailwindClasses, 'ctaText2')}`} style={get(style, 'ctaText2')}><PrimaryLink href={get(props, "ctaLink2")}></PrimaryLink>{get(props, "ctaText2")}</button>
                        }
                    </div>
                </div>
                <div className="relative w-1/2 max-sm:w-full">
                    {get(props, 'ctaText1', "").length !== 0 &&
                        <ImageOrVedio src={get(props, "imagePath")} vedioSrc={get(props, "videoPath")} className={`!relative !w-full !h-80 rounded-2xl shadow-lg ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                    }
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-50 text-6xl" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    {get(props, 'text', "").length !== 0 &&
                        <h5 className={`text-md font-semibold text-blue-600 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, "text")}</h5>
                    }
                    {get(props, 'title1', "").length !== 0 &&
                        <h2 className={`text-2xl font-semibold mb-4 ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, "title1")}</h2>
                    }
                    {
                        get(props, 'items1', []).map((item) =>
                            get(item, 'title1list', "").length !== 0 &&
                            (<ul className="list-disc pl-5 space-y-3 text-gray-600 text-[1.2rem]">
                                <li className={`text-gray-600 ${get(tailwindClasses, 'title1list')}`} style={get(style, 'title1list')}>{get(item, "title1list")}</li>
                            </ul>)
                        )}
                </div>
                <div>
                    {get(props, 'text', "").length !== 0 &&
                        <h2 className={`text-2xl font-semibold mb-4 ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props, "title2")}</h2>
                    }
                    <div>
                        {
                            get(props, 'items2', []).map((item) =>
                                get(item, 'title2badge', "").length !== 0 &&
                                (<div className="inline-block flex-wrap gap-3 mb-6 pr-4">
                                    <span class={`bg-orange-100 nx-text-primary text-xs font-medium me-2 px-5 py-2.5 rounded-sm dark:bg-orange-100 dark:nx-text-primary ${get(tailwindClasses, 'title2badge')}`} style={get(style, 'title2badge')}>{get(item, "title2badge")}</span>
                                </div>)
                            )}
                    </div>
                    <div>
                        {
                            get(props, 'items3', []).map((item) =>
                                get(item, 'title2Text', "").length !== 0 &&
                                (<div className="text-[1.1rem]">
                                    <p className={`inline-flex gap-2 ${get(tailwindClasses, 'title2Text')}`} style={get(style, 'title2Text')}><span className={` ${get(tailwindClasses, 'title2Icon')}`} style={get(style, 'title2Icon')}>{parse(get(item, "title2Icon"))}</span>{get(item, "title2Text")}</p>
                                </div>)
                            )}
                    </div>
                </div>
            </div>

            <div>
                {get(props, 'title3', "").length !== 0 &&
                    <h2 className={`text-2xl font-semibold mb-4 ${get(tailwindClasses, 'title3')}`} style={get(style, 'title3')}>{get(props, "title3")}</h2>
                }
                {
                    get(props, 'items4', []).map((item) =>
                        get(item, 'title3Text', "").length !== 0 &&
                        (<ul className="space-y-2 text-[1.2rem]">
                            <li className={`flex items-center gap-2 ${get(tailwindClasses, 'title3Text')}`} style={get(style, 'title3Text')}><span className={`nx-text-primary max-sm:-mt-5 ${get(tailwindClasses, 'title3Icon')}`} style={get(style, 'title3Icon')}>{parse(get(item, "title3Icon"))}
                            </span> {get(item, "title3Text")}</li>
                        </ul>)
                    )}
            </div>
        </div >
    )
}

PdpV8.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subtitle: string
}
PdpV8.defaultProps = {
    style: {
        container: {},
        title: {},
        subtitle: {},
        icon: {},
        list: {},
        ctaText1: {},
        ctaLink1: {},
        ctaText2: {},
        ctaLink2: {},
        image: {},
        text: {},
        title1: {},
        title1list: {},
        title2: {},
        title2badge: {},
        title2Icon: {},
        title2Text: {},
        title3: {},
        title3Icon: {},
        title3Text: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        subtitle: "",
        icon: "",
        list: "",
        ctaText1: "",
        ctaLink1: "",
        ctaText2: "",
        ctaLink2: "",
        image: "",
        text: "",
        title1: "",
        title1list: "",
        title2: "",
        title2badge: "",
        title2Icon: "",
        title2Text: "",
        title3: "",
        title3Icon: "",
        title3Text: ""
    },
    title: "Web Development",
    subtitle: "Dive into the latest technologies, learn to build responsive websites, and master front-end and back-end development.",
    ctaText1: "Enroll Now",
    ctaLink1: "#",
    ctaText2: "See Curriculam",
    ctaLink2: "#",
    imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
    videoPath: "",
    text: "Overview",
    title1: "Learning Objectives",
    title2: "Stack",
    title3: "Course Overview",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg>`,
            list: "Comprehensive Curriculum"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg>`,
            list: "Expert Instructors"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg>`,
            list: "Hands-On Projects"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg>`,
            list: "Career-Ready Skills"
        }
    ],
    items1: [
        {
            title1list: "Acquire technical skills, including HTML, CSS, JavaScript, and relevant programming languages.",
        },
        {
            title1list: "Develop and complete web development projects and interactive applications.",
        },
        {
            title1list: "Enhance problem-solving abilities, including debugging and troubleshooting code.",
        },
        {
            title1list: "Master both front-end and back-end development concepts.",
        },
        {
            title1list: "Apply industry best practices, such as responsive design and accessibility.",
        }
    ],
    items2: [
        {
            title2badge: "HTML",
        },
        {
            title2badge: "CSS",
        },
        {
            title2badge: "JS",
        },
        {
            title2badge: "REACT",
        },
        {
            title2badge: "NEXT.JS",
        },
        {
            title2badge: "GIT",
        },
        {
            title2badge: "GITHUB",
        }
    ],
    items3: [
        {
            title2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
</svg>`,
            title2Text: "136 Total Enrolled"
        },
        {
            title2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
</svg>`,
            title2Text: " Full-Time: 12 weeks"
        },
        {
            title2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
</svg>`,
            title2Text: "All Levels"
        },
        {
            title2Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
</svg>`,
            title2Text: "Completion Certificate"
        },
    ],
    items4: [
        {
            title3Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>`,
            title3Text: "Introduction to Web Technologies"
        },
        {
            title3Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>`,
            title3Text: "Hands-on projects to build your portfolio"
        }
    ]
}
export default PdpV8;