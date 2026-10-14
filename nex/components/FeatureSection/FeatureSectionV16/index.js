"use client";
import React from "react";
import get from "lodash.get";
import parse from "html-react-parser";
import PropTypes, { object } from "prop-types";
import NexAnimation from "@nex-components/NexAnimation";

const FeatureSectionV16 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <section
      className={`max-sm:px-5 overflow-hidden ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div className={`container mx-auto text-center `}>
        {get(props, "title", "").length !== 0 && (
          <h2
            className={`nx-section-heading-font text-4xl font-bold mb-6 p-5 ${get(
              tailwindClasses,
              "title"
            )} `}
            style={get(style, "title")}
          >
            {get(props, "title", "")}{" "}
            <span
              className={`nx-section-heading-font nx-text-primary ${get(tailwindClasses, "title1")} `}
              style={get(style, "title1")}
            >
              {get(props, "title1", "")}{" "}
            </span>{" "}
          </h2>
        )}
        {get(props, "description", "").length !== 0 && (
          <p
            className={`text-gray-600 max-w-xl mx-auto mb-2 ${get(
              tailwindClasses,
              "description"
            )} `}
            style={get(style, "description")}
          >
            {get(props, "description", "")}{" "}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:p-10 md:p-20  ">
          {get(props, "items", []).map(
            (item) =>
              (get(item, "description").length !== 0 ||
                get(item, "title").length !== 0 ||
                get(item, "counter").length !== 0 ||
                get(item, "icon").length !== 0) && (
                <NexAnimation type={get(props, 'contentBoxAnimation', 'Bottom-To-Top')} >
                  <div className="overflow-visible hover:shadow-lg transition hover:-translate-y-1 hover:scale-110">
                    <div
                      className={`p-6 rounded-lg shadow-lg nx-bg-primary-light ${get(
                        tailwindClasses,
                        "itemBox"
                      )}`}
                      style={get(style, "itemBox")}
                    >
                      <div className={`flex items-start justify-between mb-4 `}>
                        {get(item, "icon").length !== 0 && (
                          <span
                            className={`nx-text-primary ${get(tailwindClasses, "itemIcon")}`}
                            style={get(style, "itemIcon")}
                          >
                            {parse(get(item, "icon"))}
                          </span>
                        )}
                        {get(item, "counter").length !== 0 && (
                          <span
                            className={`oldstyle-nums text-6xl font-bold text-gray-300  ${get(
                              tailwindClasses,
                              "itemCounter"
                            )}`}
                            style={get(style, "itemCounter")}
                          >
                            {get(item, "counter")}
                          </span>
                        )}
                      </div>
                      {get(item, "title").length !== 0 && (
                        <h1
                          className={`mb-4 text-base font-bold ${get(
                            tailwindClasses,
                            "itemTitle"
                          )}`}
                          style={get(style, "itemTitle")}
                        >
                          {get(item, "title")}
                        </h1>
                      )}
                      {get(item, "description").length !== 0 && (
                        <h3
                          className={`text-base font-light mb-2 text-gray-600 ${get(
                            tailwindClasses,
                            "itemDescription"
                          )}`}
                          style={get(style, "itemDescription")}
                        >
                          {get(item, "description")}
                        </h3>
                      )}
                    </div>{" "}
                  </div>
                </NexAnimation>
              )
          )}
        </div>
      </div>
    </section>
  );
};

FeatureSectionV16.defaultProps = {
  style: {
    container: {},
    title: {},
    title1: {},
    description: {},
    itemBox: {},
    itemIcon: {},
    itemTitle: {},
    itemDescription: {},
    itemCounter: {},
  },
  tailwindClasses: {
    container: "",
    title: "",
    title1: "",
    description: "",
    itemBox: "",
    itemIcon: "",
    itemTitle: "",
    itemDescription: "",
    itemCounter: "",
  },
  title: "Working",
  title1: "Progress",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  items: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-16">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                   </svg>`,
      title: "Consultation",
      description:
        "Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh ",
      counter: "01",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                `,
      title: "Design and Work",
      description:
        "Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh ",
      counter: "02",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>

                `,
      title: "Maintainance",
      description:
        "Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh ",
      counter: "03",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>

                `,
      title: "Complete",
      description:
        "Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh Leonard sdsdsd asdnkasdaasdsadsad sdsadsadasd fghgfhfh ",
      counter: "04",
    },
  ],
};

FeatureSectionV16.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  title1: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(object),
};

export default FeatureSectionV16;
