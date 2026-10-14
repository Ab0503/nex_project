import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import parse from "html-react-parser";
import Typewriter from "typewriter-effect";

const HeroSectionV44 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <section className="wrapper bg-gradient-primary">
      <div
        className={`p-20 container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem]  ${get(
          tailwindClasses,
          "container"
        )}`}
        style={{ ...get(style, "container") }}
      >
        <div className="flex flex-wrap mx-[-5px] mt-[-50px] items-center">
          <div
            className="md:w-10/12  md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left order-2 lg:!order-none"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {get(props, "title1", "").length != 0 && (
              <h1
                className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5 md:mx-10 lg:mx-0 ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1")} <br />
                <span
                  className="typer text-[#3f78e0]  whitespace-nowrap"
                  data-delay="100"
                  data-words="your business.,your portfolio.,your startup.,digital marketing."
                >
                  <Typewriter
                    options={{
                      strings: [
                        "your business.",
                        "your portfolio.",
                        "digital marketing.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                <span
                  className="cursor text-[#3f78e0] "
                  data-owner="typer"
                ></span>
              </h1>
            )}
            {get(props, "description", "").length != 0 && (
              <p
                className={`lead text-[1.15rem] mb-7  ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description")}
              </p>
            )}

            <div
              className="flex justify-center lg:!justify-start mb-4"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay="900"
            >
              {get(props, "ctaText", "").length != 0 && (
                <span>
                  <a
                    className={`px-5 py-3 text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-black hover:bg-red-600 hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mr-2 scroll ${get(
                      tailwindClasses,
                      "ctaText"
                    )}`}
                    style={get(style, "ctaText")}
                  >
                    {get(props, "ctaText")}
                  </a>
                </span>
              )}
            </div>
          </div>

          <div className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full ml-auto !relative">
            <div className="flex flex-wrap g-4">
              <div
                className="w-4/12 flex-[0_0_auto] px-[15px] max-w-full flex  flex-col ml-auto"
                data-cues="fadeIn"
                data-group="col-start"
                data-delay="900"
              >
                <div className="ml-auto mt-6">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath1")}
                  />
                </div>
                <div className="ml-auto mt-4">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath2")}
                  />
                </div>
                <div className="ml-auto mt-4">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath3")}
                  />
                </div>
              </div>

              <div
                className="w-4/12 flex-[0_0_auto] px-[15px] max-w-full"
                data-cues="fadeIn"
                data-group="col-middle"
              >
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath4")}
                  />
                </div>
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mt-4"
                    src={get(props, "imagePath5")}
                  />
                </div>
                <div>
                  <img
                    className="w-full max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mt-4"
                    src={get(props, "imagePath6")}
                  />
                </div>
              </div>

              <div
                className="w-4/12 flex-[0_0_auto] px-[15px] max-w-full flex flex-col"
                data-cues="fadeIn"
                data-group="col-end"
                data-delay="900"
              >
                <div className="mt-8">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath7")}
                  />
                </div>
                <div className="mt-4 mb-10">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath8")}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                class="relative !mt-[-10rem] mb-40"
                data-cue="fadeIn"
                data-delay="1800"
                data-show="true"
                // style="animation-name: fadeIn; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 1800ms; animation-direction: normal; animation-fill-mode: both;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV44.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  imagePath1: PropTypes.string,
  imagePath2: PropTypes.string,
  imagePath3: PropTypes.string,
  imagePath4: PropTypes.string,
  imagePath5: PropTypes.string,
  imagePath6: PropTypes.string,
  imagePath7: PropTypes.string,
  imagePath8: PropTypes.string,
};

HeroSectionV44.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText: {},
    imagePath1: {},
    imagePath2: {},
    imagePath3: {},
    imagePath4: {},
    imagePath5: {},
    imagePath6: {},
    imagePath7: {},
    imagePath8: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description: "",
    ctaText: "",
    imagePath1: "",
    imagePath2: "",
    imagePath3: "",
    imagePath4: "",
    imagePath5: "",
    imagePath6: "",
    imagePath7: "",
    imagePath8: "",
  },

  title1: "Create a powerful but effortless website for",
  title2: "your business.,your portfolio.,your startup.,digital marketing.",
  description:
    "Build your website in minutes with the help of countless amazing features of Sandbox.",
  ctaText: "Check Demos",
  ctaLink1: "#",
  imagePath1:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736513870.vc1.jpg",
  imagePath2:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736513897.vc2.jpg",
  imagePath3:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736513931.vc3.jpg",
  imagePath4:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736513984.vc4.jpg",
  imagePath5:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736514032.vc5.jpg",
  imagePath6:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736514072.vc6.jpg",
  imagePath7:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736514101.vc7.jpg",
  imagePath8:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736514144.vc8.jpg",
};
export default HeroSectionV44;
