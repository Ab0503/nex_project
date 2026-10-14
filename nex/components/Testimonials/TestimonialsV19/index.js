import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import NexAnimation from '@nex-components/NexAnimation';

const TestimonialsV19 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
      <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="!relative">
            <div className={`max-sm:hidden rounded-full bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{ top: "-3rem", right: "3rem", zIndex: "0", ...get(style, 'shape1') }}></div>
            <div className={`max-sm:hidden rounded-full bg-[#a6b7da] rellax !w-[8rem] !h-[8rem] absolute ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="1" style={{ bottom: "-3rem", left: "2rem", zIndex: "0", ...get(style, 'shape2') }}></div>
            <div className={`nx-bg-primary-light shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-lg max-sm:mx-4 mx-20 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
              <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
              <div className="flex flex-wrap mx-0">
                <div className={`lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-1 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] sm:min-h-[25rem] xsm:min-h-[25rem] ${get(tailwindClasses, 'image')}`} style={{ backgroundImage: `url('${get(props, 'imagePath')}')`, "backgroundRepeat": "no-repeat", ...get(style, 'image') }}></div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="p-10 md:p-12 xl:p-[4rem] lg:p-[4rem]">
                    <div className="swiper-container dots-closer mb-6 relative z-10">
                      <div className="swiper">
                        <Swiper breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          640: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 1,
                          },
                          1440: {
                            slidesPerView: 1,
                          },
                        }} autoplay={{
                          delay: `${get(props, 'sliderDelay')}`
                        }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination, Autoplay]} style={{ paddingBottom: "50px" }}>
                          <div className="inline-flex">
                            {
                              get(props, 'items', []).map((item) =>
                                <SwiperSlide>
                                  <blockquote className="icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#a6a9b1] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                                    {
                                      get(item, 'text1', "").length != 0 &&
                                      <p className={`text-[1.3rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</p>
                                    }
                                    <div className="flex items-center justify-center text-center">
                                      <div className="info !pl-0">
                                        {
                                          get(item, 'text2', "").length != 0 &&
                                          <h5 className={`nx-text-primary mb-1 text-[1.2rem] leading-[1.5] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</h5>
                                        }
                                        {
                                          get(item, 'text3', "").length != 0 &&
                                          <p className={`mb-0 text-[1.1rem] ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item, "text3")}</p>
                                        }
                                      </div>
                                    </div>
                                  </blockquote>
                                </SwiperSlide>
                              )}
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </NexAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
TestimonialsV19.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
TestimonialsV19.defaultProps = {
  style: {
    container: {},
    shape1: {},
    shape2: {},
    box: {},
    image: {},
    text1: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    shape1: "",
    shape2: "",
    box: "",
    image: "",
    text1: "",
    text2: "",
    text3: ""
  },
  leftContentAnimation: "",
  sliderDelay: 3000,
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736513127.dummy_1400x1020_000000_a5f7ca.png",
  items: [
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”",
      text2: "Coriss Ambady",
      text3: "Financial Analyst"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”",
      text2: "Cory Zamora",
      text3: "Marketing Specialist"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur.”",
      text2: "Nikolas Brooten",
      text3: "Sales Manager"
    }
  ]
}
export default TestimonialsV19;