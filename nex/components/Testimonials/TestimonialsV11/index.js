import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const TestimonialsV11 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
    <section id="snippet-1" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !relative xl:px-[35px] lg:px-[20px] mt-[50px]">
            <div className="flex flex-wrap mx-[15px] xl:mx-[12.5px] lg:mx-[12.5px] md:mx-[12.5px] mt-[-25px]">
              
              <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                <div className={`nx-bg-primary-light rounded-lg ${get(tailwindClasses, 'card1')}`} style={get(style, 'card1')}>
                  <NexAnimation  type={get(props, 'box1ContentAnimation', '')}>
                  <div className="card-body flex-[1_1_auto] p-[30px]">
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    {
                        get(props, 'card1Text1',"").length != 0 &&
                        <p className={`text-[1.01rem] text-gray-50 mb-4 ${get(tailwindClasses, 'card1Text1')}`} style={get(style, 'card1Text1')}>{get(props,"card1Text1")}</p>
                    }
                        <div className="flex items-center text-left">
                        <div className="info p-0">
                        {
                            get(props, 'card1Text2',"").length != 0 &&
                            <h5 className={`nx-text-primary mb-1 text-[1.2rem] leading-[1.4] ${get(tailwindClasses, 'card1Text2')}`} style={get(style, 'card1Text2')}>{get(props,"card1Text2")}</h5>
                        }
                        {
                            get(props, 'card1Text3',"").length != 0 &&
                            <p className={`mb-0 text-[1.06rem] ${get(tailwindClasses, 'card1Text3')}`} style={get(style, 'card1Text3')}>{get(props,"card1Text3")}</p>
                        }
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  </NexAnimation>
                </div>
              </div>

              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                <div className={`nx-bg-primary-light rounded-lg ${get(tailwindClasses, 'card2')}`} style={get(style, 'card2')}>
                <NexAnimation  type={get(props, 'box2ContentAnimation', '')}>
                  <div className="card-body flex-[1_1_auto] p-[30px]">
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    {
                        get(props, 'card2Text1',"").length != 0 &&
                        <p className={`text-[1.01rem] text-gray-50 mb-4 ${get(tailwindClasses, 'card2Text1')}`} style={get(style, 'card2Text1')}>{get(props,"card2Text1")}</p>
                    }
                        <div className="flex items-center text-left">
                        <div className="info p-0">
                        {
                            get(props, 'card2Text2',"").length != 0 &&
                            <h5 className={`nx-text-primary mb-1 text-[1.2rem] leading-[1.4] ${get(tailwindClasses, 'card2Text2')}`} style={get(style, 'card2Text2')}>{get(props,"card2Text2")}</h5>
                        }
                        {
                            get(props, 'card2Text3',"").length != 0 &&
                            <p className={`mb-0 text-[1.06rem] ${get(tailwindClasses, 'card2Text3')}`} style={get(style, 'card2Text3')}>{get(props,"card2Text3")}</p>
                        }
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </NexAnimation>
                </div>
              </div>

              <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[8.33333333%] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                <div className={`nx-bg-primary-light rounded-lg ${get(tailwindClasses, 'card3')}`} style={get(style, 'card3')}>
                <NexAnimation  type={get(props, 'box1ContentAnimation', '')}>
                  <div className="card-body flex-[1_1_auto] p-[30px]">
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    {
                        get(props, 'card3Text1',"").length != 0 &&
                        <p className={`text-[1.01rem] text-gray-50 mb-4 ${get(tailwindClasses, 'card3Text1')}`} style={get(style, 'card3Text1')}>{get(props,"card3Text1")}</p>
                    }
                        <div className="flex items-center text-left">
                        <div className="info p-0">
                        {
                            get(props, 'card3Text2',"").length != 0 &&
                            <h5 className={`nx-text-primary mb-1 text-[1.2rem] leading-[1.4] ${get(tailwindClasses, 'card3Text2')}`} style={get(style, 'card3Text2')}>{get(props,"card3Text2")}</h5>
                        }
                        {
                            get(props, 'card3Text3',"").length != 0 &&
                            <p className={`mb-0 text-[1.06rem] ${get(tailwindClasses, 'card3Text3')}`} style={get(style, 'card3Text3')}>{get(props,"card3Text3")}</p>
                        }
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </NexAnimation>
                </div>
              </div>

              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                <div className={`nx-bg-primary-light rounded-lg ${get(tailwindClasses, 'card4')}`} style={get(style, 'card4')}>
                <NexAnimation  type={get(props, 'box1ContentAnimation', '')}>
                  <div className="card-body flex-[1_1_auto] p-[30px]">
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    {
                        get(props, 'card4Text1',"").length != 0 &&
                        <p className={`text-[1.01rem] text-gray-50 mb-4 ${get(tailwindClasses, 'card4Text1')}`} style={get(style, 'card4Text1')}>{get(props,"card4Text1")}</p>
                    }
                        <div className="flex items-center text-left">
                        <div className="info p-0">
                        {
                            get(props, 'card4Text2',"").length != 0 &&
                            <h5 className={`nx-text-primary mb-1 text-[1.2rem] leading-[1.4] ${get(tailwindClasses, 'card4Text2')}`} style={get(style, 'card4Text2')}>{get(props,"card4Text2")}</h5>
                        }
                        {
                            get(props, 'card4Text3',"").length != 0 &&
                            <p className={`mb-0 text-[1.06rem] ${get(tailwindClasses, 'card4Text3')}`} style={get(style, 'card4Text3')}>{get(props,"card4Text3")}</p>
                        }
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </NexAnimation>
                </div>
              </div>

            </div>
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
          <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[1.9rem] font-semibold xl:text-[2.4rem] leading-[1.3] mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h2>
          }
          {
            get(props, 'subTitle',"").length != 0 &&
            <p className={`lead text-[1.4rem] leading-[1.6] font-medium mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
          }
          {
            get(props, 'description',"").length != 0 &&
            <p className={`text-[1.09rem] text-gray-50 mb-8 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,"description")}</p>
          }
          {
            get(props, 'ctaText',"").length != 0 &&
            <button className={`p-3 text-gray-50 nx-btn-primary nx-btn-primary:hover focus:shadow-[rgba(82,92,108,1)] active:text-gray-50 active:bg-[#343f52] active:border-[#343f52] disabled:text-gray-50 disabled:bg-[#343f52] disabled:border-[#343f52] rounded-full mt-3 hover:-translate-y-5 hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'ctaText')}`} style={get(style, 'ctaText')}><PrimaryLink href={get(props,"ctaLink")}>{get(props,"ctaText")}</PrimaryLink>
            </button>
          }
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
TestimonialsV11.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
TestimonialsV11.defaultProps = {
    style: {
        container: {},
        card1: {},
        card1Text1: {},
        card1Text2: {},
        card1Text3: {},
        card2: {},
        card2Text1: {},
        card2Text2: {},
        card2Text3: {},
        card3: {},
        card3Text1: {},
        card3Text2: {},
        card3Text3: {},
        card4: {},
        card4Text1: {},
        card4Text2: {},
        card4Text3: {},
        title: {},
        subTitle: {},
        description: {},
        ctaText: {}
    },
    tailwindClasses: {
        container: "",
        card1: "",
        card1Text1: "",
        card1Text2: "",
        card1Text3: "",
        card2: "",
        card2Text1: "",
        card2Text2: "",
        card2Text3: "",
        card3: "",
        card3Text1: "",
        card3Text2: "",
        card3Text3: "",
        card4: "",
        card4Text1: "",
        card4Text2: "",
        card4Text3: "",
        title: "",
        subTitle: "",
        description: "",
        ctaText: ""
    },
    box1ContentAnimation:"",
    box2ContentAnimation:"",
    box3ContentAnimation:"",
    box4ContentAnimation:"",
    TextContentAnimation:"",
    card1Text1: "“Cum sociis natoque penatibus et magnis dis parturient montes.”",
    card1Text2: "Coriss Ambady",
    card1Text3: "Financial Analyst",
    card2Text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.”",
    card2Text2: "Cory Zamora",
    card2Text3: "Marketing Specialist",
    card3Text1: "“Donec id elit non porta gravida at eget metus. Duis mollis est commodo luctus, nisi erat porttitor.”",
    card3Text2: "Barclay Widerski",
    card3Text3: "Sales Specialist",
    card4Text1: "“Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque ornare.”",
    card4Text2: "Jackie Sanders",
    card4Text3: "nvestment Planner",
    title: "Our Community",
    subTitle: "Customer satisfaction is our major goal. See what our customers are saying about us.",
    description: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper.",
    ctaText: "All Testimonials",
    ctaLink: "#"
}
export default TestimonialsV11;