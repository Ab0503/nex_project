import React from 'react'
import { object, string } from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';
import withData from '@nex-core-ui/HOC/withData';

const TestimonialsV15 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="flex flex-wrap mx-[15px] !mb-3">
        <div className="md:w-10/12 lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
          {
            get(props, 'title', "").length != 0 &&
            <h2 className={`nx-section-heading-font text-[2.1rem] font-bold xl:text-[2.2rem] leading-[1.3] mb-3 !text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
          }
          {
            get(props, 'subTitle', "").length != 0 &&
            <p className={`lead text-[0.9rem] font-medium leading-[1.65] !text-center mb-6 md:!px-24 lg:px-0 max-w-2xl mx-auto ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
          }
        </div>
      </div>
      <div className="relative">
        <NexAnimation type={get(props, 'boxAnimation', '')}>
        <div className={`max-sm:hidden bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50 ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{ top: "-1.5rem", left: "1.7rem", ...get(style, 'shape1') }}></div>
        <div className={`max-sm:hidden rounded-full nx-bg-primary-light rellax !w-[8rem] !h-[8rem] absolute z-[1] ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="1" style={{ bottom: "0.5rem", right: "2.7rem", ...get(style, 'shape2') }}></div>
        <div className="swiper-container dots-closer !mb-6 !relative !z-10" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
          <div className="swiper relative z-30">
            <div className="max-sm:mx-6 xl:mx-20 lg:mx-14 max-lg:mx-12">
              <Swiper breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },

                1440: {
                  slidesPerView: 3,
                },
              }}
                autoplay={{
                  delay: `${get(props, 'sliderDelay')}`,
                }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination,Autoplay]} style={{ paddingBottom: "50px" }}>
                <div className="inline-flex">
                  {
                    Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item) =>
                      <SwiperSlide>
                        <div className={`rounded-lg shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[1rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              {
                                get(item, 'text1', "").length != 0 &&
                                <p className={`text-[1.1rem] mb-3 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item, "text1")}</p>
                              }
                              <div className="flex items-center text-left">
                                {
                                  get(item, 'imagePath', "").length != 0 &&
                                  <NexImage className={`!relative !rounded-full !w-[3.5rem] !h-[3.5rem] ${get(tailwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} src={get(item, "imagePath")} />
                                }
                                <div className="info pl-4">
                                  {
                                    get(item, 'text2', "").length != 0 &&
                                    <h5 className={`mb-1 text-[1.1rem] font-bold leading-[1.5] nx-text-primary ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item, "text2")}</h5>
                                  }
                                  {
                                    get(item, 'text3', "").length != 0 &&
                                    <p className={`mb-0 text-[1.02rem] ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(item, "text3")}</p>
                                  }
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </SwiperSlide>
                    )}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        </NexAnimation>
      </div>
    </section>
  )
}
TestimonialsV15.propTypes = {
  style: object,
  tailwindClasses: object,
  title: string,
  subTitle: string,
}
TestimonialsV15.defaultProps = {
  style: {
    container: {},
    shape1: {},
    shape2: {},
    title: {},
    subTitle: {},
    box: {},
    text1: {},
    image: {},
    text2: {},
    text3: {}
  },
  tailwindClasses: {
    container: "",
    shape1: "",
    shape2: "",
    title: "",
    subTitle: "",
    box: "",
    text1: "",
    image: "",
    text2: "",
    text3: "",
  },
  sliderDelay: 3000,
  title: "Happy Customers",
  subTitle: "Customer satisfaction is our major goal. See what our customers are saying about us.",
  items: [
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Coriss Ambady",
      text3: "Financial Analyst"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Cory Zamora",
      text3: "Marketing Specialist"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Nikolas Brooten",
      text3: "Sales Manager"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Coriss Ambady",
      text3: "Financial Analyst"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Jackie Sanders",
      text3: "Investment Planner"
    },
    {
      text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
      text2: "Laura Widerski",
      text3: "Sales Specialist"
    }
  ],
  boxAnimation: ''
}
export default withData(TestimonialsV15);