import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";

const HeroSectionV29 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <div>
            <section className="wrapper !bg-[#edf2fc]">
                <div
                    className={`pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 ${get(
                        tailwindClasses,
                        "container"
                    )}`}
                    style={get(style, "container")}
                >
                    <div className="flex flex-wrap xl:mx-[35px] lg:mx-[20px] mt-[50px] mb-5 items-center justify-center">
                        <div
                            className="md:w-10/12 f md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none"
                            data-cues="slideInDown"
                            data-group="page-title"
                            data-delay="600"
                        >
                            {get(props, "title", "").length != 0 && (
                                <h1
                                    className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5 md:mx-[-1.25rem] lg:mx-0 ${get(
                                        tailwindClasses,
                                        "title"
                                    )}`}
                                    style={get(style, "title")}
                                >
                                    {get(props, "title")}
                                </h1>
                            )}
                            {get(props, "description", "").length != 0 && (
                                <p
                                    className={`lead text-[1rem] mb-7 ${get(
                                        tailwindClasses,
                                        "description"
                                    )}`}
                                    style={get(style, "description")}
                                >
                                    {get(props, "description")}
                                </p>
                            )}

                            <div
                                className="flex justify-center lg:!justify-start"
                                data-cues="slideInDown"
                                data-group="page-title-buttons"
                                data-delay="900"
                            >
                                {get(props, "ctaText1", "").length != 0 && (
                                    <span>
                                        <a
                                            className={`px-6 py-3 text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-black hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded me-2 ${get(
                                                tailwindClasses,
                                                "ctaText1"
                                            )} `}
                                            style={get(style, "ctaText1")}
                                        >
                                            {get(props, "ctaText1")}
                                        </a>
                                    </span>
                                )}
                                {get(props, "ctaText2", "").length != 0 && (
                                    <span>
                                        <a
                                            className={`px-6 py-3 text-white !bg-[#fab758] border-[#fab758] hover:text-black hover:bg-[#fab758] hover:border-[#fab758] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] rounded ${get(
                                                tailwindClasses,
                                                "ctaText2"
                                            )}`}
                                            style={get(style, "ctaText2")}
                                        >
                                            {get(props, "ctaText2")}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </div>

                        <div
                            className="lg:w-7/12 flex-[0_0_auto] px-[15px] max-w-full"
                            data-cue="slideInDown"
                        >
                            <figure>
                                <NexImage
                                    className="!relative !w-auto"
                                    src={get(props, "imagePath")}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper  mx-16">
                <div className="pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-9  xl:pb-28 lg:pb-28 md:pb-28">
                    <div className="flex flex-wrap md:mx-[-12.5px]  mt-[-8rem] xl:!mt-[-12.5rem] lg:!mt-[-12.5rem] md:!mt-[-12.5rem]  !mb-[4.5rem] md:!mb-[7rem]">
                        {get(props, "items", []).map((item) => (
                            <div className="md:w-6/12  xl:w-3/12 flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] bg-white border-b-4 border-b-orange-300">
                                    <div className="card-body p-[40px]">
                                        <span
                                            className={`text-yellow-300 ${get(
                                                tailwindClasses,
                                                "ctaIcon1"
                                            )}`}
                                            style={get(style, "ctaIcon1")}
                                        >
                                            {parse(get(item, "ctaIcon1"))}
                                        </span>
                                        <h4 className="font-bold text-[20px]">
                                            {get(item, "text1")}
                                        </h4>

                                        <p className="mb-2">
                                            <br></br>
                                            {get(item, "textdesc")}
                                        </p>
                                        <a
                                            href="#"
                                            className="text-yellow-500 flex items-center gap-1 more hover  focus:text-[#e1a147] hover:text-[#fae258]"
                                        >
                                            <span>{get(item, "ctaText")}</span>
                                            <span>{parse(get(props, "ctaIcon2"))}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

HeroSectionV29.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLink1: PropTypes.string,
    ctaText1: PropTypes.string,
    ctaLink2: PropTypes.string,
    ctaText2: PropTypes.string,
    imagePath: PropTypes.string,
    ctaIcon1: PropTypes.string,
    text1: PropTypes.string,
    textdesc: PropTypes.string,
    ctaText: PropTypes.string,
    ctaIcon2: PropTypes.string,
};

HeroSectionV29.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        description: {},
        ctaText1: {},
        ctaText2: {},
        imagePath: {},
        ctaIcon1: {},
        text1: {},
        textdesc: {},
        ctaText: {},
        ctaIcon2: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        title: "",
        description: "",
        ctaText1: "",
        ctaText2: "",
        imagePath: "",
        ctaIcon1: "",
        text1: "",
        textdesc: "",
        ctaText: "",
        ctaIcon2: "",
    },
    title: "Creative. Smart. Awesome.",
    description:
        "We specialize in web, mobile and identity design. We love to turn ideas into beautiful things.",
    ctaText1: "See Projects",
    ctaLink1: "#",
    ctaText2: "Learn More",
    ctaLink2: "#",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736143996.about15.jpg",
    ctaIcon2: `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4"
        >
          <path
            fill-rule="evenodd"
            d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
            clip-rule="evenodd"
          />
        </svg>`,

    items: [
        {
            ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
  <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
</svg>
`,
            text1: "Social Engagement",
            textdesc:
                "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
            ctaText: "Learn More",
        },
        {
            ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
  <path fill-rule="evenodd" d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>


`,
            text1: "Identity & Branding",
            textdesc:
                "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
            ctaText: "Learn More",
        },
        {
            ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
  <path fill-rule="evenodd" d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z" clip-rule="evenodd" />
  <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
</svg>

`,
            text1: "Content Marketing",
            textdesc:
                "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
            ctaText: "Learn More",
        },
        {
            ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
</svg>

`,
            text1: "Product Design",
            textdesc:
                "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
            ctaText: "Learn More",
        },
    ],
};
export default HeroSectionV29;
