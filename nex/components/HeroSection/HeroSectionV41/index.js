import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";

const HeroSectionV41 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`wrapper ${get(
      tailwindClasses,
      "container"
    )}`} style={{ backgroundImage:`url(${get(props,"bgImage")})`,...get(style, "container") }}>
      <div
        className={`p-20 pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-14 md:pb-32 xl:pb-40 lg:pb-40 `}
        
      >
        <div className="flex flex-wrap">
          <div className="lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            {get(props, "imagePath", "").length != 0 && (
              <div className="!relative img-mask mask-2">
                <NexImage
                  className={`!relative !max-w-full !h-auto md:!px-3 lg:!px-0 xl:!px-2 xxl:!px-5 ${get(
                    tailwindClasses,
                    "container"
                  )}`}
                  src={get(props, "imagePath")}
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap mt-10">
          <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
            {get(props, "subTitle", "").length != 0 && (
              <h2
                className={`text-[0.85rem] uppercase text-[#aab0bc] mb-3 ${get(
                  tailwindClasses,
                  "subTitle"
                )}`}
                style={get(style, "subTitle")}
              >
                {get(props, "subTitle")}
              </h2>
            )}
            {get(props, "title1", "").length != 0 && (
              <h3
                className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5 xl:!px-14 ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1")} <em>{get(props, "title2")} </em>
                {get(props, "title3")}
              </h3>
            )}
            {get(props, "description1", "").length != 0 && (
              <p
                className={`lead text-[1.1rem] ${get(
                  tailwindClasses,
                  "description1"
                )}`}
                style={get(style, "description1")}
              >
                {get(props, "description1")}{" "}
                <a
                  href={get(props, "ctaLink1")}
                  className="hover:text-red-700 hover:underline"
                >
                  {get(props, "description2")}{" "}
                </a>
                {get(props, "description3")}{" "}
                <a
                  href={get(props, "ctaLink2")}
                  className="hover:text-blue-700 hover:underline"
                >
                  {get(props, "description4")}{" "}
                </a>
                {get(props, "description5")}{" "}
                <a
                  href={get(props, "ctaLink3")}
                  className="hover:text-rose-800 hover:underline"
                >
                  {get(props, "description6")}{" "}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-[#fefefe] mx-[-0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
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
  subTitle: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaLink3: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  description4: PropTypes.string,
  description5: PropTypes.string,
  description6: PropTypes.string,
  imagePath: PropTypes.string,
  bgImage: PropTypes.string,
};

HeroSectionV41.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title1: {},
    title2: {},
    title3: {},
    description1: {},
    description2: {},
    description3: {},
    description4: {},
    description5: {},
    description6: {},
    imagePath: {},
    bgImage: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title1: "",
    title2: "",
    title3: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    imagePath: "",
    bgImage: "",
  },
  subTitle: "Hello! I'm Julia",
  title1: "I’m a corporate ",
  title2: "brand designer",
  title3: "based in New York City.",
  ctaLink1: "#",
  ctaLink2: "#",
  ctaLink3: "#",
  description1:
    "I’m very passionate about the work that I do, and if you are curious you can find my works on",
  description2: "Dribbble",
  description3: ", my portfolio on",
  description4: "Behance",
  description5: "and my shots on ",
  description6: "Instagram.",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736433506.about28.jpg",
  bgImage:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736335355.bg16.png",
};
export default HeroSectionV41;
