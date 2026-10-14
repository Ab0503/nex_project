import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import CountUp from 'react-countup';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const  AboutV2 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const items = get(props, 'items', {});
  
  return (
    <div>
      <section id="snippet-2" className={`overflow-hidden xl:px-20 lg:px-24 md:px-20 max-sm:px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="">
          <div className={`flex flex-wrap  mt-[-50px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 max-w-full mt-[50px] relative">
            <NexAnimation type={get(props, 'leftContentAnimation', '')}>
            
            {
              (get(props, 'shapeText1',"").length != 0 || get(props, 'shapeText2',"").length != 0) &&
              (<div className={`z-10 max-sm:hidden btn btn-circle btn-primary nx-bg-primary focus:shadow-[rgba(92,140,229,1)] pointer-events-none absolute counter-wrapper  flex-col  sm:hidden xsm:hidden xl:flex lg:flex md:flex items-center justify-center text-[1rem] leading-none p-0 rounded-[100%] ${get(tailwindClasses, 'shape')}`} style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "170px", height: "170px", ...get(style, 'shape')}}>
              {
                get(props, 'shapeText1',"").length != 0 &&
                <h3 className="text-gray-50 mb-1 mt-[-0.5rem] relative z-[3]"><span className={`text-[2.8rem] font-bold tracking-[normal] leading-none mb-2 xl:text-[2.9rem] ${get(tailwindClasses, 'shapeText1')}`}style={get(style, 'shapeText1')}><CountUp end={get(props,"shapeText1")} duration={3} enableScrollSpy/>+</span></h3>
              }
              {
                get(props, 'shapeText2',"").length != 0 &&
                <p className={`text-[1.1rem] font-medium mb-0 ${get(tailwindClasses, 'shapeText2')}`}style={get(style, 'shapeText2')}>{get(props,"shapeText2")}</p>
              }
              </div>)
            }
              <div className="flex flex-wrap mx-[-12.5px] mt-[-25px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                  <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                    <div className="xl:w-10/12 xl:ml-[16.66666667%] lg:w-10/12 lg:ml-[16.66666667%] md:w-10/12 md:ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                      <figure className="rounded-[0.4rem]">
                      {
                        get(props, 'imagePath1',"").length != 0 &&
                        <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props,"imagePath1")}/>
                      }
                      </figure>
                    </div>
                    <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                      <figure className="rounded-[0.4rem]">
                      {
                        get(props, 'imagePath2',"").length != 0 &&
                        <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props,"imagePath2")}/>
                      }
                      </figure>
                    </div>
                  </div>           
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                  <figure className="rounded-[0.4rem]">
                  {
                    get(props, 'imagePath3',"").length != 0 &&
                    <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props,"imagePath3")}/>
                  }
                  </figure>
                </div>  
              </div>   
              </NexAnimation>
            </div>
            
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-sm:px-0 max-w-full mt-[65px]">
              
            <NexAnimation type={get(props, 'rightContentAnimation', '')}>
              {
                get(props, 'icon',"").length != 0 &&
                <span className={`w-[2.6rem] h-[2.6rem] nx-text-primary ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props,"icon"))}</span>
              }
              {
                get(props, 'title',"").length != 0 &&
                <h3 className={`mt-5 text-[2.2rem] font-bold nx-section-heading-font xl:text-[2.1rem] leading-[1.3] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props,"title")}</h3>
              }
              {
                get(props, 'description',"").length != 0 &&
                <p className={`mb-7 xl:text-[1.1rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props,"description")}</p>
              }
              <div className="flex flex-wrap mx-[-15px] counter-wrapper mt-[-30px]">
              {
                get(props, 'items', []).map((item) =>  
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                {
                  get(item, 'text1',"").length != 0 &&
                  <h3 className={`counter nx-text-primary xl:text-[2.2rem] text-[calc(1.325rem_+_0.9vw)] font-bold tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}><CountUp end={get(item,"text1")} enableScrollSpy/></h3>
                }
                {
                  get(item, 'text2',"").length != 0 &&
                  <p className={`text-[1.1rem] font-medium mb-0 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(item,"text2")}</p>
                }
                </div>
                )
              }
              </div>     
              </NexAnimation>
            </div>   
            
          </div> 
        </div>
      </section>
    </div>
  )
}

AboutV2.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
}
AboutV2.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image1: {},
        image2: {},
        image3: {},
        shape: {},
        shapeText1: {},
        shapeText2: {},
        icon: {},
        title: {},
        description: {},
        text1: {},
        text2: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image1: "",
        image2: "",
        image3: "",
        shape: "",
        shapeText1: "",
        shapeText2: "",
        icon: "",
        title: "",
        description: "",
        text1: "",
        text2: ""
    },
    title: "We are a creative company that focuses on establishing long-term relationships with customers.",
    description: "Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula.",
    shapeText1: 20,
    shapeText2: "Year Experience",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
    <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
    </svg>`,
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225329.242x247.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225433.295x229.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735225211.295x448.png",
    items:[
      {
          text1: "7518",
          text2: "Complete Projects"
      },
      {
          text1: "3472",
          text2: "Satisfied Customers"
      },
      {
          text1: "2184",
          text2: "Expert Employees"
      }
    ],
    leftContentAnimation: '',
    rightContentAnimation: ''
    
}
export default AboutV2;