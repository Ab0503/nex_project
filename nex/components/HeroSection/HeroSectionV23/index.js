import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import { TypeAnimation } from 'react-type-animation';

const HeroSectionV23 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`wrapper  bg-[#21262c] opacity-100  angled lower-start relative border-0
     before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-[#262b32] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#21262c] after:border-0 after:border-solid after:right-0 mb-32  ${get(
                  tailwindClasses,
                  "container"
                )}`}  style={{ ...get(style, "container") }}>
      <div className="mx-20  pt-7 xl:pt-12 lg:pt-12 md:pt-12 pb-8" >
        <div className="pb-10 flex flex-wrap mx-0 mt-[50px] items-center justify-center z-10 " >
          <div
            className="lg:w-6/12 flex-[0_0_auto] max-w-full max-lg:mb-10"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {
              get(props, "title1", "").length !== 0 && <h1 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.5rem] text-white mb-4 ${get(
                tailwindClasses,
                "container"
              )}`} style={{ ...get(style, "title1") }}>
               {get(props, "title1")} <br />
              {get(props,'title2',"").length !==0 && <TypeAnimation className="bg-[#3f78e0] xl:text-[2.5rem]"
      sequence={[
       `${get(props,'title2')}`,
       1000,
       `${get(props,'title3')}`,
       1000,
       `${get(props,'title4')}`,
       1000,
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />}
              <span className="cursor text-[#3f78e0] " data-owner="typer"></span>
            </h1>
            }
            {
              get(props, "description", "").length !== 0 && <p className={`lead text-[1.2rem] leading-normal text-white mb-7 md:!pr-32 xl:pr-0 lg:pr-0 xxl:!pr-20 ${get(
                tailwindClasses,
                "description"
              )}`} style={{ ...get(style, "description") }}>
               {get(props, "description")}
            </p>
            }
            
            {
              get(props, "ctaText", "").length !== 0 && <div>
              <a className={`btn btn-lg btn-primary text-white !bg-[#3f78e0] border-[#3a5079] hover:text-white hover:bg-[#172a4d] hover:border-[#1e2a42] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#1e3766] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded px-5 py-2 ${get(
                  tailwindClasses,
                  "container"
                )}`} style={{ ...get(style, "ctaText") }}>
                 {get(props, "ctaText")}
              </a>
            </div>
            }
            
          </div>

          <div
            className="lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full lg:!ml-[8.33333333%] mb-[-8rem]"
            data-cues="slideInDown"
          >
            <div className="relative">
              <a
                href="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1733137608.file_example_MP4_480_1_5MG.mp4"
                className="btn btn-circle btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] btn-play ripple !mx-auto !mb-6 absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "3",
                }}
                data-glightbox
              >
                <i className="icn-caret-right"></i>
              </a>
              <figure className=" !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
              {/* <ImageOrVedio 
            alt="Product screenshot"
            src={get(props, 'imagePath', '')}
            vedioSrc={get(props, 'videoPath', '')}
            style={{...get(style, 'image')}}
            className={` z-10 rounded-lg !relative !h-full !w-full ${get(tailwindClasses, 'image')}`}
          /> */}
                <NexImage
                  className={`!relative z-10 rounded-lg ${get(
                                    tailwindClasses,
                                    "imagePath"
                                  )}`} style={{ ...get(style, "title") }}
                  src={get(props, "imagePath")}
                  srcset="./assets/img/photos/about13@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV23.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
  description: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  imagePath: PropTypes.string,
  videoPath: PropTypes.string,
};

HeroSectionV23.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    title3: {},
    title4: {},
    description: {},
    ctaLink: {},
    ctaText: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    description: "",
    ctaLink: "",
    ctaText: "",
    imagePath:"",
  },
  title1: "Sandbox focuses on",
  title2: "customer satisfaction",
  title3: "business needs",
  title4: "creative idea",
  description:
    "We help our clients to increase their website traffic, rankings and visibility in search results.",
  ctaLink: "#",
  ctaText: "Try It For Free",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735730287.about13.jpg",  
};
export default HeroSectionV23;
