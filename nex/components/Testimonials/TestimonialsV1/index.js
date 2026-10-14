import React from "react";
import { object, arrayOf } from "prop-types";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import withLazyLoad from "@/utils/withLazyLoad";
import withData from "@nex-core-ui/HOC/withData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import NexAnimation from "@nex-components/NexAnimation";

const TestimonialsV1 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay:`${get(props,'sliderDelay')}`
      }}
      modules={[Pagination,Autoplay]}
      pagination={{
        clickable: true,
      }}
    >
      {get(props, "items", []).map((item) => {
        return (
          <SwiperSlide>
            <section
              className={`nx-bg-primary-light px-6 py-10 sm:py-10 lg:px-8 relative ${get(
                tailwindClasses,
                "container"
              )}`}
              style={{ ...get(style, "container") }}
            >
              {/* <div className="absolute inset-0 z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
              <div className="absolute inset-y-0 right-1/2 z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
              <NexAnimation type={get(props,'contentAnimation')}>
              <div className="mx-auto max-w-2xl lg:max-w-4xl relative z-40">
                <figure className="mt-10">
                  <h4
                    className={`text-center mb-5 ${get(
                      tailwindClasses,
                      "title"
                    )}`}
                    style={{ ...get(style, "title") }}
                  >
                    {get(item, "title")}
                  </h4>
                  <blockquote
                    className={`text-center text-xl/8 font-semibold sm:text-2xl/9 `}
                  >
                    <p
                      className={`${get(tailwindClasses, "description")}`}
                      style={{ ...get(style, "description") }}
                    >
                      {get(item, "description")}
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <NexImage
                      src={item.imageUrl}
                      className={`!h-10 !w-10 !relative mx-auto rounded-full ${get(
                        tailwindClasses,
                        "image"
                      )}`}
                      style={{ ...get(style, "image") }}
                    ></NexImage>
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div
                        className={`font-bold nx-text-primary ${get(
                          tailwindClasses,
                          "text1"
                        )}`}
                        style={{ ...get(style, "text1") }}
                      >
                        {get(item, "text1")}
                      </div>
                      <div
                        className={`${get(tailwindClasses, "text2")}`}
                        style={{ ...get(style, "text2") }}
                      >
                        {get(item, "text2")}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              </NexAnimation>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}


TestimonialsV1.propTypes = {
  style: object,
  items: arrayOf(object),
};
TestimonialsV1.defaultProps = {
  style: {
    container: {},
    title: {},
    description: {},
    image: {},
    text1: {},
    text2: {},
  },
  tailwindClasses:{
    container: "",
    title: "",
    description: "",
    image: "",
    text1: "",
    text2: "",
  },
  sliderDelay:3000,
  contentAnimation:"",
  items: [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      title: "Judith Black 1",
      text1: "Judith Black 1",
      text2: "CEO of Workcation",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      title: "Judith Black 2",
      text1: "Judith Black 2",
      text2: "CEO of Workcation",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      title: "Judith Black 2",
      text1: "Judith Black 3",
      text2: "CEO of Workcation",
    },
  ],
};
export default withLazyLoad(withData(TestimonialsV1));
