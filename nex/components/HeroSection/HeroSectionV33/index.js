import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const HeroSectionV30 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper  bg-[rgba(246,247,249,1)] ">
      <div
        className={`container pt-14 xl:pt-24 lg:pt-24 md:pt-24 !text-center  ${get(
          tailwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        <div className="flex flex-wrap">
          <div
            className="lg:w-8/12 xxl:w-7/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {get(props, "subTitle", "").length != 0 && (
              <h2
                className={`text-[0.8rem] uppercase tracking-[0.05rem] text-[#343f52] mb-4 ${get(
                  tailwindClasses,
                  "subTitle"
                )}`}
                style={get(style, "subTitle")}
              >
                {get(props, "subTitle")}
              </h2>
            )}
            {get(props, "title", "").length != 0 && (
              <h1
                className={`xl:text-[2.9rem] text-[calc(1.415rem_+_1.98vw)] !leading-[1.2] font-bold mb-7${get(
                  tailwindClasses,
                  "title"
                )}`}
                style={get(style, "title")}
              >
                {get(props, "title")}
              </h1>
            )}

            <div
              className="flex justify-center"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay="900"
            >
                {
                   get(props, "ctaText1", "").length != 0 && <span>
                   <a
                     href="#"
                     className={`px-6 py-3 text-black !bg-slate-600 border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] me-2 ${get(
                                         tailwindClasses,
                                         "ctaText1"
                                       )}`} style={get(style, "ctaText1")}
                   >
                      {get(props, "ctaText1")}
                   </a>
                 </span>
                }
              {
                get(props, "ctaText2", "").length != 0 && <span>
                <a
                  href="#"
                  className={`px-6 py-3 bg-white hover:text-white border-2 hover:bg-slate-500 border-slate-300 !rounded-[50rem] ${get(
                                      tailwindClasses,
                                      "ctaText2"
                                    )}`} style={get(style, "ctaText2")}
                >
                  {get(props, "ctaText2")}
                </a>
              </span>
              }
              
            </div>
          </div>
        </div>
      </div>

      <figure
        className="!absoute my-3"
        style={{ bottom: "0", left: "0", top: "0", zIndex: "2" }}
      >
        <NexImage
          className="!relative"
          src={get(props, "imagePath")}
        />
      </figure>
    </section>
  );
};

HeroSectionV30.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText2: PropTypes.string,
  ctaLink2: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV30.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    ctaText1: {},
    ctaText2: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    ctaText1: "",
    ctaText2: "",
    imagePath: "",
  },
  subTitle: "Hello! This is Sandbox",
  title: "We bring rapid solutions for your business",
  ctaText1: "Explore Now",
  ctaLink1: "#",
  ctaText2: "Contact Me",
  ctaLink2: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736319146.bg11.jpg"
};
export default HeroSectionV30;
