import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";

const HeroSectionV41 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper">
      <div
        className={`p-20 pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-36 xl:pb-28 lg:pb-28 md:pb-28 !text-center ${get(
          tailwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        <div className="flex flex-wrap">
          <div
            className="lg:w-9/12  xl:w-8/12  xxl:w-7/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="500"
          >
            {get(props, "title1", "").length != 0 && (
              <h1
                className={`font-bold leading-[1.1]  tracking-[-0.03em] xl:text-[2.8rem] text-[calc(1.445rem_+_2.34vw)] mb-4 md:!px-8 lg:!px-0 ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1")}{" "}
                <span
                  className={`relative after:-rotate-2 after:-translate-x-2/4 after:-translate-y-2/4 after:[background-size:100%_100%] after:absolute after:bg-bottom after:bg-no-repeat after:block after:border-[#3f78e0] after:border-[3px] after:border-b-0 after:border-l-0 after:border-solid after:bottom-[-0.1em] after:content-[''] after:h-[111%] after:left-2/4 after:opacity-100 after:rounded-[80%] after:top-[52%] after:w-[107%] after:z-[-1] before:-rotate-1 before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:border-[#3f78e0] before:border-[3px] before:border-solid before:border-t-0 before:content-[''] before:h-[110%] before:left-2/4 before:opacity-100 before:rounded-[80%] before:top-[52%] before:w-[111%] before:z-[-1] max-md:after:hidden max-md:before:hidden style-1 z-[1] ${get(
                    tailwindClasses,
                    "title2"
                  )}`}
                  style={get(style, "title2")}
                >
                  <em> {get(props, "title2")} </em>
                </span>
              </h1>
            )}
            {get(props, "description", "").length != 0 && (
              <p
                className={`lead text-[1.2rem] leading-normal mb-7 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description")}
              </p>
            )}

            {get(props, "ctaText", "").length != 0 && (
              <div>
                <a
                  className={`px-6 py-3 text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded mb-10 xxl:!mb-5 ${get(
                    tailwindClasses,
                    "ctaText"
                  )} `}
                  style={get(style, "ctaText")}
                >
                  {get(props, "ctaText")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="lg:w-10/12 xl:w-9/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[3rem] mb-[-12.5rem]">
            <figure>
              <NexImage
                className="!relative !max-w-full !h-auto"
                src={get(props, "imagePath")}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-[#edf2fc] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
            <path
              fill="currentColor"
              d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

HeroSectionV41.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV41.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description1: "",
    ctaText: "",
    imagePath: "",
  },
  title1: "We bring rapid solutions for your",
  title2: "business",
  description:
    "We are creative company that values quality and focuses on establishing long-term relationships with customers.",
  ctaText: "See Projects",
  ctaLink: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736503305.i28.png",
};
export default HeroSectionV41;
