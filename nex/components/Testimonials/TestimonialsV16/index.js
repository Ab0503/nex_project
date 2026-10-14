import React from 'react'
import { object, string } from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import CountUp from 'react-countup';

const TestimonialsV16 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full !relative">
            <div className={`max-sm:hidden bg-dot primary rellax !w-[8rem] !h-[8rem] absolute opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] ${get(tailwindClasses, 'shape')}`} data-rellax-speed="1" style={{top: "-1rem", left: "-1rem", zIndex: "0", ...get(style, 'shape')}}></div>
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
                <figure className="rounded-[0.4rem] xl:mt-10 lg:mt-10 md:mt-10 !relative">
                {
                    get(props, 'imagePath',"").length != 0 &&
                    <NexImage className={`!relative rounded-lg ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} src={get(props, "imagePath")}/>
                }
                </figure>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] xl:px-[15px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                  <div className="w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                    <figure className="rounded-[0.4rem]">
                    {
                        get(props, 'imagePath1',"").length != 0 &&
                        <NexImage className={`!relative rounded-lg ${get(tailwindClasses, 'imagePath1')}`} style={get(style, 'imagePath1')} src={get(props, "imagePath1")}/>
                    }
                    </figure>
                  </div>
                  <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
                    <div className={`nx-bg-primary-light !text-center rounded-lg`}>
                      <div className="py-12">
                        {
                            get(props, 'boxText1',"").length != 0 &&
                            <h3 className={`!whitespace-nowrap xl:text-[2.2rem] font-bold text-[2.1rem] tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'boxText1')}`} style={get(style, 'boxText1')}><CountUp end={get(props, "boxText1")} enableScrollSpy/>+</h3>
                        }
                        {
                            get(props, 'boxText2',"").length != 0 &&
                            <p className={`mb-0 text-[1.2rem] font-medium ${get(tailwindClasses, 'boxText2')}`} style={get(style, 'boxText2')}>{get(props, "boxText2")}</p>
                        }
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[25px] max-w-full">
            <div className="swiper-container dots-closer !mb-6" data-margin="30" data-dots="true">
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
                                      delay:3000,
                                    }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[Autoplay,FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>           
                    <div className="inline-flex">
                    {
                    get(props, 'items', []).map((item) =>
                        <SwiperSlide>
                        <blockquote className="text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                        {
                            get(item, 'text1',"").length != 0 &&
                            <p className={`text-[1.4rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</p>
                        }
                        <div className="flex items-center justify-center !text-center">
                            <div className="info pl-0">
                            {
                                get(item, 'text2',"").length != 0 &&
                                <h5 className={`mb-1 text-[1.2rem] leading-[1.5] nx-text-primary ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</h5>
                            }
                            {
                                get(item, 'text3',"").length != 0 &&
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
    </section>
  )
}
TestimonialsV16.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  TestimonialsV16.defaultProps = {
    style: {
      container: {},
      shape: {},
      box: {},
      boxText1: {},
      boxText2: {},
      image: {},
      image1: {},
      text1: {},
      text2: {},
      text3: {}
    },
    tailwindClasses: {
      container: "",
      shape: "",
      box: "",
      boxText1: "",
      boxText2: "",
      image: "",
      image1: "",
      text1: "",
      text2: "",
      text3: "",
    },
    boxText1: 5000,
    boxText2: "Satisfied Customers",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    items:[
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
export default TestimonialsV16;