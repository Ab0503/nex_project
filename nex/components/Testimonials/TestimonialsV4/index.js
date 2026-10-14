import React from "react";
import { object, arrayOf } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import withLazyLoad from "@/utils/withLazyLoad";
import withData from "@nex-core-ui/HOC/withData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const TestimonialsV4 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      {get(props, "items", []).map((item) => {
        return (
          <SwiperSlide>
            <div
              className={`text-center ${get(tailwindClasses, "container")}`}
              style={{ ...get(style, "container") }}
            >
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                  <NexImage
                    src={get(item, "imagePath")}
                    className={`!absolute inset-0 h-96 w-full object-cover brightness-150 saturate-0 ${get(
                      tailwindClasses,
                      "image"
                    )}`}
                    style={{ ...get(style, "image") }}
                  ></NexImage>
                  <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                  <div
                    aria-hidden="true"
                    className="absolute -left-80 -top-56 transform-gpu blur-3xl"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                    />
                  </div>
                  <div className="relative mx-auto max-w-2xl lg:mx-0">
                    <h4
                      className={`text-center text-white mb-5 ${get(
                        tailwindClasses,
                        "title"
                      )}`}
                      style={{ ...get(style, "title") }}
                    >
                      {get(item, "title")}
                    </h4>
                    <figure>
                      <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                        <p
                          className={`${get(tailwindClasses, "description")}`}
                          style={{ ...get(style, "description") }}
                        >
                          {get(item, "description")}
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 text-base text-white">
                        <div
                          className={`font-semibold ${get(
                            tailwindClasses,
                            "text1"
                          )}`}
                          style={{ ...get(style, "text1") }}
                        >
                          {get(item, "text1")}
                        </div>
                        <div
                          className={`mt-1 ${get(tailwindClasses, "text2")}`}
                          style={{ ...get(style, "text2") }}
                        >
                          {get(item, "text2")}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
TestimonialsV4.propTypes = {
  style: object,
  imagePath: "",
  items: arrayOf(object),
};
TestimonialsV4.defaultProps = {
  style: {
    container: {},
    description: {},
    image: {},
    text1: {},
    text2: {},
  },
  imagePath:
    "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
  items: [
    {
      title: "title 1",
      imagePath:
        "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      text1: "Judith Black 1",
      text2: "CEO of Workcation",
    },
    {
      title: "title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imagePath:
        "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
      text1: "Judith Black 2",
      text2: "CEO of Workcation",
    },
    {
      title: "title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imagePath:
        "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
      text1: "Judith Black 3",
      text2: "CEO of Workcation",
    },
  ],
};
export default withData(withLazyLoad(TestimonialsV4));
