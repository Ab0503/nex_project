import React from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get';
import parse from 'html-react-parser';
import CountUp from 'react-countup';

const TestimonialsV21 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
  return (
    <div>
    <section id="snippet-13" className={`bg-red-300 border-b-[rgba(164,174,198,0.2)] border-b border-solid ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-[4.5rem] xl:pt-16 lg:pt-24 md:pt-24">
        <div className={`bg-full bg-image pb-24 bg-cover bg-[center_center] relative z-0 xxl:rounded-[.8rem] rounded-0 ${get(tailwindClasses, 'box')}`} style={{backgroundImage:`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat",...get(style, 'box')}}>
          <div className="card-body py-[4.5rem] px-0">
              <div className={`flex flex-wrap mx-[15px] xl:mx-[35px] lg:mx-[20px] mt-[-50px] xl:mt-0 lg:mt-0 ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:mt-0 lg:mt-0 max-w-full text-center lg:text-left xl:text-left">
                {
                  get(props, 'title',"").length !== 0 &&
                  <h3 className={`xl:text-[2.2rem] text-[1.7rem] font-bold leading-[1.3] tracking-[normal] mb-3 xxl:pr-20 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
                }
                {
                  get(props, 'subTitle',"").length !== 0 &&
                  <p className={`lead text-[1.3rem] leading-[1.6] font-medium mb-0 xxl:pr-10 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</p>
                }
                </div>
                <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:!mt-2 lg:!mt-2 max-w-full">
                  <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    {
                      get(props, 'icon1',"").length !== 0 &&
                      <span className={`inline-flex w-[2.2rem] h-[2.2rem] solid-duo text-grape-fuchsia mb-3 m-[0_auto] ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(props,"icon1"))}</span>
                    }
                    {
                      get(props, 'text1',"").length !== 0 &&
                      <h3 className={`xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}><CountUp end={get(props,"text1")} enableScrollSpy/>+</h3>
                    }
                    {
                      get(props, 'text2',"").length !== 0 &&
                      <p className={`mb-0 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props,"text2")}</p>
                    }
                      </div>
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    {
                      get(props, 'icon2',"").length !== 0 &&
                      <span className={`inline-flex w-[2.2rem] h-[2.2rem] solid-duo text-grape-fuchsia !mb-3 m-[0_auto] ${get(tailwindClasses, 'icon2')}`} style={get(style, 'icon2')}>{parse(get(props,"icon2"))}</span>
                    }
                    {
                      get(props, 'text3',"").length !== 0 &&
                      <h3 className={`xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}><CountUp end={get(props,"text3")} enableScrollSpy/>x</h3>
                    }
                    {
                      get(props, 'text4',"").length !== 0 &&
                      <p className={`mb-0 ${get(tailwindClasses, 'text4')}`} style={get(style, 'text4')}>{get(props,"text4")}</p>
                    }
                    </div>
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    {
                      get(props, 'icon3',"").length !== 0 &&
                      <span className={`inline-flex w-[2.2rem] h-[2.2rem]  solid-duo text-grape-fuchsia !mb-3 m-[0_auto] ${get(tailwindClasses, 'icon3')}`} style={get(style, 'icon3')}>{parse(get(props,"icon3"))}</span>
                    }
                    {
                      get(props, 'text5',"").length !== 0 &&
                      <h3 className={`xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 ${get(tailwindClasses, 'text5')}`} style={get(style, 'text5')}><CountUp end={get(props,"text5")} enableScrollSpy/>%</h3>
                    }
                    {
                      get(props, 'text6',"").length !== 0 &&
                      <p className={`mb-0 ${get(tailwindClasses, 'text6')}`} style={get(style, 'text6')}>{get(props,"text6")}</p>
                    }
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="item grid mb-20">
          <div className="absolute flex flex-wrap mx-[15px] max-sm:my-[2px] isotope mt-[-10rem]" style={{position: "relative"}}>
          {
            get(props, 'items', []).map((item) =>  
            <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
              <div className={`bg-gray-300 shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-lg card-border-bottom  !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px] ${get(tailwindClasses, 'box1')}`} style={get(style, 'box1')}>
                <div className="flex-[1_1_auto] p-[45px]">
                  <blockquote className="text-[.85rem] leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon mb-0 relative p-0 border-0">
                  {
                      get(item, 'box1Text1',"").length !== 0 &&
                      <p className={`text-[1.1rem] ${get(tailwindClasses, 'box1Text1')}`} style={get(style, 'box1Text1')}>{get(item,"box1Text1")}</p>
                  }
                    <div className="flex items-center text-left">
                      <div className="info pl-0">
                      {
                        get(item, 'box1ext2',"").length !== 0 &&
                        <h5 className={`mb-1 text-[1.1rem] leading-[1.5] ${get(tailwindClasses, 'box1Text2')}`} style={get(style, 'box1Text2')}>{get(item,"box1Text2")}</h5>
                      }
                      {
                        get(item, 'box1Text3',"").length !== 0 &&
                        <p className={`mb-0 text-[1.05rem] ${get(tailwindClasses, 'box1Text3')}`} style={get(style, 'box1Text3')}>{get(item,"box1Text3")}</p>
                      }
                        </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
TestimonialsV21.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  TestimonialsV21.defaultProps = {
    style: {
      container: {},
      box: {},
      contentcontainer: {},
      title: {},
      subTitle: {},
      icon1: {},
      text1: {},
      text2: {},
      icon2: {},
      text3: {},
      text4: {},
      icon3: {},
      text5: {},
      text6: {},
      box1: {},
      box1Text1: {},
      box1Text2: {},
      box1Text3: {}
    },
    tailwindClasses: {
      container: "",
      box: "",
      contentcontainer: "",
      title: "",
      subTitle: "",
      icon1: "",
      text1: "",
      text2: "",
      icon2: "",
      text3: "",
      text4: "",
      icon3: "",
      text5: "",
      text6: "",
      box1: "",
      box1Text1: "",
      box1Text2: "",
      box1Text3: ""
    },
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736587333.bg2.jpg",
    title: "We are proud of our works",
    subTitle: "We bring solutions to make life easier for our customers.",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>`,
    text1: 1000,
    text2: "Completed Projects",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>`,
    text3: 4,
    text4: "Revenue Growth",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>`,
    text5: 99.7,
    text6: "Customer Satisfaction",
    items:[
      {
        box1Text1: "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.”",
        box1Text2: "Coriss Ambady",
        box1Text3: "Financial Analyst"
      },
      {
        box1Text1: "“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.”",
        box1Text2: "Cory Zamora",
        box1Text3: "Marketing Specialist"
      },
      {
        box1Text1: "“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.”",
        box1Text2: "Nikolas Brooten",
        box1Text3: "Sales Manager"
      },
      {
        box1Text1: "“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.”",
        box1Text2: "Coriss Ambady",
        box1Text3: "Financial Analyst"
      }
    ]
}
export default TestimonialsV21;