import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import { Description } from "@nex-core-ui/tailwind/fieldset";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import NexAnimation from "@nex-components/NexAnimation";

const ProcessV9 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div
      className={`py-16 overflow-hidden ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {get(props, "subTitle", "").length != 0 && (
            <p
              className={`text-sm nx-text-primary font-semibold tracking-wide uppercase mb-2 ${get(
                tailwindClasses,
                "subTitle"
              )}`}
              style={get(style, "subTitle")}
            >
              {get(props, "subTitle")}
            </p>
          )}
          {get(props, "title1", "").length != 0 && (
            <h2
              className={`nx-section-heading-font text-3xl leading-9 font-extrabold tracking-tight nx-text-primary sm:text-4xl sm:leading-10 ${get(
                tailwindClasses,
                "title1"
              )}`}
              style={get(style, "title1")}
            >
              {get(props, "title1")}
              <span className="nx-section-heading-font text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {" "}
                {get(props, "title2")}{" "}
              </span>
            </h2>
          )}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {get(props, "items", []).map((item, index) => (
            <NexAnimation type={get(props, 'boxAnimation', '')}>
            <div className="text-center" key={index}>
              {get(item, "imagePath", "").length !== 0 && (
                <NexImage
                  className={`!relative !w-96 !h-48 mx-auto rounded ${get(
                    tailwindClasses,
                    "imagePath"
                  )}`}
                  style={get(style, "imagePath")}
                  src={get(item, "imagePath")}
                />
              )}
              {get(item, "Text", "").length !== 0 && (
                <h3
                  className={`text-lg leading-6 font-medium text-gray-900 mt-4 ${get(
                    tailwindClasses,
                    "Text"
                  )}`}
                  style={get(style, "Text")}
                >
                  {get(item, "Text")}
                </h3>
              )}
              {get(item, "subText", "").length !== 0 && (
                <p
                  className={`mt-2 text-sm text-gray-600 ${get(
                    tailwindClasses,
                    "subText"
                  )}`}
                  style={get(style, "subText")}
                >
                  {get(item, "subText")}
                </p>
              )}
            </div>
            </NexAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

ProcessV9.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  subTitle: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  imagePath: PropTypes.string,
  Text: PropTypes.string,
  subText: PropTypes.string,
};
ProcessV9.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title1: {},
    title2: {},
    imagePath: {},
    Text: {},
    subText: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title1: "",
    title2: "",
    imagePath: "",
    Text: "",
    subText: "",
  },
  subTitle: "Therapy Process",
  title1: "What ",
  title2: "is Therapy Process",
  items: [
    {
      imagePath: "https://picsum.photos/id/1/200/300",
      Text: "Get Paired With A Therapist",
      subText:
        "We understand that injuries and acute pain can happen unexpectedly.",
    },
    {
      imagePath: "https://picsum.photos/id/1/200/300",
      Text: "Choose Your Preferred Way To Receive Care",
      subText:
        "We understand that injuries and acute pain can happen unexpectedly.",
    },
    {
      imagePath: "https://picsum.photos/id/1/200/300",
      Text: "We Help You Get Better, Faster!",
      subText:
        "We understand that injuries and acute pain can happen unexpectedly.",
    },
    {
      imagePath: "https://picsum.photos/id/1/200/300",
      Text: "What Psychotherapy Can Help With",
      subText:
        "We understand that injuries and acute pain can happen unexpectedly.",
    },
  ],
  boxAnimation: 'Top-To-Bottom'
};
export default ProcessV9;
