import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from "@nex-core-ui/PrimaryLink";


const HeroSectionV40 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section
      className={`overflow-hidden bg-cover bg-image bg-xs-none ${get(
        tailwindClasses,
        "container"
      )}`}
      style={{
        backgroundImage: `url(${get(props, "bgImage")})`, ...get(style, "container")
      }}
    >
      <div
        className="p-8 xl:p-16 sm:py-28 xxl:py-40"
      >
        <div className={`flex flex-wrap ${get(
        tailwindClasses,
        "contentContainer"
      )}`} style={get(style, "contentContainer")
    }>
          <div
            className="sm:w-12/12 md:w-6/12 xl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full xsm:text-center text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
          >
            <NexAnimation type={get(props, 'TitleAnimation', '')}>
            {get(props, "title1", "").length != 0 && (
              <h2
                className={`nx-section-heading-font font-bold leading-[1.2] xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] mb-4 mt-0 lg:mt-5 tracking-[-0.035em] xl:pr-5 xxl:pr-0 ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1", "")}
                <span
                  className={`nx-section-heading-font relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 style-3 yellow ${get(
                    tailwindClasses,
                    "title2"
                  )}`}
                  style={get(style, "title2")}
                >
                  {get(props, "title2", "")}
                </span>
              </h2>
            )}
            </NexAnimation>
            <NexAnimation type={get(props, 'DescAnimation', '')}>
            {get(props, "description", "").length != 0 && (
              <p
                className={`lead text-[1.15rem] leading-normal mb-7  lg:pr-5 xl:pr-5 xxl:pr-0 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description", "")}
              </p>
            )}
            </NexAnimation>
            <div>
              {get(props, "ctaText", "").length != 0 && (
                <PrimaryLink
                  href={get(props, "ctaLink", "")}
                  className={`px-5 py-3 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded ${get(
                    tailwindClasses,
                    "ctaText"
                  )}`}
                  style={get(style, "ctaText")}
                >
                  {get(props, "ctaText", "")}
                </PrimaryLink>
              )}
            </div>
          </div>
          <div
            className="xl:w-6/12 sm:w-12/12 md:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xsm:!text-center"
          >
          <NexAnimation type={get(props, 'ImageAnimation', '')}>
          {get(props, "imagePath", "").length != 0 && (
          <NexImage
                className={`!relative !max-w-full !h-96 mb-[-2rem] md:mb-[-7rem] lg:mb-[-7rem] xl:-mb-16 mt-6`}
                src={get(props, "imagePath")}
          />
          )}
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV40.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  bgImage: PropTypes.string,
};

HeroSectionV40.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText: {},
    image: {},
    bgImage: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description: "",
    ctaText: "",
    image: "",
    bgImage: "",
  },
  TitleAnimation: "",
  DescAnimation: "",
  ImageAnimation: "",
  title1: "We bring solutions to make life",
  title2: " easier ",
  description:
    "We are a creative company that focuses on long term relationships with customers.",
  ctaText: "Read More",
  ctaLink: "#",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737023924.pf4.jpg",
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736431116.bg37.jpg",
};
export default HeroSectionV40;
