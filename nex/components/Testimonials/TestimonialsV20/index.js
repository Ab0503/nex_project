import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const TestimonialsV20 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-11" className={` ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] text-gray-50 text-center">
          <div className="xl:w-10/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-[4.5rem] xl:mb-[-1.5rem] lg:mb-[-1.5rem]">
            <div className={`bg-full bg-image rounded-lg bg-[center_center] bg-no-repeat relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:rounded-[0.4rem] before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)] bg-cover ${get(tailwindClasses, 'box')}`} style={{backgroundImage:`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat",...get(style, 'box')}}>
              <div className="p-9 xl:px-20">
                <div className="flex flex-wrap mx-0">
                  <div className="xxl:w-9/12 w-full flex-[0_0_auto] max-w-full !mx-auto">
                    <div className="swiper-container dots-light dots-closer mb-6 relative z-10" data-margin="30" data-dots="true">
                      <div className="swiper">
                        <div className="swiper-wrapper">
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
                                                                            }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                        {
                            get(props, 'items', []).map((item) =>
                            <SwiperSlide>
                            <div className="">
                                <span className="ratings inline-flex relative w-20 h-[1.1rem] text-[1.1rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five mt-5 mb-4"></span>
                                <blockquote className="border-0 text-[1rem] mb-2">
                                {
                                    get(item, 'text1',"").length != 0 &&
                                    <p className={`text-[1.4rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</p>
                                }
                                <div className="flex items-center justify-center !text-center">
                                    <div className="info pl-0">
                                    {
                                        get(item, 'text2',"").length != 0 &&
                                        <h5 className={`mb-1 text-[1.2rem] font-bold text-gray-50 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</h5>
                                    }
                                    {
                                        get(item, 'text3',"").length != 0 &&
                                        <p className={`mb-0 text-[1.1rem] ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item,"text3")}t</p>
                                    }
                                    </div>
                                </div>
                                </blockquote>
                            </div>
                            </SwiperSlide>
                        )}
                        </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}
TestimonialsV20.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
TestimonialsV20.defaultProps = {
  style: {
    container: {},
    box: {},
    text1: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    box: "",
    text1: "",
    text2: "",
    text3: ""
  },
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736587333.bg2.jpg",
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
export default TestimonialsV20;