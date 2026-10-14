import React from "react";
import parse from "html-react-parser";
import { object, string } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import NexAnimation from "@nex-components/NexAnimation";

const AboutV4 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <div>
      <section
        id="snippet-4"
        className={`overflow-hidden ${get(tailwindClasses, "container")}`}
        style={get(style, "container")}
      >
        <div className="pt-20 xl:pt-12 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div
            className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center ${get(
              tailwindClasses,
              "contentcontainer"
            )}`}
            style={get(style, "contentcontainer")}
          >
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full relative xl:order-2 lg:order-2">
              {(get(props, "imagePath1", "").length != 0 ||
                get(props, "imagePath2", "").length != 0) && (
                <div
                  className={`max-sm:hidden bg-dot primary bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] rellax w-[9rem] h-[10rem] absolute z-[0] opacity-50 ${get(
                    tailwindClasses,
                    "shape"
                  )}`}
                  data-rellax-speed="1"
                  style={{
                    top: "3rem",
                    left: "5.5rem",
                    ...get(style, "shape"),
                  }}
                ></div>
              )}
              <div className="flex-wrap relative overlap-grid-2">
                <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0">
                  <figure className="rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                    <NexAnimation type={get(props, "imageAnimation", "")}>
                      {get(props, "imagePath1", "").length != 0 && (
                        <NexImage
                          className={`rounded-[.4rem] !relative w-full ${get(
                            tailwindClasses,
                            "image1"
                          )}`}
                          style={get(style, "image1")}
                          src={get(props, "imagePath1")}
                        />
                      )}
                    </NexAnimation>
                  </figure>
                </div>
                <br></br>
                <div className="item xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0">
                  <figure className="rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                    <NexAnimation type={get(props, "imageAnimation", "")}>
                      {get(props, "imagePath2", "").length != 0 && (
                        <NexImage
                          className={`rounded-[.4rem] !relative ${get(
                            tailwindClasses,
                            "image2"
                          )}`}
                          style={get(style, "image2")}
                          src={get(props, "imagePath2")}
                        />
                      )}
                    </NexAnimation>
                  </figure>
                </div>
              </div>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <NexAnimation type={get(props, 'contentAnimation', '')}>
              {get(props, "icon", "").length != 0 && (
                <span
                  className={`nx-text-primary w-[2.6rem] h-[2.6rem] ${get(
                    tailwindClasses,
                    "icon"
                  )}`}
                  style={get(style, "icon")}
                >
                  {parse(get(props, "icon"))}
                </span>
              )}
              {get(props, "title", "").length != 0 && (
                <h2
                  className={`text-[2.2rem] nx-section-heading-font font-bold xl:text-[2.1rem] leading-[1.3] mt-5 mb-3 ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={get(style, "title")}
                >
                  {get(props, "title")}
                </h2>
              )}
              {get(props, "subTitle", "").length != 0 && (
                <h3
                  className={`lead nx-text-primary text-[1.35rem] leading-[1.6] font-medium mb-4 ${get(
                    tailwindClasses,
                    "subTitle"
                  )}`}
                  style={get(style, "subTitle")}
                >
                  {get(props, "subTitle")}
                </h3>
              )}
              {get(props, "description", "").length != 0 && (
                <p
                  className={`mb-6 xl:text-[1.1rem] ${get(
                    tailwindClasses,
                    "description"
                  )}`}
                  style={get(style, "description")}
                >
                  {get(props, "description")}
                </p>
              )}
              <div className="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
                {get(props, "items", []).map((item) => (
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  mb-0">
                      <li className="relative pl-6">
                        {get(item, "icon1", "").length != 0 && (
                          <span
                            className={`nx-text-primary w-5 h-5 leading-none tracking-[normal] text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0 ${get(
                              tailwindClasses,
                              "icon1"
                            )}`}
                            style={get(style, "icon1")}
                          >
                            {parse(get(item, "icon1"))}
                          </span>
                        )}
                        {get(item, "text1", "").length != 0 && (
                          <h2
                            className={`xl:text-[1.05rem] ${get(
                              tailwindClasses,
                              "text1"
                            )}`}
                            style={get(style, "text1")}
                          >
                            {get(item, "text1")}
                          </h2>
                        )}
                      </li>
                      <li className="relative pl-6">
                        {get(item, "icon2", "").length != 0 && (
                          <span
                            className={`nx-text-primary w-5 h-5 text-[0.8rem] leading-none tracking-[normal] text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0 ${get(
                              tailwindClasses,
                              "icon2"
                            )}`}
                            style={get(style, "icon2")}
                          >
                            {parse(get(item, "icon2"))}
                          </span>
                        )}
                        {get(item, "text2", "").length != 0 && (
                          <h2
                            className={`xl:text-[1.05rem] ${get(
                              tailwindClasses,
                              "text2"
                            )}`}
                            style={get(style, "text2")}
                          >
                            {get(item, "text2")}
                          </h2>
                        )}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              </NexAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
AboutV4.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string
}
AboutV4.defaultProps = {
  style: {
    container: {},
    contentcontainer: {},
    image1: {},
    image2: {},
    shape: {},
    icon: {},
    title: {},
    subTitle: {},
    description: {},
    icon1: {},
    text1: {},
    icon2: {},
    text2: {},
  },
  tailwindClasses: {
    container: "",
    contentcontainer: "",
    image1: "",
    image2: "",
    shape: "",
    icon: "",
    title: "",
    subTitle: "",
    description: "",
    icon1: "",
    text1: "",
    icon2: "",
    text2: "",
  },
  title: "Who Are We?",
  subTitle:
    "We are a digital and branding company that believes in the power of creative strategy and along with great design.",
  description:
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  imagePath1:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226389.430x430.png",
  imagePath2:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735226485.340x340.png",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16 -rotate-12">
          <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
          </svg>`,
  items: [
    {
      icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>`,
      text1: "Aenean eu leo quam ornare curabitur blandit tempus.",
      icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>`,
      text2: "Nullam quis risus eget urna mollis ornare donec elit.",
    },
    {
      icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>`,
      text1: "Etiam porta sem malesuada magna mollis euismod.",
      icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>`,
      text2: "Fermentum massa vivamus faucibus amet euismod.",
    },
  ],
  imageAnimation: "",
  contentAnimation: ""
};
export default AboutV4;
