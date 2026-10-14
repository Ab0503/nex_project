import parse from "html-react-parser/lib/index";
import get from "lodash.get";
import React from "react";
import PropTypes, { object } from "prop-types";
import NexImage from "@nex-core-ui/NexImage";
import withData from "@nex-core-ui/HOC/withData";
import NexAnimation from "@nex-components/NexAnimation";
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const BlogV16 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <div
      className={`overflow-hidden py-10 ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div
        className={`xl:px-28 lg:px-24 md:px-20 max-sm:px-5 ${get(
          tailwindClasses,
          "contentContainer"
        )}`}
        style={get(style, "contentContainer")}
      >
        <div
          className={`${get(tailwindClasses, "contentContainer")}`}
          style={get(style, "contentContainer")}
        >
          {get(props, "subTitle", "").length !== 0 && (
            <h1
              className={`nx-text-primary text-center text-sm font-light ${get(
                tailwindClasses,
                "subTitle"
              )}`}
              style={get(style, "subTitle")}
            >
              {get(props, "subTitle")}
            </h1>
          )}
          {get(props, "title", "").length !== 0 && (
            <h1
              className={`nx-section-heading-font text-center text-4xl font-bold my-5 ${get(
                tailwindClasses,
                "title"
              )}`}
              style={get(style, "title")}
            >
              {get(props, "title")}
            </h1>
          )}
          <div
            className={`grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8`}
          >
            {Array.isArray(get(props, "items", [])) && get(props, "items", []).map(
              (item) =>
                (get(item, "imageUrl", "").length !== 0 ||
                  get(item, "text", "").length !== 0 ||
                  get(item, "title", "").length !== 0 ||
                  get(item, "ctaText", "").length !== 0) && (
                  <NexAnimation
                    type={get(props, "boxAnimation", "Top-To-Bottom")}
                  >
                    <div
                      className={`flex flex-col items-start bg-gray-50 text-gray-800 border shadow-xl rounded-xl p-2 nx-bg-primary:hover ${get(
                        tailwindClasses,
                        "sectionBox"
                      )}`}
                      style={get(style, "sectionBox")}
                    >
                      {get(item, "imageUrl", "").length !== 0 && (
                        <div className="!relative m-2 ">
                          {get(item, "badgeText", "").length !== 0 && (
                            <h1
                              className={`bg-black nx-bg-primary:hover text-gray-50 p-2 text-xs font-bold rounded-full absolute top-2 left-2 z-10 ${get(
                                tailwindClasses,
                                "sectionBadgeText"
                              )}`}
                              style={get(style, "sectionBadgeText")}
                            >
                              {get(item, "badgeText")}
                            </h1>
                          )}
                          {
                            <NexImage
                              className={`rounded-lg !h-full !w-full !relative ${get(
                                tailwindClasses,
                                "sectionImage"
                              )}`}
                              style={get(style, "sectionImage")}
                              src={get(item, "imageUrl")}
                              alt=""
                            />
                          }
                        </div>
                      )}
                      {get(item, "text", "").length !== 0 && (
                        <h1
                          className={`font-light  m-2 group-hover:text-gray-50 ${get(
                            tailwindClasses,
                            "sectionText"
                          )}`}
                          style={get(style, "sectionText")}
                        >
                          {get(item, "text")}
                        </h1>
                      )}
                      {get(item, "title", "").length !== 0 && (
                        <h1
                          className={`font-bold text-sm m-2 group-hover:text-gray-50 ${get(
                            tailwindClasses,
                            "sectionTitle"
                          )}`}
                          style={get(style, "sectionTitle")}
                        >
                          {get(item, "title")}
                        </h1>
                      )}
                      {get(item, "ctaText", "").length !== 0 && (
                        <PrimaryLink href={get(item, "ctaLink")}>
                          <div
                            className={`flex items-center m-2 my-5 gap-2 ${get(
                              tailwindClasses,
                              "sectionCta"
                            )}`}
                            style={get(style, "sectionCta")}
                          >
                            <button
                              className={`text-xs font-bold underline group-hover:text-gray-50 rounded-full`}
                            >
                              {get(item, "ctaText")}
                            </button>
                            {get(item, "ctaIcon", "").length !== 0 && (
                              <div
                                className={`nx-bg-primary text-gray-50 p-1 rounded-full ${get(
                                  tailwindClasses,
                                  "sectionCtaIcon"
                                )}`}
                                style={get(style, "sectionCtaIcon")}
                              >
                                {parse(get(item, "ctaIcon"))}
                              </div>
                            )}
                          </div>
                        </PrimaryLink>
                      )}
                    </div>
                  </NexAnimation>
                )
            )}
          </div>
          {get(props, "ctaText", "").length !== 0 && (
            <div className="flex items-center justify-center">
              <button
                className={`border-2  mt-5 text-xs rounded-full px-4 py-2 text-black ${get(
                  tailwindClasses,
                  "cta"
                )}`}
                style={get(style, "cta")}
              >
                <a href={get(props, "ctaLink")}>{get(props, "ctaText")}</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BlogV16.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    sectionBox: {},
    sectionText: {},
    sectionTitle: {},
    sectionBadgeText: {},
    sectionImage: {},
    sectionCta: {},
    sectionCtaIcon: {},
    cta: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    sectionBox: "",
    sectionText: "",
    sectionTitle: "",
    sectionBadgeText: "",
    sectionImage: "",
    sectionCta: "",
    sectionCtaIcon: "",
    cta: "",
  },
  subTitle: "Start Donating Poor People",
  title: "Our Latest News & Artciles you like",
  ctaText: "Get A Quote",
  ctaLink: "#",
  items: [
    {
      text: "Mehedii,H",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      imageUrl:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      badgeText: "Volunteer",
      ctaLink: "#",
      ctaText: "Read More",
      ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="size-2"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`,
    },
    {
      text: "Mehedii,H",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      imageUrl:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      badgeText: "Volunteer",
      ctaLink: "#",
      ctaText: "Read More",
      ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="size-2"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`,
    },
    {
      text: "Mehedii,H",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      imageUrl:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      badgeText: "Volunteer",
      ctaLink: "#",
      ctaText: "Read More",
      ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="size-2"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`,
    },
  ],
};

BlogV16.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(object),
};
export default withData(BlogV16);
