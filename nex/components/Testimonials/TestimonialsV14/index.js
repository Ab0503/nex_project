import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';

const TestimonialsV14 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-4" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-30px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 xl:px-[35px] lg:px-[20px] mt-[30px]">
            <figure className="m-0 p-0">
            {
                get(props, 'imagePath',"").length != 0 &&
                <ImageOrVedio className={`rounded-lg !relative !w-full !h-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                    src={get(props,"imagePath", "")}  vedioSrc={get(props,"vedioPath", "")}
                />
            }
            </figure>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[30px]">
            <div className="swiper-container dots-closer !mb-6 relative z-10" data-margin="30" data-dots="true">
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
                                    }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                                    
                {
                    get(props, 'items', []).map((item) => 
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <blockquote className="text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                        {
                            get(item, 'text1',"").length != 0 &&
                            <p className={`text-[1.4rem] mb-4 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,"text1")}</p>
                        }
                        <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                            {
                                get(item, 'text2',"").length != 0 &&
                                <h5 className={`mb-2 text-[1.3rem] leading-[1.4] ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</h5>
                            }
                            {
                                get(item, 'text3',"").length != 0 &&
                                <p className={`mb-0 text-[1.2rem] ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item,"text3")}</p>
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
    </section>
    </div>
  )
}
TestimonialsV14.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
TestimonialsV14.defaultProps = {
    style: {
        container: {},
        image: {},
        text1: {},
        text2: {},
        text3: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        text1: "",
        text2: "",
        text3: ""
    },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297566.1200x800 - Blog Image.png",
    vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4",
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

export default TestimonialsV14;