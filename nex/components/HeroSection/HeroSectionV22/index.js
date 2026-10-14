import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexAnimation from "@nex-components/NexAnimation";

const HeroSectionV22 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper">
      <div className={`pt-6 pb-6 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] nx-bg-primary-light ${get(
            tailwindClasses,
            "container"
          )}`}  style={{ ...get(style, "container") }}>
        <NexAnimation  type={get(props, 'ContentAnimation', '')}>
        <div
          className={`flex flex-wrap xl:mx-40 lg:mx-20  mt-[50px]  md:mt-[80px] xl:mt-0 lg:mt-0 mb-7 md:!mb-10 lg:!mb-24 items-center justify-center ${get(
            tailwindClasses,
            "contentcontainer"
          )}`}  style={{ ...get(style, "contentcontainer") }}
        >
          <div
            className="md:w-8/12 max-lg:mb-20  md:!ml-[16.66666667%] lg:w-6/12 flex-[0_0_auto] px-[35px] max-w-full lg:!ml-[8.33333333%] !relative lg:!order-2"
            data-cue="zoomIn"
          >
            <div
              className={`shape bg-dot !w-[7rem] !h-[9rem] !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute -z-[1] opacity-50 ${get(
                tailwindClasses,
                "dotshape"
              )}`}
              data-rellax-speed="1"
              style={{ top: "-2rem", left: "-1.4rem", ...get(style, "dotshape") }}
            ></div>
            <div
              className={`absolute shape  rounded bg-[#edf2fc] rellax md:block ${get(
                tailwindClasses,
                "shape"
              )}`}
              data-rellax-speed="0"
              style={{
                bottom: "-1.8rem",
                right: " 0.8rem",
                width: "85%",
                height: "90%",
                ...get(style, "shape")}}
            ></div>
            <figure className="rounded ">
              <NexImage
                className={`!relative max-sm:!w-full ${get(tailwindClasses,"imagePath" )}`} style={{ ...get(style, "imagePath") }}
                src={get(props, "imagePath")} />
            </figure>
          </div>
          <div
            className="lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xl:mt-[-2.5rem] lg:mt-[-2.5rem] text-center lg:text-left xl:text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {get(props, "title", "").length !== 0 && (
              <h1
                className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5 ${get(
                  tailwindClasses,
                  "title"
                )}`}
                style={{ ...get(style, "title") }}
              >
                {get(props, "title")}
              </h1>
            )}
            {get(props, "description", "").length !== 0 && (
              <p
                className={`lead text-[20px] leading-normal mb-7 md:!px-10 lg:!px-0 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={{ ...get(style, "description") }}
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
              {get(props, "ctaText1", "").length !== 0 && (
                <span>
                  <PrimaryLink
                    href={get(props, "ctaLink1")}
                    className={`btn btn-lg btn-primary text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-[50rem] me-2 px-5 py-2  ${get(tailwindClasses,"ctaText1" )}`} style={{ ...get(style, "ctaText1") }}
                  >
                   {get(props, 'ctaText1')}
                  </PrimaryLink>
                </span>
              )}
              {get(props, "ctaText2", "").length !== 0 && (
                <span>
                  <PrimaryLink href={get(props, "ctaLink2")}
                    className={` border-2 nx-border-primary bg-transparent nx-text-primary hover:text-gray-50 nx-btn-primary:hover rounded-[50rem] px-5 py-2 ${get(tailwindClasses,"ctaText" )}`} style={{ ...get(style, "ctaText2") }}
                  >
                   {get(props, 'ctaText2')}
                  </PrimaryLink>
                </span>
              )}
            </div>
          </div>
        </div>
        </NexAnimation>
      </div>
    </section>
  );
};

HeroSectionV22.propTypes = {
  style: PropTypes.object,
  tailwindclassNamees: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV22.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    dotshape: {},
    shape: {},
    title: {},
    description: {},
    ctaLink1: {},
    ctaText1: {},
    ctaLink2: {},
    ctaText2: {},
    imagePath: {},
  },
  tailwindclassNamees: {
    container: "",
    contentContainer: "",
    dotshape: "",
    shape: "",
    title: "",
    description: "",
    ctaLink1: "",
    ctaText1: "",
    ctaLink2: "",
    ctaText2: "",
    imagePath: "",
  },
  ContentAnimation:"",
  title: "We bring solutions to make life easier for our customers.",
  description:
    "We carefully consider our solutions to support each and every stage of your growth.",
  ctaLink1: "#",
  ctaText1: "Explore Now",
  ctaLink2: "#",
  ctaText2: "Free Trail",
  imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735712679.about7.jpg",
};
export default HeroSectionV22;
