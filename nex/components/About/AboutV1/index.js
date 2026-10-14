import React from "react";
import parse from "html-react-parser";
import { object, string } from "prop-types";
import get from "lodash.get";
import ImageOrVedio from "@nex-core-ui/ImageOrVedio";
import NexAnimation from "@nex-components/NexAnimation";

const AboutV1 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  return (
      <section
        id="snippet-1"
        className={`xl:px-32 lg:px-24 md:px-20 max-sm:px-5 overflow-hidden ${get(
          tailwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        <div className="">
          <div
            className={`flex flex-wrap  mt-[20px] items-center text-start ${get(
              tailwindClasses,
              "contentcontainer"
            )}`}
            style={get(style, "contentcontainer")}>
            <div className="md:w-8/12 lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] max-w-full mt-[50px] xl:order-2 lg:order-2 relative">
              {get(props, "imagePath", "").length != 0 && (
                <div
                  className={`max-sm:hidden shape bg-[#edf2fc] rounded-[50%] rellax w-[10rem] h-[10rem] absolute z-[1] data-rellax-speed="1" ${get(
                    tailwindClasses,
                    "shape"
                  )}`}
                  style={{
                    top: "-2rem",
                    right: "-1.9rem",
                    ...get(style, "shape"),
                  }}
                ></div>
              )}
              <NexAnimation type={get(props, "imageAnimation", "")}>
                <figure className="z-[2] relative">
                  {get(props, "imagePath", "").length != 0 && (
                    <ImageOrVedio
                      className={`rounded-lg !relative  ${get(
                        tailwindClasses,
                        "image"
                      )}`}
                      style={get(style, "image")}
                      src={get(props, "imagePath", "")}
                      vedioSrc={get(props, "vedioPath", "")}
                    />
                  )}
                </figure>
              </NexAnimation>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto]  max-w-full mt-[50px]">
              <NexAnimation type={get(props, "contentAnimation", "")}>
                {get(props, "title", "").length != 0 && (
                  <h2
                    className={`text-[2.2rem] font-bold nx-section-heading-font xl:text-[2.1rem] leading-[1.3] mb-3 ${get(
                      tailwindClasses,
                      "title"
                    )}`}
                    style={get(style, "title")}
                  >
                    {get(props, "title")}
                  </h2>
                )}
                {get(props, "subTitle", "").length != 0 && (
                  <p
                    className={`lead text-[1.45rem] leading-[1.6] nx-text-primary font-medium mb-3 ${get(
                      tailwindClasses,
                      "subTitle"
                    )}`}
                    style={get(style, "subTitle")}
                  >
                    {get(props, "subTitle")}
                  </p>
                )}
                {get(props, "description", "").length != 0 && (
                  <p
                    className={`mb-6 xl:text-[1.1rem]${get(
                      tailwindClasses,
                      "description"
                    )}`}
                    style={get(style, "description")}
                  >
                    {get(props, "description")}
                  </p>
                )}
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-30px]">
                  {get(props, "items", []).map((item) => (
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
                      <div className="flex flex-row gap-4">
                        <div>
                          {get(item, "icon", "").length != 0 && (
                            <span
                              className={`w-[2.2rem] h-[2.2rem] mr-14 ${get(
                                tailwindClasses,
                                "icon"
                              )}`}
                              style={get(style, "icon")}
                            >
                              {parse(get(item, "icon"))}
                            </span>
                          )}
                        </div>
                        <div>
                          {get(item, "title1", "").length != 0 && (
                            <h4
                              className={`xl:text-[1.3rem] mb-1 font-medium ${get(
                                tailwindClasses,
                                "title1"
                              )}`}
                              style={get(style, "title1")}
                            >
                              {get(item, "title1")}
                            </h4>
                          )}
                          {get(item, "description1", "").length != 0 && (
                            <p
                              className={`xl:text-[1.05rem] mb-0 ${get(
                                tailwindClasses,
                                "description1"
                              )}`}
                              style={get(style, "description1")}
                            >
                              {get(item, "description1")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </NexAnimation>
            </div>
          </div>
        </div>
      </section>
  );
};

AboutV1.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
AboutV1.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    shape: {},
    image: {},
    title: {},
    subTitle: {},
    description: {},
    icon: {},
    title1: {},
    description1: {},
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    shape: "",
    image: "",
    title: "",
    subTitle: "",
    description: "",
    icon: "",
    title1: "",
    description1: "",
  },
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735216715.500x500.png",
  vedioPath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
  title: "Who Are We?",
  subTitle:
    "We are a digital and branding company that believes in the power of creative strategy and along with great design.",
  description:
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  items: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
            </svg>`,
      title1: "Our Mission",
      description1: "Dapibus eu leo quam ornare curabitur blandit tempus.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
            </svg>`,
      title1: "Our Values",
      description1: "Aenean lacinia bibendum nulla sed consectetur.",
    },
  ],
  imageAnimation: "",
  contentAnimation: "",
};
export default AboutV1;
