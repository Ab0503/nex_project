import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import { TypeAnimation } from "react-type-animation";

const HeroSectionV27 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`${get(
      tailwindClasses,
      "container"
    )}`}
    style={{ ...get(style, "container") }}>
      <div
        className="p-2 pb-14 xl:pt-12 lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-28 lg:pb-28 md:pb-28"
      >
        <div className={`flex flex-wrap xl:mx-[35px] lg:mx-[20px] mt-[50px] items-center justify-center ${get(
          tailwindClasses,
          "contentcontainer"
        )}`}
        style={{ ...get(style, "contentcontainer") }}>
          <div
            className="md:w-10/12  md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full lg:mt-[-.5rem] xl:mt-[-.5rem] text-center lg:text-left xl:text-left order-2 lg:!order-none"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay="600"
          >
            {get(props, "title1", "").length !== 0 && (
              <h1
                className={`nx-section-heading-font text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[3.4rem] mb-5 md:mx-10 lg:mx-0 ${get(
                  tailwindClasses,
                  "title1"
                )} `}
                style={{ ...get(style, "title1") }}
              >
                {get(props, "title1")} <br />
                {get(props, "title2", "").length !== 0 && (
                  <TypeAnimation
                    className="nx-section-heading-font nx-text-primary xl:text-[3.4rem]"
                    sequence={[
                      `${get(props, "title2")}`,
                      1000,
                      `${get(props, "title3")}`,
                      1000,
                      `${get(props, "title4")}`,
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                )}
                <span
                  className="typer text-[#3f78e0]  whitespace-nowrap"
                  data-delay="100"
                  data-words="easy usage,fast transactions,secure payments"
                ></span>
                <span
                  className="cursor text-[#3f78e0] "
                  data-owner="typer"
                ></span>
              </h1>
            )}
            {get(props, "description", "").length !== 0 && (
              <p
                className={`lead text-[1.2rem] mb-7 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={{ ...get(style, "description") }}
              >
                {get(props, "description")}
              </p>
            )}
            <div
              className="flex justify-center lg:justify-start"
              data-cues="slideInDown"
              data-group="page-title-buttons"
              data-delay="900"
            >
              {get(props, "ctaText1", "").length !== 0 && (
                <span>
                  <a
                    className={`font-bold xl:text-[1.2rem] text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#18263f] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] px-6 py-3 rounded me-2 ${get(
                      tailwindClasses,
                      "ctaText1"
                    )}`}
                    style={{ ...get(style, "ctaText1") }}
                  >
                    {get(props, "ctaText1")}
                  </a>
                </span>
              )}
              {get(props, "ctaText2", "").length !== 0 && (
                <span>
                  <a
                    className={`font-bold xl:text-[1.2rem] btn-green text-gray-50 bg-[#45c4a0] border-[#45c4a0] hover:text-black hover:bg-[#45c4a0] hover:border-[#45c4a0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-gray-50 disabled:bg-[#45c4a0] disabled:border-[#45c4a0] px-6 py-3 rounded ${get(
                      tailwindClasses,
                      "ctaText2"
                    )}`}
                    style={{ ...get(style, "ctaText2") }}
                  >
                    {get(props, "ctaText2")}
                  </a>
                </span>
              )}
            </div>
          </div>

          <div className="!relative lg:w-7/12 flex-[0_0_auto] px-[15px] max-w-full">
            <div className="flex flex-wrap">
              <div
                className="w-3/12  !ml-[8.33333333%] lg:!ml-0 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full flex flex-col"
                data-cues="zoomIn"
                data-group="col-start"
                data-delay="300"
              >
                <div className="!relative ml-auto mt-auto">
                  <NexImage
                    className="!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath1")}
                  />
                </div>
                <div className="ml-auto mt-5 mb-10">
                  <NexImage
                    className="!relative !max-w-full !h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath2")}
                  />
                </div>
              </div>

              <div
                className="w-4/12 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full"
                data-cue="zoomIn"
              >
                <div>
                  <NexImage
                    className="!relative !w-full !max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath3")}
                  />
                </div>
              </div>

              <div
                className="w-3/12 flex-[0_0_auto] px-[15px] max-w-full flex flex-col"
                data-cues="zoomIn"
                data-group="col-end"
                data-delay="300"
              >
                <div className="mt-auto">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath4")}
                      />
                </div>
                <div className="mt-5">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath5")}
                  />
                </div>
                <div className="mt-5 mb-10">
                  <img
                    className="max-w-full h-auto rounded !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"
                    src={get(props, "imagePath6")}
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

HeroSectionV27.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
  description: PropTypes.string,
  ctaLink1: PropTypes.string,
  ctaText1: PropTypes.string,
  ctaLink2: PropTypes.string,
  ctaText2: PropTypes.string,
  imagePath1: PropTypes.string,
  imagePath2: PropTypes.string,
  imagePath3: PropTypes.string,
  imagePath4: PropTypes.string,
  imagePath5: PropTypes.string,
  imagePath6: PropTypes.string,
};

HeroSectionV27.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    title3: {},
    title4: {},
    description: {},
    ctaText1: {},
    ctaText2: {},
    imagePath1: {},
    imagePath2: {},
    imagePath3: {},
    imagePath4: {},
    imagePath5: {},
    imagePath6: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    description: "",
    ctaText1: "",
    ctaText2: "",
    imagePath1: "",
    imagePath2: "",
    imagePath3: "",
    imagePath4: "",
    imagePath5: "",
    imagePath6: "",
  },
  title1: "Sandbox is effortless and powerful with",
  title2: "easy usage",
  title3: "fast transactions",
  title4: "secure payments",
  description:
    "Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.",
  ctaText1: "Get Started",
  ctaText2: "Free Trial",
  imagePath1:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989643.sa20.jpg",
  imagePath2:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989680.sa18.jpg",
  imagePath3:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989719.sa16.jpg",
  imagePath4:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989743.sa21.jpg",
  imagePath5:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989764.sa19.jpg",
  imagePath6:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735989792.sa17.jpg",
};
export default HeroSectionV27;
