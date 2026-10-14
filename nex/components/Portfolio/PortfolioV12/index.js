import NexAnimation from "@nex-components/NexAnimation";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import get from "lodash.get";
import { object, string } from "prop-types";
import React from "react";

const PortfolioV12 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <div
      className={`py-16 px-6 overflow-hidden ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <div className=" mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          {get(props, "subTitle", "").length != 0 && (
            <span
              className={`nx-text-primary font-semibold uppercase tracking-wide text-sm ${get(
                tailwindClasses,
                "subTitle"
              )}`}
              style={get(style, "subTitle")}
            >
              {" "}
              {get(props, "subTitle")}
            </span>
          )}
          {get(props, "title1", "").length != 0 && (
            <h2
              className={`nx-section-heading-font text-3xl lg:text-4xl font-bold mt-2 text-gray-800 ${get(
                tailwindClasses,
                "title1"
              )}`}
              style={get(style, "title1")}
            >
              {" "}
              {get(props, "title1")}{" "}
              <span
                className={`nx-section-heading-font nx-text-primary ${get(tailwindClasses, "title2")}`}
                style={get(style, "title2")}
              >
                {" "}
                {get(props, "title2")}{" "}
              </span>
            </h2>
          )}
        </div>

        {/* Feature Grid */}
        <div className="flex flex-wrap grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          {/* Left Features */}
          <div className="space-y-6">
            {get(props, "items", [])
              .slice(0, 3)
              .map((item) => (
                <NexAnimation type={get(props, "leftContentAnimation", "")}>
                  <div
                    key={get(item, "id", " ")}
                    className={`flex nx-bg-primary items-center p-4 rounded-lg shadow-sm overflow-visible hover:shadow-lg transition hover:-translate-y-1 hover:scale-110 ${get(
                      item,
                      "bg",
                      " "
                    )} ${get(tailwindClasses, "title2")} `}
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-white rounded-lg shadow-md">
                      <span className={`nx-text-primary`}>{parse(get(item, "ctaIcon1", " "))}</span>
                    </div>
                    <div className="ml-4">
                      <h3
                        className={`text-lg font-semibold text-white ${get(
                          tailwindClasses,
                          "Text1"
                        )} `}
                        style={get(style, "Text1")}
                      >
                        {get(item, "Text1", " ")}
                      </h3>
                      <p
                        className={`text-sm text-white  ${get(
                          tailwindClasses,
                          "subText1"
                        )}`}
                        style={get(style, "subText1")}
                      >
                        {get(item, "subText1", " ")}
                      </p>
                    </div>
                  </div>
                </NexAnimation>
              ))}
          </div>

          {/* Center Image */}
          {get(props, "imagePath", "").length != 0 && (
            <div className="flex justify-center overflow-visible hover:shadow-lg transition hover:-translate-y-1 hover:scale-110">
              <NexAnimation type={get(props, "centerContentAnimation", "")}>
                <NexImage
                  src={get(props, "imagePath")} // Replace with actual image path
                  alt="Doctor"
                  className="!relative !w-64 !h-auto rounded-lg shadow-lg"
                />
              </NexAnimation>
            </div>
          )}

          {/* Right Features */}
          <div className="space-y-6">
            {get(props, "items", [])
              .slice(3)
              .map((item) => (
                <NexAnimation type={get(props, "rightContentAnimation", "")}>
                  <div
                    key={get(item, "id", " ")}
                    className={`flex nx-bg-primary items-center p-4 rounded-lg shadow-sm overflow-visible hover:shadow-lg transition hover:-translate-y-1 hover:scale-110 ${get(
                      item,
                      "bg",
                      " "
                    )}`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-white rounded-lg shadow-md">
                      <span className={`nx-text-primary`}>{parse(get(item, "ctaIcon2", " "))}</span>
                    </div>
                    <div className="ml-4">
                      <h3
                        className={`text-lg font-semibold text-white ${get(
                          tailwindClasses,
                          "Text2"
                        )} `}
                        style={get(style, "Text2")}
                      >
                        {get(item, "Text2", " ")}
                      </h3>
                      <p
                        className={`text-sm text-white ${get(
                          tailwindClasses,
                          "subText2"
                        )} `}
                        style={get(style, "subText2")}
                      >
                        {get(item, "subText2", " ")}
                      </p>
                    </div>
                  </div>
                </NexAnimation>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioV12.propTypes = {
  style: object,
  tailwindClasses: object,
  subTitle: string,
  title1: string,
  title2: string,
  ctaIcon1: string,
  ctaIcon2: string,
  ctaIcon3: string,
  ctaIcon4: string,
  ctaIcon5: string,
  ctaIcon6: string,
  Text1: string,
  Text2: string,
  Text3: string,
  Text4: string,
  Text5: string,
  Text6: string,
  subText1: string,
  subText2: string,
  subText3: string,
  subText4: string,
  subText5: string,
  subText6: string,
  imagePath: String,
};

PortfolioV12.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    subTitle: {},
    title1: {},
    title2: {},
    subTitle: {},
    description: {},
    ctaIcon1: {},
    ctaIcon2: {},
    Text1: {},
    Text2: {},
    subText1: {},
    subText2: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    subTitle: "",
    title1: "",
    title2: "",
    subTitle: "",
    description: "",
    ctaIcon1: "",
    ctaIcon2: "",
    Text1: "",
    Text2: "",
    subText1: "",
    subText2: "",
  },
  subTitle: "Why Us",
  title1: "Excellence In",
  title2: "Care And Rehabilitation",
  description:
    "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula mollis metus auctor fringilla.",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1732532297.Screenshot 2024-11-25 162754.png",
  items: [
    {
      id: 1,
      Text1: "Experienced Team",
      subText1: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`, // Replace with actual icon paths
      bg: "bg-gray-100",
    },
    {
      id: 2,
      Text1: "Patient-Centered Approach",
      subText1: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
      bg: "bg-gray-100",
    },
    {
      id: 3,
      Text1: "Expertise And Experience",
      subText1: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
      bg: "bg-gray-100",
    },
    {
      id: 4,
      Text2: "Advanced Technology",
      subText2: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
      bg: "bg-teal-900 text-white",
    },
    {
      id: 5,
      Text2: "Convenient And Accessible",
      subText2: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
      bg: "bg-teal-900 text-white",
    },
    {
      id: 6,
      Text2: "Community Involvement",
      subText2: "We understand that injuries and acute pain can unexpectedly.",
      ctaIcon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
      bg: "bg-teal-900 text-white",
    },
  ],
  leftContentAnimation: '',
  centerContentAnimation: '',
  rightContentAnimation: ''
};
export default PortfolioV12;
