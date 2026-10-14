import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import Typewriter from 'typewriter-effect';
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexAnimation from "@nex-components/NexAnimation";

const HeroSectionV37 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`overflow-hidden ${get(
      tailwindClasses,
      "container"
    )}`}
      style={{ ...get(style, "container") }}>
      <div
        className={`pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center`}
      >
        <div className={`flex flex-wrap xl:mx-[35px] lg:mx-[20px] xl:mt-0 mb-10 items-center justify-center ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
          <div className="lg:w-7/12 flex-[0_0_auto] px-[15px] max-w-full lg:!order-2">
          <NexAnimation type={get(props,'rightContentAnimation')}>
            <figure>
              <NexImage
                className="!relative"
                src={get(props, "imagePath")}
              />
            </figure>
            </NexAnimation>
          </div>
          <div className="md:w-10/12 lg:!ml-0 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left">
          <NexAnimation type={get(props,'leftContentAnimation')}>
            {get(props, "title1", "").length != 0 && (
              <h1
                className={`font-bold leading-[1.2]  xl:text-[2.7rem] text-[calc(1.395rem_+_1.74vw)] mb-5 md:mx-[-1.25rem] lg:mx-0 mt-7 ${get(
                  tailwindClasses,
                  "title1"
                )}`}
                style={get(style, "title1")}
              >
                {get(props, "title1")} <br className="md:!hidden" />
                {get(props, "title2")}
                <br className="md:!hidden" />

                <span
                  className={`nx-text-primary ${get(
                    tailwindClasses,
                    "title3"
                  )}`}
                  style={get(style, "title3")}
                >
                  <Typewriter
                    options={{
                      strings: [`${get(props, 'title3')}`, `${get(props, 'title4')}`, `${get(props, 'title5')}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            )}
            {get(props, "description", "").length != 0 && (
              <p
                className={`lead text-[1rem] mb-3 ${get(
                  tailwindClasses,
                  "description"
                )}`}
                style={get(style, "description")}
              >
                {get(props, "description")}
              </p>
            )}
            {get(props, "ctaText", "").length != 0 && (
              <button className={`px-6 py-3 nx-btn-primary nx-btn-primary:hover rounded-[50rem] me-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(
                tailwindClasses,
                "ctaText"
              )}`}
                style={get(style, "ctaText")}>
                <PrimaryLink
                  href={get(props, 'ctaLink')}

                >
                  {get(props, "ctaText")}
                </PrimaryLink>
              </button>
            )}
            </NexAnimation>
          </div>
        </div>
        <NexAnimation type={get(props,'bottomContentAnimation')}>
        {get(props, "Text", "").length != 0 && (
          <p
            className={`text-center mb-10 nx-text-primary ${get(tailwindClasses, "Text")}`}
            style={get(style, "Text")}
          >
            {get(props, "Text")}
          </p>
        )}
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 mt-[-15px] -mb-10 items-center">
          {get(props, "items", []).map((item) => (
            <div className="!relative col">
              <NexImage
                className={`!relative !w-auto !h-32 md:!px-3 lg:!px-0 xl:!px-2 xxl:!px-5`}
                src={get(item, "logoImage")}
              />
            </div>
          ))}
        </div>
        </NexAnimation>
      </div>
      <div className="overflow-hidden">
        <div className={`divider nx-text-primary-light mx-[-0.5rem] ${get(tailwindClasses,'divider')}`} style={get(style,'divider')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

HeroSectionV37.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  imagePath: PropTypes.string,
  Text: PropTypes.string,
  logoImage: PropTypes.string,
};

HeroSectionV37.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    title3: {},
    description: {},
    ctaText: {},
    imagePath: {},
    Text: {},
    logoImage: {},
    divider:{}
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
    Text: "",
    logoImage: "",
    divider:""
  },
  title1: "A digital agency",
  title2: "specializing on",
  title3: "Web design,",
  title4: "Mobile design,",
  title5: "3D animation",
  description:
    "We are an award winning design agency that strongly believes in the power of creative ideas.",
  ctaText: "Get Started",
  ctaLink: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736402798.i21.png",
  Text: "Trusted by over 2K+ clients across the world ",
  leftContentAnimation:"",
  rightContentAnimation:"",
  bottomContentAnimation:"",
  items: [
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    },
    {
      logoImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735138045.z6.png",
    }
  ]
};
export default HeroSectionV37;
