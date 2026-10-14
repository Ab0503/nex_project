import React from 'react'
import { object, string } from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';
import withData from '@nex-core-ui/HOC/withData';

const TestimonialsV17 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div>
      <section className={`overflow-hidden nx-bg-primary-light ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="flex flex-wrap mx-[15px] lg:mx-[20px] md:mx-[15px] xl:mx-0 items-center">
          <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:ml-[8.33333333%] sm:!hidden md:!hidden xl:!flex lg:!flex !relative !self-end">
            <div className={`shape rounded-full nx-bg-primary rellax w-[12.5rem] h-[12.5rem] hidden xl:block lg:block z-[1] absolute ${get(tailwindClasses, 'shape')}`} data-rellax-speed="1" style={{ top: "10rem", left: "3rem", ...get(style, 'shape') }}></div>
            <figure className="relative z-[2]">
              <NexAnimation type={get(props, 'imageAnimation', '')}>
                <NexImage className={`!relative w-full max-w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")} />
              </NexAnimation>
            </figure>
          </div>
          <div className="lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:ml-[8.33333333%]">
            <NexAnimation type={get(props, 'contentAnimation', '')}>
            <div className="relative z-10">
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
              }} spaceBetween={30} autoplay={{
                delay:3000
              }} freeMode={true} pagination={{ clickable: true, }} modules={[Autoplay,FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                <div className="inline-flex">
                  {
                    Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) =>
                      <SwiperSlide>
                        <blockquote className="relative p-0 border-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          {
                            get(item, 'text1', "").length != 0 &&
                            <p className={`text-[1.4rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</p>
                          }
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              {
                                get(item, 'text2', "").length != 0 &&
                                <h5 className={`nx-text-primary mb-1 text-[1.3rem] leading-[1.5] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</h5>
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
            </NexAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
TestimonialsV17.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
TestimonialsV17.defaultProps = {
  style: {
    container: {},
    shape: {},
    image: {},
    text1: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    shape: "",
    image: "",
    text1: "",
    text2: "",
    text3: ""
  },
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736496259.testimonial - 17.png",
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
  ],
  imageAnimation: "",
  contentAnimation: ""
}
export default withData(TestimonialsV17);