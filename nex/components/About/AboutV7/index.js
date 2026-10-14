import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV7 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section
        id="snippet-7"
        className={`overflow-hidden ${get(
          tailwindClasses,
          "container"
        )}`}
        style={get(style, "container")}
      >
        <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
          <div className={`flex flex-wrap mx-[12px] xsm:mt-[35px] mt-[-80px] xl:mx-[7.5px] lg:mx-[7.5px] items-center ${get(
          tailwindClasses,
          "contentcontainer"
        )}`}
        style={get(style, "contentcontainer")}>
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[15px] lg:px-[7.5px] px-[15px] max-w-full relative mt-[50px]">
              <div
                className={`max-sm:hidden shape rounded-[.4rem] bg-[#edfefc] rellax xl:block lg:block md:block absolute z-[1] ${get(
                  tailwindClasses,
                  "shape"
                )}`}
                data-rellax-speed="0"
                style={{
                  bottom:  get(props, "vedioPath", "").length != 0 ? "-7.8rem" : "-1.8rem",
                  right: "-1.5rem",
                  width: "85%",
                  height: "90%",
                  ...get(style, "shape"),
                }}
              ></div>
              <figure className="rounded-[.4rem] relative z-[2]">
                {get(props, "imagePath", "").length != 0 && (
                  <ImageOrVedio 
                    className={`rounded-[.4rem] !relative ${get(
                      tailwindClasses,
                      "image"
                    )}`}
                    style={get(style, "image")}
                    src={get(props, "imagePath")}
                    vedioSrc={get(props,"vedioPath","")}
                  />
                )}
              </figure>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 xl:ml-[8.33333333%] lg:ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full mt-[80px]">
              {get(props, "title", "").length != 0 && (
                <h3
                  className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.6rem] leading-[1.3] mb-3 ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={get(style, "title")}
                >
                  {get(props, "title")}
                </h3>
              )}
              {get(props, "subTitle", "").length != 0 && (
                <p
                  className={`nx-text-primary lead text-[1.35rem] leading-[1.6] mb-6 ${get(
                    tailwindClasses,
                    "subTitle"
                  )}`}
                  style={get(style, "subTitle")}
                >
                  {get(props, "subTitle")}
                  <span
                    className={`relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)] ${get(
                      tailwindClasses,
                      "span"
                    )}`}
                    style={get(style, "span")}
                  >
                    {get(props, "span")}
                  </span>
                  {get(props, "subTitle1")}
                </p>
              )}
              <div className="px-4 md:px-20 grid justify-center gap-6 p-4 mb-2">
                <div>
                  {get(props, "items", []).map((item) => (
                    <div className="px-4 md:px-20 grid justify-center gap-6 p-4">
                      <div>
                        <div key={get(item, "text", "")}>
                          <span> </span>
                          <div className="flex justify-between mb-2">
                            <p
                              className={get(tailwindClasses, "text", "")}
                              style={get(style, "text", {})}
                            >
                              {get(item, "text", "")}
                            </p>
                            <span></span>
                            <p
                              className={get(tailwindClasses, "stat", "")}
                              style={get(style, "stat", {})}
                            >
                              {get(item, "stat", "")}
                            </p>
                          </div>
                          <div className="w-80 bg-gray-200 rounded-full h-2">
                            <span>
                              {" "}
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{
                                  background: get(item, "color", "whitesmoke"),
                                  width: `${get(item, "percentage", "")}%`,
                                }}
                              />{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </NexAnimation>
        </div>
      </section>
    </div>
  );
}
AboutV7.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
  }
  AboutV7.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image: {},
        video: {},
        shape: {},
        icon: {},
        title: {},
        subTitle: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        video: "",
        shape: "",
        icon: "",
        title: "",
        subTitle: ""
    },
    leftContentAnimation: "",
    title: "Sandbox Brings Awesomeness",
    subTitle: "We have considered our solutions to ",
    span: "Support Every Stage",
    subTitle1:" of your growth.",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735228798.700x560.png",
    vedioPath: "https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>`,
    items: [
      {
        text: "Marketing",
        stat: "100%",
        percentage: "100",
        color: "blue"
      },
      {
        text: "Strategy",
        stat: "90%",
        percentage: "90",
        color: "green"
      },
      {
        text: "Development",
        stat: "80%",
        percentage: "80",
        color: "red"
      },
      {
        text: "Data Analysis",
        stat: "70%",
        percentage: "70",
        color: "yello"
      }
    ],
}
export default AboutV7;