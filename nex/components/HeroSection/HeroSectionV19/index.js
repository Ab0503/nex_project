import React from "react";
import get from "lodash.get";
import PropTypes from "prop-types";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import parse from "html-react-parser";
import NexAnimation from '@nex-components/NexAnimation';

const HeroSectionV19 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
    <div
      className={`overflow-hidden nx-bg-primary-light ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div
        className={`py-24 relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] ${get(tailwindClasses, "imageContainer")}`}
        style={{
          backgroundImage: `url(${get(props, "bgImage")})`,
          height:"100%",
          width:"100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          ...get(style, "imageContainer"),
        }}
      >
        <div
          className={`text-gray-50 text-center flex flex-col items-center relative z-10  ${get(
            tailwindClasses,
            "contentContainer"
          )}`}
          style={get(style, "contentContainer")}
        >
          <NexAnimation  type={get(props, 'ContentAnimation', '')}>
          <div>
            {get(props, "subTitle").length !== 0 && (
              <h1
                className={`nx-text-primary mb-3 text-sm font-light ${get(
                  tailwindClasses,
                  "subTitle"
                )}`}
                style={get(style, "subTitle")}
              >
                {get(props, "subTitle")}
              </h1>
            )}
            {get(props, "title").length !== 0 && (
              <h1
                className={`nx-section-heading-font text-6xl font-bold mb-5 ${get(
                  tailwindClasses,
                  "title"
                )}`}
                style={get(style, "title")}
              >
                {get(props, "title")}
              </h1>
            )}
            {get(props, "description").length !== 0 && (
              <p
                className={`mb-5 mx-48 max-md:mx-24 max-sm:mx-10 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description")}
              </p>
            )}
          </div>
          </NexAnimation>
          <div className="flex items-center mb-5 gap-3">
            {get(props, "breadCrumb1").length !== 0 && (
              <PrimaryLink
                className={`${get(
                  tailwindClasses,
                  "breadCrumb1"
                )}`}
                style={get(style, "breadCrumb1")}
                href={get(props, "breadCrumb1Link")}
              >
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
              <PrimaryLink
                className={`${get(
                  tailwindClasses,
                  "breadCrumb2"
                )}`}
                style={get(style, "breadCrumb2")}
                href={get(props, "breadCrumb2Link")}
              >
                {get(props, "breadCrumb2")}
              </PrimaryLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSectionV19.defaultProps = {
  style: {
    container: {},
    imageContainer: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    description: {},
    breadcrumb1: {},
    breadcrumb2: {},
  },
  tailwindClasses: {
    container: "",
    imageContainer: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    description: "",
    breadCrumb1: "",
    breadCrumb2: "",
  },
  ContentAnimation: "",
  bgImage:
    "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  subTitle: "Our Project",
  title: "Project Details",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum, optio sequi quisquam molestias, beatae inventore omnis vel earum praesentium magnam accusamus consequatur corporis error nobis. Dicta quis ratione ipsam nisi? Vitae, aut laboriosam.",
  breadCrumb1: "Home",
  breadCrumb1Link: "#",
  breadCrumb2: "Project Details",
  breadCrumb2Link: "#",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
`,
};

HeroSectionV19.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  breadcrumb1: PropTypes.string,
  breadcrumb2: PropTypes.string,
};
export default HeroSectionV19;
