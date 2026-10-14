import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const ProcessV8 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});
    const items1 = get(props, 'items1', {});

  return (
    <div>
    <section id="snippet-8" className={`overflow-hidden nx-bg-primary-light ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[15px] !text-center">
          <div className="md:w-10/12 lg:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
            {
                get(props, 'icon1',"").length != 0 &&
                <span className={`!h-[5rem] rotate-12 text-yellow-400 absolute hidden xl:block lg:block ${get(tailwindClasses, 'icon1')}`} data-delay="1800" style={{top: "-40%", left: "-5%", ...get(style, 'icon1')}}>{parse(get(props,"icon1"))}</span>
            }
            {
                get(props, 'icon2',"").length != 0 &&
                <span className={`!w-[5rem] -rotate-12 text-yellow-400 absolute hidden xl:block lg:block ${get(tailwindClasses, 'icon2')}`} data-delay="1800" style={{top: "10%", right: "-15%", ...get(style, 'icon2')}}>{parse(get(props,"icon2"))}</span>
            }
            {
                get(props, 'icon3',"").length != 0 &&
                <span className={`!w-[5rem] text-purple-500 absolute hidden xl:block lg:block ${get(tailwindClasses, 'icon3')}`} data-delay="1800" style={{bottom: "-60%", right: "10%", ...get(style, 'icon3')}}>{parse(get(props,"icon3"))}</span>
            }
            {
                get(props, 'subTitle',"").length != 0 &&
                <h2 className={`nx-text-primary text-[1.08rem] tracking-[0.02rem] uppercase mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props,"subTitle")}</h2>
            }
            {
                get(props, 'title',"").length != 0 &&
                <h3 className={`nx-section-heading-font text-[2.3rem] font-bold leading-[1.2] xl:text-[2.4rem] mb-8 xl:px-20 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}
                    <span className={`nx-section-heading-font nx-text-primary bg-gradient-to-t from-purple-500 to-teal-400 bg-clip-text text-transparent ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,"title1")}</span>{get(props,"title2")}
                </h3>
            }
          </div>
        </div>
        <div className="flex flex-wrap mx-[15px]">
          <div className="xxl:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto">
            <div className="flex flex-wrap mx-[15px] mt-[-50px] xl:mt-0 lg:mt-0 !text-center items-center">
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-[-2.5rem] lg:!mb-0 xl:!mb-0 mt-[50px] xl:mt-0 lg:mt-0">
                <NexAnimation  type={get(props, 'imageContentAnimation', '')}>
                <figure className="mx-auto">
                {
                    get(props, 'imagePath',"").length != 0 &&
                    <NexImage className={`!relative !w-96 !h-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props,"imagePath")}/>
                }
                </figure>
                </NexAnimation>
              </div>
              <div className="w-full xl:hidden lg:hidden px-[15px] mt-[50px] xl:mt-0 lg:mt-0"></div>
              
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full lg:!-order-1 xl:!-order-1 mt-[50px] xl:mt-0 lg:mt-0">
                {
                    get(props, 'items', []).map((item) => 
                    <NexAnimation  type={get(props, 'leftContentAnimation', '')}>
                    <div className="mb-8">
                    {
                        get(item, 'section1number',"").length != 0 &&
                        <span className={`nx-text-primary xl:text-[3.4rem] text-[3.2rem] leading-none mb-3 font-medium bg-gradient-to-t from-purple-500 to-teal-400 bg-clip-text text-transparent ${get(tailwindClasses, 'section1number')}`} style={get(style, 'section1number')}>{get(item,"section1number")}</span>
                    }
                    {
                        get(item, 'section1Text1',"").length != 0 &&
                        <h4 className={`text-[1.5rem] font-bold ${get(tailwindClasses, 'section1Text1')}`} style={get(style, 'section1Text1')}>{get(item,"section1Text1")}</h4>
                    }
                    {
                        get(item, 'section1Text2',"").length != 0 &&
                        <p className={`text-[1.1rem] mb-0 xl:px-7 ${get(tailwindClasses, 'section1Text2')}`} style={get(style, 'section1Text2')}>{get(item,"section1Text2")}</p>
                    }
                    </div>
                    </NexAnimation>
                )}
              </div>

              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px] xl:mt-0 lg:mt-0">
                {
                    get(props, 'items1', []).map((item) => 
                    <NexAnimation  type={get(props, 'rightContentAnimation', '')}>
                    <div className="mb-8">
                    {
                        get(item, 'section2number',"").length != 0 &&
                        <span className={`nx-text-primary xl:text-[3.4rem] text-[3.2rem] leading-none mb-3 font-medium bg-gradient-to-t from-purple-500 to-teal-400 bg-clip-text text-transparent ${get(tailwindClasses, 'section2number')}`} style={get(style, 'section2number')}>{get(item,"section2number")}</span>
                    }
                    {
                        get(item, 'section2Text1',"").length != 0 &&
                        <h4 className={`text-[1.5rem] font-bold ${get(tailwindClasses, 'section2Text1')}`} style={get(style, 'section2Text1')}>{get(item,"section2Text1")}</h4>
                    }
                    {
                        get(item, 'section2Text2',"").length != 0 &&
                        <p className={`text-[1.1rem] mb-0 xl:px-7 ${get(tailwindClasses, 'section2Text2')}`} style={get(style, 'section2Text2')}>{get(item,"section2Text2")}</p>
                    }
                    </div>
                    </NexAnimation>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
ProcessV8.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
  }
  ProcessV8.defaultProps = {
    style: {
      container: {},
      icon1: {},
      icon2: {},
      icon3: {},
      subTitle: {},
      title: {},
      title1: {},
      image: {},
      section1number: {},
      section1Text1: {},
      section1Text2: {},
      section2number: {},
      section2Text1: {},
      section2Text2: {}
    },
    tailwindClasses: {
        container: "",
        icon1: "",
        icon2: "",
        icon3: "",
        subTitle: "",
        title: "",
        title1: "",
        image: "",
        section1number: "",
        section1Text1: "",
        section1Text2: "",
        section2number: "",
        section2Text1: "",
        section2Text2: ""
    },
    imageContentAnimation: "",
    leftContentAnimation: "",
    rightContentAnimation: "",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>`,
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>`,
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>`,
    subTitle: "How It Works",
    title: "Download the app, create your profile and",
    title1: " voilà",
    title2: ", you're all set!",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736330913.dummy_746x1364_000000_9af9f5.png",
    items:[
        {
            section1number: "01",
            section1Text1: "Download Application",
            section1Text2: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus."
        },
        {
            section1number: "02",
            section1Text1: "Quick Registration",
            section1Text2: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus."
        }
    ],
    items1:[
        {
            section2number: "03",
            section2Text1: "Track Your Spending",
            section2Text2: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus."
        },
        {
            section2number: "04",
            section2Text1: "Have Total Control",
            section2Text2: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus."
        },
    ]
}
export default ProcessV8;