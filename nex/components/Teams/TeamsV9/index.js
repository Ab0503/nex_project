"use client";
import React from "react";
import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import withData from "@nex-core-ui/HOC/withData";

const TeamsV9 = (props) => {
  const style = get(props, "style", {});
  const taliwindClasses = get(props, "taliwindClasses", {});
  return (
    <section className="py-16 bg-white">
      <div
        className={`container mx-auto px-6 lg:px-12 text-left ${get(
          taliwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-gray-800 mb-4 ${get(
            taliwindClasses,
            "title1"
          )}`}
          style={get(style, "title1")}
        >
          <span
            className={`text-black ${get(taliwindClasses, "title1")}`}
            style={get(style, "title1")}
          >
            {get(props, "title1", "")}{" "}
          </span>
          <span
            className={`text-green-600 ${get(taliwindClasses, "title2")}`}
            style={get(style, "title2")}
          >
            {get(props, "title2", "")}
          </span>
        </h2>

        <div className="grid max-sm:grid-cols-1 grid-cols-2">
          {get(props, "description", "").length != 0 && (
            <div>
              <p
                className={`text-gray-600 text-lg max-w-2xl ${get(
                  taliwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description", "")}{" "}
              </p>
            </div>
          )}
          {get(props, "itemText", "").length != 0 && (
            <div>
              <button
                className={`px-6 py-3 max-lg:text-right max-sm:text-center text-right float-right max-sm:float-left bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition ${get(
                  taliwindClasses,
                  "itemText"
                )}`}
                style={get(style, "itemText")}
              >
                {get(props, "itemText", "")}
              </button>
            </div>
          )}
        </div>

        {/* Discover More Button */}
        <div className="mt-12">
          {/* Staff Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Card 1 */}

            {get(props, "items",[]).map((item) => (
              <div className="relative group">
                {get(item, "imagePath", "").length != 0 && (
                  <NexImage
                    src={get(item, "imagePath", "")}
                    className="!relative rounded-lg"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0  animate-blob animation-delay-2000  bg-green-600 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <h3
                    className={`text-white text-xl font-bold  ${get(
                      taliwindClasses,
                      "name"
                    )}`}
                    style={get(style, "name")}
                  >
                    {get(item, "name", "")}
                  </h3>
                  <p
                    className={`text-white text-sm mb-4 ${get(
                      taliwindClasses,
                      "designation"
                    )}`}
                    style={get(style, "designation")}
                  >
                    {get(item, "designation", "")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

TeamsV9.defaultProps = {
  style: {
    container: {},
    title1: {},
    title2: {},
    itemBox: {},
    itemIcon: {},
    itemText: {},
  },
  taliwindClasses: {
    container: "",
    title1: "",
    title2: "",
    itemBox: "",
    itemIcon: "",
    itemText: "",
    cta: "",
  },
  title1: "Our",
  title2: "Trained Staff",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  items: [
    {
      name: "ABCD XYZ......",
      designation: "Designer",
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
    },
    {
      name: "PQR",
      designation: "Designer",
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
    },
    {
      name: "LMO",
      designation: "Designer",
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
    },
    {
      name: "ABCD XYZ......",
      designation: "Designer",
      imagePath:
        "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
    },
  ],

};
export default withData(TeamsV9);
