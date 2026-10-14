import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexAnimation from '@nex-components/NexAnimation';
import ImageOrVedio from "@nex-core-ui/ImageOrVedio";

const HeroSectionV31 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div>
      <section className={`overflow-hidden nx-bg-primary-light ${get(
            tailwindClasses,
            "container"
          )}`}
          style={get(style, "container")}>
        <div
          className="xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-0 lg:pb-0 md:pb-0 xl:mx-32 lg:mx-20 md:mx-10" 
        >
          <div className={`flex flex-wrap mt-[-5px] xl:mt-0 lg:mt-0 mb-16 justify-center items-center ${get(
            tailwindClasses,
            "contentcontainer"
          )}`}
          style={get(style, "contentcontainer")}>
            <div className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full mb-5">
            <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
              {get(props, "title", "").length != 0 && (
                <h1
                  className={`nx-section-heading-font text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[3.4rem] !mb-0 ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={get(style, "title")}
                >
                  {get(props, "title")}
                </h1>
              )}
            </NexAnimation>
            </div>

            <div className="lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full">
            <NexAnimation  type={get(props, 'rightContentAnimation', '')}>
            <div>
              {get(props, "subTitle", "").length != 0 && (
                <p
                  className={`lead font-bold text-[30px] max-sm:text-[20px] my-3 justify-center ${get(
                    tailwindClasses,
                    "subTitle"
                  )}`}
                  style={get(style, "subTitle")}
                >
                  {get(props, "subTitle")}
                </p>
              )}
            {
              get(props, "ctaText", "").length != 0 && <PrimaryLink href={get(props, "ctaLink")} className={`more text-[20px] hover text-fuchsia-500 underline hover:text-blue-700 ${get(
                tailwindClasses,
                "ctaText"
              )}`} style={get(style, "ctaText")}>
                {get(props, "ctaText")}
              </PrimaryLink>
            }
            </div>
            </NexAnimation>
            </div>
          </div>

          <div className="!relative rounded-full ">
            <div
              className={`shape bg-dot w-[10rem] h-[15rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute  opacity-80 hidden lg:block xl:block ${get(
                tailwindClasses,
                "shape"
              )}`}
              data-rellax-speed="1"
              style={{ top: "-2rem", right: "-2.4rem", ...get(style, "shape")}}
            ></div>
            {/* <div
              className="shape bg-dot !w-[5rem] !h-[3.5rem]"
              data-rellax-speed="1"
              style={{ top: "-2.5rem", right: "-2.7rem" }}
            ></div> */}
            {
            get(props, 'imagePath', '').length !== 0 &&
            <figure className="!relative rounded-full !h-96 !w-auto  md:mb-[5rem]">
              <ImageOrVedio
                src={get(props, "imagePath")} vediosrc={get(props, "vedioPath")}
              />
            </figure>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

HeroSectionV31.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  imagePath: PropTypes.string,
};
HeroSectionV31.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    subTitle: {},
    ctaText: {},
    imagePath: {},
    shape: {}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    subTitle: "",
    ctaText: "",
    imagePath: "",
    shape: "",
  },
  leftContentAnimation: "",
  rightContentAnimation: "",
  title: "We bring rapid solutions for your business.",
  subTitle:
    "We are an award winning branding design agency that strongly believes in the power of creative ideas.",
  ctaText: "Learn More",
  ctaLink: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736169678.about5.jpg",
  vedioPath: ""
}
export default HeroSectionV31;
