import React from "react";
import get from "lodash.get";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import parse from "html-react-parser";
import NexAnimation from "@nex-components/NexAnimation";
import withData from "@nex-core-ui/HOC/withData";

const HeroSectionV10 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute top-1/2 right-0 z-10' onClick={() => swiper.slideNext()}>{children}</button>
}

const SwiperButtonPrevious = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute top-1/2 left-0 z-10' onClick={() => swiper.slidePrev()}>{children}</button>
}
  return (
    <div
      className={`${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      className="relative">
        {Array.isArray(get(props,'items',[])) && get(props, "items", []).map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`text-center object-cover h-[550px] w-full py-48 ${get(
                tailwindClasses,
                "imageContainer"
              )}`}
              style={{
                background: `url(${get(item, "image")}) center/cover no-repeat`,
                ...get(style, "imageContainer", {}),
              }}
            >
              <div
                className={`text-gray-50 ${get(
                  tailwindClasses,
                  "contentContainer"
                )}`}
                style={get(style, "contentContainer", {})}
              >
                <NexAnimation type={get(props, 'contentAnimation', '')}>
                <h1
                  className={`nx-section-heading-font text-4xl font-bold mb-5 mx-auto max-sm:text-xl ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={get(style, "title", {})}
                >
                  {get(item, "title")}
                </h1>
                <p
                  className={`text-xl font-semibold mb-5 max-sm:text-base ${get(
                    tailwindClasses,
                    "description"
                  )}`}
                  style={get(style, "description", {})}
                >
                  {get(item, "description")}
                </p>
                {get(item, "ctaText", "").length !== 0 && (
                  <PrimaryLink href={get(item, "ctaLink", "#")}>
                    <button
                      className={`nx-btn-primary nx-btn-primary:hover p-4 border-2 border-transparent rounded-2xl hover:bg-transparent hover:border-2 hover:border-white font-bold  ${get(
                        tailwindClasses,
                        "button"
                      )}`}
                      style={get(style, "button", {})}
                    >
                      {get(item, "ctaText")}
                    </button>
                  </PrimaryLink>
                )}
                </NexAnimation>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {get(props, 'prevIcon', "").length !== 0 && <SwiperButtonPrevious><span className={`inline-flex bg-gray-50 hover:bg-gray-400 text-gray-900 p-2 rounded-full ${get(tailwindClasses, 'prevIcon')}`} style={get(style, 'prevIcon')}>{parse(get(props, 'prevIcon'))}</span></SwiperButtonPrevious>}
        {get(props, 'nextIcon', "").length !== 0 && <SwiperButtonNext><span className={`inline-flex bg-gray-50 hover:bg-gray-400 text-gray-900 p-2 rounded-full ${get(tailwindClasses, 'nextIcon')}`} style={get(style, 'nextIcon')}>{parse(get(props, 'nextIcon'))}</span></SwiperButtonNext>}
      </Swiper>
      
    </div>
  );
};

HeroSectionV10.defaultProps = {
  style: {
    container: {},
    imageContainer: {},
    contentContainer: {},
    title: {},
    description: {},
    button: {},
    prevIcon: {},
    nextIcon: {},
  },
  tailwindClasses: {
    container: "",
    imageContainer: "",
    contentContainer: "",
    title: "",
    description: "",
    button: "",
    prevIcon:"",
    nextIcon:""
  },
  prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
</svg>
`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
  items: [
    {
      title: "HI, WE ARE PERGO",
      description: "We are creative team with full of ideas",
      ctaText: "Get Started Now",
      ctaLink: "#",
      image:
        "https://jthemes.net/themes/wp/pergo/demos/wp-content/themes/pergo/images/slider/slide-1.jpg",
    },
    {
      title: "WE THINK CREATIVE",
      description: "We create awesome design for cool people",
      ctaText: "Our Latest Projects",
      ctaLink: "#",
      image:
        "https://jthemes.net/themes/wp/pergo/demos/wp-content/themes/pergo/images/slider/slide-2.jpg",
    },
    {
      title: "WE BUILD BRANDS",
      description: "Start your business with professionals",
      ctaText: "",
      ctaLink: "#",
      image:
        "https://jthemes.net/themes/wp/pergo/demos/wp-content/themes/pergo/images/slider/slide-3.jpg",
    },
  ],
  contentAnimation: ""
};

export default withData(HeroSectionV10);
