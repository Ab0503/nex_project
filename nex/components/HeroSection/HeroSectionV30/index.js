import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import CountUp from "react-countup";

const HeroSectionV30 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <div>
            <section
                className="!relative wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white "
                style={{
                    backgroundImage: `url(${get(props,"bgImage1")})`,
                }}
            >
                <div
                    className={`container pt-28 pb-36 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-40 lg:pb-40 md:pb-40 !text-center ${get(
                        tailwindClasses,
                        "container"
                    )}`}
                    style={get(style, "container")}
                >
                    <div className="flex flex-wrap mb-12">
                        <div
                            className="md:w-9/12  lg:w-7/12  xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
                            data-cues="zoomIn"
                            data-group="page-title"
                            data-interval="-200"
                        >
                            {get(props, "subTitle", "").length != 0 && (
                                <h2
                                    className={`h6 uppercase tracking-[0.05rem] text-white mb-5 ${get(
                                        tailwindClasses,
                                        "subTitle"
                                    )}`}
                                    style={get(style, "subTitle")}
                                >
                                    {get(props, "subTitle")}
                                </h2>
                            )}
                            {get(props, "title", "").length != 0 && (
                                <h3 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] text-white mb-7 ${get(
                                    tailwindClasses,
                                    "title"
                                )} `} style={get(style, "title")}>
                                    {get(props, "title")}
                                </h3>
                            )}
                            {
                                get(props, "title", "").length != 0 && <a
                                    href="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1733137608.file_example_MP4_480_1_5MG.mp4"
                                    className="btn btn-circle btn-white btn-play ripple !mx-auto mb-5"
                                    data-glightbox
                                >
                                    <i className="icn-caret-right"></i>
                                </a>
                            }


                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper !bg-[#ffffff]  angled upper-end lower-end">
                <div className="container pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
                    <div className="flex flex-wrap">
                        <div className="!relative !w-full flex-[0_0_auto] px-[15px] !max-w-full !mt-[-10rem]">
                            <figure className="rounded">
                                <img
                                    src={get(props, "imagePath")}
                                />
                            </figure>
                            <div className="flex flex-wrap" data-cue="slideInUp">
                                <div className="xl:w-10/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                                    <div
                                        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 text-white mt-[-1.25rem] lg:!mt-0  xl:-translate-y-2/4 lg:-translate-y-2/4  mb-lg-n50p border-radius-lg-top"
                                        style={{
                                            backgroundImage: `url(${get(props,"bgImage2")})`,
                                        }}
                                    >
                                        <div className="card-body p-9 xl:!p-10">
                                            <div className="flex flex-wrap  items-center counter-wrapper mt-[-20px] !text-center">
                                                {
                                                    get(props, 'items', []).map((item) => (get(item, 'text1', "").length != 0 || get(item, 'text2', "").length != 0) &&
                                                     <div className="w-6/12  lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mb-5">
                                                        {
                                                            get(item, 'text1',"").length != 0 && <h3 className={`counter font-bold counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] leading-none mb-2 xl:text-[2.2rem]  text-white ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>
                                                            <CountUp end={get(item,"text1")} enableScrollSpy/>
                                                        </h3>  
                                                        }
                                                        {
                                                            get(item, 'text2',"").length != 0 && <p className={` ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
                                                        }                                                       
                                                        
                                                    </div>
                                                )}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

HeroSectionV30.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    Text1: PropTypes.string,
    Text2: PropTypes.string,
    imagePath: PropTypes.string,
    bgImage1: PropTypes.string,
    bgImage2: PropTypes.string,
};

HeroSectionV30.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        Text1: {},
        Text2: {},
        imagePath: {},
        bgImage1: {},
        bgImage2: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        Text1: "",
        Text2: "",
        imagePath: "",
        bgImage1: "",
        bgImage2: "",
    },
    subTitle: "Hello! This is Sandbox",
    title: "We bring rapid solutions for your business",
    imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736143996.about15.jpg",
    bgImage1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736169583.bg2.jpg",
    bgImage2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736169583.bg2.jpg",
    items: [
        {
            text1: "7518",
            text2: "Completed Projects",
        },
        {
            text1: "3472",
            text2: "Satisfied Customers",
        },
        {
            text1: "2184",
            text2: "Expert Employees",
        },
        {
            text1: "4523",
            text2: "Awards won",
        },
    ],
};
export default HeroSectionV30;
