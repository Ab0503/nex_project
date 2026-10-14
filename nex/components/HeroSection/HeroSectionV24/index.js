import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const HeroSectionV24 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div>
      <section className="wrapper !bg-[#edf2fc] !relative">
        <div className={`pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center ${get(
                    tailwindClasses,
                    "container"
                  )}`}  style={{ ...get(style, "container") }}>
          <div className="row">
            <div
              className="md:w-10/12  lg:w-8/12  xl:w-8/12  xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-16"
              data-cues="slideInDown"
              data-group="page-title"
            >
                {
                    get(props, "title", "").length !== 0 && <h1 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4 ${get(
                                      tailwindClasses,
                                      "title"
                                    )}`} style={{ ...get(style, "title") }}>
                    {get(props, "title")}
                  </h1>
                }
              {
                get(props, "description", "").length !== 0 && <p className={`lead text-[1rem] xl:!px-14 xxl:!px-6 mb-7 ${get(
                                  tailwindClasses,
                                  "description"
                                )}`}  style={{ ...get(style, "description") }}>
                {get(props, "description")}
              </p>
              }
              {
<div
                className="flex justify-center"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay="600"
              >
                {
                    get(props, "ctaText1", "").length !== 0 && <span>
                    <a href={get(props, "ctaLink1")} className={`btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-black hover:bg-[#132443] hover:border-[#3f78e0] focus:shadow-[#232a37] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] px-5 py-2 bg-transparent  rounded mx-1 ${get(tailwindClasses,"ctaText1" )}`}  style={{ ...get(style, "ctaText1") }}>
                     {get(props, 'ctaText1')}
                    </a>
                  </span>
                }
                {
                    get(props, "ctaText2", "").length !== 0 && <span>
                    <a  href={get(props, "ctaLink2")} className={`btn btn-green text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:border-[#45c4a0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] px-5 py-2 rounded mx-1 bg-transparent ${get(tailwindClasses,"ctaText2" )}`} style={{ ...get(style, "ctaText2") }}>
                    {get(props, 'ctaText2')}
                    </a>
                  </span>
                }
                
              </div>
              }
              
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper !bg-[#ffffff] !relative ">
        <div className="container pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
          <div className="flex flex-wrap mx-0 mb-24 mb-mb-40">
            <div
              className="w-9/12  sm:w-10/12  lg:w-9/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto mt-[-5rem] md:!mt-[-10rem] xl:!mt-[-10rem] lg:!mt-[-10rem]"
              data-cues
              data-group="images"
              data-delay="1500"
            >
                {
                    get(props, "imagePath1", "").length !== 0 && <NexImage
                    className={`!relative !max-w-full !h-auto !mx-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses,"imagePath1" )}`} style={{ ...get(style, "imagePath1") }}
                    data-cue="slideInUp"
                    src={get(props, "imagePath1")}
                    srcset="./assets/img/photos/sa1@2x.jpg 2x"
                    alt=""
                  />
                }
              
              
            </div>
            {
                get(props, "imagePath2", "").length !== 0 && <img
                className={`!absolute rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses,"imagePath2" )}`} 
                data-cue="slideInRight"
                src={get(props, "imagePath2")}
                srcset="./assets/img/photos/sa2@2x.jpg 2x"
                style={{top: "5%", right:"10%", maxWidth:"30%", height: "auto !important", ...get(style, "imagePath2")}}
                alt=""
              /> 
            }
            {
                 get(props, "imagePath3", "").length !== 0 && <img
                 className={`!absolute rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses,"imagePath3" )}`} 
                 data-cue="slideInLeft"
                 src={get(props, "imagePath3")}
                 srcset="./assets/img/photos/sa3@2x.jpg 2x"
                 style={{top: "-14%", left:"10%", maxWidth:"30%", height: "auto", ...get(style, "imagePath3")}}
                 alt=""
               />
            }
              {
                 get(props, "imagePath4", "").length !== 0 && <img
                 className={`!absolute rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses,"imagePath4" )}`} 
                 data-cue="slideInLeft"
                 src={get(props, "imagePath4")}
                 srcset="./assets/img/photos/sa4@2x.jpg 2x"
                 style={{bottom: "34%", left:"7%", maxWidth:"30%", height: "auto",  ...get(style, "imagePath4")}}
                 alt=""
               />
              }
              
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSectionV24.propTypes = {
  style: PropTypes.object,
  tailwindclassNamees: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath1: PropTypes.string,
  imagePath2: PropTypes.string,
  imagePath3: PropTypes.string,
  imagePath4: PropTypes.string,
};

HeroSectionV24.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    ctaLink1: {},
    ctaText1: {},
    ctaLink2: {},
    ctaText2: {},
    imagePath1: {},
    imagePath2: {},
    imagePath3: {},
    imagePath4: {},
  },
  tailwindclassNamees: {
    container: "",
    contentContainer: "",
    shape: "",
    title: "",
    description: "",
    ctaLink1: "",
    ctaText1: "",
    ctaLink2: "",
    ctaText2: "",
    imagePath1: "",
    imagePath2: "",
    imagePath3: "",
    imagePath4: "",

  },
  title: "Staying on top of your bills never been this easy",
  description: "Easily achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.",
  ctaLink1: "#",
  ctaText1: "Get Started",
  ctaLink2: "#",
  ctaText2: "Free Trail",
  imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735797711.sa1.jpg",
  imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735797657.sa2.jpg",
  imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735797740.sa3.jpg",
  imagePath4: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735797752.sa4.jpg",
};
export default HeroSectionV24;
