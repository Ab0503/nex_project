import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import withData from "@nex-core-ui/HOC/withData";

const SwiperButtonPrevious = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};
const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};
const TestimonialV10 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    const swiper = useSwiper();

  return (
    <div>
        <div className={`bg-blue-200 w-full ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='flex items-center justify-center'>
                <div className="container mx-auto px-10">
                    <div className="flex max-sm:flex-col max-lg:flex-col gap-2 w-full">
                        {/* Left Content */}
                        <div className="lg:w-5/12 relative max-w-xl space-y-6 text-start max-sm:text-center mx-auto mt-20">
                            <div className="inline-flex gap-2">
                            {
                                get(props, 'icon',"").length != 0 &&
                                <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</span>
                            }
                            {
                                get(props, 'subTitle',"").length != 0 &&
                                <p className={`lg:text-sm md:text-xl max-sm:text-sm text-green-800 font-medium tracking-wide ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                            }
                            </div>
                            {
                                get(props, 'title',"").length != 0 &&
                                <h1 className={`xl:text-4xl lg:text-3xl md:text-3xl max-sm:text-3xl font-bold text-gray-800 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h1>
                            }
                            {
                                get(props, 'description',"").length != 0 &&
                                <p className={`text-gray-600 lg:text-lg md:text-md ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,"description")}</p>
                            }
                            {
                                get(props, 'button',"").length != 0 &&   
                                <a href="#" className={`inline-flex bg-orange-500 hover:bg-orange-600 text-gray-50 p-3 rounded-full font-medium items-center gap-2 ${get(tailwindClasses, 'button')}`} style={get(style, 'button')}>{get(props,"button")} 
                                {
                                    get(props, 'icon1',"").length != 0 &&
                                    <span className={`text-gray-50 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(props,"icon1"))}</span>
                                }
                                </a>
                            }
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-5/12 relative w-full max-sm:pt-6 mx-auto mt-20">
                            {
                                get(props, 'imagePath1',"").length != 0 &&
                                <NexImage src={get(props, 'imagePath1')} className={`!relative !w-96 !h-96 max-lg:left-8 xl:left-8 lg:left-8 max-sm:mx-auto max-md:w-72 max-lg:w-72 max-lg:h-72 max-sm:w-80 max-sm:h-80 bg-cover rounded-full max-lg:ml-52 ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')}/>
                            }
                <Swiper className='absolute -top-64' breakpoints={{
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
                                                                            }}  spaceBetween={30} style={{ paddingBottom: "50px" }}>
                       
                  {props.items.map((item, index) => (
                    <SwiperSlide>
                      <div
                        className={`bg-gray-50 shadow-xl rounded-2xl p-4 max-lg:left-28 max-sm:left-4 xl:w-56 xl:h-52 lg:w-48 max-lg:w-44 max-sm:w-60 ${get(tailwindClasses, 'box1')}`}
                        style={get(style, 'box1')}
                      >
                        {/* User Image */}
                        <div className="flex items-center justify-center -mt-10">
                          {get(item, 'imagePath2', '').length !== 0 && (
                            <NexImage
                              className={`!relative !w-16 !h-16 rounded-full ring-4 ring-blue-200 ${get(tailwindClasses, 'image2')}`}
                              style={get(style, 'image2')}
                              src={get(item, 'imagePath2')}
                            />
                          )}
                        </div>
                        {/* Stars */}
                        <div
                          className={`flex mt-4 bg-orange-500 rounded-full w-28 h-5 mx-auto justify-center mb-4 ${get(tailwindClasses, 'icon2Box')}`}
                          style={get(style, 'icon2Box')}
                        >
                          {get(item, 'icon2', '').length !== 0 && (
                            <div className="flex gap-1 p-1">
                              <span
                                className={`text-gray-50 ${get(tailwindClasses, 'icon2')}`}
                                style={get(style, 'icon2')}
                              >
                                {parse(get(item, 'icon2'))}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* Testimonial White box Text */}
                        {get(item, 'box1Text1', '').length !== 0 && (
                          <p
                            className={`text-gray-700 text-center xl:text-md lg:text-md md:text-xs max-sm:text-sm mb-4 ${get(tailwindClasses, 'box1Text1')}`}
                            style={get(style, 'box1Text1')}
                          >
                            {get(item, 'box1Text1')}
                          </p>
                        )}
                        {/* User Details */}
                        {(get(item, 'box2Text1', '').length !== 0 || get(item, 'box2Text2', '').length !== 0) && (
                          <div
                            className={`absolute inline-flex gap-2 text-center rounded-md bg-teal-700 text-gray-50 p-2 lg:w-44 md:w-40 max-sm:w-44 md:h-10 max-sm:h-8 max-md:left-16 lg:left-20 md:left-20 max-sm:left-16 xl:mt-4 lg:mt-4 sm:mt-8 ${get(tailwindClasses, 'box2')}`}
                            style={get(style, 'box2')}
                          >
                            <h3
                              className={`font-semibold lg:text-sm md:text-xs max-sm:text-xs ${get(tailwindClasses, 'box2Text1')}`}
                              style={get(style, 'box2Text1')}
                            >
                              {get(item, 'box2Text1')}
                            </h3>
                            <p
                              className={`lg:text-sm md:text-xs max-sm:text-xs ${get(tailwindClasses, 'box2Text2')}`}
                              style={get(style, 'box2Text2')}
                            >
                              {get(item, 'box2Text2')}
                            </p>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="w-full mt-6 max-sm:mt-44 xl:ml-56 max-sm:ml-20 max-lg:ml-64">
                            {
                                get(props, 'icon3',"").length != 0 &&
                                <SwiperButtonPrevious>
                                <span className={`flex bg-gray-200 hover:bg-gray-300 p-3 rounded-full text-gray-600 ${get(tailwindClasses, 'icon3')}`} style={get(style, 'icon3')}>
                                    <span>{parse(get(props,"icon3"))}</span>
                                </span>
                                </SwiperButtonPrevious>
                            }
                            {
                                get(props, 'icon4',"").length != 0 &&  
                                <SwiperButtonNext>  
                                <span className={`flex bg-gray-200 hover:bg-gray-300 p-3 rounded-full text-gray-600 ml-4 ${get(tailwindClasses, 'icon3')}`} style={get(style, 'icon3')}>
                                    <span>{parse(get(props,"icon4"))}</span>
                                </span>
                                </SwiperButtonNext>
                            }
                            </div>
                  </Swiper>
                
                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

TestimonialV10.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
TestimonialV10.defaultProps = {
    style: {
        container: {},
        icon: {},
        subTitle: {},
        title: {},
        description: {},
        button: {},
        icon1: {},
        box1: {},
        image1: {},
        icon2: {},
        icon2Box: {},
        box1Text1: {},
        image2: {},
        box2: {},
        box2Text1: {},
        box2Text2: {},
        icon3:{},
    },
    tailwindClasses: {
        container: "",
        icon: "",
        subTitle: "",
        title: "",
        description: "",
        button: "",
        icon1: "",
        box1: "",
        image1: "",
        icon2: "",
        icon2Box: "",
        box1Text1: "",
        image2: "",
        box2: "",
        box2Text1: "",
        box2Text2: "",
        icon3:""
    },
    items: [
        {
            imagePath2: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>`,
            box1Text1: "Volunteering at the food bank has been one of the most rewarding experiences of my life. Seeing the smiles on the faces...",
            box2Text1: "David Copper,",
            box2Text2: "New York"
        },
        {
            imagePath2: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>`,
            box1Text1: "Volunteering at the food bank has been one of the most rewarding experiences of my life. Seeing the smiles on the faces...",
            box2Text1: "David Copper,",
            box2Text2: "New York"
        },
        {
            imagePath2: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>`,
            box1Text1: "Volunteering at the food bank has been one of the most rewarding experiences of my life. Seeing the smiles on the faces...",
            box2Text1: "David Copper,",
            box2Text2: "New York"
        }
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-400 bg-orange-500 rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>`,
    subTitle:"testimonial",
    title: "Success stories, to know about our charity",
    description: "Through organizing charity events, I’ve seen firsthand how small communities can come together to create change. Each fundraiser brings in not just donations, but...",
    button: "All Reviews",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`,
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>`,
    icon4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>`
}

export default withData(TestimonialV10);