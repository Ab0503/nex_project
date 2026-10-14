import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import NexImage from '@nex-core-ui/NexImage';

const TestimonialsV13 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    
  return (
    <div>
    <section id="snippet-3" className={`bg-gray-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex lg:flex-wrap mx-[15px] xl:mx-[35px] mt-[-50px]">
          <div className="xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] mt-[50px]">
            {
                get(props, 'title',"").length != 0 &&
                <h2 className={`text-[1.8rem] font-bold xl:text-[2.2rem] leading-[1.3] mt-10 mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
            }
            {
                get(props, 'subTitle',"").length != 0 &&
                <p className={`lead text-[1.4rem] leading-[1.6] mb-6 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
            }
            {
                get(props, 'ctaText',"").length != 0 &&
                <a href="#" className={`p-3 text-white bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-full hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}>{get(props,"ctaText")}</a>
            }
           </div>
          
          <div className="xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] mt-[50px]">
            <div className="!relative">
              <div className={`max-sm:hidden !rounded-full bg-[#fff8ee] rellax !w-[8rem] !h-[8rem] absolute ${get(tailwindClasses, 'shape1')}`} data-rellax-speed="1" style={{top: "-2.6rem", right: "-1.4rem", ...get(style, 'shape1')}}></div>
              <div className={`max-sm:hidden !rounded-full bg-line red rellax !w-[8rem] !h-[8rem] absolute opacity-50 ${get(tailwindClasses, 'shape2')}`} data-rellax-speed="1" style={{bottom: "-0.5rem", left: "-1.4rem", ...get(style, 'shape2')}}></div>
              <div className="swiper-container dots-closer !mb-6 relative z-10" data-margin="0" data-dots="true" data-items-xl="2" data-items-md="2" data-items-xs="1">
                <div className="container mx-auto">  
                    <Swiper breakpoints={{
                        320: {
                                slidesPerView: 1,
                            },
                        640: {
                                slidesPerView: 2,
                            },
                                    
                        1024: {
                                slidesPerView: 2,
                            },
                                    
                        1440: {
                                slidesPerView: 2,
                            },
                    }} spaceBetween={30} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} style={{ paddingBottom: "50px" }}>
                        
                    <div className="swiper-slide">
                    <div className="inline-flex">
                    {
                        get(props, 'items', []).map((item) =>
                        <SwiperSlide>
                            <div className={`bg-gray-200 rounded-lg`}>
                            <div className="flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                {
                                    get(item, 'cardText1',"").length != 0 &&
                                    <p className={`text-[1.1rem] mb-3 ${get(tailwindClasses, 'cardText1')}`} style={get(style, 'cardText1')}>{get(item,"cardText1")}</p>
                                }
                                <div className="flex items-center text-left">
                                {
                                    get(item, 'cardImage',"").length != 0 &&
                                    <NexImage className={`!relative rounded-full !w-[3.5rem] !h-[3.5rem] ${get(tailwindClasses, 'cardImage')}`} style={get(style, 'cardImage')} src={get(item,"cardImage")}/>
                                }
                                    <div className="info pl-4">
                                    {
                                        get(item, 'cardText2',"").length != 0 &&
                                        <h5 className={`mb-1 text-[1.2rem] leading-[1.5] ${get(tailwindClasses, 'cardText2')}`} style={get(style, 'cardText2')}>{get(item,"cardText2")}</h5>
                                    }
                                    {
                                        get(item, 'cardText3',"").length != 0 &&
                                        <p className={`mb-0 text-[1.06rem] ${get(tailwindClasses, 'cardText3')}`} style={get(style, 'cardText3')}>{get(item,"cardText3")}</p>
                                    }
                                    </div>
                                </div>
                                </blockquote>
                            </div>
                            </div>
                        </SwiperSlide>
                    )}
                    </div>
                    </div>
                    </Swiper>
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
TestimonialsV13.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
TestimonialsV13.defaultProps = {
    style: {
        container: {},
        shape1: {},
        shape2: {},
        title: {},
        subTitle: {},
        ctaText: {},
        card: {},
        cardText1: {},
        cardText2: {},
        cardText3: {},
        cardImage: {}
    },
    tailwindClasses: {
        container: "",
        shape1: "",
        shape2: "",
        title: "",
        subTitle: "",
        ctaText: "",
        card: "",
        cardText1: "",
        cardText2: "",
        cardText3: "",
        cardImage: ""
    },
    title: "Our Community",
    subTitle: "Customer satisfaction is our major goal. See what our clients are saying about our services.",
    ctaText: "All Testimonials",
    items: [
        {
            cardText1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis sed posuere.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735724965.teams.jpg",
            cardText2: "Coriss Ambady",
            cardText3: "Financial Analyst"
        },
        {
            cardText1: "“Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416342.t - 1.jpg",
            cardText2: "Cory Zamora",
            cardText3: "Marketing Specialist"
        },
        {
            cardText1: "“Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416356.t-2.jpg",
            cardText2: "Nikolas Brooten",
            cardText3: "Sales Manager"
        },
        {
            cardText1: "“Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus posuere consectetur.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416368.t - 3.jpg",
            cardText2: "Coriss Ambady",
            cardText3: "Financial Analyst",
        },
        {
            cardText1: "“Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416382.t-4.jpg",
            cardText2: "Jackie Sanders",
            cardText3: "Investment Planner"
        },
        {
            cardText1: "“Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.”",
            cardImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736416392.t-5.jpg",
            cardText2: "Laura Widerski",
            cardText3: "Sales Specialist"
        }
    ]

}
export default TestimonialsV13;