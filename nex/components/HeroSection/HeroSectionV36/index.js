import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";


const HeroSectionV36 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-h-[80vh]">
      <video
        poster="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736341030.movie2.jpg"
        src={get(props, "video")}
        autoPlay
        loop
        playsInline
        muted
        width={"100%"} 
        height={"auto"}
      ></video>
            <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center text-center flex-col left-0 top-0">
        <div className="container !text-center">
          <div className="flex flex-wrap">
            <div className="lg:w-8/12  xl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !text-center text-white !mx-auto">
             
             {
                get(props, "title", "").length != 0 && <h1 className={`font-bold leading-[1.2]  xl:text-[2.7rem] text-[calc(1.395rem_+_1.74vw)] text-white mb-5 ${get(
                    tailwindClasses,
                    "title"
                  )}`} style={get(style, "title")}>
                    <span className="rotator-zoom">  {get(props, "title")}
                 
                </span>
              </h1>
             } 
                
              {
                get(props, "subTitle", "").length != 0 && <p className={`lead text-[1.2rem]  !mb-0 xxl:!mx-8 ${get(
                                      tailwindClasses,
                                      "subTitle"
                                    )}`}  style={get(style, "subTitle")}>
                {get(props, "subTitle")}
              </p>
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV36.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  video: PropTypes.string,
};
HeroSectionV36.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    subTitle: {},
    video: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    subTitle: "",
    video: "",
  },
  title: "Rapid Solutions,Innovative Thinking,Top-Notch Support",
  subTitle:
    "We are a digital agency specializing in web design, mobile development and seo optimization.",
  video: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1736342809.SampleVideo_1280x720_20mb.mp4",
};
export default HeroSectionV36;
