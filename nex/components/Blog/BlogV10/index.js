import get from 'lodash.get';
import React from 'react';
import PropTypes, { object } from 'prop-types';
import parse from 'html-react-parser/lib/index';
import withData from "@nex-core-ui/HOC/withData";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const BlogV10 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <div className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <NexAnimation type={get(props, 'topContentAnimation')}>
                {get(props, 'subTitle').length !== 0 && <h1 className={`nx-text-primary text-sm font-bold text-center m-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h1>}
                {get(props, "title").length !== 0 && <h1 className={`nx-section-heading-font text-3xl font-bold text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h1>}
            </NexAnimation>
            <div className={`grid lg:grid-cols-${get(props,'sectionBoxKey')} items-center justify-center gap-10 xl:px-32 lg:px-24 md:px-20 max-sm:px-5`}>
                {get(props,'items',[]).map((item) => (get(item, "icon","").length !== 0 || get(item, "title","").length !== 0 || get(item, 'description',"").length !== 0 || get(item, 'ctaText',"").length !== 0) &&
                    <NexAnimation type={get(props, 'bottomContentAnimation')}>
                        <div className={`hover:scale-105 shadow-xl p-10 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')} >
                            {get(item, "icon").length !== 0 && <span className={`flex justify-center mb-5 nx-text-primary ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, "icon"))}</span>}
                            {get(item, "title").length !== 0 && <h1 className={`text-center font-bold text-lg mx-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, "title")}</h1>}
                            {get(item, 'description').length !== 0 && <p className={`text-center font-light text-sm ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, "description")}</p>}
                            {get(item, 'ctaText').length !== 0 &&
                                <div className={`flex justify-center`}>
                                    <PrimaryLink href={get(item, "ctaLink")}>
                                        <button className={`items-center nx-btn-primary nx-btn-primary:hover p-2 rounded-lg mt-4 text-sm hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(item, "ctaText")}</button>
                                    </PrimaryLink>
                                </div>}
                        </div>
                    </NexAnimation>
                )}
            </div>
        </div>
    )
}

BlogV10.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionTitle: {},
        sectionIcon: {},
        sectionDescription: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionTitle: "",
        sectionIcon: "",
        sectionDescription: "",
        cta: ""
    },
    sectionBoxKey:"3",
    subTitle: "Our Services",
    title: "Our Charity Services",
    topContentAnimation:"",
    bottomContentAnimation:"",
    items: [
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
        {
            title: "Creative Concept & Idea",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam repellendus laboriosam nihil eaque voluptate!",
            ctaText: "Read more...",
            ctaLink: "#"
        },
    ]
}

BlogV10.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(object)
}
export default withData(BlogV10);
