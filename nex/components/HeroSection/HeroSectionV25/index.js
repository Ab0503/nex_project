import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const HeroSectionV25 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper !bg-[#edf2fc]">
      <div className="container pt-5 pb-20 lg:!py-28 xl:!py-36 xl:pb-40 !relative">
        {
            get(props, "imagePath", "").length !== 0 && <img
            className={`lg:!absolute !w-[900px]  lg:w-10/12 z-10 xl:w-11/12 xxl:w-10/12 flex-[0_0_auto] px-[15px]  lg:!px-5 xl:!px-0 ml-[-1.25rem] sm:!ml-[-2.5rem] md:!ml-[-2.5rem] lg:!ml-0 md:!mb-4 lg:!mb-0 ${get(
                        tailwindClasses,
                        "container"
                      )}`} 
            src={get(props, "imagePath")}
            style={{ top: "2%", left: "5%",  height: "130%",...get(style, "imagePath") }}
          />
        }
        
        <div className="flex flex-wrap mx-0 items-center justify-center">
          <div
            className="md:w-10/12  md:!ml-[8.33333333%] lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full lg:!ml-[58.33333333%] xxl:!ml-[50%] xxl:pl-14 md:!mt-[-2.25rem] text-center lg:text-left xl:text-left"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {
                get(props, "title", "").length !== 0 && <h1 className={`text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[2.2rem] mb-4 sm:mx-[-0.5rem] md:mx-0 ${get(
                                  tailwindClasses,
                                  "title"
                                )}`} style={{ ...get(style, "title") }}>
                 {get(props, "title")}
              </h1>
            }
            {
                get(props, "description", "").length !== 0 && <p className={`lead text-[1rem] mb-7 md:!px-10 lg:!px-0  ${get(
                                  tailwindClasses,
                                  "description"
                                )}`}  style={{ ...get(style, "description") }}>
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
                    get(props, "ctaText1", "").length !== 0 && <span>
                    <a className={`px-5 py-2 btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-black hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-icon btn-icon-start rounded me-2 ${get(tailwindClasses,"ctaText1" )}`} style={{ ...get(style, "ctaText1") }}>
                      <i className="uil uil-apple"></i> {get(props, 'ctaText1')}
                    </a>
                  </span>
                }
              {
                get(props, "ctaText2", "").length !== 0 && <span>
                <a className= {`px-5 py-2 btn btn-green text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-black hover:bg-[#45c4a0] hover:border-[#45c4a0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0]  btn-icon btn-icon-start rounded ${get(tailwindClasses,"ctaText" )}`} style={{ ...get(style, "ctaText2") }}>
                  <i className="uil uil-google-play"></i> {get(props, 'ctaText2')}
                </a>
              </span>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV25.propTypes = {
  style: PropTypes.object,
  tailwindclassNamees: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV25.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    
    ctaText1: {},
 
    ctaText2: {},
    imagePath: {},
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
  },
  title: "Get all of your steps, exercise, sleep and meds in one place.",
  description:"Sandbox is now available to download from both the App Store and Google Play Store.",
  ctaLink1: "#",
  ctaText1: "App Store",
  ctaLink2: "#",
  ctaText2: "Google Play",
  imagePath:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735820006.bubble-art-screen-smartphone-digital-device-experimental-art-with-design-space.png",
};
export default HeroSectionV25;
