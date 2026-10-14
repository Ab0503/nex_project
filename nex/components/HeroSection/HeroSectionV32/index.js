import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import CountUp from "react-countup";

const HeroSectionV32 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div>
      <section className="wrapper  bg-[rgba(246,247,249,1)] ">
        <div className={`container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24  ${get(
                    tailwindClasses,
                    "container"
                  )}`} style={get(style, "container")}>
          <div className="p-10 flex flex-wrap mt-[-50px] xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px] justify-center items-center">
            <div
              className="md:w-8/12 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full flex !relative !mx-auto"
              data-cues="slideInDown"
              data-group="header"
            >
              <div className="img-mask mask-1">
                <img src= {get(props, "imagePath")} />
              </div>
              <div
                className=" card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] absolute bg-white"
                style={{ bottom: "10%", right: "-7%" }}
              >
                <div className="card-body py-4 px-5">
                  <div className="flex flex-row items-center gap-1">    
                    {
                        get(props, "ctaIcon", "").length != 0 && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-10"
                      >
                        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        <path
                          fill-rule="evenodd"
                          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                          clip-rule="evenodd"
                        />
                        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                      </svg>
                    }                
                    
                    <div>
                        {
                           get(props, "value", "").length != 0 &&   <h3 className={`counter font-bold text-[1.2rem] !mb-0 whitespace-nowrap ${get(
                            tailwindClasses,
                            "value"
                          )}`}  style={get(style, "value")}> <CountUp end={get(props,"value")} enableScrollSpy/>+</h3>
                        }
                     {
                        get(props, "valuedesc", "").length != 0 && <p className={`text-[0.9rem] leading-normal  !mb-0 whitespace-nowrap ${get(
                            tailwindClasses,
                            "texvaluedesct1"
                          )}`} style={get(style, "valuedesc")}>
                       {get(props, "valuedesc")}
                      </p>
                     }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:w-6/12  lg:!ml-[8.33333333%] xxl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay="600"
            >
                {
                    get(props, "title", "").length != 0 && <h1 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5  ${get(
                                  tailwindClasses,
                                  "title"
                                )}`} style={get(style, "title")}>
                {get(props, "title")}
              </h1>
                }
              {
                get(props, "description", "").length != 0 && <p className={`lead text-[20px] leading-normal mb-7 md:!px-10 lg:!px-0 ${get(
                    tailwindClasses,
                    "description"
                  )}`} style={get(style, "description")}> 
                {get(props, "description")}
              </p>
              }
              
              <div
                className="flex justify-center lg:!justify-start"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay="900"
              >
                {
                    get(props, "ctaText1", "").length != 0 && <span>
                    <a
                      href="#"
                      className={`px-6 py-3 text-white !bg-rose-400 border-rose-800  hover:text-black hover:bg-red-600 hover:border-red-800 focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] me-2 ${get(
                        tailwindClasses,
                        "ctaText1"
                      )} `} style={get(style, "ctaText1")}>
                      {get(props, "ctaText1")}
                    </a>
                  </span>
                }
                {
                    get(props, "ctaText2", "").length != 0 && <span>
                    <a
                      href="#"
                      className={`px-6 py-3 hover:text-rose-600 border-2 border-rose-300 !rounded-[50rem] ${get(
                        tailwindClasses,
                        "ctaText2"
                      )}`} style={get(style, "ctaText2")}>
                      {get(props, "ctaText2")}
                    </a>
                  </span>
                }                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSectionV32.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath: PropTypes.string,
  ctaIcon: PropTypes.string,
  value: PropTypes.string,
  valuedesc: PropTypes.string,
};

HeroSectionV32.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    ctaText1: {},
    ctaText2: {},
    imagePath: {},
    ctaIcon: {},
    value: {},
    valuedesc: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    description: "",
    ctaText1: "",
    ctaText2: "",
    imagePath: "",
    ctaIcon: "",
    value: "",
    valuedesc: "",
  },
  imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736249313.about17.jpg",
  value: "250",
  valuedesc: "Projects Done",
  ctaIcon: `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fill-rule="evenodd"
            d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
            clip-rule="evenodd"
          />
        </svg>`,
  title: "I'm User Interface Designer & Developer.",
  description:
    "Hello! I'm Julia, a freelance user interface designer & developer based in London. I’m very passionate about the work that I do.",
  ctaText1: "See My Works",
  ctaLink1: "#",
  ctaText2: "Contact Me",
  ctaLink2: "#",
};
export default HeroSectionV32;
