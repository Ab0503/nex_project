import React, { Component } from "react";
import { object, arrayOf } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import withLazyLoad from "@/utils/withLazyLoad";
import withData from "@nex-core-ui/HOC/withData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const TestimonialsV5 = (props) => {
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
          <section
            className={`nx-bg-primary-light px-6 py-10 sm:py-10 lg:px-8 ${get(
              tailwindClasses,
              "container"
            )}`}
            style={{ ...get(style, "container") }}
          >
            <figure className="mx-auto max-w-2xl">
              <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
                <p
                  className={`text-center ${get(tailwindClasses, "description")}`}
                  style={{ ...get(style, "description") }}
                >
                  {get(item, "description")}
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="m-auto text-center">
                  <NexImage
                    src={item.imagePath}
                    className={`!h-12 !w-12 ml-10 !relative rounded-full bg-gray-50 ${get(
                      tailwindClasses,
                      "image"
                    )}`}
                    style={{ ...get(style, "image") }}
                  ></NexImage>

                  <div className="text-sm/6">
                    <div
                      className={`font-semibold text-gray-900 ${get(
                        tailwindClasses,
                        "text1"
                      )}`}
                      style={{ ...get(style, "text1") }}
                    >
                      {get(item, "text1")}
                    </div>
                    <div
                      className={`mt-0.5 nx-text-primary ${get(
                        tailwindClasses,
                        "text2"
                      )}`}
                      style={{ ...get(style, "text2") }}
                    >
                      {get(item, "text2")}
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

TestimonialsV5.propTypes = {
  style: object,
  imagePath: "",
  items: arrayOf(object),
};
TestimonialsV5.defaultProps = {
  style: {
    container: {},
    description: {},
    image: {},
    text1: {},
    text2: {},
  },
  items: [
    {
      title: "title 1",
      imagePath:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
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
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      text1: "Judith Black 2",
      text2: "CEO of Workcation",
    },
    {
      title: "title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imagePath:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      text1: "Judith Black 3",
      text2: "CEO of Workcation",
    },
  ],
};
export default withData(withLazyLoad(TestimonialsV5));
