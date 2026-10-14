import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import NexAnimation from "@nex-components/NexAnimation";

const HeroSectionV28 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <div className={`overflow-hidden ${get(
      tailwindClasses,
      "container"
    )}`}
    style={{ ...get(style, "container") }}>
      <section>
        <div
          className={`pt-12 xl:pt-16 lg:pt-16 md:pt-16 pb-12 md:pb-36 xl:pb-60 lg:pb-60 !text-center`}
        >
          <div className="flex flex-wrap">
            
            <div
              className="lg:w-8/12  xl:w-7/12  xxl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto"
              data-cues="slideInDown"
              data-group="page-title"
            >
              <NexAnimation type={get(props,'topContentAnimation')}>
              {get(props, "title1", "").length !== 0 && (
                <h1
                  className={`nx-section-heading-font font-bold leading-[1.2]  xl:text-[4rem] text-[calc(1.425rem_+_2.1vw)] mb-4 md:!px-20 lg:!px-0 ${get(
                    tailwindClasses,
                    "title1"
                  )} `}
                  style={{ ...get(style, "title1") }}
                >
                  {get(props, "title1")}
                  <span
                    class={`!relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 underline-3 style-3 primary`}
                  >
                    {" "}
                    {get(props, "title2")}
                  </span>
                </h1>
              )}
              {get(props, "description", "").length !== 0 && (
                <p
                  className={`lead text-[1.5rem] leading-normal mb-7 md:mx-16 lg:mx-10 ${get(
                    tailwindClasses,
                    "description"
                  )}`}
                  style={{ ...get(style, "description") }}
                >
                  {get(props, "description")}
                </p>
              )}
              {get(props, "ctaText", "").length !== 0 && (
                <button  className={`!relative justify-center px-6 py-3 items-center nx-btn-primary focus:shadow-[rgba(82,92,108,1)] nx-btn-primary:hover rounded-[.5rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(
                  tailwindClasses,
                  "ctaText"
                )}`}
                style={{ ...get(style, "ctaText") }}>
                  <PrimaryLink href={get(props,'ctaLink')}>
                    {get(props, "ctaText")}
                  </PrimaryLink>
                </button>
              )}
              </NexAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper nx-bg-primary opacity-100 lg:h-[500px] md:h-[350px] max-sm:h-[200px] ${get(tailwindClasses,'imageBackground')}`} style={get(style,'imageBackground')}>
        <div className="p-20 max-sm:p-8 pt-[-5.5rem] xl:pt-24 lg:pt-24 md:pt-24 pb-9 xl:pb-12 lg:pb-12 md:pb-12">
          
          <figure
            className="!relative rounded  xl:!mt-[-17.5rem] lg:!mt-[-12.5rem] md:!mt-[-12.5rem] max-sm:mt-[-4rem] !mb-[4.5rem]"
            data-cue="slideInDown"
            data-delay="900"
          ><NexAnimation type={get(props,'bottomContentAnimation')}>
            <NexImage src={get(props, "imagePath")} />
            </NexAnimation>
          </figure>
        </div>
      </section>
    </div>
  );
};

HeroSectionV28.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  imagePath: PropTypes.string,
};

HeroSectionV28.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title1: {},
    title2: {},
    description: {},
    ctaText: {},
    imagePath: {},
    imageBackground:{}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title1: "",
    title2: "",
    description: "",
    ctaText: "",
    imagePath: "",
    imageBackground:""
  },
  title1: "We bring solutions to make life ",
  title2: "easier",
  description:
    "We are a creative company that focuses on long term relationships with customers.",
  ctaText: "Read More",
  ctaLink: "#",
  imagePath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736143996.about15.jpg",
  topContentAnimation:"",
  bottomContentAnimation:"",
};
export default HeroSectionV28;
