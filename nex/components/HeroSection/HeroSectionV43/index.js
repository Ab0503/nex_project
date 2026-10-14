import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";

const HeroSectionV43 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section
      className="wrapper bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-lines"
      style={{
        backgroundImage: `url(${get(props, "bgImage")})`,
      }}
    >
      <div
        className={`p-15 pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] !text-center ${get(
          tailwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        <div className="flex flex-wrap">
          <div
            className="lg:w-10/12  xl:w-9/12  xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
            data-cues="zoomIn"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
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

            {get(props, "title1", "").length != 0 && (
              <h1
                className={`font-bold  xl:text-[3.4rem] text-[calc(1.465rem_+_2.58vw)] leading-[1.05] !mb-8 text-white ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1")}{" "}
                <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[10%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[4%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)] ">
                  <em>{get(props, "title2")}</em>
                </span>{" "}
                {get(props, "title3")}
              </h1>
            )}

            <div
              className="flex justify-center mb-4"
              data-cues="zoomIn"
              data-group="page-title-buttons"
              data-delay="900"
            >
                {
                    get(props, "title1", "").length != 0 && <span>
                    <a
                      href="#"
                      className={`px-5 py-3 rounded-lg btn btn-lg bg-white  hover:bg-blue-500 ${get(
                        tailwindClasses,
                        "ctaText"
                      )}`}
                      style={get(style, "ctaText")}
                    >
                      {get(props, "ctaText")}
                    </a>
                  </span>
                }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV43.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  subTitle: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  bgImage: PropTypes.string,
};

HeroSectionV43.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title1: {},
    title2: {},
    title3: {},
    subTitle: {},
    ctaText: {},
    bgImage: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    title3: "",
    subTitle: "",
    ctaText: "",
    bgImage: "",
  },
  subTitle: "Hello! We are Sandbox",
  title1: "We have considered our solutions to",
  title2: "assist",
  title3: "every stage of your growth.",
  ctaText: "Explore Now",
  ctaLink1: "#",
  bgImage:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736169583.bg2.jpg",
};
export default HeroSectionV43;
