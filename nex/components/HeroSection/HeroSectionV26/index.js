import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import CountUp from "react-countup";

const HeroSectionV26 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper bg-[#edf2fc] max-sm:py-10">
      <div className="">
        <div
          className={`card  !rounded-[0.8rem] !mt-2 mb-16 md:!mb-[17rem] ${get(
            tailwindClasses,
            "container"
          )}`}
          style={get(style, "container")}
        >
          <div className="card-body md:!p-10 xl:!py-12 xl:!px-20">
            <div className="flex flex-wrap xl:mx-[20px] lg:mx-[20px]  items-center justify-center">
              <div className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full lg:!order-2 flex !relative">
                {get(props, "imagePath", "").length !== 0 && (
                  <NexImage
                    className="!relative max-w-full h-auto ml-auto !mx-auto lg:!mr-8"
                    src={get(props, "imagePath")}
                  />
                )}

                <div data-cue="slideInRight" data-delay="300">
                  <div
                    className="bg-gray-50 rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] absolute"
                    style={{ bottom: "10%", right: "-3%" }}
                  >
                    <div className="card-body py-4 px-5">
                      <div className="flex flex-row items-center gap-3">
                        <div>
                          {get(props, "value", "").length !== 0 && (
                            <div
                              className={`bg-blue-200 text-blue-400 p-2 pointer-events-none rounded-full !mx-auto mr-3 ${get(
                                tailwindClasses,
                                "ctaIcon"
                              )}`}
                              style={get(style, "ctaIcon")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3
                            className={`counter  !mb-0 whitespace-nowrap text-2xl font-bold ${get(
                              tailwindClasses,
                              "value"
                            )}`}
                            style={get(style, "value")}
                          >
                            <CountUp
                              end={`${get(props, "value")}`}
                              enableScrollSpy
                            />{" "}
                            +
                          </h3>
                          <p
                            className={`text-[0.9rem] leading-normal  !mb-0 whitespace-nowrap ${get(
                              tailwindClasses,
                              "ctaText3"
                            )}`}
                            style={get(style, "ctaText3")}
                          >
                            {get(props, "ctaText3")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left"
                data-cues="slideInDown"
                data-group="page-title"
                data-delay="600"
              >
                {get(props, "title", "").length !== 0 && (
                  <h1
                    className={`text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[2.2rem] mb-5 ${get(
                      tailwindClasses,
                      "title"
                    )}`}
                    style={get(style, "title")}
                  >
                    {get(props, "title")}
                  </h1>
                )}
                {get(props, "description", "").length !== 0 && (
                  <p
                    className={`lead text-[1rem] leading-normal mb-7 xl:pr-10 ${get(
                      tailwindClasses,
                      "description"
                    )}`}
                    style={get(style, "description")}
                  >
                    {get(props, "description")}
                  </p>
                )}

                <div
                  className="flex justify-center lg:!justify-start"
                  data-cues="slideInDown"
                  data-group="page-title-buttons"
                  data-delay="900"
                >
                  {get(props, "ctaText1", "").length !== 0 && (
                    <span>
                      <a
                        href="#"
                        className={`px-5 py-3 btn btn-lg btn-primary text-black !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] me-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(
                          tailwindClasses,
                          "ctaText1"
                        )}`}
                        style={get(style, "ctaText1")}
                      >
                        {get(props, "ctaText1")}
                      </a>
                    </span>
                  )}
                  {get(props, "ctaText2", "").length !== 0 && (
                    <span>
                      <a
                        href="#"
                        className={` !rounded-[50rem] px-5 py-3  border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(
                          tailwindClasses,
                          "ctaText"
                        )}`}
                        style={get(style, "ctaText2")}
                      >
                        {get(props, "ctaText2")}
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV26.propTypes = {
  style: PropTypes.object,
  tailwindclassNamees: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath: PropTypes.string,
  ctaIcon: PropTypes.string,
  ctaText3: PropTypes.string,
  value: PropTypes.string,
};

HeroSectionV26.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    ctaText1: {},
    ctaText2: {},
    imagePath: {},
    ctaIcon: {},
    ctaText3: {},
    value: {},
  },
  tailwindclassNamees: {
    container: "",
    contentContainer: "",
    shape: "",
    title: "",
    description: "",
    ctaText1: "",
    ctaText2: "",
    imagePath: "",
    ctaIcon: "",
    ctaText3: "",
    value: "",
  },
  title: "Crafting project specific solutions with expertise.",
  description:
    "We're a company that focuses on establishing long-term relationships with customers.",
  ctaLink1: "#",
  ctaText1: "Explore Now",
  ctaLink2: "#",
  ctaText2: "Contact Us",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735712679.about7.jpg",
  ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
  value: 25000,
  ctaText3: "Happy Clients",
};
export default HeroSectionV26;
