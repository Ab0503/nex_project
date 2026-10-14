import React from "react";
import get from "lodash.get";
import PropTypes from "prop-types";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import parse from "html-react-parser";
import NexAnimation from '@nex-components/NexAnimation';

const HeroSectionV56 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <div className={`overflow-hidden nx-bg-primary-light ${get(tailwindClasses, "container")}`} style={get(style, "container")}>
            <div className={`relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(17,0,5,.3)] ${get(tailwindClasses, "imageContainer")}`} style={{ backgroundImage: `url(${get(props, "bgImage")})`, height: "400px", width: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", ...get(style, "imageContainer") }}>
                <div className={`text-gray-50 text-center flex flex-col items-center justify-center h-full relative z-10  ${get(tailwindClasses, "contentContainer")}`} style={get(style, "contentContainer")}>
                    <NexAnimation type={get(props, 'ContentAnimation', '')}>
                        <div>
                            {get(props, "title").length !== 0 && (
                                <h1
                                    className={`nx-section-heading-font text-6xl font-bold mb-8 ${get(
                                        tailwindClasses,
                                        "title"
                                    )}`}
                                    style={get(style, "title")}
                                >
                                    {get(props, "title")}
                                </h1>
                            )}
                        </div>
                    </NexAnimation>
                    <div className="flex items-center font-semibold text-lg mb-5 gap-3">
                        {get(props, "breadCrumb1").length !== 0 && (
                            <PrimaryLink
                                className={`flex gap-2 items-center ${get(
                                    tailwindClasses,
                                    "breadCrumb"
                                )}`}
                                style={get(style, "breadCrumb")}
                                href={get(props, "breadCrumb1Link")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                                {get(props, "breadCrumb1")}
                            </PrimaryLink>
                        )}
                        <span
                            className={`inline-flex ${get(tailwindClasses, "icon")}`}
                            style={get(style, "icon")}
                        >
                            {parse(get(props, "icon"))}
                        </span>
                        {get(props, "breadCrumb2").length !== 0 && (
                            <span
                                className={`${get(
                                    tailwindClasses,
                                    "breadCrumb"
                                )}`}
                                style={get(style, "breadCrumb")}
                            >
                                {get(props, "breadCrumb2")}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSectionV56.defaultProps = {
    style: {
        container: {},
        imageContainer: {},
        contentContainer: {},
        title: {},
        breadcrumb: {},
    },
    tailwindClasses: {
        container: "",
        imageContainer: "",
        contentContainer: "",
        title: "",
        breadCrumb: "",
    },
    ContentAnimation: "",
    bgImage: "https://images.pexels.com/photos/7755546/pexels-photo-7755546.jpeg?auto=compress&cs=tinysrgb&w=1950&h=750&fit=crop&dpr=1",
    title: "Project Details",
    breadCrumb1: "Home",
    breadCrumb1Link: "#",
    breadCrumb2: "Project Details",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
`,
};

HeroSectionV56.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    breadcrumb1: PropTypes.string,
    breadcrumb2: PropTypes.string,
};
export default HeroSectionV56;
