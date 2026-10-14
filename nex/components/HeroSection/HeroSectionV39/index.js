import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const HeroSectionV39 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div>
      <section className="wrapper !bg-[#edf2fc]">
        <div
          className={`p-20 pt-10 lg:pt-14 xl:!pt-14 xxl:!pt-10 lg:pb-10 xl:pb-10 xxl:pb-0 ${get(
            tailwindClasses,
            "container"
          )}`}
          style={get(style, "container")}
        >
          <div className="flex flex-wrap md:mx-[20px] xl:mx-[35px] mt-[50px] items-center text-center lg:text-left xl:text-left">
            <div
              className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay="900"
            >
              {get(props, "title1", "").length != 0 && (
                <h1
                  className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4 xl:!mr-5 xl:mt-[-2.5rem] lg:mt-[-2.5rem] ${get(
                    tailwindClasses,
                    "title1"
                  )}`}
                  style={get(style, "title1")}
                >
                  {get(props, "title1")}
                  <br />
                  <span
                    className={`text-[#3f78e0] ${get(
                      tailwindClasses,
                      "title2"
                    )}`}
                    style={get(style, "title2")}
                  >
                    {" "}
                    {get(props, "title2")}
                  </span>
                </h1>
              )}
              {get(props, "description", "").length != 0 && (
                <p
                  className={`lead text-[1.2rem] leading-normal mb-7 xxl:!pr-20 ] ${get(
                    tailwindClasses,
                    "description"
                  )}`}
                  style={get(style, "description")}
                >
                  {get(props, "description")} <br />{" "}
                </p>
              )}
              {get(props, "ctaText1", "").length != 0 && (
                <div className="inline-flex me-2">
                  <a
                    href={get(props, "ctaLink1")}
                    className={`px-6 py-3  text-white !bg-blue-500 border-[#605dba] hover:text-black hover:bg-[#605dba] hover:border-[#605dba] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] rounded${get(
                      tailwindClasses,
                      "ctaText1"
                    )}`}
                    style={get(style, "ctaText1")}
                  >
                    {get(props, "ctaText1")}
                  </a>
                </div>
              )}
              {
                <div className="inline-flex">
                  <a
                    href={get(props, "ctaLink2")}
                    className={`px-6 py-3  !text-[#605dba] bg-white !border-[#605dba] !border-[2px] hover:!text-white hover:bg-sky-500 hover:border-[#605dba] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#605dba] active:border-[#605dba] disabled:!text-white disabled:bg-transparent disabled:border-[#605dba] rounded${get(
                      tailwindClasses,
                      "ctaLink2"
                    )}`}
                    style={get(style, "ctaLink2")}
                  >
                    {get(props, "ctaText2")}
                  </a>
                </div>
              }
            </div>

            <div className="w-10/12  md:w-7/12  !mx-auto lg:w-6/12 xl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xl:!ml-5">
              <NexImage
                className="!relative !max-w-full !h-auto mb-[-3.5rem] md:!mb-[-4.5rem] lg:!mb-[-9rem]"
                src= {get(props, "imagePath")}
                data-cue="fadeIn"
                data-delay="300"
              />
            </div>
          </div>
        </div>

        <figure>
          <img
            src="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736427153.clouds.png"
            alt=""
          />
        </figure>
      </section>
    </div>
  );
};

HeroSectionV39.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV39.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText1: {},
    ctaText2: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description: "",
    ctaText1: "",
    ctaText2: "",
    imagePath: "",
  },
  title1: "Grow Your Business with",
  title2: "Our Marketing Solutions",
  description:
    "We help our clients to increase their website traffic, rankings and visibility in search results.",
  ctaText1: "Try it for Free",
  ctaLink1: "#",
  ctaText2: "Explore Now",
  ctaLink1: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736427123.3d11.png",
};
export default HeroSectionV39;
