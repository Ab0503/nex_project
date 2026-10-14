import React from "react";
import get from "lodash.get";
import { PropTypes, object } from "prop-types";
import NexImage from "@nex-core-ui/NexImage";
import withData from "@nex-core-ui/HOC/withData";

const BlogV7 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <div
      className={`bg-gray-100 ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div
        className={`lg:mx-48 max-xl:mx-24 max-lg:mx-16 max-sm:mx-0 md:mx-5 p-5 ${get(
          tailwindClasses,
          "contentContainer"
        )}`}
        style={get(style, "contentContainer")}
      >
        {get(props, "subTitle","").length !== 0 && (
          <h1
            className={`text-sm ${get(tailwindClasses, "subTitle")}`}
            style={get(style, "subTitle")}
          >
            {get(props, "subTitle")}
          </h1>
        )}
        {get(props, "title","").length !== 0 && (
          <h1
            className={`text-4xl font-bold mb-4 ${get(
              tailwindClasses,
              "title"
            )}`}
            style={get(style, "title")}
          >
            {get(props, "title")}
          </h1>
        )}
        {get(props, "items", []).map((item) => {
            return (
              
                <div
                  className={`overflow-hidden bg-gray-50 flex justify-between max-lg:flex-col max-lg:gap-10 max-lg:justify-center max-lg:rounded-lg border rounded-l-full rounded-r-full p-2 mb-4 ${get(
                    tailwindClasses,
                    "sectionBox"
                  )}`}
                  style={get(style, "sectionBox")}
                >
                  <div className="w-96 h-48 2xl:w-[650px] 2xl:h-[200px] max-md:w-full max-lg:w-full max-lg:h-48">
                    {get(item, "sectionImage","").length !== 0 && (
                      <NexImage
                        className={`!relative !h-full !w-full object-cover object-center rounded-l-full rounded-r-full max-lg:rounded-r-lg max-lg:rounded-l-lg ${get(
                          tailwindClasses,
                          "sectionImage"
                        )}`}
                        style={get(style, "sectionImage")}
                        src={get(item, "sectionImage")}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-center gap-2 max-lg:gap-0 p-5">
                    {get(item, "date","").length !== 0 && (
                      <p
                        className={`text-xs text-green-800 ${get(
                          tailwindClasses,
                          "date"
                        )}`}
                        style={get(style, "date")}
                      >
                        {get(item, "date")}
                      </p>
                    )}
                    {get(item, "sectionTitle","").length !== 0 && (
                      <h1
                        className={`text-2xl font-bold ${get(
                          tailwindClasses,
                          "sectionTitle"
                        )}`}
                        style={get(style, "sectionTitle")}
                      >
                        {get(item, "sectionTitle")}
                      </h1>
                    )}
                    <div className="flex items-center gap-2">
                      {get(item, "personImage","").length !== 0 && (
                        <NexImage
                          className={`!relative !h-10 !w-10 rounded-full object-cover object-center ${get(
                            tailwindClasses,
                            "personImage"
                          )}`}
                          style={get(style, "personImage")}
                          src={get(item, "personImage")}
                          alt=""
                        />
                      )}
                      {get(item, "personName","").length !== 0 && (
                        <p
                          className={`text-xs ${get(
                            tailwindClasses,
                            "personName"
                          )}`}
                          style={get(style, "personName")}
                        >
                          {get(item, "personName")}
                        </p>
                      )}
                    </div>
                  </div>
                  {get(item, "ctaText","").length !== 0 && (
                    <button
                      className={`bg-gray-300 text-gray-600 hover:bg-green-100 hover:text-green-800 text-sm rounded-full p-16 ${get(
                        tailwindClasses,
                        "cta"
                      )}`}
                      style={get(style, "cta")}
                    >
                      <a href={get(item, "ctaLink")}>{get(item, "ctaText")} </a>
                    </button>
                  )}
                </div>
              
            );
          })}
      </div>
    </div>
  );
};

BlogV7.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title: {},
    sectionBox: {},
    sectionImage: {},
    date: {},
    sectionTitle: {},
    personImage: {},
    personName: {},
    cta: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title: "",
    sectionBox: "",
    sectionImage: "",
    date: "",
    sectionTitle: "",
    personImage: "",
    personName: "",
    cta: "",
  },
  subTitle: "Upcomping Activities Or Functions",
  title: "Trending Social Events",
  items: [
    {
      sectionImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      personImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297445.32x32 - socialmedia_icon.png",
      date: "30 Jan 2024",
      sectionTitle: "Global Cause Fundraising Innovation",
      personName: "Dianne Russell",
      ctaLink: "#",
      ctaText: "Request for Join",
    },
    {
      sectionImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      personImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297445.32x32 - socialmedia_icon.png",
      date: "30 Jan 2024",
      sectionTitle: "Global Cause Fundraising Innovation",
      personName: "Dianne Russell",
      ctaLink: "#",
      ctaText: "Request for Join",
    },
    {
      sectionImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
      personImage:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297445.32x32 - socialmedia_icon.png",
      date: "30 Jan 2024",
      sectionTitle: "Global Cause Fundraising Innovation",
      personName: "Dianne Russell",
      ctaLink: "#",
      ctaText: "Request for Join",
    },
  ],
};

BlogV7.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(object),
};
export default withData(BlogV7);
