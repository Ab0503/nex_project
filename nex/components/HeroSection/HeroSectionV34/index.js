import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";

const HeroSectionV34 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className="wrapper !bg-[#ffffff] ">
      <div className={`container-card ${get(
                tailwindClasses,
                "container"
              )}`} style={get(style, "container")}>
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 !mt-2 mb-5"
          style={{
            backgroundImage: `url(${get(props, "bgImage")})`,
          }}
        >
          <div className="card-body py-[4.5rem] px-0">
            <div className="roundded">
              <div className="flex flex-wrap p-10 md:mx-[20px] xl:mx-[35px] mt-[-50px] items-center justify-center text-center lg:text-left xl:text-left">
                <div
                  className="lg:w-6/12 flex-[0_0_auto] px-[20px] max-w-full mb-10"
                  data-cues="slideInDown"
                  data-group="page-title"
                  data-delay="900"
                >
                    {
                        get(props, "title1", "").length != 0 && <h1 className={`text-[calc(1.345rem_+_1.14vw)] font-bold leading-[1.2] xl:text-[2.2rem] mb-4 xl:!mr-5 xxl:!mr-0 ${get(
                                          tailwindClasses,
                                          "title"
                                        )}`} style={get(style, "title")}>{get(props, "title1")}                       
                        <span className={`text-gradient gradient-1 ${get(
                                          tailwindClasses,
                                          "title2"
                                        )}`} style={get(style, "title2")}>{get(props, "title2")}</span>
                        {get(props, "title3")}
                      </h1>
                    }
                  
                  {
                    get(props, "description", "").length != 0 && <p className={`lead text-[1.15rem] leading-normal mb-7 xxl:!pr-20 ${get(
                        tailwindClasses,
                        "description"
                      )}`} style={get(style, "description")}>
                    {get(props, "description")}
                  </p>
                  }
                  {
                    get(props, "ctaText", "").length != 0 && <a
                    href="ctaLink"
                    className={`border-2 px-6 py-3 btn btn-lg btn-gradient gradient-1 rounded-2xl bg-rose-400  text-white hover:text-black hover:bg-pink-500 border-slate-300 ${get(
                        tailwindClasses,
                        "ctaText"
                      )}`}  style={get(style, "ctaText")}
                  >
                   {get(props, "ctaText")}
                  </a>
                  }                  
                  
                </div>

                <div className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full ">
                  <NexImage
                    className="!relative roundded-full !max-w-full !h-auto mb-[-10rem]"
                    src={get(props, "imagePath")}
                    data-cue="fadeIn"
                    data-delay="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV34.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  imagePath: PropTypes.string,
  bgImage: PropTypes.string,
};

HeroSectionV34.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    title3: {},
    description: {},
    ctaText: {},
    imagePath: {},
    bgImage: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    title3: "",
    description: "",
    ctaText: "",
    imagePath: "",
    bgImage: "",
  },

  title1: "Networking ",
  title2: "solutions ",
  title3: "for worldwide communication",
  description: "We're a company that focuses on establishing long-term relationships with customers.",
  ctaText: "Explore Now",
  ctaLink: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736330517.3d6.png",
  bgImage:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736330724.bg22.png",
};
export default HeroSectionV34;
