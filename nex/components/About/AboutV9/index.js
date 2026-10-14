import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import CountUp from 'react-countup';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV9 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const skills = {percentage:80};
  return (
    <div>
    <section id="snippet-9" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-20 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] xl:mx-[20px] lg:mx-[20px] md:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full xl:ml-[8.33333333%] lg:ml-[8.33333333%] xl:order-2 lg:order-2 relative mt-[50px]">
            <NexAnimation  type={get(props, 'ImageContentAnimation', '')}>
            <figure className="rounded-[0.4rem]">
            {
              get(props, 'imagePath',"").length != 0 &&
              <NexImage className={`!max-w-full !h-auto rounded-[0.4rem] !relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, "imagePath")}/>
            }
            </figure>
            </NexAnimation>
            {
              (get(props, 'box1Icon',"").length != 0 || get(props, 'box1Text1',"").length != 0 || get(props, 'box1Text2',"").length != 0) &&
              (<div className={`max-sm:hidden card shadow-[0_0.25rem_1.75rem_rgba(30,44,40,0.07)] bg-red-300 rounded-lg absolute xl:block lg:block md:block sm:hidden xsm:hidden ${get(tailwindClasses, 'box1')}`} style={{top: "15%", left: "-7%", ...get(style, 'box1')}}>
                <div className="card-body py-5 px-7">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      {
                        get(props, 'box1Icon',"").length != 0 &&
                        <span className={`nx-text-primary w-[3.2rem] h-[3.2rem] solid-duo text-grape-fuchsia ${get(tailwindClasses, 'box1Icon')}`} style={get(style, 'box1Icon')}>{parse(get(props, "box1Icon"))}</span>
                      }
                    </div>
                    <div>
                    {
                      get(props, 'box1Text1',"").length != 0 &&
                      <h3 className={`text-[1.45rem] counter leading-[1.4] font-bold mb-0 whitespace-nowrap ${get(tailwindClasses, 'box1Text1')}`} style={get(style, 'box1Text1')}><CountUp end={get(props, "box1Text1")} enableScrollSpy/>+</h3>
                    }
                    {
                      get(props, 'box1Text2',"").length != 0 &&
                      <p className={`text-[1.08rem] leading-normal mb-0 whitespace-nowrap ${get(tailwindClasses, 'box1Text2')}`} style={get(style, 'box1Text2')}>{get(props, "box1Text2")}</p>
                    }
                    </div>
                  </div>
                </div>
              </div>)
            }
            {
              (get(props, 'box2Text2',"").length != 0) && 
              (<div className={`max-sm:hidden card shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] bg-red-300 rounded-lg absolute text-center xl:block lg:block md:block sm:hidden xsm:hidden ${get(tailwindClasses, 'box2')}`} style={{bottom: "10%", left: "-10%", ...get(style, 'box2')}}>
                <div className="card-body p-6">
                  <div className="" key={skills.name}><span> </span>
                    <div className="w-64 bg-gray-200 rounded-full h-3">
                      <span> <div className="bg-pink-500 h-3 rounded-full" style={{ width: `${skills.percentage}%` }} /> </span>
                    </div>
                    <p className={`text-[2.8rem] mt-5`}><CountUp end={skills.percentage} enableScrollSpy/>%</p>
                  </div>
                  {
                    get(props, 'box2Text2',"").length != 0 &&
                    <h4 className={`text-[1.35rem] mb-0 ${get(tailwindClasses, 'box2Text2')}`} style={get(style, 'box2Text2')}>{get(props, "box2Text2")}</h4>
                  }
                  </div>
              </div>)
            }
          </div>
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
          <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
          {
            get(props, 'subTitle',"").length != 0 &&
            <h2 className={`nx-text-primary text-[1.05rem] tracking-[0.02rem] leading-[1.35] uppercase text-gradient gradient-1 mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
          }
          {
            get(props, 'title',"").length != 0 &&
            <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem] ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h3>
          }
          {
            get(props, 'description',"").length != 0 &&
            <p className={`mb-6 xl:text-[1.08rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description")}</p>
          }
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
            {
               get(props, 'items', []).map((item) =>
              <li className={`relative pl-6 mb-2`}>
                {
                  get(item, 'icon',"").length != 0 &&
                  <span className={`nx-text-primary absolute left-0 w-5 h-5 text-[0.8rem] leading-none tracking-[normal] text-center flex items-center justify-center bg-[#dce7f9] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, "icon"))}</span>
                }
                {
                  get(item, 'text',"").length != 0 &&
                  <h2 className={`text-[1.15rem] ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, "text")}</h2>
                }
                </li>
            )}
            </ul>
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
AboutV9.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  AboutV9.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image: {},
        box1: {},
        box1Icon: {},
        box1Text1: {},
        box1Text2: {},
        box2: {},
        box2Text2: {},
        subTitle: {},
        title: {},
        description: {},
        icon: {},
        text: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        box1: "",
        box1Icon: "",
        box1Text1: "",
        box1Text2: "",
        box2: "",
        box2Text2: "",
        subTitle: "",
        title: "",
        description: "",
        icon: "",
        text: ""
    }, 
    ImageContentAnimation:"",
    TextContentAnimation: "",
    subTitle: "What Makes Us Different?",
    title: "We make spending stress free so you have the perfect control.",
    description: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere erat a ante venenatis dapibus posuere velit.",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735238299.660x630.png",
    box1Icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>`,
    box1Text1: 25000,
    box1Text2: "Happy Clients",
    box2Text2: "Time Saved",
    items:[
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text: "Aenean eu leo quam. Pellentesque ornare."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text: "Nullam quis risus eget urna mollis ornare."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            text: "Donec id elit non mi porta gravida at eget."
        }
    ]
}
export default AboutV9;