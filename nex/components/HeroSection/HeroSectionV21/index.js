import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";
import NexAnimation from "@nex-components/NexAnimation";
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const HeroSectionV21 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`overflow-hidden ${get(tailwindClasses,"container" )}`} style={{ ...get(style, "container") }}>
      <div className={`pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-8 !text-center`}>
        <div className="flex flex-wrap xl:mx-[35px] lg:mx-[20px] mt-[50px] items-center justify-center">
          <div className="lg:w-7/12 flex-[0_0_auto] px-[15px] max-w-full">
          <NexAnimation type={get(props,'leftContentAnimation')}>
            <figure>
              <NexImage
                className="!relative mb-10"
                src={get(props, 'imagePath')}
              />
            </figure>
            </NexAnimation>
          </div>
          <div className="md:w-10/12  md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left">
          <NexAnimation type={get(props,'rightContentAnimation')}>
          {
            get(props, 'title',"").length !==0 && <h1 className={`text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-5 md:mx-[-1.25rem] lg:mx-0 ${get(tailwindClasses,"title" )}`} style={{ ...get(style, "title") }}>
            {get(props, 'title')}
          </h1>
          }
          {
            get(props, 'description',"").length !==0 &&  <p className={`lead text-[1rem] mb-7 ${get(tailwindClasses,"description" )}`} style={{ ...get(style, "description") }}>
            {get(props, 'description')}
           </p>
          }  
          {
            get(props, 'ctaText',"").length !==0 && 
            <button className={`text-white !bg-[#3f78e0] hover:bg-sky-900  border-[#3f78e0] hover:text-white  hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-[50rem]  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2  ${get(tailwindClasses,"ctaText" )} `} style={{ ...get(style, "ctaText") }}>
            <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}
            </PrimaryLink>
          </button>
          }   
          </NexAnimation>         
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionV21.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaText: PropTypes.string,
    imagePath: PropTypes.string,
}

HeroSectionV21.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    title: {},
    description: {},
    ctaLink: {},
    ctaText: {},
    imagePath: {},
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    title: "",
    description: "",
    ctaLink: "",
    ctaText: "",
    imagePath: "",
  },
  title: "Grow Your Business with Our Solutions.",
  description:"We help our clients to increase their website traffic, rankings and visibility in search results.",
  ctaLink:"#",
  ctaText: "Try It For Free",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735652738.i2.png",
  leftContentAnimation:"",
  rightContentAnimation:"",
};
export default withData(HeroSectionV21);
