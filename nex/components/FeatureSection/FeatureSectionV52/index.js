import React from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const FeatureSectionV52 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    return (
        <section className={`overflow-hidden py-12 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                {get(props,'title',"").length !==0 &&
                <h2 className={`text-3xl font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                {get(props,"title")}<span className={`nx-text-primary ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</span>
                </h2>
                }
                <div className={`w-20 h-1 nx-bg-primary mx-auto mt-2 mb-6 rounded ${get(tailwindClasses, 'underline')}`} style={get(style, 'underline')}></div>
                {get(props,'subtitle',"").length !==0 &&
                <p className={`text-gray-500 mt-2 max-w-2xl mx-auto ${get(tailwindClasses, 'subtitle')}`} style={get(style, 'subtitle')}>
                {get(props,"subtitle")}
                </p>
                }
            </div>

            <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-5xl mx-auto">
                {
                    get(props, 'items', []).map((item) => 
                    (get(item,'imagePath',"").length !==0 || get(item,'course_name',"").length !==0 ||
                    get(item,'description',"").length !==0 || get(item,'text1',"").length !==0 || get(item,'text2',"").length !==0)  &&
                        (<div className={`rounded-2xl shadow overflow-hidden ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                            <div className="relative">
                                {get(item,'imagePath',"").length !==0 &&
                                <NexImage src={get(item,"imagePath")} alt="Course" className={`!relative !w-full !h-48 object-cover ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} />
                                }
                                {get(item,'fees',"").length !==0 &&
                                <span className={`absolute top-3 right-3 nx-bg-primary text-gray-50 text-sm font-bold px-3 py-1 rounded-full ${get(tailwindClasses, 'fees')}`} style={get(style, 'fees')}>
                                {get(item,"fees")}
                                </span>
                                }
                                {get(item,'imagePath1',"").length !==0 &&
                                <div className="flex items-center mb-2">
                                    <NexImage src={get(item,"imagePath1")} alt="Ms. John Doe" className={`!relative !w-12 !h-12 ml-5 rounded-full border-2 border-yellow-400 -mt-6 shadow-md ${get(tailwindClasses, 'imagePath1')}`} style={get(style, 'imagePath1')} />
                                    <span className={`absolute inline-block nx-bg-primary text-gray-50 text-sm font-medium px-4 py-1 -mt-6 rounded-full ml-16 mb-2 ${get(tailwindClasses, 'name')}`} style={get(style, 'name')}>{get(item,"name")}</span>
                                </div>
                                }
                            </div>
                            <div className="p-5">
                                {get(item,'course_name',"").length !==0 &&
                                <h3 className={`font-semibold text-gray-800 text-lg mb-1 -mt-5 ${get(tailwindClasses, 'course_name')}`} style={get(style, 'course_name')}>{get(item,"course_name")}</h3>
                                }
                                {get(item,'description',"").length !==0 &&
                                <p className={`text-sm text-gray-500 mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                                {get(item,"description")}
                                </p>
                                }
                                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                    {get(item,'text1',"").length !==0 &&
                                    <li className="flex items-center gap-2">
                                        <span className={`nx-bg-primary rounded-full`}>{parse(get(item,"icon1"))}</span>
                                        <p className={`w-4 h-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}></p>
                                        {get(item,"text1")}
                                    </li>
                                    }
                                    {get(item,'text2',"").length !==0 &&
                                    <li className="flex items-center gap-2">
                                        <span className={`nx-bg-primary rounded-full`}>{parse(get(item,"icon2"))}</span>
                                        <p className={`w-4 h-4 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}></p>
                                        {get(item,"text2")}
                                    </li>
                                    }
                                </ul>
                                {get(item,'btnText',"").length !==0 &&
                                <button className={`w-full nx-btn-primary nx-btn-primary:hover text-gray-50 py-2 rounded-md font-medium ${get(tailwindClasses, 'btnText')}`} style={get(style, 'btnText')}>
                                    <PrimaryLink href={get(item,"btnLink")}></PrimaryLink>
                                {get(item,"btnText")}
                                </button>
                                }
                            </div>
                        </div>)
                    )}
            </div>
        </section>
    )
}

FeatureSectionV52.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subtitle: string
}
FeatureSectionV52.defaultProps = {
    style: {
        container: {},
        title: {},
        title1: {},
        underline: {},
        subtitle: {},
        box: {},
        imagePath: {},
        fees: {},
        imagePath1: {},
        name: {},
        course_name: {},
        description: {},
        icon1: {},
        icon2: {},
        text1: {},
        text2: {},
        btnText:{},
        btnLink: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        title1: "",
        underline: "",
        subtitle: "",
        box: "",
        imagePath: "",
        fees: "",
        imagePath1: "",
        name: "",
        course_name: "",
        description: "",
        icon1: "",
        icon2: "",
        text1: "",
        text2: "",
        btnText:"",
        btnLink: ""
    },
    title: "OUR FEATURED ",
    title1: "COURSES",
    subtitle: "With awesome institute we have arranged some awesome courses for you from which this is list of some featured courses!",
    items: [
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        },
        {
            imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            fees: "2900",
            imagePath1: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
            name: "Ms. John Doe",
            course_name: "Project Management Toolkit",
            description: "There are many variations of passages of Lorem Ipsum available.",
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text1: "4 Months (16 Weeks)",
            text2: "3 Sessions 2 Hrs in a week",
            btnText:"Apply Now",
            btnLink: "#"
        }
    ]
}
export default FeatureSectionV52;
